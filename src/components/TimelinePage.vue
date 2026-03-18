<template>
  <div class="container">
    <div class="header">
      <div class="header-top">
        <button class="back-btn" @click="$emit('set-page', 'LifePage')"><</button>
        <h1>📝 大事记</h1>
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
        :class="{ important: event.important }"
        @click="showEventDetail(event)"
      >
        <div class="item-header">
          <span class="item-date">{{ event.date }} · {{ event.age }}岁</span>
          <span class="item-star" @click.stop="toggleImportant(event.id)">{{ event.important ? '⭐' : '☆' }}</span>
        </div>
        <div class="item-title">{{ event.bigEvent ? '大事件：' + event.bigEvent.title : event.title }}</div>
        <div class="item-preview">{{ event.bigEvent ? event.bigEvent.description : event.content }}</div>
        <div class="item-tags">
          <span 
            v-for="tag in event.tags" 
            :key="tag"
            class="item-tag"
          >{{ tag }}</span>
          <span class="item-mood">{{ event.mood }}</span>
        </div>
      </div>
      <div v-if="allEvents.length === 0" class="no-events">
        暂无大事记
      </div>
    </div>

    <!-- 大事件详情弹窗 -->
    <div v-if="selectedEvent" class="event-detail-modal" @click="closeEventDetail">
      <div class="event-detail-content" @click.stop>
        <div class="event-detail-header">
          <h2>{{ selectedEvent.bigEvent ? '大事件：' + selectedEvent.bigEvent.title : selectedEvent.title }}</h2>
          <button class="close-btn" @click="closeEventDetail">×</button>
        </div>
        <div class="event-detail-meta">
          <span>{{ selectedEvent.date }}</span>
          <span>{{ selectedEvent.age }}岁</span>
        </div>
        <div class="event-detail-description">
          {{ selectedEvent.bigEvent ? selectedEvent.bigEvent.description : selectedEvent.content }}
        </div>
        <div class="event-detail-footer">
          <div class="event-detail-tags">
            <span 
              v-for="tag in selectedEvent.tags" 
              :key="tag"
              class="detail-tag"
            >{{ tag }}</span>
          </div>
          <div class="event-detail-mood">{{ selectedEvent.mood }}</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

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
const selectedEvent = ref(null)

const toggleImportant = (eventId) => {
  // 实现标记重要功能
  console.log('Toggle important', eventId)
}

const showEventDetail = (event) => {
  selectedEvent.value = event
}

const closeEventDetail = () => {
  selectedEvent.value = null
}

onMounted(() => {
  // 从gameState中获取事件数据
  const gameEvents = props.gameState.events || []
  
  let totalEvents = 0
  let importantEvents = 0
  let thisYearEvents = 0
  
  gameEvents.forEach(event => {
    totalEvents++
    if (event.important || event.bigEvent) {
      importantEvents++
      
      // 检查是否是今年的事件（简单实现，实际应该根据当前游戏日期判断）
      const yearMatch = event.date.match(/(\d+)年/)
      if (yearMatch) {
        const year = yearMatch[1]
        if (year === new Date().getFullYear().toString()) {
          thisYearEvents++
        }
      }
    }
  })
  
  // 更新数据 - 只显示大事件
  allEvents.value = gameEvents.filter(event => event.bigEvent).sort((a, b) => {
    // 按日期降序排序
    return new Date(b.date.replace(/年|月|日/g, '-')) - new Date(a.date.replace(/年|月|日/g, '-'))
  })
  stats.value = {
    totalEvents,
    importantEvents,
    thisYearEvents
  }
})
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
  border-radius: 20px;
  padding: 20px;
  box-shadow: var(--shadow);
  text-align: center;
}

