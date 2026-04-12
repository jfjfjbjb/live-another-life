<template>
  <div class="container">
    <div class="start-card">
      <span class="decorative deco-top-left">*</span>
      <span class="decorative deco-top-right">*</span>
      <span class="decorative deco-bottom-left">*</span>
      <span class="decorative deco-bottom-right">*</span>

      <h1 class="title">重活一世</h1>
      <p class="subtitle">LIVE ANOTHER LIFE</p>

      <div class="divider"></div>

      <p class="description">
        从新中国成立那天起<br>
        重新走过风风雨雨几十年<br>
        体验不一样的人生轨迹
      </p>

      <div class="year-range">
        <span class="year-badge">1949</span>
        <span class="year-separator">-</span>
        <span class="year-badge">2024</span>
      </div>

      <button class="start-btn" @click="$emit('next-page')">开始新人生</button>

      <div class="feature-list">
        <div class="feature-item">
          <span class="feature-icon">!</span>
          <span>随机人生</span>
        </div>
        <div class="feature-item">
          <span class="feature-icon">#</span>
          <span>大事件</span>
        </div>
        <div class="feature-item">
          <span class="feature-icon">?</span>
          <span>大事记</span>
        </div>
        <div class="feature-item">
          <span class="feature-icon">></span>
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
            <div class="historical-arrow">></div>
          </div>
        </div>
      </div>
    </div>

    <!-- 人生详情弹窗 -->
    <div v-if="selectedLife" class="modal" @click="closeLifeDetail">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3>人生回顾</h3>
          <button class="close-btn" @click="closeLifeDetail">X</button>
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
                  v-for="event in importantEvents"
                  :key="event.id"
                  class="event-item"
                  :class="event.eventCategory"
                >
                  <div class="event-date">{{ event.date }} · {{ event.age || 0 }}岁</div>
                  <div class="event-title">
                    <span v-if="event.eventCategory" class="event-category-tag" :class="event.eventCategory">
                      {{ event.eventCategory === 'self' ? '[自]' : '[环]' }}
                    </span>
                    {{ event.bigEvent ? event.bigEvent.title : event.title }}
                  </div>
                  <div class="event-desc">{{ event.bigEvent ? event.bigEvent.description : event.content || '' }}</div>
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
  border: 4px solid var(--pixel-border);
  padding: 48px 32px;
  text-align: center;
  position: relative;
  box-shadow:
    inset -4px -4px 0px rgba(0, 0, 0, 0.3),
    inset 4px 4px 0px rgba(255, 255, 255, 0.1);
}

.start-card::before {
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

.title {
  font-family: 'Press Start 2P', monospace;
  font-size: 20px;
  color: var(--gold);
  margin-bottom: 16px;
  text-shadow:
    4px 4px 0 var(--primary),
    -2px -2px 0 var(--accent);
  animation: titlePixel 1s ease-in-out infinite;
}

@keyframes titlePixel {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(2px, 0); }
  75% { transform: translate(-2px, 0); }
}

.subtitle {
  font-family: 'Press Start 2P', monospace;
  font-size: 8px;
  color: var(--accent2);
  letter-spacing: 2px;
  margin-bottom: 32px;
}

.divider {
  width: 60%;
  height: 4px;
  background: repeating-linear-gradient(
    90deg,
    var(--secondary),
    var(--secondary) 8px,
    transparent 8px,
    transparent 16px
  );
  margin: 24px auto;
}

.description {
  color: var(--text);
  font-size: 14px;
  line-height: 1.8;
  margin-bottom: 32px;
}

.year-range {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin: 24px 0;
}

.year-badge {
  font-family: 'Press Start 2P', monospace;
  font-size: 10px;
  background: var(--bg);
  color: var(--gold);
  padding: 12px 16px;
  border: 4px solid var(--pixel-border);
  box-shadow:
    inset -4px -4px 0px rgba(0, 0, 0, 0.3),
    inset 4px 4px 0px rgba(255, 255, 255, 0.1);
  transition: all 0.1s;
}

.year-badge:hover {
  transform: translate(-2px, -2px);
  box-shadow:
    inset -4px -4px 0px rgba(0, 0, 0, 0.3),
    inset 4px 4px 0px rgba(255, 255, 255, 0.1),
    8px 8px 0 var(--pixel-border);
}

.year-separator {
  color: var(--secondary);
  font-family: 'Press Start 2P', monospace;
  font-size: 12px;
}

.start-btn {
  font-family: 'Press Start 2P', monospace;
  font-size: 12px;
  background: var(--accent);
  color: white;
  border: none;
  padding: 16px 32px;
  cursor: pointer;
  position: relative;
  box-shadow:
    inset -4px -4px 0px rgba(0, 0, 0, 0.3),
    inset 4px 4px 0px rgba(255, 255, 255, 0.2),
    0 4px 0 0 var(--primary);
  transition: all 0.1s;
}

