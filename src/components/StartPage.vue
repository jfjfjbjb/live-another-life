<template>
  <div class="container">
    <div class="start-card">
      <span class="decorative deco-top-left">❧</span>
      <span class="decorative deco-top-right">❧</span>
      <span class="decorative deco-bottom-left">❧</span>
      <span class="decorative deco-bottom-right">❧</span>

      <h1 class="title">重活一世</h1>
      <p class="subtitle">Live Another Life</p>
      
      <div class="divider"></div>
      
      <p class="description">
        从新中国成立那天起<br>
        重新走过风风雨雨几十年<br>
        体验不一样的人生轨迹
      </p>

      <div class="year-range">
        <span class="year-badge">1949</span>
        <span style="color: var(--secondary); align-self: center;">—</span>
        <span class="year-badge">2024</span>
      </div>

      <button class="start-btn" @click="$emit('next-page')">开始新人生</button>

      <div class="feature-list">
        <div class="feature-item">
          <span class="feature-icon">🎲</span>
          <span>随机人生</span>
        </div>
        <div class="feature-item">
          <span class="feature-icon">📖</span>
          <span>大事件</span>
        </div>
        <div class="feature-item">
          <span class="feature-icon">📝</span>
          <span>大事记</span>
        </div>
        <div class="feature-item">
          <span class="feature-icon">⏭</span>
          <span>跳过功能</span>
        </div>
      </div>

      <!-- 历史人生记录 -->
      <div v-if="historicalLives.length > 0" class="historical-lives">
        <h3 class="historical-title">历史人生</h3>
        <div class="historical-list">
          <div 
            v-for="life in historicalLives" 
            :key="life.id"
            class="historical-item"
            @click="viewLifeDetail(life)"
          >
            <div class="historical-info">
              <div class="historical-age">{{ life.age }}岁</div>
              <div class="historical-period">{{ life.birthDate }} - {{ life.deathDate }}</div>
            </div>
            <div class="historical-arrow">›</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 人生详情弹窗 -->
    <div v-if="selectedLife" class="modal" @click="closeLifeDetail">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3>人生回顾</h3>
          <button class="close-btn" @click="closeLifeDetail">×</button>
        </div>
        <div class="modal-body">
          <div class="life-summary">
            <div class="life-header">
              <h3>{{ selectedLife.character?.name || '无名氏' }}</h3>
            </div>
            <div class="life-meta">
              <div class="meta-item">
                <span class="meta-label">寿命：</span>
                <span class="meta-value">{{ selectedLife.age }}岁</span>
              </div>
              <div class="meta-item">
                <span class="meta-label">时期：</span>
                <span class="meta-value">{{ selectedLife.birthDate }} - {{ selectedLife.deathDate }}</span>
              </div>
              <div class="meta-item">
                <span class="meta-label">财富：</span>
                <span class="meta-value">¥{{ selectedLife.finalStats.wealth.toLocaleString() }}</span>
              </div>
              <div class="meta-item">
                <span class="meta-label">学历：</span>
                <span class="meta-value">{{ selectedLife.finalStats.education }}</span>
              </div>
            </div>
            <div class="life-events">
              <h4>重要事件 ({{ importantEvents.length }})</h4>
              <div class="event-list">
                <div 
                  v-for="event in importantEvents.slice(0, 5)" 
                  :key="event.id"
                  class="event-item"
                >
                  <div class="event-date">{{ event.date }}</div>
                  <div class="event-title">{{ event.bigEvent ? '大事件：' + event.bigEvent.title : event.title }}</div>
                </div>
                <div v-if="importantEvents.length > 5" class="event-more">
                  还有 {{ importantEvents.length - 5 }} 个事件...
                </div>
                <div v-if="importantEvents.length === 0" class="no-events">
                  暂无重要事件
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

// 历史人生记录
const historicalLives = ref([])
const selectedLife = ref(null)

// 重要事件（只显示大事件）
const importantEvents = computed(() => {
  if (!selectedLife.value) return []
  return selectedLife.value.events.filter(event => event.bigEvent)
})

onMounted(() => {
  // 从本地存储加载历史人生记录
  const savedLives = localStorage.getItem('historicalLives')
  if (savedLives) {
    historicalLives.value = JSON.parse(savedLives)
  }
})

// 查看人生详情
const viewLifeDetail = (life) => {
  selectedLife.value = life
}

