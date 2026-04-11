<template>
  <div class="container">
    <div class="status-bar">
      <div class="date-info">
        <div class="date-main">{{ currentDate }}</div>
        <div class="date-sub">{{ weekday }} · {{ lunarDate }}</div>
      </div>
      <div class="age-badge">{{ exactAge.years }}岁</div>
    </div>

    <div class="location-bar">
      <span class="location-icon">+</span>
      <span>{{ location }}</span>
    </div>

    <div class="main-card">
      <div class="weather-effect" :class="weatherType">
        <div
          v-if="weatherType === 'rain'"
          v-for="i in 6"
          :key="i"
          class="rain-drop"
          :style="{
            left: `${10 + i * 15}%`,
            animationDelay: `${i * 0.1}s`
          }"
        ></div>
      </div>

      <div class="weather-mood">
        <div class="weather" :class="weatherType">
          <span class="weather-icon">{{ weatherIcon }}</span>
          <span>{{ weather }}</span>
        </div>
        <div class="mood">
          <span class="mood-icon">{{ moodIcon }}</span>
          <span>{{ mood }}</span>
        </div>
      </div>

      <div v-if="bigEvent" class="big-event-banner">
        <span class="big-event-icon">!</span>
        <div class="big-event-text">
          <div class="big-event-title">大事件：{{ bigEvent.title }}</div>
          <div class="big-event-desc">{{ bigEvent.description }}</div>
        </div>
      </div>

      <div class="event-title"># 今日记事</div>
      <div class="event-content">
        {{ eventContent }}
      </div>
      <div>
        <span
          v-for="tag in eventTags"
          :key="tag"
          class="event-tag"
        >{{ tag }}</span>
      </div>

      <div class="stats-bar">
        <div class="stat-item">
          <div class="stat-label">HP</div>
          <div class="stat-value">{{ stats.health.toFixed(2) }}%</div>
          <div class="health-bar">
            <div class="health-fill" :style="{ width: `${stats.health}%` }"></div>
          </div>
        </div>
        <div class="stat-item">
          <div class="stat-label">GOLD</div>
          <div class="stat-value">¥{{ stats.wealth.toLocaleString() }}</div>
        </div>
        <div class="stat-item">
          <div class="stat-label">EXP</div>
          <div class="stat-value">{{ stats.education }}</div>
        </div>
      </div>
    </div>

    <!-- 最近大事记 -->
    <div class="recent-events">
      <div class="recent-events-header">
        <div>
          <h3>最近大事记</h3>
        </div>
        <button class="view-all-btn" @click="$emit('set-page', 'TimelinePage')">更多></button>
      </div>
      <div class="recent-events-list">
        <div
          v-for="event in recentEvents"
          :key="event.id"
          class="recent-event-item"
        >
          <div class="event-date">{{ event.date }}</div>
          <div class="event-title">{{ event.title }}</div>
        </div>
        <div v-if="recentEvents.length === 0" class="no-events">
          暂无大事记
        </div>
      </div>
    </div>

    <!-- 控制按钮 -->
    <div class="control-buttons">
      <button class="control-btn" @click="showSkipDialog">跳过时间</button>
      <button class="control-btn primary" @click="skipToEnd">直接结束</button>
    </div>

    <!-- 跳过时间弹窗 -->
    <div v-if="showSkipModal" class="modal" @click="closeSkipDialog">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3>跳过时间</h3>
          <button class="close-btn" @click="closeSkipDialog">X</button>
        </div>
        <div class="modal-body">
          <p>请选择要跳过的年数：</p>
          <div class="skip-options">
            <button
              v-for="years in [1, 5, 10, 20]"
              :key="years"
              class="skip-btn"
              @click="skipYears(years)"
            >{{ years }}年</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { eventTypes, ageEvents, getAgeEvent, getProfessionEvent, personalityEventModifiers, getTalentEvents } from '../data/events.js'
import { weathers, locationWeatherMap } from '../data/weather.js'
import { moods } from '../data/moods.js'
import { bigEvents } from '../data/bigEvents.js'
import { historyEvents } from '../data/historyEvents.js'

const props = defineProps({
  gameState: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['update:game-state', 'set-page'])

// 从gameState中获取数据
// 重要：需要watch来同步props变化，因为ref只初始化一次
const currentDate = ref(props.gameState.currentDate || '1985年 6月 15日')
const events = ref([...props.gameState.events])
// 从gameState中获取最近的大事件
const recentEvents = ref([])

// 监听gameState变化，同步currentDate和events
watch(() => props.gameState.currentDate, (newDate) => {
  if (newDate) {
    currentDate.value = newDate
  }
}, { immediate: true })

watch(() => props.gameState.events, (newEvents) => {
  console.log(newEvents, 6666)
  events.value = [...newEvents]
  // 同时重置recentEvents
  recentEvents.value = events.value
    .filter(event => event.bigEvent)
    .slice(-5)
    .reverse()
    .map(event => ({
      id: event.id,
      date: event.date,
      title: `大事件：${event.bigEvent.title}`,
      content: event.bigEvent.description
    }))
}, { immediate: true })

const weekday = ref('星期日')
const lunarDate = ref('乙丑年五月廿八')
const location = ref(props.gameState.character?.birthPlace || '江苏省 · 苏州市 · 平江区')
const weather = ref('晴')

// 计算年龄（唯一的年龄来源）
const age = computed(() => {
  const birthDateStr = props.gameState.birthDate
  const currentDateStr = currentDate.value

  if (!birthDateStr || !currentDateStr) return 0

  const birth = parseDate(birthDateStr)
  const current = parseDate(currentDateStr)

  // 使用完整的日期比较来计算年龄
  let ageYears = current.getFullYear() - birth.getFullYear()
  const birthMonth = birth.getMonth()
  const birthDay = birth.getDate()
  const currentMonth = current.getMonth()
  const currentDay = current.getDate()

  // 如果当前日期还没到生日月份或日期，减1
  if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
    ageYears--
  }

  return Math.max(0, ageYears)
})

