<template>
  <div class="container">
    <div class="header">
      <h1>选择出生日期</h1>
    </div>

    <div class="progress-bar">
      <div class="progress-fill"></div>
    </div>

    <div class="step-indicator">
      <div class="step-dot completed"></div>
      <div class="step-dot active"></div>
      <div class="step-dot"></div>
      <div class="step-dot"></div>
    </div>

    <div class="card">
      <p class="section-title">穿越到哪一天</p>

      <div class="date-display">
        <div class="date-text">{{ selectedYear }}年 {{ selectedMonth }}月 {{ selectedDay }}日</div>
        <div class="date-label">{{ weekday }} · {{ lunarDate }}</div>
      </div>

      <div class="form-group">
        <label class="form-label">姓名</label>
        <input type="text" v-model="userName" class="pixel-input" placeholder="请输入您的姓名">
      </div>

      <div class="form-group">
        <label class="form-label">出生地</label>
        <input type="text" v-model="birthPlace" class="pixel-input" placeholder="请输入您的出生地">
      </div>

      <div class="selector-group">
        <div class="selector-item">
          <div class="selector-label">年份</div>
          <div class="selector">
            <div class="selector-highlight"></div>
            <div class="selector-scroll" ref="yearScroll">
              <div
                v-for="year in years"
                :key="year"
                class="selector-item-inner"
                :class="{ active: selectedYear === year }"
                @click="selectYear(year)"
              >{{ year }}</div>
            </div>
          </div>
        </div>

        <div class="selector-item">
          <div class="selector-label">月份</div>
          <div class="selector">
            <div class="selector-highlight"></div>
            <div class="selector-scroll" ref="monthScroll">
              <div
                v-for="month in months"
                :key="month"
                class="selector-item-inner"
                :class="{ active: selectedMonth === month }"
                @click="selectMonth(month)"
              >{{ month.toString().padStart(2, '0') }}</div>
            </div>
          </div>
        </div>

        <div class="selector-item">
          <div class="selector-label">日期</div>
          <div class="selector">
            <div class="selector-highlight"></div>
            <div class="selector-scroll" ref="dayScroll">
              <div
                v-for="day in days"
                :key="day"
                class="selector-item-inner"
                :class="{ active: selectedDay === day }"
                @click="selectDay(day)"
              >{{ day.toString().padStart(2, '0') }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="history-event">
        <div class="history-event-title">
          <span>#</span> 历史上的今天
        </div>
        <div class="history-event-content">
          {{ historyEvent }}
        </div>
      </div>

      <div class="action-buttons">
        <button class="btn btn-secondary" @click="$emit('prev-page')">上一步</button>
        <button class="btn btn-primary" @click="confirmBirth">确认出生</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { historyEvents } from '../data/historyEvents.js'

const props = defineProps({
  gameState: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['update:game-state', 'next-page', 'prev-page'])

const selectedYear = ref(1985)
const selectedMonth = ref(6)
const selectedDay = ref(15)
const userName = ref(props.gameState?.userName || '')
const birthPlace = ref(props.gameState?.birthPlace || '')

const years = Array.from({ length: 76 }, (_, i) => 1949 + i)
const months = Array.from({ length: 12 }, (_, i) => i + 1)

const days = computed(() => {
  const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  }
  const monthDays = [31, isLeapYear(selectedYear.value) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  return Array.from({ length: monthDays[selectedMonth.value - 1] }, (_, i) => i + 1)
})

const weekday = computed(() => {
  const date = new Date(selectedYear.value, selectedMonth.value - 1, selectedDay.value)
  const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  return weekdays[date.getDay()]
})

const lunarDate = ref('乙丑年五月廿八')
const historyEvent = ref('')

const yearScroll = ref(null)
const monthScroll = ref(null)
const dayScroll = ref(null)

const selectYear = (year) => {
  selectedYear.value = year
  if (selectedDay.value > days.value.length) {
    selectedDay.value = days.value.length
  }
  updateHistoryEvent()
}

const selectMonth = (month) => {
  selectedMonth.value = month
  if (selectedDay.value > days.value.length) {
    selectedDay.value = days.value.length
  }
  updateHistoryEvent()
}

const selectDay = (day) => {
  selectedDay.value = day
  updateHistoryEvent()
}

const updateHistoryEvent = () => {
  const yearEvents = historyEvents[selectedYear.value]
  if (yearEvents && yearEvents.length > 0) {
    // 随机选择该年的一个事件
    const event = yearEvents[Math.floor(Math.random() * yearEvents.length)]
    historyEvent.value = `${event.title}：${event.description}`
  } else {
    historyEvent.value = `${selectedYear.value}年虽然没有重大历史记录，但你出生的这一天，注定将写下属于你自己的故事。`
  }
}

const confirmBirth = () => {
  const birthDate = `${selectedYear.value}年${selectedMonth.value}月${selectedDay.value}日`
  emit('update:game-state', {
    userName: userName.value,
    birthDate: birthDate,
    birthPlace: birthPlace.value
  })
  emit('next-page')
}

onMounted(() => {
  // 初始化滚动位置
  scrollToSelected(yearScroll.value, selectedYear.value - 1949)
  scrollToSelected(monthScroll.value, selectedMonth.value - 1)
  scrollToSelected(dayScroll.value, selectedDay.value - 1)
  // 初始化历史事件
  updateHistoryEvent()
})

const scrollToSelected = (scrollElement, index) => {
  if (scrollElement) {
    const itemHeight = 40
    const scrollTop = index * itemHeight - (scrollElement.clientHeight / 2 - itemHeight / 2)
    scrollElement.scrollTop = scrollTop
  }
}

watch(selectedYear, () => {
  scrollToSelected(yearScroll.value, selectedYear.value - 1949)
})

watch(selectedMonth, () => {
  scrollToSelected(monthScroll.value, selectedMonth.value - 1)
})

watch(selectedDay, () => {
  scrollToSelected(dayScroll.value, selectedDay.value - 1)
})

// 监听 gameState 变化，当游戏重置时同步更新内部状态
watch(() => props.gameState, (newState) => {
  if (newState) {
    userName.value = newState.userName || ''
    birthPlace.value = newState.birthPlace || ''
  }
}, { immediate: true })
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 420px;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  animation: fadeIn 0.4s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.header h1 {
  font-family: 'Press Start 2P', monospace;
  font-size: 14px;
  color: var(--gold);
  text-shadow: 2px 2px 0 var(--primary);
}

.card {
  background: var(--card-bg);
  border: 4px solid var(--pixel-border);
  padding: 28px 24px;
  position: relative;
  box-shadow:
    inset -4px -4px 0px rgba(0, 0, 0, 0.3),
    inset 4px 4px 0px rgba(255, 255, 255, 0.1);
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 4px;
  background: repeating-linear-gradient(
    90deg,
    var(--accent),
    var(--accent) 8px,
    var(--gold) 8px,
    var(--gold) 16px
  );
}

.section-title {
  font-family: 'Press Start 2P', monospace;
  font-size: 8px;
  color: var(--accent2);
  letter-spacing: 2px;
  margin-bottom: 20px;
  text-align: center;
}

.date-display {
  background: var(--bg);
  padding: 24px;
  text-align: center;
  margin-bottom: 24px;
  border: 4px solid var(--pixel-border);
  box-shadow: inset 4px 4px 0 rgba(0,0,0,0.3);
}

.date-text {
  font-family: 'Press Start 2P', monospace;
  font-size: 14px;
  color: var(--gold);
  margin-bottom: 8px;
}

.date-label {
  font-size: 12px;
  color: var(--text-dim);
  font-family: 'Noto Sans SC', monospace;
}

.selector-group {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 24px;
}

.selector-item {
  text-align: center;
}

.selector-label {
  font-family: 'Press Start 2P', monospace;
  font-size: 8px;
  color: var(--accent2);
  margin-bottom: 8px;
  text-transform: uppercase;
}

.selector {
  position: relative;
  height: 120px;
  overflow: hidden;
  background: var(--bg);
  border: 4px solid var(--pixel-border);
  box-shadow: inset 4px 4px 0 rgba(0,0,0,0.3);
}

.selector-scroll {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  scroll-behavior: smooth;
}

.selector-scroll::-webkit-scrollbar {
  width: 8px;
}

.selector-scroll::-webkit-scrollbar-track {
  background: var(--bg);
}

.selector-scroll::-webkit-scrollbar-thumb {
  background: var(--pixel-border);
  border: 2px solid var(--bg);
}

.selector-item-inner {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.1s;
  font-family: 'Press Start 2P', monospace;
  font-size: 12px;
  color: var(--text);
}

.selector-item-inner:hover {
  background: rgba(232, 74, 95, 0.1);
}

.selector-item-inner.active {
  background: var(--accent);
  color: white;
  font-weight: bold;
  box-shadow: inset -2px -2px 0 rgba(0,0,0,0.3);
}

.selector-highlight {
  position: absolute;
  top: 50%;
  left: 4px;
  right: 4px;
  height: 40px;
  transform: translateY(-50%);
  background: rgba(232, 74, 95, 0.15);
  pointer-events: none;
  border: 2px solid var(--accent);
}

.history-event {
  background: var(--bg);
  padding: 16px;
  margin-bottom: 24px;
  border-left: 4px solid var(--accent);
}

.history-event-title {
  font-family: 'Press Start 2P', monospace;
  font-size: 8px;
  color: var(--accent);
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.history-event-content {
  font-size: 13px;
  color: var(--text);
  line-height: 1.6;
  font-family: 'Noto Sans SC', monospace;
}

.action-buttons {
  display: flex;
  gap: 12px;
}

.btn {
  flex: 1;
  padding: 14px 20px;
  font-family: 'Press Start 2P', monospace;
  font-size: 10px;
  cursor: pointer;
  transition: all 0.1s;
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

.progress-bar {
  width: 100%;
  height: 8px;
  background: var(--bg);
  border: 3px solid var(--pixel-border);
  margin-bottom: 16px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: repeating-linear-gradient(
    90deg,
    var(--accent),
    var(--accent) 8px,
    var(--gold) 8px,
    var(--gold) 16px
  );
  width: 25%;
  transition: width 0.3s ease;
}

.step-indicator {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 16px;
}

.step-dot {
  width: 12px;
  height: 12px;
  background: var(--bg);
  border: 3px solid var(--pixel-border);
  transition: all 0.3s ease;
}

.step-dot.active {
  background: var(--accent);
  border-color: var(--accent);
  box-shadow: 0 0 8px var(--accent);
}

.step-dot.completed {
  background: var(--green);
  border-color: var(--green);
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  font-family: 'Press Start 2P', monospace;
  font-size: 8px;
  color: var(--accent2);
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.pixel-input {
  font-family: 'Noto Sans SC', monospace;
  font-size: 14px;
  padding: 12px 16px;
  background: var(--bg);
  border: 4px solid var(--pixel-border);
  color: var(--text);
  width: 100%;
  outline: none;
  box-shadow: inset 4px 4px 0 rgba(0,0,0,0.3);
}

.pixel-input:focus {
  border-color: var(--accent);
  box-shadow:
    inset 4px 4px 0 rgba(0,0,0,0.3),
    0 0 0 2px rgba(232, 74, 95, 0.3);
}

.pixel-input::placeholder {
  color: var(--text-dim);
}
</style>