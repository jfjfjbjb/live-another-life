<template>
  <div class="container">
    <div class="header">
      <div class="header-top">
        <button class="back-btn" @click="$emit('set-page', 'LifePage')"><</button>
        <h1># 大事记</h1>
        <div class="header-placeholder"></div>
      </div>
      <p class="header-sub">记录人生的每一个重要时刻</p>

      <div class="stats-row">
        <div class="stat-box">
          <div class="stat-num">{{ stats.totalEvents }}</div>
          <div class="stat-label">总事件</div>
        </div>
        <div class="stat-box">
          <div class="stat-num">{{ stats.importantEvents }}</div>
          <div class="stat-label">标记重要</div>
        </div>
        <div class="stat-box">
          <div class="stat-num">{{ stats.thisYearEvents }}</div>
          <div class="stat-label">今年</div>
        </div>
      </div>
    </div>

    <div class="timeline">
      <div
        v-for="event in allEvents"
        :key="event.id"
        class="timeline-item"
        :class="[event.eventCategory, { important: event.important }]"
      >
        <div class="item-header">
          <span class="item-date">{{ event.date }} · {{ event.age }}岁</span>
          <span v-if="event.eventCategory" class="item-category" :class="event.eventCategory">
            {{ event.eventCategory === 'self' ? '[自]' : '[环]' }}
          </span>
        </div>
        <div class="item-title">{{ event.bigEvent ? '大事件：' + event.bigEvent.title : event.title }}</div>
        <div class="item-full-content">{{ event.bigEvent ? event.bigEvent.description : event.content }}</div>
        <div class="item-tags">
          <span
            v-for="tag in event.tags"
            :key="tag"
            class="item-tag"
          >{{ tag }}</span>
        </div>
      </div>
      <div v-if="allEvents.length === 0" class="no-events">
        暂无大事记
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  gameState: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['set-page'])

// 从gameState中获取事件数据
const allEvents = ref([])
const stats = ref({
  totalEvents: 0,
  importantEvents: 0,
  thisYearEvents: 0
})

const loadEvents = () => {
  const gameEvents = props.gameState.events || []

  // 显示所有重要事件
  const filteredEvents = gameEvents.filter(event => event.important || event.bigEvent)

  // 获取游戏内的当前年份
  const currentDateStr = props.gameState.currentDate || ''
  const currentYearMatch = currentDateStr.match(/(\d+)年/)
  const currentGameYear = currentYearMatch ? currentYearMatch[1] : null

  let totalEvents = 0
  let taggedImportantEvents = 0
  let thisYearEvents = 0

  filteredEvents.forEach(event => {
    totalEvents++
    if (event.important || event.bigEvent) {
      taggedImportantEvents++
    }
    // 检查是否是今年的事件（使用游戏内年份）
    const yearMatch = event.date.match(/(\d+)年/)
    if (yearMatch && currentGameYear && yearMatch[1] === currentGameYear) {
      thisYearEvents++
    }
  })

  // 显示所有重要事件，按日期降序排序
  allEvents.value = [...filteredEvents].sort((a, b) => {
    const yearA = parseInt(a.date.match(/(\d+)年/)?.[1] || '0')
    const yearB = parseInt(b.date.match(/(\d+)年/)?.[1] || '0')
    return yearB - yearA
  })
  stats.value = {
    totalEvents,
    importantEvents: taggedImportantEvents,
    thisYearEvents
  }
}

// 监听游戏状态变化，实时更新事件列表
watch(() => props.gameState.events, loadEvents, { immediate: true })
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

.header {
  background: var(--card-bg);
  border: 4px solid var(--pixel-border);
  padding: 20px;
  text-align: center;
  box-shadow:
    inset -4px -4px 0px rgba(0, 0, 0, 0.3),
    inset 4px 4px 0px rgba(255, 255, 255, 0.1);
}

.header-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.back-btn {
  font-family: 'Press Start 2P', monospace;
  font-size: 12px;
  padding: 8px 12px;
  background: var(--bg);
  color: var(--text);
  border: 3px solid var(--pixel-border);
  cursor: pointer;
  transition: all 0.1s;
  box-shadow: inset -2px -2px 0 rgba(0,0,0,0.3);
}

.back-btn:hover {
  border-color: var(--gold);
  color: var(--gold);
}

.header-placeholder {
  width: 60px;
}

.header h1 {
  font-family: 'Press Start 2P', monospace;
  font-size: 12px;
  color: var(--gold);
  margin: 0;
  text-shadow: 2px 2px 0 var(--primary);
}

.header-sub {
  font-size: 11px;
  color: var(--text-dim);
  font-family: 'Noto Sans SC', monospace;
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 16px;
}

.stat-box {
  background: var(--bg);
  border: 3px solid var(--pixel-border);
  padding: 12px 8px;
  text-align: center;
  transition: all 0.1s;
}

.stat-box:hover {
  border-color: var(--gold);
}

.stat-num {
  font-family: 'Press Start 2P', monospace;
  font-size: 14px;
  color: var(--gold);
  margin-bottom: 4px;
}

