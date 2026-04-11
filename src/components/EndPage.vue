<template>
  <div class="container">
    <div class="header">
      <h1>GAME OVER</h1>
      <p class="subtitle">{{ birthDate }} — {{ deathDate }}</p>
    </div>

    <div class="life-summary">
      <div class="portrait">{{ avatar }}</div>
      <div class="person-name">{{ name }}</div>
      <div class="person-dates">享年 {{ age }} 岁</div>

      <div class="stats-grid">
        <div class="stat-box">
          <div class="stat-icon">#</div>
          <div class="stat-num">{{ stats.events }}</div>
          <div class="stat-label">经历事件</div>
        </div>
        <div class="stat-box">
          <div class="stat-icon">*</div>
          <div class="stat-num">{{ stats.important }}</div>
          <div class="stat-label">重要时刻</div>
        </div>
        <div class="stat-box">
          <div class="stat-icon">$</div>
          <div class="stat-num">¥{{ stats.wealth.toLocaleString() }}</div>
          <div class="stat-label">一生积蓄</div>
        </div>
        <div class="stat-box">
          <div class="stat-icon">@</div>
          <div class="stat-num">{{ stats.location }}</div>
          <div class="stat-label">最终住所</div>
        </div>
      </div>
    </div>

    <div class="achievements">
      <div class="section-title">* 成就达成</div>
      <div class="achievement-list">
        <div
          v-for="achievement in achievements"
          :key="achievement.id"
          class="achievement-item"
        >
          <span class="achievement-icon">{{ achievement.icon }}</span>
          <div class="achievement-text">
            <div class="achievement-name">{{ achievement.name }}</div>
            <div class="achievement-desc">{{ achievement.description }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="timeline-brief">
      <div class="section-title">= 人生里程碑</div>
      <div
        v-for="(milestone, index) in milestones"
        :key="milestone.id"
        class="milestone"
      >
        <div class="milestone-year">{{ milestone.year }}</div>
        <div class="milestone-content">
          <div class="milestone-title">{{ milestone.title }}</div>
          <div class="milestone-desc">{{ milestone.description }}</div>
        </div>
      </div>
    </div>

    <div class="final-stats">
      <div class="final-quote">
        {{ quote }}
      </div>
      <div class="final-author">—— {{ quoteAuthor }}</div>
    </div>

    <div class="action-buttons">
      <button class="btn btn-primary" @click="restartGame">+ 再活一次</button>
      <button class="btn btn-secondary">> 分享人生</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const props = defineProps({
  gameState: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['set-page', 'update:game-state'])

// 从gameState获取真实数据
const name = computed(() => props.gameState.character?.name || '无名氏')
const avatar = computed(() => {
  // 根据年龄选择头像
  const age = props.gameState.age || 0
  if (age < 18) return '[B]'
  if (age < 30) return '[y]'
  if (age < 50) return '[M]'
  if (age < 70) return '[m]'
  return '[O]'
})

const birthDate = computed(() => {
  const birth = props.gameState.character?.birthDate || '1985年 6月 15日'
  return birth.replace(/[年月]/g, '.').replace(/[日]/g, '')
})

const deathDate = computed(() => {
  const death = props.gameState.currentDate || '2024年 3月 17日'
  return death.replace(/[年月]/g, '.').replace(/[日]/g, '')
})

const age = computed(() => props.gameState.age || 0)

const stats = computed(() => {
  const events = props.gameState.events || []
  const bigEvents = events.filter(event => event.bigEvent)
  return {
    events: events.length,
    important: bigEvents.length,
    wealth: props.gameState.stats?.wealth || 0,
    location: props.gameState.character?.birthPlace?.split('·').pop().trim() || '苏州'
  }
})

const achievements = computed(() => {
  const events = props.gameState.events || []
  const achievements = []

  // 教育成就
  const hasEducation = events.some(event =>
    event.tags?.includes('学习') || event.education
  )
  if (hasEducation) {
    achievements.push({
      id: 1,
      icon: 'i',
      name: '学有所成',
      description: '完成了学业教育'
    })
  }

  // 工作成就
  const hasWork = events.some(event =>
    event.tags?.includes('工作') || event.tags?.includes('事业')
  )
  if (hasWork) {
    achievements.push({
      id: 2,
      icon: 'ii',
      name: '事业有成',
      description: '拥有了自己的职业生涯'
    })
  }

  // 家庭成就
  const hasFamily = events.some(event =>
    event.tags?.includes('家庭') || event.bigEvent?.title === '结婚'
  )
  if (hasFamily) {
    achievements.push({
      id: 3,
      icon: 'iii',
      name: '家庭美满',
      description: '建立了幸福的家庭'
    })
  }

  // 长寿成就
  if (age.value >= 70) {
    achievements.push({
      id: 4,
      icon: 'iv',
      name: '福寿双全',
      description: `享年${age.value}岁，寿终正寝`
    })
  }

  return achievements
})

const milestones = computed(() => {
  const events = props.gameState.events || []
  const bigEvents = events.filter(event => event.bigEvent)

  return bigEvents.slice(-4).map((event, index) => ({
    id: event.id,
    year: event.date?.match(/(\d+)年/)?.[1] || '',
    title: event.bigEvent.title,
    description: event.bigEvent.description
  }))
})

const quote = ref('人的一生应当这样度过：当他回首往事时，不因虚度年华而悔恨，也不因碌碌无为而羞耻。')
const quoteAuthor = ref('奥斯特洛夫斯基《钢铁是怎样炼成的》')

// 记录人生到历史
const recordLife = () => {
  const lifeRecord = {
    id: Date.now(),
    birthDate: props.gameState.character?.birthDate || '1985年 6月 15日',
    deathDate: props.gameState.currentDate || '2024年 3月 17日',
    age: age.value,
    events: props.gameState.events || [],
    finalStats: props.gameState.stats,
    timestamp: new Date().toISOString()
  }

  // 获取现有历史记录
  const historicalLives = JSON.parse(localStorage.getItem('historicalLives') || '[]')

  // 检查是否已经保存过（通过日期和年龄判断）
  const alreadySaved = historicalLives.some(life =>
    life.birthDate === lifeRecord.birthDate &&
    life.deathDate === lifeRecord.deathDate &&
    life.age === lifeRecord.age
  )

  // 如果已经保存过，不再重复添加
  if (alreadySaved) {
    return
  }

  // 添加到历史记录
  historicalLives.unshift(lifeRecord)

  // 只保留最近5个记录
  if (historicalLives.length > 5) {
    historicalLives.splice(5)
  }

  // 保存到本地存储
  localStorage.setItem('historicalLives', JSON.stringify(historicalLives))
}

// 重新开始游戏
const restartGame = () => {
  // 清除游戏状态
  emit('update:game-state', { clearGame: true })
}
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.header {
  text-align: center;
  padding: 32px 20px;
  background: var(--card-bg);
  border: 4px solid var(--pixel-border);
  color: var(--text);
  position: relative;
  overflow: hidden;
  animation: fadeInUp 0.5s ease-out;
  box-shadow:
    inset -4px -4px 0px rgba(0, 0, 0, 0.3),
    inset 4px 4px 0px rgba(255, 255, 255, 0.1);
}

.header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: repeating-linear-gradient(
    90deg,
    var(--accent),
    var(--accent) 16px,
    var(--gold) 16px,
    var(--gold) 32px
  );
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.header h1 {
  font-family: 'Press Start 2P', monospace;
  font-size: 20px;
  color: var(--accent);
  margin-bottom: 8px;
  text-shadow:
    4px 4px 0 var(--primary),
    -2px -2px 0 var(--gold);
  animation: gameOverPulse 0.5s ease-in-out infinite alternate;
}

@keyframes gameOverPulse {
  from { transform: scale(1); }
  to { transform: scale(1.02); }
}

.header .subtitle {
  font-family: 'Press Start 2P', monospace;
  font-size: 8px;
  color: var(--text-dim);
  opacity: 0.9;
}

.life-summary {
  background: var(--card-bg);
  border: 4px solid var(--pixel-border);
  padding: 24px;
  text-align: center;
  animation: fadeInUp 0.5s ease-out 0.1s both;
  box-shadow:
    inset -4px -4px 0px rgba(0, 0, 0, 0.3),
    inset 4px 4px 0px rgba(255, 255, 255, 0.1);
}

.portrait {
  width: 80px;
  height: 80px;
  background: var(--bg);
  border: 4px solid var(--pixel-border);
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Press Start 2P', monospace;
  font-size: 24px;
  color: var(--gold);
  box-shadow:
    inset -4px -4px 0px rgba(0, 0, 0, 0.3),
    inset 4px 4px 0px rgba(255, 255, 255, 0.1);
  transition: transform 0.1s;
}

.portrait:hover {
  transform: scale(1.05);
}

.person-name {
  font-family: 'Press Start 2P', monospace;
  font-size: 14px;
  color: var(--gold);
  margin-bottom: 8px;
}

.person-dates {
  font-family: 'Press Start 2P', monospace;
  font-size: 10px;
  color: var(--text-dim);
  margin-bottom: 20px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.stat-box {
  background: var(--bg);
  border: 3px solid var(--pixel-border);
  padding: 14px;
  text-align: center;
  transition: all 0.1s;
}

.stat-box:hover {
  border-color: var(--gold);
}

.stat-icon {
  font-family: 'Press Start 2P', monospace;
  font-size: 16px;
  color: var(--accent2);
  margin-bottom: 8px;
}

.stat-num {
  font-family: 'Press Start 2P', monospace;
  font-size: 12px;
  color: var(--gold);
  margin-bottom: 4px;
}

.stat-label {
  font-family: 'Press Start 2P', monospace;
  font-size: 6px;
  color: var(--text-dim);
}

.achievements {
  background: var(--card-bg);
  border: 4px solid var(--pixel-border);
  padding: 24px;
  animation: fadeInUp 0.5s ease-out 0.2s both;
  box-shadow:
    inset -4px -4px 0px rgba(0, 0, 0, 0.3),
    inset 4px 4px 0px rgba(255, 255, 255, 0.1);
}

.section-title {
  font-family: 'Press Start 2P', monospace;
  font-size: 10px;
  color: var(--gold);
  margin-bottom: 16px;
  text-align: center;
  letter-spacing: 2px;
}

.achievement-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.achievement-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: var(--bg);
  border-left: 4px solid var(--accent2);
  transition: all 0.1s;
}

.achievement-item:hover {
  transform: translateX(4px);
  border-left-color: var(--gold);
}

.achievement-icon {
  font-family: 'Press Start 2P', monospace;
  font-size: 14px;
  color: var(--gold);
}

.achievement-text {
  flex: 1;
}

.achievement-name {
  font-family: 'Press Start 2P', monospace;
  font-size: 9px;
  color: var(--text);
  margin-bottom: 4px;
}

.achievement-desc {
  font-size: 11px;
  color: var(--text-dim);
  font-family: 'Noto Sans SC', monospace;
}

.timeline-brief {
  background: var(--card-bg);
  border: 4px solid var(--pixel-border);
  padding: 24px;
  animation: fadeInUp 0.5s ease-out 0.3s both;
  box-shadow:
    inset -4px -4px 0px rgba(0, 0, 0, 0.3),
    inset 4px 4px 0px rgba(255, 255, 255, 0.1);
}

.milestone {
  display: flex;
  gap: 12px;
  margin-bottom: 14px;
  position: relative;
}

.milestone:not(:last-child)::before {
  content: '';
  position: absolute;
  left: 11px;
  top: 24px;
  bottom: -14px;
  width: 4px;
  background: var(--pixel-border);
}

.milestone-year {
  width: 24px;
  height: 24px;
  background: var(--accent2);
  border: 3px solid var(--pixel-border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Press Start 2P', monospace;
  font-size: 8px;
  color: white;
  flex-shrink: 0;
  transition: transform 0.2s ease;
}

.milestone:nth-child(2) .milestone-year { background: var(--green); }
.milestone:nth-child(3) .milestone-year { background: #2196F3; }
.milestone:nth-child(4) .milestone-year { background: var(--accent); }

.milestone:hover .milestone-year {
  transform: scale(1.1);
}

.milestone-content {
  flex: 1;
}

.milestone-title {
  font-family: 'Press Start 2P', monospace;
  font-size: 9px;
  color: var(--text);
  margin-bottom: 4px;
}

.milestone-desc {
  font-size: 11px;
  color: var(--text-dim);
  font-family: 'Noto Sans SC', monospace;
}

.final-stats {
  background: var(--bg);
  border: 4px solid var(--pixel-border);
  padding: 20px;
  text-align: center;
  animation: fadeInUp 0.5s ease-out 0.4s both;
  box-shadow: inset 4px 4px 0 rgba(0,0,0,0.3);
}

.final-quote {
  font-size: 14px;
  color: var(--text);
  font-style: italic;
  line-height: 1.8;
  margin-bottom: 12px;
  font-family: 'Noto Sans SC', monospace;
}

.final-author {
  font-family: 'Press Start 2P', monospace;
  font-size: 8px;
  color: var(--text-dim);
}

.action-buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.btn {
  width: 100%;
  padding: 16px 24px;
  font-family: 'Press Start 2P', monospace;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.1s;
  text-align: center;
}

.btn:active {
  transform: scale(0.96);
}

.btn-primary {
  background: var(--accent);
  color: white;
  border: none;
  box-shadow:
    inset -4px -4px 0px rgba(0, 0, 0, 0.3),
    inset 4px 4px 0px rgba(255, 255, 255, 0.2),
    0 4px 0 0 var(--primary);
}

.btn-primary:hover {
  transform: translate(-2px, -2px);
  box-shadow:
    inset -4px -4px 0px rgba(0, 0, 0, 0.3),
    inset 4px 4px 0px rgba(255, 255, 255, 0.2),
    0 4px 0 0 var(--primary),
    4px 4px 0 0 var(--pixel-border);
}

.btn-secondary {
  background: transparent;
  color: var(--text);
  border: 4px solid var(--pixel-border);
  box-shadow: inset -4px -4px 0px rgba(0, 0, 0, 0.3);
}

.btn-secondary:hover {
  background: var(--pixel-border);
  color: white;
}
</style>