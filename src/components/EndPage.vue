<template>
  <div class="container">
    <div class="header">
      <h1>人生总结</h1>
      <p class="subtitle">{{ birthDate }} — {{ deathDate }}</p>
    </div>

    <div class="life-summary">
      <div class="portrait">{{ avatar }}</div>
      <div class="person-name">{{ name }}</div>
      <div class="person-dates">享年 {{ age }} 岁</div>
      
      <div class="stats-grid">
        <div class="stat-box">
          <div class="stat-icon">📝</div>
          <div class="stat-num">{{ stats.events }}</div>
          <div class="stat-label">经历事件</div>
        </div>
        <div class="stat-box">
          <div class="stat-icon">⭐</div>
          <div class="stat-num">{{ stats.important }}</div>
          <div class="stat-label">重要时刻</div>
        </div>
        <div class="stat-box">
          <div class="stat-icon">💰</div>
          <div class="stat-num">¥{{ stats.wealth.toLocaleString() }}</div>
          <div class="stat-label">一生积蓄</div>
        </div>
        <div class="stat-box">
          <div class="stat-icon">🏠</div>
          <div class="stat-num">{{ stats.location }}</div>
          <div class="stat-label">最终住所</div>
        </div>
      </div>
    </div>

    <div class="achievements">
      <div class="section-title">🏆 成就达成</div>
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
      <div class="section-title">📆 人生里程碑</div>
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
      <button class="btn btn-primary" @click="restartGame">🔄 再活一次</button>
      <button class="btn btn-secondary">📤 分享人生</button>
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
  if (age < 18) return '👶'
  if (age < 30) return '👦'
  if (age < 50) return '👨'
  if (age < 70) return '👨‍🦳'
  return '👴'
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
      icon: '🎓',
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
      icon: '💼',
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
      icon: '👨‍👩‍👧',
      name: '家庭美满',
      description: '建立了幸福的家庭'
    })
  }
  
  // 长寿成就
  if (age.value >= 70) {
    achievements.push({
      id: 4,
      icon: '🏥',
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

onMounted(() => {
  // 记录到历史
  recordLife()
})
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
  background: linear-gradient(135deg, var(--primary), #A0522D);
  border-radius: 20px;
  color: white;
  position: relative;
  overflow: hidden;
  animation: fadeInUp 0.5s ease-out;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2v2H22v2h18v2H22v2h18v2H22v2h18v2H22v-2zM2 20v2h2v-2H2zm4 0v2h2v-2H6zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2z' fill='%23FFFFFF' fill-opacity='0.05'/%3E%3C/svg%3E");
  opacity: 0.5;
}

.header h1 {
  font-size: 32px;
  margin-bottom: 8px;
  position: relative;
}

.header .subtitle {
  font-size: 14px;
  opacity: 0.9;
  position: relative;
}

.life-summary {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 24px;
  box-shadow: var(--shadow);
  text-align: center;
  animation: fadeInUp 0.5s ease-out 0.1s both;
}

.portrait {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #E8D5C4, #D4A574);
  border-radius: 50%;
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  box-shadow: 0 6px 20px rgba(139, 69, 19, 0.25);
  transition: transform 0.3s ease;
}

.portrait:hover {
  transform: scale(1.05);
}

.person-name {
  font-size: 24px;
  color: var(--primary);
  font-weight: 700;
  margin-bottom: 4px;
}

.person-dates {
  font-size: 13px;
  color: var(--secondary);
  margin-bottom: 20px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.stat-box {
  background: var(--bg);
  border-radius: 14px;
  padding: 16px;
  text-align: center;
  transition: transform 0.2s ease;
}

.stat-box:hover {
  transform: translateY(-2px);
}

.stat-icon {
  font-size: 24px;
  margin-bottom: 8px;
}

.stat-num {
  font-size: 24px;
  color: var(--primary);
  font-weight: 700;
}

.stat-label {
  font-size: 11px;
  color: var(--secondary);
  margin-top: 4px;
}

.achievements {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 24px;
  box-shadow: var(--shadow);
  animation: fadeInUp 0.5s ease-out 0.2s both;
}

.section-title {
  font-size: 14px;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 16px;
  text-align: center;
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
  background: linear-gradient(135deg, #FFF9F0, #FFF5E6);
  border-radius: 12px;
  border-left: 3px solid var(--accent);
  transition: all 0.2s ease;
}

.achievement-item:hover {
  transform: translateX(4px);
}

.achievement-icon {
  font-size: 24px;
}

.achievement-text {
  flex: 1;
}

.achievement-name {
  font-size: 13px;
  color: var(--text);
  font-weight: 700;
}

.achievement-desc {
  font-size: 11px;
  color: var(--secondary);
}

.timeline-brief {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 24px;
  box-shadow: var(--shadow);
  animation: fadeInUp 0.5s ease-out 0.3s both;
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
  width: 2px;
  background: var(--secondary);
  opacity: 0.3;
}

.milestone-year {
  width: 24px;
  height: 24px;
  background: var(--secondary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: white;
  flex-shrink: 0;
  transition: transform 0.2s ease;
}

.milestone:nth-child(2) .milestone-year { background: #4CAF50; }
.milestone:nth-child(3) .milestone-year { background: #2196F3; }
.milestone:nth-child(4) .milestone-year { background: var(--accent); }

.milestone:hover .milestone-year {
  transform: scale(1.1);
}

.milestone-content {
  flex: 1;
}

.milestone-title {
  font-size: 13px;
  color: var(--text);
  font-weight: 700;
}

.milestone-desc {
  font-size: 11px;
  color: var(--secondary);
  margin-top: 2px;
}

.final-stats {
  background: linear-gradient(135deg, #FFF9F0, #FFE8D6);
  border-radius: 16px;
  padding: 20px;
  text-align: center;
  border: 2px solid var(--secondary);
  animation: fadeInUp 0.5s ease-out 0.4s both;
}

.final-quote {
  font-size: 14px;
  color: var(--text);
  font-style: italic;
  line-height: 1.8;
  margin-bottom: 12px;
}

.final-author {
  font-size: 12px;
  color: var(--secondary);
}

.action-buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.btn {
  width: 100%;
  padding: 16px 24px;
  font-size: 16px;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
}

.btn:active {
  transform: scale(0.96);
}

.btn-primary {
  background: linear-gradient(135deg, var(--accent), #DC143C);
  color: white;
  border: none;
  box-shadow: 0 6px 20px rgba(196, 30, 58, 0.35);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(196, 30, 58, 0.45);
}

.btn-secondary {
  background: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
}

.btn-secondary:hover {
  background: var(--primary);
  color: white;
}
</style>