.start-btn:hover {
  transform: translate(-2px, -2px);
  box-shadow:
    inset -4px -4px 0px rgba(0, 0, 0, 0.3),
    inset 4px 4px 0px rgba(255, 255, 255, 0.2),
    0 4px 0 0 var(--primary),
    4px 4px 0 0 var(--pixel-border);
}

.start-btn:active {
  transform: translate(2px, 2px);
  box-shadow:
    inset 4px 4px 0px rgba(0, 0, 0, 0.3),
    inset -4px -4px 0px rgba(255, 255, 255, 0.2),
    0 0px 0 0 var(--primary);
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
  justify-content: center;
  gap: 8px;
  font-size: 10px;
  color: var(--text);
  padding: 12px 8px;
  background: var(--bg);
  border: 3px solid var(--pixel-border);
  font-family: 'Noto Sans SC', monospace;
}

.feature-icon {
  font-family: 'Press Start 2P', monospace;
  font-size: 12px;
  color: var(--gold);
}

.decorative {
  position: absolute;
  font-family: 'Press Start 2P', monospace;
  font-size: 16px;
  color: var(--pixel-border);
  opacity: 0.5;
}

.deco-top-left { top: 12px; left: 12px; }
.deco-top-right { top: 12px; right: 12px; transform: rotate(90deg); }
.deco-bottom-left { bottom: 12px; left: 12px; transform: rotate(-90deg); }
.deco-bottom-right { bottom: 12px; right: 12px; transform: rotate(180deg); }

/* 历史人生记录样式 */
.historical-lives {
  margin-top: 32px;
  padding-top: 24px;
  border-top: 4px solid var(--pixel-border);
  background: var(--bg);
  padding: 16px;
}

.historical-title {
  font-family: 'Press Start 2P', monospace;
  font-size: 10px;
  color: var(--gold);
  margin-bottom: 16px;
  text-align: left;
}

.historical-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.historical-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: var(--card-bg);
  border: 3px solid var(--pixel-border);
  cursor: pointer;
  transition: all 0.1s;
}

.historical-item:hover {
  transform: translate(4px, 0);
  border-color: var(--accent);
}

.historical-info {
  flex: 1;
}

.historical-age {
  font-family: 'Press Start 2P', monospace;
  font-size: 10px;
  color: var(--accent);
  margin-bottom: 4px;
}

.historical-period {
  font-size: 10px;
  color: var(--text-dim);
  font-family: 'Noto Sans SC', monospace;
}

.historical-arrow {
  font-family: 'Press Start 2P', monospace;
  font-size: 12px;
  color: var(--accent);
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

.life-header {
  text-align: center;
  margin-bottom: 16px;
}

.life-header h3 {
  font-family: 'Press Start 2P', monospace;
  font-size: 14px;
  color: var(--gold);
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
  border-bottom: 2px solid var(--pixel-border);
}

.meta-label {
  font-size: 12px;
  color: var(--text-dim);
  font-family: 'Noto Sans SC', monospace;
}

.meta-value {
  font-size: 12px;
  color: var(--accent2);
  font-weight: bold;
  font-family: 'Noto Sans SC', monospace;
}

.life-events h4 {
  font-family: 'Press Start 2P', monospace;
  font-size: 10px;
  color: var(--gold);
  margin-bottom: 12px;
  margin-top: 0;
}

.event-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.event-item {
  padding: 10px;
  background: var(--bg);
  border-left: 4px solid var(--accent);
  cursor: pointer;
  transition: all 0.1s;
}

.event-item.self {
  background: rgba(218, 165, 32, 0.1);
  border-left-color: var(--gold);
}

.event-item.environment {
  background: var(--bg);
  border-left-color: var(--accent2);
}

.event-item:hover {
  transform: translateX(4px);
  border-left-color: var(--gold);
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

.event-category-tag {
  font-size: 8px;
  padding: 2px 6px;
  border-radius: 2px;
  margin-right: 6px;
}
.event-category-tag.self { background: rgba(218, 165, 32, 0.3); color: var(--gold); }
.event-category-tag.environment { background: rgba(100, 100, 180, 0.3); color: var(--accent2); }

.event-desc {
  font-size: 11px;
  color: var(--text-dim);
  margin-top: 4px;
  font-family: 'Noto Sans SC', monospace;
}

.no-events {
  font-size: 12px;
  color: var(--text-dim);
  text-align: center;
  padding: 16px;
  font-family: 'Noto Sans SC', monospace;
}
</style>