// 计算具体年龄（只计算年数）
const exactAge = computed(() => {
  return {
    years: age.value
  }
})
const weatherType = ref('sunny')
const weatherIcon = ref('*')
const mood = ref('开心')
const moodIcon = ref('^_^')
const bigEvent = ref(null)
const eventContent = ref('今天是你出生的日子，全家人都很高兴。')
const eventTags = ref(['出生', '家庭'])
const stats = ref(props.gameState.stats || {
  health: 100,
  wealth: 0,
  education: ''
})

// 定时器相关
const timerInterval = ref(null)
const realTimeDays = ref(props.gameState.realTimeDays || 0) // 现实时间的天数
const gameTimeSpeed = ref(1) // 游戏时间速度倍率

// 跳过时间相关
const showSkipModal = ref(false)
const accumulatedYears = ref(0) // 累积跳过的年数
const targetAge = ref(null) // 目标年龄（跳过后的年龄）

// 当前状态保存（用于页面切换后恢复）
const currentState = ref({
  eventContent: '',
  eventTags: [],
  weather: '',
  weatherType: '',
  weatherIcon: '',
  mood: '',
  moodIcon: '',
  bigEvent: null
})

// 历史人生记录
const historicalLives = ref(JSON.parse(localStorage.getItem('historicalLives') || '[]'))



// 解析日期字符串为Date对象
const parseDate = (dateStr) => {
  const match = dateStr.match(/(\d+)年\s*(\d+)月\s*(\d+)日/)
  if (match) {
    const [, year, month, day] = match.map(Number)
    return new Date(year, month - 1, day)
  }
  return new Date()
}