.header-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.back-btn {
  padding: 6px 12px;
  background: linear-gradient(135deg, var(--secondary), #E8C9A8);
  color: var(--primary);
  border: none;
  border-radius: 12px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.back-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(139, 69, 19, 0.2);
}

.header-placeholder {
  width: 100px;
}

.header h1 {
  font-size: 20px;
  color: var(--primary);
  font-weight: 700;
  margin: 0;
}

.header-sub {
  font-size: 12px;
  color: var(--secondary);
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 16px;
}

.stat-box {
  background: var(--bg);
  border-radius: 12px;
  padding: 12px 8px;
  text-align: center;
  transition: transform 0.2s ease;
}

.stat-box:hover {
  transform: translateY(-2px);
}

.stat-num {
  font-size: 20px;
  color: var(--primary);
  font-weight: 700;
}

.stat-label {
  font-size: 10px;
  color: var(--secondary);
  margin-top: 4px;
}

.filter-bar {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding: 4px 0;
}

.filter-bar::-webkit-scrollbar {
  display: none;
}

.filter-item {
  padding: 8px 16px;
  background: var(--card-bg);
  border-radius: 20px;
  font-size: 12px;
  color: var(--text);
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.2s;
}

.filter-item:active {
  transform: scale(0.95);
}

.filter-item.active {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

.timeline {
  position: relative;
  padding-left: 24px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, var(--secondary), var(--primary), var(--secondary));
}

.timeline-year {
  font-size: 16px;
  color: var(--primary);
  margin: 20px 0 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
}

.timeline-year::before {
  content: '';
  position: absolute;
  left: 4px;
  width: 10px;
  height: 10px;
  background: var(--accent);
  border-radius: 50%;
  border: 2px solid var(--bg);
}

.timeline-item {
  background: var(--card-bg);
  border-radius: 14px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 4px 12px rgba(139, 69, 19, 0.08);
  position: relative;
  cursor: pointer;
  transition: all 0.2s;
}

.container {
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  animation: fadeInUp 0.4s ease-out;
}

.timeline-item:hover {
  transform: translateX(4px);
  box-shadow: 0 6px 16px rgba(139, 69, 19, 0.12);
}

.timeline-item:active {
  transform: translateX(2px) scale(0.99);
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -20px;
  top: 20px;
  width: 10px;
  height: 10px;
  background: var(--secondary);
  border-radius: 50%;
  border: 2px solid var(--bg);
}

.timeline-item.important::before {
  background: var(--accent);
  animation: starPulse 2s ease-in-out infinite;
}

@keyframes starPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(196, 30, 58, 0.4); }
  50% { box-shadow: 0 0 8px 2px rgba(196, 30, 58, 0.3); }
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
}

.item-date {
  font-size: 12px;
  color: var(--secondary);
}

.item-star {
  font-size: 14px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.item-star:active {
  transform: scale(1.3);
}

.item-title {
  font-size: 14px;
  color: var(--text);
  font-weight: 700;
  margin-bottom: 6px;
}

.item-preview {
  font-size: 12px;
  color: var(--text);
  opacity: 0.7;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
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
  border-radius: 10px;
  color: var(--primary);
  transition: transform 0.2s ease;
}

.item-tag:active {
  transform: scale(0.9);
}

.item-mood {
  font-size: 12px;
  margin-left: auto;
}

/* 大事件详情弹窗样式 */
.event-detail-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
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
  border-radius: 20px;
  padding: 24px;
  max-width: 90%;
  width: 360px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
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
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px dashed rgba(139, 69, 19, 0.15);
}

.event-detail-header h2 {
  font-size: 18px;
  color: var(--primary);
  font-weight: 700;
  margin: 0;
  flex: 1;
}

.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  color: var(--secondary);
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
}

.close-btn:hover {
  background: var(--bg);
  color: var(--primary);
}

.event-detail-meta {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  font-size: 12px;
  color: var(--secondary);
}

.event-detail-description {
  font-size: 14px;
  line-height: 1.6;
  color: var(--text);
  margin-bottom: 20px;
  white-space: pre-wrap;
}

.event-detail-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  border-top: 1px dashed rgba(139, 69, 19, 0.15);
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
  border-radius: 10px;
  color: var(--primary);
}

.event-detail-mood {
  font-size: 16px;
}

</style>