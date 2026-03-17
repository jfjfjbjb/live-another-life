<template>
  <div class="container">
    <div class="status-bar">
      <div class="date-info">
        <div class="date-main">{{ currentDate }}</div>
        <div class="date-sub">{{ weekday }} · {{ lunarDate }}</div>
      </div>
      <div class="age-badge">{{ age }}岁</div>
    </div>

    <div class="location-bar">
      <span class="location-icon">📍</span>
      <span>{{ location }}</span>
    </div>

    <div class="main-card">
      <div class="weather-effect" :class="weatherType">
        <div 
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
        <span class="big-event-icon">⚠️</span>
        <div class="big-event-text">
          <div class="big-event-title">大事件：{{ bigEvent.title }}</div>
          <div class="big-event-desc">{{ bigEvent.description }}</div>
        </div>
      </div>

      <div class="event-title">今日记事</div>
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
          <div class="stat-label">健康</div>
          <div class="stat-value">{{ stats.health }}</div>
          <div class="health-bar">
            <div class="health-fill" :style="{ width: `${stats.health}%` }"></div>
          </div>
        </div>
        <div class="stat-item">
          <div class="stat-label">财富</div>
          <div class="stat-value">¥{{ stats.wealth.toLocaleString() }}</div>
        </div>
        <div class="stat-item">
          <div class="stat-label">学历</div>
          <div class="stat-value">{{ stats.education }}</div>
        </div>
      </div>
    </div>

    <div class="action-bar">
      <button class="btn btn-secondary" @click="showSkipModal = true">
        <span class="btn-icon">⏭</span>
        跳过
      </button>
      <button class="btn btn-primary" @click="nextDay">
        继续明天
        <span class="btn-icon">→</span>
      </button>
    </div>

    <div class="bottom-nav">
      <div class="nav-item" @click="$emit('set-page', 'LifePage')">
        <span class="nav-icon">🏠</span>
        <span class="nav-label">主页</span>
      </div>
      <div class="nav-item" @click="$emit('set-page', 'TimelinePage')">
        <span class="nav-icon">📝</span>
        <span class="nav-label">大事记</span>
      </div>
      <div class="nav-item">
        <span class="nav-icon">👤</span>
        <span class="nav-label">角色</span>
      </div>
      <div class="nav-item active">
        <span class="nav-icon">⚙️</span>
        <span class="nav-label">设置</span>
      </div>
    </div>

    <!-- 跳过模态框 -->
    <div v-if="showSkipModal" class="modal-overlay" @click="showSkipModal = false">
      <div class="modal-content" @click.stop>
        <h3>选择跳过时间</h3>
        <div class="skip-options">
          <div class="skip-group">
            <h4>跳过天数</h4>
            <div class="skip-buttons">
              <button class="skip-btn" @click="skipDays(1)">1天</button>
              <button class="skip-btn" @click="skipDays(7)">7天</button>
              <button class="skip-btn" @click="skipDays(30)">30天</button>
              <button class="skip-btn" @click="skipDays(365)">365天</button>
            </div>
          </div>
          <div class="skip-group">
            <h4>跳过年份</h4>
            <div class="skip-buttons">
              <button class="skip-btn" @click="skipYears(1)">1年</button>
              <button class="skip-btn" @click="skipYears(5)">5年</button>
              <button class="skip-btn" @click="skipYears(10)">10年</button>
            </div>
          </div>
        </div>
        <button class="cancel-btn" @click="showSkipModal = false">取消</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const currentDate = ref('1998年 3月 12日')
