<template>
  <div class="container">
    <!-- 人物状态栏 -->
    <div class="character-status-bar">
      <div class="character-avatar">{{ characterAvatar }}</div>
      <div class="character-info">
        <div class="character-name">{{ characterName }}</div>
        <div class="character-mood" :class="moodClass">
          <span class="mood-icon">{{ moodIcon }}</span>
          <span class="mood-text">{{ moodText }}</span>
        </div>
      </div>
      <div class="health-indicator" :class="healthClass">
        <div class="health-label">生命</div>
        <div class="health-value">{{ stats.health.toFixed(0) }}%</div>
      </div>
    </div>

    <div class="status-bar">
      <div class="date-main">{{ currentDate }}</div>
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

      <div class="weather-info">
        <div class="weather" :class="weatherType">
          <span class="weather-icon">{{ weatherIcon }}</span>
          <span>{{ weather }}</span>
        </div>
      </div>

      <div v-if="bigEvent" class="big-event-banner" :class="{ 'is-positive': isPositiveEvent, 'is-negative': isNegativeEvent }">
        <div class="big-event-particles">
          <span v-for="i in 8" :key="i" class="particle" :style="{ animationDelay: `${i * 0.1}s` }"></span>
        </div>
        <div class="big-event-glow"></div>
        <span class="big-event-icon" :class="{ 'pulse': true }">{{ bigEventIcon }}</span>
        <span class="event-category" :class="bigEvent.category">
          {{ bigEvent.category === 'self' ? '[自]' : '[环]' }}
        </span>
        <div class="big-event-text">
          <div class="big-event-title">★ {{ bigEvent.title }} ★</div>
          <div class="big-event-desc">{{ bigEvent.description }}</div>
        </div>
      </div>

      <div class="event-title"># 今年记事</div>
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
          :class="event.eventCategory"
        >
          <div class="event-header">
            <span class="event-date">{{ event.date }}</span>
            <span v-if="event.eventCategory" class="event-category-tag" :class="event.eventCategory">
              {{ event.eventCategory === 'self' ? '[自]' : '[环]' }}
            </span>
          </div>
          <div class="event-title">{{ event.title }}</div>
          <div class="event-desc">{{ event.content }}</div>
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
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { getAgeEvent, getProfessionEvent, getTalentEvents } from '../data/events.js'
import { weathers } from '../data/weather.js'
import { bigEvents, professionBigEvents, eventCategoryMap, getRandomUniversity, getRandomCompany, getCompanyCategoryByProfession } from '../data/bigEvents.js'
import { historyEvents } from '../data/historyEvents.js'

