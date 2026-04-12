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
          <div class="stat-icon">📍</div>
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
          <div class="milestone-title">
            {{ milestone.title }}
          </div>
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
      <!-- <button class="btn btn-secondary">> 分享人生</button> -->
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
  const age = props.gameState.age || 0
  const gender = props.gameState.character?.gender || 'male'

  if (age < 1) return '👶'
  if (age < 3) return '👶'
  if (age < 12) return gender === 'female' ? '👧' : '👦'
  if (age < 18) return gender === 'female' ? '👧' : '👦'
  if (age < 40) return gender === 'female' ? '👩' : '👨'
  if (age < 60) return gender === 'female' ? '👩' : '👨'
  return gender === 'female' ? '👵' : '👴'
})

const birthDate = computed(() => {
  const birth = props.gameState.character?.birthDate || '1985年'
  return birth.match(/\d+/)?.[0] + '年' || '1985年'
})

const deathDate = computed(() => {
  const death = props.gameState.currentDate || '2024年'
  return death.match(/\d+/)?.[0] + '年' || '2024年'
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
      icon: '📚',
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
      icon: '🏠',
      name: '家庭美满',
      description: '建立了幸福的家庭'
    })
  }

  // 长寿成就
  if (age.value >= 70) {
    achievements.push({
      id: 4,
      icon: '🎋',
      name: '福寿双全',
      description: `享年${age.value}岁，寿终正寝`
    })
  }

  return achievements
})

const milestones = computed(() => {
  const events = props.gameState.events || []
  const bigEvents = events.filter(event => event.bigEvent && event.eventCategory === 'self')

  // 重要事件标题列表 - 好坏转折都要
  const importantTitles = [
    '出生', '升学', '毕业', '结婚', '离婚', '生子', '第二个孩子',
    '创业成功', '创业失败', '晋升', '退休', '买房',
    '表彰', '金婚', '中年危机', '下岗', '大病'
  ]

  // 只保留重要的个人事件
  const importantEvents = bigEvents.filter(event =>
    importantTitles.includes(event.bigEvent.title)
  )

  // 最多显示6个
  return importantEvents.slice(0, 6).map((event) => ({
    id: event.id,
    year: event.date?.match(/(\d+)年/)?.[1] || '',
    age: event.age || 0,
    title: event.bigEvent.title,
    description: event.bigEvent.description,
    eventCategory: event.eventCategory || 'self',
    tags: event.tags || [],
    location: event.location || '',
    fullEvent: event
  }))
})

// 名人语录库
const quotes = [
  { text: '人的一生应当这样度过：当他回首往事时，不因虚度年华而悔恨，也不因碌碌无为而羞耻。', author: '奥斯特洛夫斯基《钢铁是怎样炼成的》' },
  { text: '人生的价值，并不是用时间，而是用深度去衡量的。', author: '列夫·托尔斯泰' },
  { text: '人的生命是有限的，可是为人民服务是无限的。', author: '雷锋' },
  { text: '路是脚踏出来的，历史是人写出来的，人的每一步行动都在书写自己的历史。', author: '吉鸿昌' },
  { text: '生活就像海洋，只有意志坚强的人，才能到达彼岸。', author: '马克思' },
  { text: '人生天地之间，若白驹过隙，忽然而已。', author: '庄子' },
  { text: '我从未让学校教条妨碍我的人生学习。', author: '本杰明·富兰克林' },
  { text: '不要等待，时机永远不会恰到好处。', author: '拿破仑·希尔' },
  { text: '人生不是一种享乐，而是一桩十分沉重的工作。', author: '列夫·托尔斯泰' },
  { text: '人的一切都应该是美丽的：面貌、心灵、思想和行动。', author: '奥斯特洛夫斯基' },
  { text: '当一个人用工作去迎接光明，光明很快就会来照耀着他。', author: '冯学峰' },
  { text: '人生如同道路，最近的捷径往往是最坏的路。', author: '培根' },
  { text: '生命的意义在于付出，在于给予，而不是在于接受，也不是在于争取。', author: '巴金' },
  { text: '人生自古谁无死，留取丹心照汗青。', author: '文天祥' },
  { text: '人固有一死，或重于泰山，或轻于鸿毛。', author: '司马迁' },
  { text: '生当作人杰，死亦为鬼雄。', author: '李清照' },
  { text: '人生如逆旅，我亦是行人。', author: '苏轼' },
  { text: '我们不是因为年老而停止游戏，我们是因为停止游戏才变老。', author: '萧伯纳' },
  { text: '青春不是人生的一段时期，而是心灵的一种状态。', author: '塞涅卡' },
  { text: '如果你活着，别人还会继续；如果你死了，你的故事就结束了。', author: '马克·吐温' },
  { text: '人生最终的价值在于觉醒和思考的能力，而不只在于生存。', author: '亚里士多德' },
  { text: '三万六千日，夜夜当秉烛。', author: '李白' },
  { text: '盛年不重来，一日难再晨。及时当勉励，岁月不待人。', author: '陶渊明' },
  { text: '人生代代无穷已，江月年年望相似。', author: '张若虚' },
  { text: '生年不满百，常怀千岁忧。', author: '古诗十九首' },
  { text: '你只有一次生命，不要虚度此生。', author: '奥格·曼迪诺' },
  { text: '人生没有如果，只有后果和结果。', author: '于丹' },
  { text: '把每一个黎明看作是生命的开始，把每一个黄昏看作是你生命的小结。', author: '约翰·罗斯金' }
]

// 随机选择一条语录
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
const quote = ref(randomQuote.text)
const quoteAuthor = ref(randomQuote.author)

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
  font-size: 48px;
  line-height: 1;
  box-shadow:
    inset -4px -4px 0px rgba(0, 0, 0, 0.3),
    inset 4px 4px 0px rgba(255, 255, 255, 0.1);
  transition: transform 0.1s;
  animation: portraitPulse 3s ease-in-out infinite;
}

@keyframes portraitPulse {
  0%, 100% { transform: scale(1); box-shadow: inset -4px -4px 0px rgba(0, 0, 0, 0.3), inset 4px 4px 0px rgba(255, 255, 255, 0.1); }
  50% { transform: scale(1.03); box-shadow: inset -4px -4px 0px rgba(0, 0, 0, 0.3), inset 4px 4px 0px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 217, 61, 0.3); }
}

.portrait:hover {
  transform: scale(1.08);
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
  font-size: 20px;
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
  font-size: 24px;
  line-height: 1;
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