const weekday = ref('星期四')
const lunarDate = ref('戊寅年二月十五')
const age = ref(13)
const location = ref('江苏省 · 苏州市 · 平江区')
const weather = ref('小雨')
const weatherType = ref('rain')
const weatherIcon = ref('🌧️')
const mood = ref('难过')
const moodIcon = ref('😢')
const bigEvent = ref({
  title: '98年特大洪灾',
  description: '长江、松花江、嫩江全流域超历史最高水位'
})
const eventContent = ref('1998年的这场特大洪灾让整个中国都笼罩在阴霾之中。你所在的苏州虽然不是重灾区，但电视上每天都在播放抗洪救灾的新闻。学校组织你们为灾区捐款，你把攒了两个月的零花钱全部捐了出去。\n\n放学回家的路上，你看到很多外地来的灾民临时安置在火车站，他们的眼神让你感到心里堵得慌。妈妈说，今年很多庄稼都淹了，来年吃饭都成问题。你在心里暗暗发誓，要好好读书，将来做大事帮助更多的人。')
const eventTags = ref(['上学', '捐款', '感悟'])
const stats = ref({
  health: 85,
  wealth: 2450,
  education: '初一'
})
const showSkipModal = ref(false)

const nextDay = () => {
  // 这里应该实现日期推进逻辑
  console.log('Next day')
}

const skipDays = (days) => {
  console.log(`Skip ${days} days`)
  showSkipModal.value = false
}

const skipYears = (years) => {
  console.log(`Skip ${years} years`)
  showSkipModal.value = false
}

onMounted(() => {
  // 初始化数据
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

.status-bar {
  background: var(--card-bg);
  border-radius: 16px;
  padding: 16px;
  box-shadow: var(--shadow);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.date-info {
  display: flex;
  flex-direction: column;
}

.date-main {
  font-size: 20px;
  color: var(--primary);
  font-weight: 700;
}

.date-sub {
  font-size: 11px;
  color: var(--secondary);
}

.age-badge {
  background: linear-gradient(135deg, var(--primary), #A0522D);
  color: white;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  transition: transform 0.2s ease;
}

.age-badge:hover {
  transform: scale(1.05);
}

.location-bar {
  background: linear-gradient(135deg, #FFF9F0, #FFF5E6);
  border-radius: 12px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--text);
  border: 1px solid rgba(139, 69, 19, 0.1);
}

.location-icon {
  font-size: 14px;
}

.main-card {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 24px 20px;
  box-shadow: var(--shadow);
  position: relative;
  overflow: hidden;
}

.main-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--accent), #E6A23C, var(--accent));
}

.weather-mood {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px dashed rgba(139, 69, 19, 0.15);
}

.weather {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: var(--text);
}

.weather-icon {
  font-size: 24px;
  animation: weatherFloat 3s ease-in-out infinite;
}

@keyframes weatherFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}

.weather.rain .weather-icon {
  animation: rainDrop 1s ease-in-out infinite;
}

@keyframes rainDrop {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(2px) rotate(5deg); }
}

.mood {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: var(--text);
}

.mood-icon {
  font-size: 20px;
  animation: moodBounce 2s ease-in-out infinite;
}