.stat-label {
  font-family: 'Press Start 2P', monospace;
  font-size: 6px;
  color: var(--text-dim);
}

.timeline {
  position: relative;
  padding-left: 20px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 6px;
  top: 0;
  bottom: 0;
  width: 4px;
  background: repeating-linear-gradient(
    180deg,
    var(--pixel-border),
    var(--pixel-border) 8px,
    var(--secondary) 8px,
    var(--secondary) 16px
  );
}

.timeline-item {
  background: var(--card-bg);
  border: 4px solid var(--pixel-border);
  padding: 14px;
  margin-bottom: 12px;
  position: relative;
  cursor: pointer;
  transition: all 0.1s;
  box-shadow:
    inset -4px -4px 0px rgba(0, 0, 0, 0.3),
    inset 4px 4px 0px rgba(255, 255, 255, 0.1);
}

.timeline-item.self {
  background: rgba(218, 165, 32, 0.08);
  border-left: 6px solid var(--gold);
}

.timeline-item.environment {
  background: var(--card-bg);
  border-left: 6px solid var(--accent2);
}

.timeline-item:hover {
  transform: translateX(4px);
  border-color: var(--accent2);
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -18px;
  top: 16px;
  width: 12px;
  height: 12px;
  background: var(--bg);
  border: 4px solid var(--pixel-border);
}

.timeline-item.important::before {
  background: var(--accent);
  border-color: var(--accent);
  animation: starPulse 1s ease-in-out infinite;
}

@keyframes starPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(232, 74, 95, 0.4); }
  50% { box-shadow: 0 0 8px 2px rgba(232, 74, 95, 0.5); }
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
}

.item-date {
  font-size: 10px;
  color: var(--text-dim);
  font-family: 'Noto Sans SC', monospace;
}

.item-star {
  font-family: 'Press Start 2P', monospace;
  font-size: 12px;
  cursor: pointer;
  color: var(--gold);
  transition: transform 0.1s;
}

.item-star:active {
  transform: scale(1.3);
}

.item-category {
  font-size: 8px;
  padding: 2px 6px;
  border-radius: 2px;
  margin-left: 8px;
}
.item-category.self { background: rgba(218, 165, 32, 0.3); color: var(--gold); }
.item-category.environment { background: rgba(100, 100, 180, 0.3); color: var(--accent2); }

.item-title {
  font-family: 'Press Start 2P', monospace;
  font-size: 9px;
  color: var(--text);
  font-weight: bold;
  margin-bottom: 6px;
}

.item-preview {
  font-size: 12px;
  color: var(--text-dim);
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-family: 'Noto Sans SC', monospace;
}

.item-full-content {
  font-size: 12px;
  color: var(--text-dim);
  line-height: 1.6;
  font-family: 'Noto Sans SC', monospace;
}

.item-tags {
  display: flex;
  gap: 6px;
  margin-top: 10px;
  flex-wrap: wrap;
}

.item-tag {
  font-size: 10px;
  padding: 3px 8px;
  background: var(--bg);
  border: 2px solid var(--pixel-border);
  color: var(--accent2);
  font-family: 'Noto Sans SC', monospace;
}

.item-tag:active {
  transform: scale(0.9);
}

/* 大事件详情弹窗样式 */
.event-detail-modal {
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

.event-detail-content {
  background: var(--card-bg);
  border: 4px solid var(--pixel-border);
  padding: 24px;
  max-width: 90%;
  width: 360px;
  max-height: 80vh;
  overflow-y: auto;
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

.event-detail-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 4px solid var(--pixel-border);
}

.event-detail-header h2 {
  font-family: 'Press Start 2P', monospace;
  font-size: 10px;
  color: var(--gold);
  margin: 0;
  flex: 1;
  line-height: 1.5;
}

.detail-category {
  font-size: 8px;
  padding: 4px 8px;
  border-radius: 2px;
}
.detail-category.self { background: rgba(218, 165, 32, 0.2); color: var(--gold); }
.detail-category.environment { background: rgba(100, 100, 180, 0.2); color: var(--accent2); }

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

.event-detail-meta {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  font-size: 12px;
  color: var(--text-dim);
  font-family: 'Noto Sans SC', monospace;
}

.event-detail-description {
  font-size: 14px;
  line-height: 1.6;
  color: var(--text);
  margin-bottom: 20px;
  white-space: pre-wrap;
  font-family: 'Noto Sans SC', monospace;
}

.event-detail-footer {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 16px;
  border-top: 4px solid var(--pixel-border);
}

.event-detail-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.detail-tag {
  font-size: 10px;
  padding: 3px 8px;
  background: var(--bg);
  border: 2px solid var(--pixel-border);
  color: var(--accent2);
  font-family: 'Noto Sans SC', monospace;
}

.no-events {
  text-align: center;
  padding: 24px;
  color: var(--text-dim);
  font-size: 14px;
  background: var(--card-bg);
  border: 4px solid var(--pixel-border);
  font-family: 'Noto Sans SC', monospace;
}
</style>