const props = defineProps({
  gameState: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['update:game-state', 'set-page'])

// ─── 人物状态 ────────────────────────────────────────────────
const characterName = computed(() => props.gameState.character?.name || '无名氏')

const characterAvatar = computed(() => {
  const age = exactAge.value.years
  const gender = props.gameState.character?.gender || 'male'

  if (age < 1) return '👶'
  if (age < 3) return '👶'
  if (age < 12) return gender === 'female' ? '👧' : '👦'
  if (age < 18) return gender === 'female' ? '👧' : '👦'
  if (age < 40) return gender === 'female' ? '👩' : '👨'
  if (age < 60) return gender === 'female' ? '👩' : '👨'
  return gender === 'female' ? '👵' : '👴'
})

const moodIcon = computed(() => {
  const health = stats.value.health
  if (health < 30) return '🤒'
  if (health < 50) return '😢'
  if (health < 70) return '😐'
  return '😊'
})

const moodText = computed(() => {
  const health = stats.value.health
  if (health < 30) return '病入膏肓'
  if (health < 50) return '身心俱疲'
  if (health < 70) return '状态一般'
  if (health < 85) return '状态良好'
  return '神采奕奕'
})

const moodClass = computed(() => {
  const health = stats.value.health
  if (health < 30) return 'mood-critical'
  if (health < 50) return 'mood-bad'
  if (health < 70) return 'mood-normal'
  if (health < 85) return 'mood-good'
  return 'mood-great'
})

const healthClass = computed(() => {
  const health = stats.value.health
  if (health < 30) return 'health-critical'
  if (health < 50) return 'health-bad'
  if (health < 70) return 'health-normal'
  if (health < 85) return 'health-good'
  return 'health-great'
})

// ─── 展示状态 ───────────────────────────────────────────────
const currentDate = ref(props.gameState.currentDate || '1985年')
const location = ref(props.gameState.character?.birthPlace || '江苏省 · 苏州市 · 平江区')
const weather = ref('晴')
const weatherType = ref('sunny')
const weatherIcon = ref('*')
const bigEvent = ref(null)
const eventContent = ref('今天是你出生的日子，全家人都很高兴。')
const eventTags = ref(['出生', '家庭'])
const stats = ref(props.gameState.stats || { health: 100, wealth: 0, education: '' })
const events = ref([...props.gameState.events])
const recentEvents = ref([])

// ─── 预模拟数据 ──────────────────────────────────────────────
// 整个人生在游戏开始时一次性模拟完毕，播放时只按序展示
const simulatedLife = ref([])   // 预模拟的每年数据
const currentYearIndex = ref(0) // 当前展示到第几年

// ─── 定时器 ──────────────────────────────────────────────────
const timerInterval = ref(null)
const realTimeDays = ref(props.gameState.realTimeDays || 0)
const showSkipModal = ref(false)

// ─── 历史记录 ────────────────────────────────────────────────
const historicalLives = ref(JSON.parse(localStorage.getItem('historicalLives') || '[]'))

// ─── 计算属性 ────────────────────────────────────────────────
const age = computed(() => {
  const birthYear = parseInt(props.gameState.birthDate?.match(/(\d+)年/)?.[1] || '1985')
  const currentYear = parseInt(currentDate.value?.match(/(\d+)年/)?.[1] || '1985')
  return Math.max(0, currentYear - birthYear)
})

const exactAge = computed(() => ({ years: age.value }))

const bigEventIcon = computed(() => {
  if (!bigEvent.value) return '!'
  const title = bigEvent.value.title
  if (['结婚', '生子', '升学', '入学', '毕业', '获奖', '晋升', '金婚', '就业'].includes(title)) return '*'
  if (['意外', '疾病', '犯罪', '投资失败', '创业失败', '裁员', '亲人离世', '交通事故'].includes(title)) return 'x'
  if (['中彩票', '财富机遇', '创业成功', '投资成功', '房产购置', '遗产继承', '丰收年'].includes(title)) return '$'
  if (['见义勇为', '立功', '破案', '救民于危难'].includes(title)) return '+'
  return '!'
})

const isPositiveEvent = computed(() => {
  if (!bigEvent.value) return false
  return ['结婚', '生子', '升学', '入学', '就业', '毕业', '获奖', '晋升', '中彩票', '财富机遇',
          '创业成功', '投资成功', '房产购置', '见义勇为', '立功', '桃李满天下', '金婚', '孙辈', '健康危机治愈'].includes(bigEvent.value.title)
})

const isNegativeEvent = computed(() => {
  if (!bigEvent.value) return false
  return ['意外', '疾病', '犯罪', '投资失败', '创业失败', '裁员', '亲人离世', '交通事故', '自然灾害', '中年危机', '职业瓶颈'].includes(bigEvent.value.title)
})

// ─── 工具函数 ────────────────────────────────────────────────
const parseDate = (dateStr) => {
  if (!dateStr) return new Date()
  const yearMatch = dateStr.match(/(\d+)年/)
  if (yearMatch) {
    const year = parseInt(yearMatch[1])
    const monthMatch = dateStr.match(/(\d+)月/)
    const dayMatch = dateStr.match(/(\d+)日/)
    const month = monthMatch ? parseInt(monthMatch[1]) - 1 : 0
    const day = dayMatch ? parseInt(dayMatch[1]) : 1
    return new Date(year, month, day)
  }
  return new Date()
}

const formatDate = (date) => {
  return `${date.getFullYear()}年`
}

const getEducationForAge = (a, triggered = {}) => {
  if (a < 7) return '未上学'
  if (a < 13) return '小学'
  if (a < 16) return '初中'
  if (a < 19) return '高中'
  if (a < 23) return '大学'
  if (triggered.hasPhD) return '博士'
  if (triggered.hasMaster) return '硕士'
  return '大学'
}

const getHealthDecreaseForAge = (a) => {
  if (a >= 80) return 5 + Math.random() * 3  // 80岁以上：5-8，略微增加随机性
  if (a >= 70) return 3 + Math.random() * 2  // 70-79岁：3-5，降低衰减
  if (a >= 60) return 2 + Math.random()       // 60-69岁：2-3
  if (a >= 50) return 1 + Math.random() * 0.5 // 50-59岁：1-1.5
  if (a >= 40) return 0.5 + Math.random() * 0.5 // 40-49岁：0.5-1
  return 0.2 + Math.random() * 0.3  // 40岁以下：0.2-0.5
}

// ─── 里程碑优先事件系统 ──────────────────────────────────────
// 关键年龄必须触发的重要事件，确保人生轨迹合理
// 注意：考研和考博不在此列，它们是低概率随机事件
// 里程碑顺序：入学(7) -> 初中升学(13) -> 高中升学(16) -> 大学升学(18) -> 就业(22) -> 退休(60)
// 教育阶段按顺序进行，如果某个阶段未完成，后续阶段需要等前一阶段完成（或过了延迟窗口）才触发
const MILESTONES = [
  { age: 7,  key: 'elementary',  title: '入学',   source: 7  },
  { age: 13, key: 'middle',     title: '升学',   source: 13, requires: ['elementary'], maxDelay: 2 },
  { age: 16, key: 'high',       title: '升学',   source: 16, requires: ['middle'], maxDelay: 2 },
  { age: 18, key: 'college',    title: '升学',   source: 19, requires: ['high'], maxDelay: 3 },
  // 就业在考研之后：考上研究生就不就业了，没考上才就业
  // 如果大学没上完（college_skipped），22岁也直接就业
  { age: 22, key: 'firstJob',   title: '就业',   source: 23, requires: ['high', 'middle'], condition: (t) => t.college_skipped || t.attemptedMaster },
  { age: 60, key: 'retirement', title: '退休',   source: 60 },
]

// ─── 学历成就系统 ────────────────────────────────────────────
// 考研和考博是高难度事件，需要通过概率判定
const EDUCATION_AGES = {
  master: { min: 23, max: 28, prob: 0.25 },   // 考研概率25%，可在23-28岁尝试
  phd: { min: 26, max: 35, prob: 0.12 }        // 考博概率12%，需先有硕士学位，26-35岁尝试
}

/**
 * 检查当前年龄是否可以尝试考研/考博，并返回结果
 * @param {number} simAge - 模拟年龄
 * @param {Object} triggered - 已触发里程碑记录
 * @returns {Object|null} 教育大事件，或 null
 */
const getEducationEvent = (simAge, triggered) => {
  // 考研：必须有大学学历，且未被标记为跳过
  if (!triggered.hasMaster && !triggered.failedMaster && !triggered.college_skipped) {
    // 前置检查：必须已完成大学
    if (!triggered.college) return null

    const masterConf = EDUCATION_AGES.master
    if (simAge >= masterConf.min && simAge <= masterConf.max) {
      triggered.attemptedMaster = true
      if (Math.random() < masterConf.prob) {
        triggered.hasMaster = true
        const univ = getRandomUniversity()
        const variants = [
          `经过大半年的备考，你终于收到了${univ.name}研究生的录取通知书，所有的付出都值了。`,
          `你选择了跨专业考研，虽然难度很大，但你凭借毅力成功上岸，被${univ.alias}录取。`,
          `考研的那两天你发烧39度，但你咬牙坚持完了所有科目，最终成功考上了${univ.name}。`,
          `你收到了${univ.name}的调剂通知，虽然不是第一志愿，但能继续深造你已经很满足了。`
        ]
        return {
          title: '考研成功',
          description: `你成功考入${univ.name}，开始了研究生生涯。`,
          effect: { health: -5, wealth: -15, happiness: 25 },
          category: 'self',
          isMilestone: true
        }
      } else {
        triggered.failedMaster = true
        return {
          title: '考研失利',
          description: '你考研失败了，调剂也不顺利，最终选择直接就业。这让你感到有些遗憾。',
          effect: { health: -5, wealth: 0, happiness: -10 },
          category: 'self',
          isMilestone: true
        }
      }
    }
  }

  // 考博：必须有硕士学位
  if (triggered.hasMaster && !triggered.hasPhD && !triggered.failedPhD) {
    const phdConf = EDUCATION_AGES.phd
    if (simAge >= phdConf.min && simAge <= phdConf.max) {
      triggered.attemptedPhD = true
      if (Math.random() < phdConf.prob) {
        triggered.hasPhD = true
        const univ = getRandomUniversity()
        return {
          title: '考博成功',
          description: `你成功考入${univ.name}攻读博士学位，学术之路迈向新的高度！`,
          effect: { health: -10, wealth: -20, happiness: 30 },
          category: 'self',
          isMilestone: true
        }
      } else {
        triggered.failedPhD = true
        return {
          title: '考博失利',
          description: '你考博失败了，导师名额有限，竞争非常激烈。你选择进入职场发展。',
          effect: { health: -5, wealth: 0, happiness: -10 },
          category: 'self',
          isMilestone: true
        }
      }
    }
  }

  return null
}

/**
 * 检查当前年龄是否有必须触发的里程碑事件
 * @param {number} simAge - 模拟年龄
 * @param {Object} triggered - 已触发里程碑记录
 * @param {number} year - 当前年份
 * @returns {Object|null} 里程碑大事件，或 null
 */
const getPriorityBigEvent = (simAge, triggered, year = 2020) => {
  for (const m of MILESTONES) {
    // 如果该里程碑已永久跳过，跳过
    if (triggered[m.key + '_skipped']) continue

    // 如果超过年龄限制仍未触发，标记为永久跳过
    const maxDelay = m.maxDelay || 1
    if (simAge > m.age + maxDelay && !triggered[m.key]) {
      triggered[m.key + '_skipped'] = true
      continue
    }

    // 检查前置里程碑是否满足
    if (m.requires) {
      const allMet = m.requires.every(req => triggered[req])
      if (!allMet) {
        // 如果前置里程碑已永久跳过，则此里程碑也标记为跳过
        const allSkipped = m.requires.every(req => triggered[req + '_skipped'])
        if (allSkipped) {
          triggered[m.key + '_skipped'] = true
          continue
        }
        // 否则等待前置里程碑完成
        continue
      }
    }

    // 检查自定义条件
    if (m.condition && !m.condition(triggered)) {
      continue
    }

    if (simAge === m.age && !triggered[m.key]) {
      // 特殊处理：1977年恢复高考之前，大学升学事件改为外出打工/回乡务农
      if (m.key === 'college') {
        const birthYear = parseDate(props.gameState.birthDate).getFullYear()
        const gaokaoYear = birthYear + simAge // 实际高考年份
        if (gaokaoYear < 1977) {
          // 高考未恢复，将大学升学改为外出打工/回乡务农/学徒手艺
          triggered[m.key] = true
          triggered[m.key + '_skipped'] = true
          const preGaokaoEvents = [
            {
              title: '外出打工',
              description: '你没有参加高考，跟着村里的老乡坐上了去城里的大巴，开始了打工生涯。',
              effect: { health: -10, wealth: 15, happiness: -5 },
              category: 'self'
            },
            {
              title: '回乡务农',
              description: '高中毕业后你回到了家乡，跟随父母在田间劳作，面朝黄土背朝天，日子虽然辛苦但也算安稳。',
              effect: { health: -5, wealth: 5, happiness: 0 },
              category: 'self'
            },
            {
              title: '学徒手艺',
              description: '你拜了村里的老木匠为师，开始学做家具，虽然辛苦，但学到了一门可以谋生的手艺。',
              effect: { health: 0, wealth: 10, happiness: 10 },
              category: 'self'
            }
          ]
          return preGaokaoEvents[Math.floor(Math.random() * preGaokaoEvents.length)]
        }
      }

      triggered[m.key] = true
      // 从对应年龄段找到该标题的事件模板
      const agePool = bigEvents.byAge[m.source] || []
      const template = agePool.find(e => e.title === m.title)
      if (!template) {
        // 没找到对应事件，标记为永久跳过（不允许延迟到后面触发）
        triggered[m.key + '_skipped'] = true
        continue
      }
      let desc = template.description || ''
      if (template.variants?.length) {
        desc = template.variants[Math.floor(Math.random() * template.variants.length)]
      }
      if (desc.includes('{UNIV}')) {
        desc = desc.replace('{UNIV}', getRandomUniversity().name)
      }
      if (desc.includes('{COMPANY}')) {
        const character = props.gameState.character
        const cat = getCompanyCategoryByProfession(character?.profession?.id)
        desc = desc.replace('{COMPANY}', getRandomCompany(cat, year).name)
      }
      return {
        ...template,
        description: desc,
        category: eventCategoryMap[template.title] || 'self',
        isMilestone: true
      }
    }
  }
  return null
}

// ─── 性格调整概率 ────────────────────────────────────────────
const adjustProbabilityByPersonality = (baseProbability, personalityId, eventTitle) => {
  const personalityEffects = {
    introvert: { risk: 0.7, social: 0.8, career: 0.9 },
    extrovert: { risk: 1.2, social: 1.3, career: 1.1 },
    optimist:  { good: 1.3, bad: 0.7 },
    pessimist: { good: 0.7, bad: 1.3 },
    cautious:  { risk: 0.6, adventure: 0.7 },
    brave:     { risk: 1.4, adventure: 1.3 },
    gentle:    { health: 1.1, wealth: 0.95 },
    ambitious: { career: 1.3, health: 0.9 },
    carefree:  { stress: 0.7, wealth: 0.9 },
    balanced:  { all: 1.0 }
  }
  const effects = personalityEffects[personalityId]
  if (!effects) return baseProbability
  const isRisk     = ['意外', '交通事故', '犯罪', '自然灾害', '工厂事故'].includes(eventTitle)
  const isSocial   = ['结婚', '离婚', '朋友', '社交'].includes(eventTitle)
  const isCareer   = ['晋升', '加薪', '创业', '失业'].includes(eventTitle)
  const isGood     = ['结婚', '生子', '升学', '获奖', '晋升', '中彩票', '创业成功'].includes(eventTitle)
  const isBad      = ['疾病', '离婚', '失业', '投资失败', '犯罪'].includes(eventTitle)
  const isAdventure= ['出国', '移民', '创业', '见义勇为'].includes(eventTitle)
  let modifier = 1.0
  if (isRisk && effects.risk)         modifier *= effects.risk
  if (isSocial && effects.social)     modifier *= effects.social
  if (isCareer && effects.career)     modifier *= effects.career
  if (isGood && effects.good)         modifier *= effects.good
  if (isBad && effects.bad)           modifier *= effects.bad
  if (isAdventure && effects.adventure) modifier *= effects.adventure
  if (effects.all)                    modifier *= effects.all
  return baseProbability * modifier
}

// ─── 单年事件生成（接受 age 参数，用于预模拟）──────────────
const generateYearlyEventForAge = (simAge, simDate, character, triggered) => {
  // 年龄阶段叙述内容
  const ageEvent = getAgeEvent(simAge)
  let content = ageEvent.content
  let tags = [...ageEvent.tags]

  // 职业补充内容
  const professionId = character?.profession?.id
  if (professionId && simAge >= 23 && simAge < 60 && Math.random() < 0.3) {
    content += ' ' + getProfessionEvent(professionId)
    tags.push('职业')
  }

  // 天赋补充内容
  if (character?.talents?.length) {
    const talentEvents = getTalentEvents(character.talents)
    if (talentEvents.length) {
      content += ' ' + talentEvents[0]
      tags.push('天赋')
    }
  }

  // 随机天气
  const weatherData = weathers[Math.floor(Math.random() * weathers.length)]

  // ── 优先触发里程碑事件 ──
  const currentYear = simDate.getFullYear()
  const priorityEvent = getPriorityBigEvent(simAge, triggered, currentYear)
  if (priorityEvent) {
    return { content, tags, weather: weatherData, bigEvent: priorityEvent }
  }

  // ── 学历事件（考研/考博，低概率高难度）──
  // 注意：考研尝试放在就业之前（大学毕业后22岁左右尝试，失败后才就业）
  const educationEvent = getEducationEvent(simAge, triggered)
  if (educationEvent) {
    return { content, tags, weather: weatherData, bigEvent: educationEvent }
  }

  // ── 就业需要在考研尝试之后（考上研就不就业了，没考上才就业）──
  // 如果22岁还没尝试过考研，先尝试考研（即使之前已经过了最佳年龄窗口）
  if (simAge === 22 && !triggered.attemptedMaster && !triggered.hasMaster && triggered.college) {
    // 尝试考研（使用更高的年龄窗口 22-30）
    if (!triggered.failedMaster) {
      triggered.attemptedMaster = true
      const lateMasterProb = 0.15 // 晚考研概率降低
      if (Math.random() < lateMasterProb) {
        triggered.hasMaster = true
        const univ = getRandomUniversity()
        return {
          title: '考研成功',
          description: `工作几年后你决定重返校园，成功考入${univ.name}攻读硕士学位。`,
          effect: { health: -5, wealth: -15, happiness: 25 },
          category: 'self',
          isMilestone: true
        }
      } else {
        triggered.failedMaster = true
        return {
          title: '考研失利',
          description: '你尝试考研但失败了，决定先专注工作。',
          effect: { health: -3, wealth: 0, happiness: -5 },
          category: 'self',
          isMilestone: true
        }
      }
    }
  }

  // ── 历史大事件（环境类）──
  const birthYear = parseDate(props.gameState.birthDate).getFullYear()
  const isBirthYear = currentYear === birthYear
  const isKeyAge = [22, 30, 40, 50, 70, 80, 90, 100].includes(simAge)

  if (historyEvents[currentYear]) {
    const he = historyEvents[currentYear][Math.floor(Math.random() * historyEvents[currentYear].length)]
    if (isBirthYear || isKeyAge || Math.random() < 0.2) {
      return { content, tags, weather: weatherData, bigEvent: { ...he, category: 'environment' } }
    }
  }

  // ── 随机大事件 ──
  const bigEventChance = simAge < 7 ? 0.02 :
                         simAge < 18 ? 0.05 :
                         simAge < 30 ? 0.12 :
                         simAge < 60 ? 0.10 : 0.06

  if (Math.random() >= bigEventChance) {
    return { content, tags, weather: weatherData, bigEvent: null }
  }

  // ── 里程碑/学历系统专用事件（不参与随机选择）──
  // 这些事件由 getPriorityBigEvent 和 getEducationEvent 专门处理
  const MILESTONE_TITLES = ['入学', '升学', '就业', '退休', '毕业', '考研', '考博', '考研成功', '考博成功', '考研失利', '考博失利']
  // 按年龄段定义事件的maxAge（超过此年龄不再随机触发）
  // 注意：这些是事件类型的合理年龄窗口，不是绝对限制
  const BYAGE_MAX_AGE = {
    7: 10,    // 小学入学事件：只在7-10岁期间可用
    13: 18,   // 初中升学事件：只在13-18岁期间可用
    16: 21,   // 高中升学事件：只在16-21岁期间可用
    19: 25,   // 大学升学事件：只在19-25岁期间可用
    23: 35,   // 23岁段事件（考研、就业等）：只在23-35岁期间可用
    25: 50,   // 结婚、生子、购房等：25-50岁期间可用
    30: 55,   // 30岁段事件：30-55岁期间可用
    35: 60,   // 35岁段事件：35-60岁期间可用
    40: 65,   // 40岁段事件：40-65岁期间可用
    50: 70,   // 50岁段事件：50-70岁期间可用
    60: 120,  // 60岁段事件（退休相关）：60岁以后可用
  }

  // 收集可用事件池
  const availableEvents = [...bigEvents.universal]
  Object.keys(bigEvents.byAge).forEach(ageThreshold => {
    const threshold = parseInt(ageThreshold)
    if (simAge >= threshold) {
      // 检查该年龄段事件的maxAge限制
      const maxAge = BYAGE_MAX_AGE[threshold]
      if (maxAge && simAge > maxAge) {
        return // 跳过超过maxAge的事件
      }
      availableEvents.push(...bigEvents.byAge[threshold])
    }
  })
  if (professionId && professionBigEvents?.[professionId]) {
    availableEvents.push(...professionBigEvents[professionId])
  }

  if (!availableEvents.length) return { content, tags, weather: weatherData, bigEvent: null }

  // 加权随机选择
  const personalityId = character?.personality?.id
  const adjustedEvents = availableEvents
    .filter(e => !e.isCritical && (!e.minAge || simAge >= e.minAge) && (!e.maxAge || simAge <= e.maxAge))
    // 排除已由里程碑/学历系统处理的事件
    .filter(e => !MILESTONE_TITLES.includes(e.title))
    // 排除已经触发过的一次性事件
    .filter(e => !e.oneTime || !events.value.some(ev => ev.bigEvent?.title === e.title))
    .map(e => {
      let prob = e.probability || 1.0
      if (personalityId) prob = adjustProbabilityByPersonality(prob, personalityId, e.title)
      return { ...e, _prob: prob }
    })

  const totalWeight = adjustedEvents.reduce((s, e) => s + e._prob, 0)
  let rnd = Math.random() * totalWeight
  let selectedEvent = adjustedEvents[0]
  for (const evt of adjustedEvents) {
    rnd -= evt._prob
    if (rnd <= 0) { selectedEvent = evt; break }
  }

  // 构建 bigEvent 对象，category 优先使用 eventCategoryMap
  let desc = selectedEvent.description || ''
  if (selectedEvent.variants?.length) {
    desc = selectedEvent.variants[Math.floor(Math.random() * selectedEvent.variants.length)]
    if (desc.includes('{UNIV}')) desc = desc.replace('{UNIV}', getRandomUniversity().name)
    if (desc.includes('{COMPANY}')) {
      const cat = getCompanyCategoryByProfession(professionId)
      desc = desc.replace('{COMPANY}', getRandomCompany(cat, simDate.getFullYear()).name)
    }
  }

  const resolvedBigEvent = {
    ...selectedEvent,
    description: desc,
    category: eventCategoryMap[selectedEvent.title] || 'self'
  }

  return { content, tags, weather: weatherData, bigEvent: resolvedBigEvent }
}

// ─── 预模拟整个人生 ──────────────────────────────────────────
const simulateEntireLife = () => {
  const life = []
  const character = props.gameState.character
  const birthDate = parseDate(props.gameState.birthDate)
  const personalityId = character?.personality?.id
  const personalityHealthMod = {
    introvert: 0.85, extrovert: 1.0, optimist: 0.95, pessimist: 1.15,
    cautious: 0.9, brave: 1.25, gentle: 0.95, ambitious: 1.1,
    carefree: 0.9, balanced: 1.0
  }[personalityId] || 1.0
  const familyBackground = character?.familyBackground
  const familyIncome = familyBackground?.income || 100
  const familyWealthRate = familyBackground?.wealthGrowthRate || 1.0
  const personalityWealthMod = {
    introvert: 0.9, extrovert: 1.1, optimist: 1.0, pessimist: 0.85,
    cautious: 0.95, ambitious: 1.2, gentle: 1.0, carefree: 0.95, balanced: 1.0
  }[personalityId] || 1.0

  let simHealth = 100
  let simWealth = 0
  const triggered = {} // 里程碑触发记录

  for (let simAge = 1; simAge <= 120 && simHealth > 0; simAge++) {
    const simDate = new Date(birthDate)
    simDate.setFullYear(birthDate.getFullYear() + simAge)
    // 死亡时随机月份和日期
    if (simHealth <= 0) {
      simDate.setMonth(Math.floor(Math.random() * 12))
      simDate.setDate(Math.floor(Math.random() * 28) + 1)
    }

    const yearlyEvent = generateYearlyEventForAge(simAge, simDate, character, triggered)

    // 健康衰减
    let healthDecrease = getHealthDecreaseForAge(simAge) * personalityHealthMod
    if (yearlyEvent.bigEvent?.effect?.health) healthDecrease -= yearlyEvent.bigEvent.effect.health
    simHealth = Math.max(0, simHealth - healthDecrease)

    // 财富变化
    let wealthDelta = yearlyEvent.bigEvent?.effect?.wealth || 0
    if (simAge >= 23 && simAge < 60) {
      wealthDelta += Math.floor((familyIncome * 100 + Math.random() * 20000) * familyWealthRate * personalityWealthMod)
    } else if (simAge >= 60) {
      wealthDelta += Math.floor((Math.random() * 10000 - 15000) * personalityWealthMod)
    }
    simWealth = Math.max(0, simWealth + wealthDelta)

    life.push({
      age: simAge,
      date: formatDate(simDate),
      content: yearlyEvent.content,
      tags: yearlyEvent.tags,
      weather: yearlyEvent.weather,
      bigEvent: yearlyEvent.bigEvent,
      stats: {
        health: simHealth,
        wealth: simWealth,
        education: getEducationForAge(simAge, triggered)
      }
    })

    if (simHealth <= 0) break
  }

  return life
}

// ─── 展示当前年份数据 ────────────────────────────────────────
const displayCurrentYear = () => {
  if (!simulatedLife.value.length) return
  const idx = Math.min(currentYearIndex.value, simulatedLife.value.length - 1)
  const yearData = simulatedLife.value[idx]

  currentDate.value = yearData.date
  eventContent.value = yearData.content
  eventTags.value = yearData.tags
  weather.value = yearData.weather?.name || '晴'
  weatherType.value = yearData.weather?.type || 'sunny'
  weatherIcon.value = yearData.weather?.icon || '*'
  bigEvent.value = yearData.bigEvent
  stats.value = { ...yearData.stats }

  // 若当年有大事件，添加到大事记
  if (yearData.bigEvent) {
    const category = yearData.bigEvent.category || eventCategoryMap[yearData.bigEvent.title] || 'self'
    const alreadyRecorded = events.value.some(e => e.date === yearData.date && e.bigEvent?.title === yearData.bigEvent.title)
    if (!alreadyRecorded) {
      const newEvent = {
        id: Date.now() + idx,
        date: yearData.date,
        age: yearData.age,
        title: yearData.bigEvent.title,
        content: yearData.content,
        tags: yearData.tags,
        important: true,
        bigEvent: yearData.bigEvent,
        eventCategory: category,
        isYearly: true
      }
      events.value.push(newEvent)
      recentEvents.value.unshift({
        id: newEvent.id,
        date: yearData.date,
        title: `大事件：${yearData.bigEvent.title}`,
        content: yearData.bigEvent.description,
        eventCategory: category
      })
      if (recentEvents.value.length > 5) recentEvents.value = recentEvents.value.slice(0, 5)
    }
  }

  emit('update:game-state', {
    currentDate: currentDate.value,
    age: yearData.age,
    stats: stats.value,
    events: events.value,
    realTimeDays: realTimeDays.value
  })
}

// ─── 推进到下一年（定时器调用）──────────────────────────────
const advanceToNextYear = () => {
  if (!simulatedLife.value.length) return

  // 检查是否到了人生终点
  if (currentYearIndex.value >= simulatedLife.value.length - 1) {
    handleDeath()
    return
  }

  currentYearIndex.value++
  realTimeDays.value++
  displayCurrentYear()
}

// ─── 处理死亡 ────────────────────────────────────────────────
const handleDeath = () => {
  stopTimer()

  const deathEvent = {
    id: Date.now(),
    date: currentDate.value,
    age: age.value,
    title: '死亡',
    content: '你离开了这个世界，结束了你的一生。',
    tags: ['死亡'],
    important: true,
    bigEvent: { title: '死亡', description: '你离开了这个世界，结束了你的一生。', category: 'environment' },
    eventCategory: 'environment',
    isYearly: true
  }
  events.value.push(deathEvent)
  recentEvents.value.unshift({
    id: deathEvent.id,
    date: deathEvent.date,
    title: '大事件：死亡',
    content: deathEvent.content,
    eventCategory: 'environment'
  })

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
  emit('set-page', 'EndPage')
}

// ─── 定时器 ──────────────────────────────────────────────────
const startTimer = () => {
  timerInterval.value = setInterval(() => {
    advanceToNextYear()
  }, 10000)
}

const stopTimer = () => {
  if (timerInterval.value) {
    clearInterval(timerInterval.value)
    timerInterval.value = null
  }
}

// ─── 初始化 ──────────────────────────────────────────────────
onMounted(() => {
  // 预模拟整个人生
  simulatedLife.value = simulateEntireLife()

  // 根据保存的年龄恢复进度
  const savedAge = props.gameState.age || 0
  currentYearIndex.value = savedAge > 0 ? savedAge - 1 : 0

  // 恢复最近大事记（从已保存的事件中提取最新的5个）
  // 注意：savedEvents是按时间正序排列的，但展示时需要 newest first，
  // 所以要用 reverse() 保持与 gameplay 时 recentEvents.unshift() 相同的顺序
  const savedEvents = props.gameState.events || []
  recentEvents.value = savedEvents
    .filter(e => e.important || e.bigEvent)
    .slice(-5)
    .reverse()

  // 展示当前年龄的数据
  if (simulatedLife.value.length > 0) {
    displayCurrentYear()
  }

  startTimer()
})

onUnmounted(() => {
  stopTimer()
})

// ─── 跳过控制 ────────────────────────────────────────────────
const showSkipDialog = () => { showSkipModal.value = true }
const closeSkipDialog = () => { showSkipModal.value = false }

const skipYears = (years) => {
  closeSkipDialog()
  // 跳过只是快速播放预模拟数据，不影响事件序列
  const targetIndex = Math.min(currentYearIndex.value + years, simulatedLife.value.length - 1)
  // 批量记录跳过期间的大事记，但只展示最后一帧
  for (let i = currentYearIndex.value + 1; i <= targetIndex; i++) {
    const yearData = simulatedLife.value[i]
    if (yearData.bigEvent) {
      const category = yearData.bigEvent.category || eventCategoryMap[yearData.bigEvent.title] || 'self'
      const alreadyRecorded = events.value.some(e => e.date === yearData.date && e.bigEvent?.title === yearData.bigEvent.title)
      if (!alreadyRecorded) {
        const newEvent = {
          id: Date.now() + i,
          date: yearData.date,
          age: yearData.age,
          title: yearData.bigEvent.title,
          content: yearData.content,
          tags: yearData.tags,
          important: true,
          bigEvent: yearData.bigEvent,
          eventCategory: category,
          isYearly: true
        }
        events.value.push(newEvent)
        recentEvents.value.unshift({
          id: newEvent.id,
          date: yearData.date,
          title: `大事件：${yearData.bigEvent.title}`,
          content: yearData.bigEvent.description,
          eventCategory: category
        })
      }
    }
  }
  if (recentEvents.value.length > 5) recentEvents.value = recentEvents.value.slice(0, 5)

  currentYearIndex.value = targetIndex
  displayCurrentYear()

  if (currentYearIndex.value >= simulatedLife.value.length - 1) {
    handleDeath()
  }
}

const skipToEnd = () => {
  skipYears(simulatedLife.value.length - 1 - currentYearIndex.value)
}

// ─── 历史记录 ────────────────────────────────────────────────
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
  historicalLives.value.unshift(lifeRecord)
  if (historicalLives.value.length > 5) historicalLives.value = historicalLives.value.slice(0, 5)
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

/* 人物状态栏 */
.character-status-bar {
  background: var(--card-bg);
  border: 4px solid var(--pixel-border);
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 14px;
  box-shadow:
    inset -4px -4px 0px rgba(0, 0, 0, 0.3),
    inset 4px 4px 0px rgba(255, 255, 255, 0.1);
}

.character-avatar {
  width: 60px;
  height: 60px;
  background: var(--bg);
  border: 3px solid var(--pixel-border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  line-height: 1;
  box-shadow: inset -3px -3px 0px rgba(0, 0, 0, 0.3);
  animation: avatarBounce 2s ease-in-out infinite;
}

@keyframes avatarBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}

.character-info {
  flex: 1;
}

.character-name {
  font-family: 'Press Start 2P', monospace;
  font-size: 10px;
  color: var(--gold);
  margin-bottom: 8px;
}

.character-mood {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  background: var(--bg);
  border: 2px solid var(--pixel-border);
  font-family: 'Noto Sans SC', monospace;
  font-size: 11px;
}

.mood-icon {
  font-size: 14px;
}

.mood-text {
  color: var(--text);
}

.mood-great { border-color: var(--gold); color: var(--gold); }
.mood-good { border-color: var(--green); color: var(--green); }
.mood-normal { border-color: var(--text-dim); }
.mood-bad { border-color: var(--accent); color: var(--accent); }
.mood-critical { border-color: var(--accent2); color: var(--accent2); animation: criticalPulse 1s ease-in-out infinite; }

@keyframes criticalPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.health-indicator {
  padding: 8px 12px;
  background: var(--bg);
  border: 3px solid var(--pixel-border);
  text-align: center;
  min-width: 60px;
}

.health-label {
  font-family: 'Press Start 2P', monospace;
  font-size: 8px;
  color: var(--text-dim);
  margin-bottom: 4px;
}

.health-value {
  font-family: 'Press Start 2P', monospace;
  font-size: 12px;
}

.health-great { border-color: var(--gold); }
.health-great .health-value { color: var(--gold); }
.health-good { border-color: var(--green); }
.health-good .health-value { color: var(--green); }
.health-normal { border-color: var(--text-dim); }
.health-normal .health-value { color: var(--text); }
.health-bad { border-color: var(--accent); }
.health-bad .health-value { color: var(--accent); }
.health-critical { border-color: var(--accent2); animation: criticalPulse 1s ease-in-out infinite; }
.health-critical .health-value { color: var(--accent2); }

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

.date-main {
  font-family: 'Press Start 2P', monospace;
  font-size: 12px;
  color: var(--gold);
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

.weather-info {
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
  background: linear-gradient(135deg, var(--bg) 0%, #2a1a1a 100%);
  padding: 16px;
  margin-bottom: 16px;
  border: 3px solid var(--accent);
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  overflow: hidden;
  animation: bannerAppear 0.5s ease-out, bannerPulse 2s ease-in-out infinite;
}

.big-event-banner.is-positive {
  border-color: var(--gold);
  background: linear-gradient(135deg, var(--bg) 0%, #2a2510 100%);
}

.big-event-banner.is-negative {
  border-color: var(--accent2);
  background: linear-gradient(135deg, var(--bg) 0%, #1a1a25 100%);
}

@keyframes bannerAppear {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(-10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes bannerPulse {
  0%, 100% {
    box-shadow: 0 0 10px rgba(196, 30, 58, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(196, 30, 58, 0.6);
  }
}

.big-event-banner.is-positive {
  animation: bannerAppear 0.5s ease-out, bannerPulseGold 2s ease-in-out infinite;
}

.big-event-banner.is-negative {
  animation: bannerAppear 0.5s ease-out, bannerPulseBlue 2s ease-in-out infinite;
}

@keyframes bannerPulseGold {
  0%, 100% {
    box-shadow: 0 0 10px rgba(218, 165, 32, 0.3);
  }
  50% {
    box-shadow: 0 0 25px rgba(218, 165, 32, 0.7);
  }
}

@keyframes bannerPulseBlue {
  0%, 100% {
    box-shadow: 0 0 10px rgba(100, 100, 180, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(100, 100, 180, 0.6);
  }
}

.big-event-particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  animation: particleFloat 2s ease-in-out infinite;
}

.big-event-banner.is-positive .particle {
  background: var(--gold);
}

.big-event-banner.is-negative .particle {
  background: var(--accent2);
}

.particle:nth-child(1) { left: 10%; top: 20%; }
.particle:nth-child(2) { left: 25%; top: 60%; }
.particle:nth-child(3) { left: 40%; top: 30%; }
.particle:nth-child(4) { left: 55%; top: 70%; }
.particle:nth-child(5) { left: 70%; top: 25%; }
.particle:nth-child(6) { left: 80%; top: 55%; }
.particle:nth-child(7) { left: 15%; top: 80%; }
.particle:nth-child(8) { left: 90%; top: 40%; }

@keyframes particleFloat {
  0%, 100% {
    opacity: 0.3;
    transform: translateY(0) scale(1);
  }
  50% {
    opacity: 1;
    transform: translateY(-15px) scale(1.5);
  }
}

.big-event-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at center, rgba(196, 30, 58, 0.15) 0%, transparent 50%);
  animation: glowRotate 4s linear infinite;
}

.big-event-banner.is-positive .big-event-glow {
  background: radial-gradient(circle at center, rgba(218, 165, 32, 0.15) 0%, transparent 50%);
}

.big-event-banner.is-negative .big-event-glow {
  background: radial-gradient(circle at center, rgba(100, 100, 180, 0.15) 0%, transparent 50%);
}

@keyframes glowRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.big-event-icon {
  font-family: 'Press Start 2P', monospace;
  font-size: 20px;
  color: var(--accent);
  position: relative;
  z-index: 1;
  animation: iconBounce 0.6s ease-out;
  text-shadow: 0 0 10px var(--accent);
}

.big-event-banner.is-positive .big-event-icon {
  color: var(--gold);
  text-shadow: 0 0 10px var(--gold);
}

.big-event-banner.is-negative .big-event-icon {
  color: var(--accent2);
  text-shadow: 0 0 10px var(--accent2);
}

@keyframes iconBounce {
  0% { transform: scale(0); }
  50% { transform: scale(1.3); }
  70% { transform: scale(0.9); }
  100% { transform: scale(1); }
}

.big-event-icon.pulse {
  animation: iconPulse 1s ease-in-out infinite;
}

@keyframes iconPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.15); }
}

.event-category {
  font-size: 8px;
  padding: 2px 6px;
  border-radius: 2px;
  margin-left: 8px;
  position: relative;
  z-index: 1;
}
.event-category.self { background: rgba(218, 165, 32, 0.3); color: var(--gold); }
.event-category.environment { background: rgba(100, 100, 180, 0.3); color: var(--accent2); }

.big-event-text {
  flex: 1;
  position: relative;
  z-index: 1;
}

.big-event-title {
  font-family: 'Press Start 2P', monospace;
  font-size: 10px;
  color: var(--accent);
  margin-bottom: 6px;
  animation: titleSlide 0.5s ease-out 0.2s both;
  text-shadow: 0 0 5px var(--accent);
}

.big-event-banner.is-positive .big-event-title {
  color: var(--gold);
  text-shadow: 0 0 5px var(--gold);
}

.big-event-banner.is-negative .big-event-title {
  color: var(--accent2);
  text-shadow: 0 0 5px var(--accent2);
}

@keyframes titleSlide {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.big-event-desc {
  font-size: 12px;
  color: var(--text);
  font-family: 'Noto Sans SC', monospace;
  line-height: 1.6;
  animation: descFade 0.5s ease-out 0.3s both;
}

@keyframes descFade {
  from { opacity: 0; }
  to { opacity: 1; }
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
}

.recent-event-item.self {
  background: rgba(218, 165, 32, 0.1);
  border-left-color: var(--gold);
}

.recent-event-item.environment {
  background: var(--bg);
  border-left-color: var(--accent2);
}

.recent-event-item:hover {
  transform: translateX(4px);
  border-left-color: var(--accent);
}

.event-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}

.event-category-tag {
  font-size: 8px;
  padding: 2px 6px;
  border-radius: 2px;
}
.event-category-tag.self { background: rgba(218, 165, 32, 0.3); color: var(--gold); }
.event-category-tag.environment { background: rgba(100, 100, 180, 0.3); color: var(--accent2); }

.event-date {
  font-size: 10px;
  color: var(--text-dim);
  font-family: 'Noto Sans SC', monospace;
}

.event-title {
  font-size: 12px;
  color: var(--text);
  font-weight: bold;
  font-family: 'Noto Sans SC', monospace;
  margin-bottom: 4px;
}

.event-desc {
  font-size: 11px;
  color: var(--text-dim);
  line-height: 1.5;
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

.detail-date {
  font-size: 12px;
  color: var(--secondary);
  margin-bottom: 12px !important;
  text-align: left !important;
}

.detail-content {
  font-size: 14px;
  color: var(--text);
  line-height: 1.8;
  text-align: left !important;
  margin-bottom: 0 !important;
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