@keyframes moodBounce {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.event-title {
  font-size: 12px;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 12px;
}

.event-content {
  font-size: 15px;
  line-height: 1.8;
  color: var(--text);
  min-height: 120px;
}

.event-tag {
  display: inline-block;
  background: linear-gradient(135deg, var(--secondary), #E8C9A8);
  color: var(--primary);
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 11px;
  margin-top: 16px;
  margin-right: 8px;
  transition: transform 0.2s ease;
}

.event-tag:hover {
  transform: scale(1.05);
}

.stats-bar {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px dashed rgba(139, 69, 19, 0.15);
}

.stat-item {
  text-align: center;
  padding: 10px;
  background: var(--bg);
  border-radius: 12px;
  transition: transform 0.2s ease;
}

.stat-item:hover {
  transform: translateY(-2px);
}

.stat-label {
  font-size: 10px;
  color: var(--secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 4px;
}

.stat-value {
  font-size: 16px;
  color: var(--primary);
  font-weight: 600;
}

.health-bar {
  width: 100%;
  height: 6px;
  background: rgba(139, 69, 19, 0.1);
  border-radius: 3px;
  margin-top: 6px;
  overflow: hidden;
}

.health-fill {
  height: 100%;
  background: linear-gradient(90deg, #4CAF50, #8BC34A);
  border-radius: 3px;
  width: 85%;
  transition: width 0.5s ease;
}

.action-bar {
  display: flex;
  gap: 10px;
}

.btn {
  flex: 1;
  padding: 14px 16px;
  font-size: 14px;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.btn:active {
  transform: scale(0.96);
}

.btn-primary {
  background: linear-gradient(135deg, var(--accent), #DC143C);
  color: white;
  border: none;
  box-shadow: 0 4px 15px rgba(196, 30, 58, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(196, 30, 58, 0.4);
}

.btn-secondary {
  background: var(--card-bg);
  color: var(--primary);
  border: 2px solid var(--primary);
}

.btn-secondary:hover {
  background: var(--primary);
  color: white;
}

.btn-icon {
  font-size: 16px;
}

.bottom-nav {
  display: flex;
  justify-content: space-around;
  background: var(--card-bg);
  border-radius: 16px;
  padding: 12px;
  box-shadow: var(--shadow);
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 12px;
  transition: all 0.2s;
}

.nav-item:hover {
  background: rgba(139, 69, 19, 0.05);
}

.nav-item.active {
  background: rgba(139, 69, 19, 0.1);
}

.nav-icon {
  font-size: 20px;
  transition: transform 0.2s ease;
}

.nav-item:active .nav-icon {
  transform: scale(0.9);
}

.nav-label {
  font-size: 10px;
  color: var(--text);
  opacity: 0.7;
}

.nav-item.active .nav-label {
  color: var(--accent);
  font-weight: 600;
  opacity: 1;
}

.big-event-banner {
  background: linear-gradient(135deg, #FFF3E0, #FFE0B2);
  border-radius: 12px;
  padding: 12px 16px;
  margin-bottom: 16px;
  border-left: 4px solid var(--accent);
  display: flex;
  align-items: center;
  gap: 10px;
  animation: eventPulse 2s ease-in-out infinite;
}

@keyframes eventPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(196, 30, 58, 0); }
  50% { box-shadow: 0 0 12px 2px rgba(196, 30, 58, 0.15); }
}

.big-event-icon {
  font-size: 24px;
  animation: eventShake 0.5s ease-in-out;
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
  font-size: 12px;
  color: var(--accent);
  font-weight: 700;
}

.big-event-desc {
  font-size: 11px;
  color: var(--text);
  opacity: 0.8;
}

.weather-effect {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
  border-radius: 20px;
}

.rain-drop {
  position: absolute;
  width: 2px;
  height: 10px;
  background: linear-gradient(transparent, rgba(100, 149, 237, 0.4));
  animation: fall 0.8s linear infinite;
}

@keyframes fall {
  0% { transform: translateY(-10px); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(100px); opacity: 0; }
}

/* 模态框样式 */
.modal-overlay {
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
}

.modal-content {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 24px;
  width: 80%;
  max-width: 320px;
  box-shadow: var(--shadow);
  animation: fadeIn 0.3s ease-out;
}

.modal-content h3 {
  font-size: 18px;
  color: var(--primary);
  text-align: center;
  margin-bottom: 20px;
}

.skip-options {
  margin-bottom: 20px;
}

.skip-group {
  margin-bottom: 16px;
}

.skip-group h4 {
  font-size: 14px;
  color: var(--secondary);
  margin-bottom: 8px;
}

.skip-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skip-btn {
  flex: 1;
  min-width: 80px;
  padding: 10px 16px;
  background: var(--bg);
  border: 1px solid var(--secondary);
  border-radius: 12px;
  font-size: 14px;
  color: var(--text);
  cursor: pointer;
  transition: all 0.2s ease;
}

.skip-btn:hover {
  background: var(--secondary);
  color: white;
}

.cancel-btn {
  width: 100%;
  padding: 12px;
  background: transparent;
  border: 2px solid var(--primary);
  border-radius: 25px;
  font-size: 14px;
  color: var(--primary);
  cursor: pointer;
  transition: all 0.3s ease;
}

.cancel-btn:hover {
  background: var(--primary);
  color: white;
}
</style>