// 格式化Date对象为日期字符串
const formatDate = (date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${year}年 ${month}月 ${day}日`
}

// 获取星期几
const getWeekday = (date) => {
  const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  return weekdays[date.getDay()]
}

// 随机生成事件
const generateRandomEvent = () => {
  // 解析当前日期获取季节
  const current = parseDate(currentDate.value)
  const month = current.getMonth() + 1
  let season = ''
  if (month >= 3 && month <= 5) {
    season = 'spring'
  } else if (month >= 6 && month <= 8) {
    season = 'summer'
  } else if (month >= 9 && month <= 11) {
    season = 'autumn'
  } else {
    season = 'winter'
  }

  // 根据地区和季节生成天气
  let weather = null
  const locationWeatherMap = {
    '江苏省 · 苏州市 · 平江区': {
      spring: ['sunny', 'cloudy', 'rain'],
      summer: ['sunny', 'rain'],
      autumn: ['sunny', 'cloudy'],
      winter: ['cloudy', 'rain', 'fog']
    },
    // 可以添加更多地区的天气配置
    default: {
      spring: ['sunny', 'cloudy', 'rain'],
      summer: ['sunny', 'rain'],
      autumn: ['sunny', 'cloudy'],
      winter: ['cloudy', 'rain', 'snow', 'fog']
    }
  }

  const locationWeather = locationWeatherMap[location.value] || locationWeatherMap.default
  const possibleWeathers = locationWeather[season]
  const weatherType = possibleWeathers[Math.floor(Math.random() * possibleWeathers.length)]
  weather = weathers.find(w => w.type === weatherType) || weathers[0]

  const eventType = eventTypes[Math.floor(Math.random() * eventTypes.length)]
  const mood = moods[Math.floor(Math.random() * moods.length)]

  // 随机生成事件内容
  let content = eventType.content

  // 根据年龄生成不同的事件
  if (age.value < 3) {
    content = '你还是个婴儿，每天除了吃就是睡。'
  } else if (age.value < 7) {
    content = '你开始上幼儿园了，认识了很多新朋友。'
  } else if (age.value < 13) {
    content = '你上小学了，开始学习各种知识。'
  } else if (age.value < 16) {
    content = '你上初中了，学习压力开始变大。'
  } else if (age.value < 19) {
    content = '你上高中了，为高考做准备。'
  } else if (age.value < 23) {
    content = '你上大学了，开始独立生活。'
  } else if (age.value < 30) {
    content = '你开始了职业生涯，努力在社会上站稳脚跟。'
  } else if (age.value < 40) {
    content = '你在职场上继续努力，为自己的事业奋斗。'
  } else if (age.value < 50) {
    content = '你事业有成，开始思考人生的意义。'
  } else if (age.value < 60) {
    content = '你继续工作，为退休后的生活做准备。'
  } else if (age.value < 70) {
    content = '你退休了，开始享受晚年生活。'
  } else {
    content = '你已是暮年，回忆过去的点点滴滴。'
  }

  // 生成重要大事件（人生转折、意外、重要事件）
  let bigEvent = null
  // 重要年龄段更容易发生大事件
  const bigEventChance = age.value < 7 ? 0.02 :
                        age.value < 18 ? 0.05 :
                        age.value < 30 ? 0.1 :
                        age.value < 60 ? 0.08 : 0.05

  if (Math.random() < bigEventChance) {
    // 收集适合当前年龄的大事件
    const availableEvents = [...bigEvents.universal]

    // 添加适合当前年龄的事件
    Object.keys(bigEvents.byAge).forEach(ageThreshold => {
      if (age.value >= parseInt(ageThreshold)) {
        availableEvents.push(...bigEvents.byAge[ageThreshold])
      }
    })

    if (availableEvents.length > 0) {
      bigEvent = availableEvents[Math.floor(Math.random() * availableEvents.length)]
    }
  }

  return {
    content,
    tags: eventType.tags,
    weather,
    mood,
    bigEvent
  }
}

// 推进到下一年
const nextYear = () => {
  // 如果有目标年龄且当前年龄小于目标年龄，快速推进
  if (targetAge.value !== null && age.value < targetAge.value) {
    // 快速模式：计算需要推进的年数
    const yearsToSkip = targetAge.value - age.value

    for (let i = 0; i < yearsToSkip && stats.value.health > 0 && age.value < 120; i++) {
      // 更新日期到下一年的生日
      const current = parseDate(currentDate.value)
      current.setFullYear(current.getFullYear() + 1)
      currentDate.value = formatDate(current)
      weekday.value = getWeekday(current)

      // 重新计算年龄
      const birthDate = parseDate(props.gameState.birthDate || '1985年 6月 15日')
      const currentDateObj = parseDate(currentDate.value)
      const timeDiff = currentDateObj.getTime() - birthDate.getTime()
      const totalDays = Math.floor(timeDiff / (1000 * 3600 * 24))
      const currentAge = Math.floor(totalDays / 365)

      // 年度健康减少
      let healthDecrease = 0.5
      if (currentAge >= 70) healthDecrease = 15
      else if (currentAge >= 60) healthDecrease = 8
      else if (currentAge >= 45) healthDecrease = 3
      else if (currentAge >= 30) healthDecrease = 1

      // 大事件效果应用
      const currentYear = currentDateObj.getFullYear()
      const yearlyEvent = generateYearlyEvent()
      if (yearlyEvent.bigEvent?.effect) {
        const eff = yearlyEvent.bigEvent.effect
        if (eff.health) healthDecrease -= eff.health // 正值减少扣除
        if (eff.wealth) stats.value.wealth += eff.wealth
      }

      stats.value.health = Math.max(0, stats.value.health - healthDecrease)

      // 快速模式：每10年记录一次大事记
      if (currentAge % 10 === 0 || yearlyEvent.bigEvent) {
        recordYearlyEvent(yearlyEvent)
      }

      updateYearlyStats()

      if (currentAge >= 120 || stats.value.health <= 0) {
        break
      }
    }

    targetAge.value = null
    accumulatedYears.value = 0

    if (stats.value.health > 0) {
      const finalEvent = generateYearlyEvent()
      eventContent.value = finalEvent.content
      eventTags.value = finalEvent.tags
      weather.value = finalEvent.weather.name
      weatherType.value = finalEvent.weather.type
      weatherIcon.value = finalEvent.weather.icon
      mood.value = finalEvent.mood.name
      moodIcon.value = finalEvent.mood.icon
      bigEvent.value = finalEvent.bigEvent

      currentState.value = {
        eventContent: finalEvent.content,
        eventTags: finalEvent.tags,
        weather: finalEvent.weather.name,
        weatherType: finalEvent.weather.type,
        weatherIcon: finalEvent.weather.icon,
        mood: finalEvent.mood.name,
        moodIcon: finalEvent.mood.icon,
        bigEvent: finalEvent.bigEvent
      }

      recordYearlyEvent(finalEvent)
    } else {
      handleDeath()
      return
    }
  } else {
    // 正常模式：详细处理每一年
    const current = parseDate(currentDate.value)
    current.setFullYear(current.getFullYear() + 1)
    currentDate.value = formatDate(current)
    weekday.value = getWeekday(current)

    const yearlyEvent = generateYearlyEvent()
    eventContent.value = yearlyEvent.content
    eventTags.value = yearlyEvent.tags
    weather.value = yearlyEvent.weather.name
    weatherType.value = yearlyEvent.weather.type
    weatherIcon.value = yearlyEvent.weather.icon
    mood.value = yearlyEvent.mood.name
    moodIcon.value = yearlyEvent.mood.icon
    bigEvent.value = yearlyEvent.bigEvent

    currentState.value = {
      eventContent: yearlyEvent.content,
      eventTags: yearlyEvent.tags,
      weather: yearlyEvent.weather.name,
      weatherType: yearlyEvent.weather.type,
      weatherIcon: yearlyEvent.weather.icon,
      mood: yearlyEvent.mood.name,
      moodIcon: yearlyEvent.mood.icon,
      bigEvent: yearlyEvent.bigEvent
    }

    // 年度健康减少
    let healthDecrease = 0.5
    if (age.value >= 70) {
      healthDecrease = 15
    } else if (age.value >= 60) {
      healthDecrease = 8
    } else if (age.value >= 45) {
      healthDecrease = 3
    } else if (age.value >= 30) {
      healthDecrease = 1
    }

    // 应用大事件效果
    if (yearlyEvent.bigEvent?.effect) {
      const eff = yearlyEvent.bigEvent.effect
      if (eff.health) healthDecrease -= eff.health
      if (eff.wealth) stats.value.wealth += eff.wealth
    }

    stats.value.health = Math.max(0, stats.value.health - healthDecrease)

    if (stats.value.health <= 0) {
      handleDeath()
      return
    }

    updateYearlyStats()
    recordYearlyEvent(yearlyEvent)

    if (age.value >= 120) {
      handleDeath()
      return
    }
  }

  emit('update:game-state', {
    currentDate: currentDate.value,
    age: age.value,
    stats: stats.value,
    events: events.value,
    realTimeDays: realTimeDays.value
  })
}

// 生成年度事件
const generateYearlyEvent = () => {
  // 使用统一函数获取年龄阶段事件
  const ageEvent = getAgeEvent(age.value)
  let content = ageEvent.content
  let tags = [...ageEvent.tags]

  // 如果是职业年龄(23-60)，有概率添加职业相关事件
  const character = props.gameState.character
  const professionId = character?.profession?.id
  if (professionId && age.value >= 23 && age.value < 60 && Math.random() < 0.3) {
    const professionEvent = getProfessionEvent(professionId)
    content = professionEvent
    tags.push('职业')
  }

  // 天赋触发事件（低概率）
  if (character?.talents && character.talents.length > 0) {
    const talentEvents = getTalentEvents(character.talents)
    if (talentEvents.length > 0) {
      content = talentEvents[0]
      tags.push('天赋')
    }
  }

  // 根据性格调整心情
  let moodModifier = 0
  if (character?.personality?.id) {
    const pId = character.personality.id
    if (personalityEventModifiers[pId]) {
      moodModifier = Math.random() < 0.5
        ? personalityEventModifiers[pId].positive.length > 0 ? 1 : 0
        : personalityEventModifiers[pId].negative.length > 0 ? -1 : 0
    }
  }

  // 随机生成天气和心情
  const weather = weathers[Math.floor(Math.random() * weathers.length)]
  const moodIndex = Math.max(0, Math.min(moods.length - 1, Math.floor(moods.length / 2) + moodModifier))
  const mood = moods[moodIndex]

  // 生成重要大事件（人生转折、意外、重要事件）
  let bigEvent = null
  // 重要年龄段更容易发生大事件
  const bigEventChance = age.value < 7 ? 0.02 :
                        age.value < 18 ? 0.05 :
                        age.value < 30 ? 0.12 :
                        age.value < 60 ? 0.1 : 0.06

  if (Math.random() < bigEventChance) {
    // 收集适合当前年龄的大事件
    const availableEvents = [...bigEvents.universal]

    // 添加适合当前年龄的事件
    Object.keys(bigEvents.byAge).forEach(ageThreshold => {
      if (age.value >= parseInt(ageThreshold)) {
        availableEvents.push(...bigEvents.byAge[ageThreshold])
      }
    })

    // 职业相关大事件
    if (professionId && bigEvents.professionBigEvents?.[professionId]) {
      availableEvents.push(...bigEvents.professionBigEvents[professionId])
    }

    if (availableEvents.length > 0) {
      bigEvent = availableEvents[Math.floor(Math.random() * availableEvents.length)]
    }
  }

  // 历史大事：出生年份、大寿年份、关键时间点100%触发
  const currentYear = parseDate(currentDate.value).getFullYear()
  const birthYear = parseDate(props.gameState.birthDate || '1985年 6月 15日').getFullYear()
  const isBirthYear = currentYear === birthYear
  const isKeyAge = [18, 22, 30, 40, 50, 60, 70, 80, 90, 100].includes(age.value)

  if (historyEvents[currentYear]) {
    const historicalEvent = historyEvents[currentYear][Math.floor(Math.random() * historyEvents[currentYear].length)]
    // 出生年份或关键年龄100%触发，否则20%概率
    if (isBirthYear || isKeyAge || Math.random() < 0.2) {
      bigEvent = historicalEvent
    }
  }

  return {
    content,
    tags,
    weather,
    mood,
    bigEvent
  }
}

// 更新年度统计数据
const updateYearlyStats = () => {
  // 根据年龄更新学历
  if (age.value < 7) {
    stats.value.education = '未上学'
  } else if (age.value < 13) {
    stats.value.education = '小学'
  } else if (age.value < 16) {
    stats.value.education = '初中'
  } else if (age.value < 19) {
    stats.value.education = '高中'
  } else if (age.value < 23) {
    stats.value.education = '大学'
  } else {
    stats.value.education = '大学以上'
  }

  // 年度财富变化
  if (age.value >= 7) {
    // 根据年龄和职业状态调整财富
    let yearlyChange = 0
    if (age.value >= 23 && age.value < 60) {
      // 工作年龄，财富增长
      yearlyChange = Math.floor(Math.random() * 20000 + 10000) // 1-3万
    } else if (age.value >= 60) {
      // 退休，财富缓慢减少
      yearlyChange = Math.floor(Math.random() * 10000 - 15000) // -1.5-1万
    }
    stats.value.wealth = Math.max(0, stats.value.wealth + yearlyChange)
  }
}

// 记录年度事件
const recordYearlyEvent = (yearlyEvent) => {
  const newEvent = {
    id: Date.now(),
    date: currentDate.value,
    age: age.value,
    title: yearlyEvent.bigEvent ? yearlyEvent.bigEvent.title : '年度总结',
    content: yearlyEvent.content,
    tags: yearlyEvent.tags,
    mood: yearlyEvent.mood.icon,
    important: !!yearlyEvent.bigEvent,
    bigEvent: yearlyEvent.bigEvent,
    isYearly: true // 标记为年度事件
  }

  // 添加到事件列表
  events.value.push(newEvent)

  // 如果是大事件，添加到最近大事记
  if (yearlyEvent.bigEvent) {
    recentEvents.value.unshift({
      id: newEvent.id,
      date: newEvent.date,
      title: `大事件：${yearlyEvent.bigEvent.title}`,
      content: yearlyEvent.bigEvent.description
    })
    if (recentEvents.value.length > 5) {
      recentEvents.value = recentEvents.value.slice(0, 5)
    }
  }
}

// 处理死亡
const handleDeath = () => {
  const deathEvent = {
    id: Date.now(),
    date: currentDate.value,
    age: age.value,
    title: '死亡',
    content: '你离开了这个世界，结束了你的一生。',
    tags: ['死亡'],
    mood: 'T_T',
    important: true,
    bigEvent: {
      title: '死亡',
      description: '你离开了这个世界，结束了你的一生。'
    },
    isYearly: true
  }

  events.value.push(deathEvent)

  recentEvents.value.unshift({
    id: deathEvent.id,
    date: deathEvent.date,
    title: `大事件：死亡`,
    content: deathEvent.content
  })

  // 设置游戏结束标志，并标记游戏未开始（刷新后回到首页）
  emit('update:game-state', {
    currentDate: currentDate.value,
    age: age.value,
    stats: stats.value,
    events: events.value,
    realTimeDays: realTimeDays.value,
    isGameStarted: false,
    isGameEnded: true
  })

  recordLife()
  stopTimer()
  emit('set-page', 'EndPage')
}

// 推进到下一天
const nextDay = () => {
  const current = parseDate(currentDate.value)
  current.setDate(current.getDate() + 1)
  currentDate.value = formatDate(current)
  weekday.value = getWeekday(current)

  // 生成随机事件
  const event = generateRandomEvent()
  eventContent.value = event.content
  eventTags.value = event.tags
  weather.value = event.weather.name
  weatherType.value = event.weather.type
  weatherIcon.value = event.weather.icon
  mood.value = event.mood.name
  moodIcon.value = event.mood.icon
  bigEvent.value = event.bigEvent

  // 健康值只减少
  // 根据年龄计算基础减少率（更缓慢）
  let healthDecrease = 0.02 // 基础减少率（非常缓慢）
  if (age.value >= 70) {
    healthDecrease = 0.15 // 老年减少较快
  } else if (age.value >= 50) {
    healthDecrease = 0.08 // 中年减少稍快
  } else if (age.value >= 30) {
    healthDecrease = 0.05 // 青年减少缓慢
  }

  // 大事件导致额外健康减少
  if (bigEvent.value) {
    if (bigEvent.value.title === '意外' || bigEvent.value.title === '健康危机') {
      healthDecrease += 15 + Math.random() * 10 // 意外或健康危机额外减少15-25
    }
  }

  // 应用健康减少
  stats.value.health = Math.max(0, stats.value.health - healthDecrease)

  // 检查健康值是否为0（死亡）
  if (stats.value.health <= 0) {
    const deathEvent = {
      id: Date.now(),
      date: currentDate.value,
      age: age.value,
      title: '死亡',
      content: '你离开了这个世界，结束了你的一生。',
      tags: ['死亡'],
      mood: 'T_T',
      important: true,
      bigEvent: {
        title: '死亡',
        description: '你离开了这个世界，结束了你的一生。'
      }
    }

    // 添加死亡事件到大事记
    recentEvents.value.unshift({
      id: deathEvent.id,
      date: deathEvent.date,
      title: `大事件：死亡`,
      content: deathEvent.content
    })

    // 更新游戏状态
    const updatedEvents = [...(props.gameState.events || []), deathEvent]

    emit('update:game-state', {
      currentDate: currentDate.value,
      age: age.value,
      stats: stats.value,
      events: updatedEvents,
      realTimeDays: realTimeDays.value
    })

    // 跳转到结束页面
    emit('set-page', 'EndPage')
    return // 结束当前函数执行
  }
  // 幼儿阶段财富为0，小学后开始有钱
  if (age.value >= 7) {
    stats.value.wealth += Math.floor(Math.random() * 100 - 20)
  } else {
    stats.value.wealth = 0
  }

  // 根据年龄更新学历
  if (age.value < 7) {
    stats.value.education = '未上学'
  } else if (age.value < 13) {
    stats.value.education = '小学'
  } else if (age.value < 16) {
    stats.value.education = '初中'
  } else if (age.value < 19) {
    stats.value.education = '高中'
  } else if (age.value < 23) {
    stats.value.education = '大学'
  } else {
    stats.value.education = '大学以上'
  }

  // 添加到大事记（只记录大事件）
  const newEvent = {
    id: Date.now(),
    date: currentDate.value,
    age: age.value,
    title: eventTags.value.join(', '),
    content: eventContent.value,
    tags: eventTags.value,
    mood: moodIcon.value,
    important: Math.random() < 0.2,
    bigEvent: bigEvent.value
  }

  // 只有大事件才添加到最近大事记
  if (bigEvent.value) {
    recentEvents.value.unshift({
      id: newEvent.id,
      date: newEvent.date,
      title: `大事件：${bigEvent.value.title}`,
      content: bigEvent.value.description
    })
    if (recentEvents.value.length > 5) {
      recentEvents.value = recentEvents.value.slice(0, 5)
    }
  }

  // 添加到大事记（只记录大事件）
  let updatedEvents = events.value
  if (bigEvent.value) {
    updatedEvents = [...events.value, newEvent]
    events.value = updatedEvents
  }

  emit('update:game-state', {
    currentDate: currentDate.value,
    age: age.value,
    stats: stats.value,
    events: updatedEvents,
    realTimeDays: realTimeDays.value
  })

  // 检查是否达到游戏时间120年
  if (age.value >= 120) {
    stopTimer()
    emit('set-page', 'EndPage')
  }
}



// 启动定时器
const startTimer = () => {
  const interval = 10000 // 10秒

  timerInterval.value = setInterval(() => {
    realTimeDays.value++
    nextYear()
  }, interval) // 每10秒推进一年
}

// 停止定时器
const stopTimer = () => {
  if (timerInterval.value) {
    clearInterval(timerInterval.value)
    timerInterval.value = null
  }
}

onMounted(() => {
  // 检查是否是恢复之前的游戏状态（游戏正在进行且有保存的当前状态）
  const isGameInProgress = props.gameState.isGameStarted && props.gameState.currentDate
  const hasSavedState = currentState.value.eventContent

  if (isGameInProgress && hasSavedState) {
    // 恢复之前的游戏状态
    eventContent.value = currentState.value.eventContent
    eventTags.value = currentState.value.eventTags
    weather.value = currentState.value.weather
    weatherType.value = currentState.value.weatherType
    weatherIcon.value = currentState.value.weatherIcon
    mood.value = currentState.value.mood
    moodIcon.value = currentState.value.moodIcon
    bigEvent.value = currentState.value.bigEvent
  } else {
    // 新游戏或状态不匹配，生成新的初始事件
    const yearlyEvent = generateYearlyEvent()
    eventContent.value = yearlyEvent.content
    eventTags.value = yearlyEvent.tags
    weather.value = yearlyEvent.weather.name
    weatherType.value = yearlyEvent.weather.type
    weatherIcon.value = yearlyEvent.weather.icon
    mood.value = yearlyEvent.mood.name
    moodIcon.value = yearlyEvent.mood.icon
    bigEvent.value = yearlyEvent.bigEvent

    // 保存当前状态
    currentState.value = {
      eventContent: yearlyEvent.content,
      eventTags: yearlyEvent.tags,
      weather: yearlyEvent.weather.name,
      weatherType: yearlyEvent.weather.type,
      weatherIcon: yearlyEvent.weather.icon,
      mood: yearlyEvent.mood.name,
      moodIcon: yearlyEvent.mood.icon,
      bigEvent: yearlyEvent.bigEvent
    }
  }

  // 初始化数据
  const current = parseDate(currentDate.value)
  weekday.value = getWeekday(current)

  // 启动定时器
  startTimer()
})

onUnmounted(() => {
  // 停止定时器
  stopTimer()
})

// 显示跳过时间弹窗
const showSkipDialog = () => {
  showSkipModal.value = true
}

// 关闭跳过时间弹窗
const closeSkipDialog = () => {
  showSkipModal.value = false
}

// 跳过指定年数
const skipYears = (years) => {
  // 设置目标年龄
  targetAge.value = Math.min(age.value + years, 120) // 不超过120岁
  accumulatedYears.value = years

  // 立即执行一次年份推进
  nextYear()

  // 关闭弹窗
  closeSkipDialog()
}

// 直接结束人生
const skipToEnd = () => {
  if (stats.value.health <= 0 || age.value >= 120) {
    emit('update:game-state', { isGameEnded: true })
    emit('set-page', 'EndPage')
    return
  }

  targetAge.value = 120
  accumulatedYears.value = 120 - age.value

  // 先设置isGameEnded，这样nextYear完成后会正确处理
  emit('update:game-state', { isGameEnded: true })
  nextYear()
}

// 记录人生到历史
const recordLife = () => {
  const lifeRecord = {
    id: Date.now(),
    birthDate: props.gameState.birthDate || '1985年 6月 15日',
    deathDate: currentDate.value,
    age: age.value,
    events: events.value,
    finalStats: stats.value,
    character: props.gameState.character,
    timestamp: new Date().toISOString()
  }

  // 添加到历史记录
  historicalLives.value.unshift(lifeRecord)

  // 只保留最近5个记录
  if (historicalLives.value.length > 5) {
    historicalLives.value = historicalLives.value.slice(0, 5)
  }

  // 保存到本地存储
  localStorage.setItem('historicalLives', JSON.stringify(historicalLives.value))
}
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  animation: fadeInUp 0.4s ease-out;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.status-bar {
  background: var(--card-bg);
  border: 4px solid var(--pixel-border);
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow:
    inset -4px -4px 0px rgba(0, 0, 0, 0.3),
    inset 4px 4px 0px rgba(255, 255, 255, 0.1);
}

.date-info {
  display: flex;
  flex-direction: column;
}

.date-main {
  font-family: 'Press Start 2P', monospace;
  font-size: 10px;
  color: var(--gold);
  margin-bottom: 4px;
}

.date-sub {
  font-size: 10px;
  color: var(--text-dim);
  font-family: 'Noto Sans SC', monospace;
}

.age-badge {
  font-family: 'Press Start 2P', monospace;
  font-size: 12px;
  background: var(--accent);
  color: white;
  padding: 8px 12px;
  border: 3px solid var(--pixel-border);
  box-shadow:
    inset -2px -2px 0 rgba(0, 0, 0, 0.3),
    inset 2px 2px 0 rgba(255, 255, 255, 0.2);
  transition: transform 0.2s ease;
}

.age-badge:hover {
  transform: scale(1.05);
}

.location-bar {
  background: var(--bg);
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: var(--text);
  border: 3px solid var(--pixel-border);
  font-family: 'Noto Sans SC', monospace;
}

.location-icon {
  font-family: 'Press Start 2P', monospace;
  font-size: 12px;
  color: var(--gold);
}

.main-card {
  background: var(--card-bg);
  border: 4px solid var(--pixel-border);
  padding: 20px;
  position: relative;
  box-shadow:
    inset -4px -4px 0px rgba(0, 0, 0, 0.3),
    inset 4px 4px 0px rgba(255, 255, 255, 0.1);
}

.main-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: repeating-linear-gradient(
    90deg,
    var(--accent),
    var(--accent) 8px,
    var(--gold) 8px,
    var(--gold) 16px
  );
}

.weather-mood {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 4px solid var(--pixel-border);
}

.weather {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--text);
  font-family: 'Noto Sans SC', monospace;
}

.weather-icon {
  font-family: 'Press Start 2P', monospace;
  font-size: 14px;
  animation: weatherFloat 1s ease-in-out infinite;
}

@keyframes weatherFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
}

.mood {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--text);
  font-family: 'Noto Sans SC', monospace;
}

.mood-icon {
  font-family: 'Press Start 2P', monospace;
  font-size: 14px;
  animation: moodBounce 0.5s ease-in-out infinite;
}

@keyframes moodBounce {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.event-title {
  font-family: 'Press Start 2P', monospace;
  font-size: 8px;
  color: var(--accent2);
  margin-bottom: 12px;
  letter-spacing: 1px;
}

.event-content {
  font-size: 14px;
  line-height: 1.8;
  color: var(--text);
  min-height: 100px;
  font-family: 'Noto Sans SC', monospace;
}

.event-tag {
  display: inline-block;
  background: var(--bg);
  color: var(--accent2);
  padding: 4px 10px;
  font-size: 10px;
  margin-top: 12px;
  margin-right: 8px;
  border: 2px solid var(--pixel-border);
  font-family: 'Noto Sans SC', monospace;
}

.stats-bar {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-top: 20px;
  padding-top: 16px;
  border-top: 4px solid var(--pixel-border);
}

.stat-item {
  text-align: center;
  padding: 10px;
  background: var(--bg);
  border: 3px solid var(--pixel-border);
  transition: transform 0.1s;
}

.stat-item:hover {
  border-color: var(--gold);
}

.stat-label {
  font-family: 'Press Start 2P', monospace;
  font-size: 8px;
  color: var(--text-dim);
  margin-bottom: 4px;
}

.stat-value {
  font-family: 'Press Start 2P', monospace;
  font-size: 10px;
  color: var(--gold);
}

.health-bar {
  width: 100%;
  height: 8px;
  background: var(--bg);
  border: 2px solid var(--pixel-border);
  margin-top: 6px;
  overflow: hidden;
}

.health-fill {
  height: 100%;
  background: repeating-linear-gradient(
    90deg,
    var(--health),
    var(--health) 4px,
    #FF8A8A 4px,
    #FF8A8A 8px
  );
  transition: width 0.5s ease;
}

.big-event-banner {
  background: var(--bg);
  padding: 12px 16px;
  margin-bottom: 16px;
  border-left: 4px solid var(--accent);
  display: flex;
  align-items: center;
  gap: 10px;
  animation: eventPulse 1s ease-in-out infinite;
}

@keyframes eventPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(232, 74, 95, 0); }
  50% { box-shadow: 0 0 8px 2px rgba(232, 74, 95, 0.3); }
}

.big-event-icon {
  font-family: 'Press Start 2P', monospace;
  font-size: 16px;
  color: var(--accent);
  animation: eventShake 0.3s ease-in-out;
}

@keyframes eventShake {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-10deg); }
  75% { transform: rotate(10deg); }
}

.big-event-text {
  flex: 1;
}

.big-event-title {
  font-family: 'Press Start 2P', monospace;
  font-size: 8px;
  color: var(--accent);
  margin-bottom: 4px;
}

.big-event-desc {
  font-size: 11px;
  color: var(--text-dim);
  font-family: 'Noto Sans SC', monospace;
}

.weather-effect {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

.rain-drop {
  position: absolute;
  width: 4px;
  height: 12px;
  background: repeating-linear-gradient(
    180deg,
    transparent,
    var(--accent2) 2px,
    transparent 2px,
    transparent 4px
  );
  animation: fall 0.5s linear infinite;
}

@keyframes fall {
  0% { transform: translateY(-20px); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(200px); opacity: 0; }
}

/* 最近大事记样式 */
.recent-events {
  background: var(--card-bg);
  border: 4px solid var(--pixel-border);
  padding: 16px;
  box-shadow:
    inset -4px -4px 0px rgba(0, 0, 0, 0.3),
    inset 4px 4px 0px rgba(255, 255, 255, 0.1);
}

.recent-events-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 4px solid var(--pixel-border);
}

.recent-events-header h3 {
  font-family: 'Press Start 2P', monospace;
  font-size: 10px;
  color: var(--gold);
  margin: 0;
}

.view-all-btn {
  font-family: 'Press Start 2P', monospace;
  font-size: 8px;
  padding: 6px 10px;
  background: var(--bg);
  color: var(--text);
  border: 3px solid var(--pixel-border);
  cursor: pointer;
  transition: all 0.1s;
}

.view-all-btn:hover {
  border-color: var(--gold);
  color: var(--gold);
}

.recent-events-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.recent-event-item {
  background: var(--bg);
  padding: 12px;
  border-left: 4px solid var(--accent2);
  transition: all 0.1s;
  cursor: pointer;
}

.recent-event-item:hover {
  transform: translateX(4px);
  border-left-color: var(--accent);
}

.event-date {
  font-size: 10px;
  color: var(--text-dim);
  margin-bottom: 4px;
  font-family: 'Noto Sans SC', monospace;
}

.event-title {
  font-size: 12px;
  color: var(--text);
  font-weight: bold;
  font-family: 'Noto Sans SC', monospace;
}

.no-events {
  text-align: center;
  padding: 16px;
  color: var(--text-dim);
  font-size: 12px;
  background: var(--bg);
  border: 3px solid var(--pixel-border);
  font-family: 'Noto Sans SC', monospace;
}

/* 控制按钮样式 */
.control-buttons {
  display: flex;
  gap: 12px;
  margin-top: 8px;
}

.control-btn {
  flex: 1;
  padding: 12px 16px;
  background: var(--bg);
  color: var(--text);
  border: 4px solid var(--pixel-border);
  font-family: 'Press Start 2P', monospace;
  font-size: 10px;
  cursor: pointer;
  transition: all 0.1s;
  box-shadow: inset -4px -4px 0 rgba(0,0,0,0.3);
}

.control-btn:hover {
  transform: translate(-2px, -2px);
  box-shadow:
    inset -4px -4px 0 rgba(0,0,0,0.3),
    4px 4px 0 var(--pixel-border);
}

.control-btn.primary {
  background: var(--accent);
  color: white;
  box-shadow:
    inset -4px -4px 0 rgba(0, 0, 0, 0.3),
    inset 4px 4px 0 rgba(255, 255, 255, 0.2),
    0 4px 0 0 var(--primary);
}

.control-btn.primary:hover {
  box-shadow:
    inset -4px -4px 0 rgba(0, 0, 0, 0.3),
    inset 4px 4px 0 rgba(255, 255, 255, 0.2),
    0 4px 0 0 var(--primary),
    4px 4px 0 0 var(--pixel-border);
}

/* 弹窗样式 */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal-content {
  background: var(--card-bg);
  border: 4px solid var(--pixel-border);
  padding: 24px;
  max-width: 90%;
  width: 320px;
  box-shadow:
    inset -4px -4px 0px rgba(0, 0, 0, 0.3),
    inset 4px 4px 0px rgba(255, 255, 255, 0.1),
    0 0 40px rgba(232, 74, 95, 0.3);
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 4px solid var(--pixel-border);
}

.modal-header h3 {
  font-family: 'Press Start 2P', monospace;
  font-size: 12px;
  color: var(--gold);
  margin: 0;
}

.close-btn {
  font-family: 'Press Start 2P', monospace;
  font-size: 12px;
  background: var(--accent);
  color: white;
  border: none;
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset -2px -2px 0 rgba(0,0,0,0.3);
}

.close-btn:hover {
  background: var(--accent2);
}

.modal-body p {
  font-size: 14px;
  color: var(--text);
  margin-bottom: 20px;
  text-align: center;
  font-family: 'Noto Sans SC', monospace;
}

.skip-options {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.skip-btn {
  padding: 12px 16px;
  background: var(--bg);
  color: var(--text);
  border: 4px solid var(--pixel-border);
  font-family: 'Press Start 2P', monospace;
  font-size: 10px;
  cursor: pointer;
  transition: all 0.1s;
  box-shadow: inset -4px -4px 0 rgba(0,0,0,0.3);
}

.skip-btn:hover {
  border-color: var(--gold);
  color: var(--gold);
}
</style>