// 关闭人生详情
const closeLifeDetail = () => {
  selectedLife.value = null
}
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 420px;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.start-card {
  width: 100%;
  background: var(--card-bg);
  border-radius: 20px;
  padding: 48px 32px;
  box-shadow: var(--shadow);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.start-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: linear-gradient(90deg, var(--accent), #E6A23C, var(--accent));
}

.start-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: linear-gradient(90deg, var(--accent), #E6A23C, var(--accent));
}

.title {
  font-size: 48px;
  color: var(--primary);
  margin-bottom: 8px;
  letter-spacing: 8px;
  animation: titleGlow 2s ease-in-out infinite;
}

@keyframes titleGlow {
  0%, 100% { text-shadow: 2px 2px 4px rgba(139, 69, 19, 0.2); }
  50% { text-shadow: 2px 2px 12px rgba(139, 69, 19, 0.35); }
}

.subtitle {
  font-size: 13px;
  color: var(--secondary);
  letter-spacing: 4px;
  margin-bottom: 32px;
}

.divider {
  width: 60%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--secondary), transparent);
  margin: 24px auto;
}

.description {
  color: var(--text);
  font-size: 14px;
  line-height: 1.8;
  margin-bottom: 32px;
  opacity: 0.85;
}

.year-range {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin: 24px 0;
}

.year-badge {
  background: linear-gradient(135deg, var(--primary), #A0522D);
  color: white;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 18px;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(139, 69, 19, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.year-badge:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 16px rgba(139, 69, 19, 0.4);
}

.start-btn {
  background: linear-gradient(135deg, var(--accent), #DC143C);
  color: white;
  border: none;
  padding: 16px 48px;
  font-size: 18px;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(196, 30, 58, 0.4);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.start-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(196, 30, 58, 0.5);
}

.start-btn:active {
  transform: translateY(-1px) scale(0.98);
}

.start-btn::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
  transform: rotate(45deg);
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100%) rotate(45deg); }
  100% { transform: translateX(100%) rotate(45deg); }
}

.feature-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 24px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: var(--text);
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.feature-item:hover {
  opacity: 1;
}

.feature-icon {
  width: 28px;
  height: 28px;
  background: linear-gradient(135deg, var(--secondary), #E8C9A8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

.decorative {
  position: absolute;
  font-size: 24px;
  opacity: 0.12;
}

.deco-top-left { top: 20px; left: 20px; }
.deco-top-right { top: 20px; right: 20px; transform: rotate(90deg); }
.deco-bottom-left { bottom: 20px; left: 20px; transform: rotate(-90deg); }
.deco-bottom-right { bottom: 20px; right: 20px; transform: rotate(180deg); }

/* 历史人生记录样式 */
.historical-lives {
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px dashed rgba(139, 69, 19, 0.15);
}

.historical-title {
  font-size: 16px;
  color: var(--primary);
  font-weight: 700;
  margin-bottom: 16px;
  text-align: left;
}

.historical-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.historical-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: linear-gradient(135deg, #FFF9F0, #FFF5E6);
  border-radius: 12px;
  border-left: 3px solid var(--secondary);
  cursor: pointer;
  transition: all 0.2s ease;
}

.historical-item:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(139, 69, 19, 0.1);
}

.historical-info {
  flex: 1;
}

.historical-age {
  font-size: 14px;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 4px;
}

.historical-period {
  font-size: 12px;
  color: var(--secondary);
}

.historical-arrow {
  font-size: 20px;
  color: var(--secondary);
  opacity: 0.7;
}

/* 弹窗样式 */
.modal {
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

.modal-content {
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

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px dashed rgba(139, 69, 19, 0.15);
}

.modal-header h3 {
  font-size: 18px;
  color: var(--primary);
  font-weight: 700;
  margin: 0;
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

.life-header {
  text-align: center;
  margin-bottom: 16px;
}

.life-header h3 {
  font-size: 24px;
  color: var(--primary);
  font-weight: 700;
  margin: 0;
}

.life-summary {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.life-meta {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.meta-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid rgba(139, 69, 19, 0.1);
}

.meta-label {
  font-size: 14px;
  color: var(--secondary);
}

.meta-value {
  font-size: 14px;
  color: var(--primary);
  font-weight: 600;
}

.life-events h4 {
  font-size: 16px;
  color: var(--primary);
  font-weight: 700;
  margin-bottom: 12px;
  margin-top: 0;
}

.event-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.event-item {
  padding: 10px;
  background: linear-gradient(135deg, #FFF9F0, #FFF5E6);
  border-radius: 8px;
  border-left: 2px solid var(--secondary);
}

.event-date {
  font-size: 11px;
  color: var(--secondary);
  margin-bottom: 4px;
}

.event-title {
  font-size: 13px;
  color: var(--text);
  font-weight: 600;
}

.event-more {
  font-size: 12px;
  color: var(--secondary);
  text-align: center;
  padding: 8px;
  background: var(--bg);
  border-radius: 8px;
  margin-top: 8px;
}

</style>