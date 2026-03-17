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
          <span>📜</span> 历史上的今天
        </div>
        <div class="history-event-content">
          {{ historyEvent }}
        </div>
      </div>

      <div class="action-buttons">
        <button class="btn btn-secondary" @click="$emit('prev-page')">上一步</button>
        <button class="btn btn-primary" @click="$emit('next-page')">确认出生</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'

const selectedYear = ref(1985)
const selectedMonth = ref(6)
const selectedDay = ref(15)

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
const historyEvent = ref('1985年6月15日，上海市与美国费城市结为友好城市。费城是美国的第五大城市，这次结好仪式在上海展览中心举行，两市在经济、文化、科技等领域展开交流合作。')

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
  // 这里可以根据选择的日期加载对应的历史事件
  // 目前使用模拟数据
  historyEvent.value = `${selectedYear.value}年${selectedMonth.value}月${selectedDay.value}日，这一天发生了很多重要的历史事件...`
}

onMounted(() => {
  // 初始化滚动位置
  scrollToSelected(yearScroll.value, selectedYear.value - 1949)
  scrollToSelected(monthScroll.value, selectedMonth.value - 1)
  scrollToSelected(dayScroll.value, selectedDay.value - 1)
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
  font-size: 26px;
  color: var(--primary);
  font-weight: 600;
}

.card {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 28px 24px;
  box-shadow: var(--shadow);
  position: relative;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
}

.section-title {
  font-size: 13px;
  color: var(--secondary);
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 20px;
  text-align: center;
}

.date-display {
  background: linear-gradient(135deg, #FAF6F0, #F0E6D8);
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  margin-bottom: 24px;
  border: 2px solid var(--secondary);
  position: relative;
}

.date-display::before,
.date-display::after {
  content: '❖';
  position: absolute;
  color: var(--secondary);
  font-size: 12px;
  opacity: 0.5;
}

.date-display::before { top: 8px; left: 12px; }
.date-display::after { bottom: 8px; right: 12px; }

.date-text {
  font-size: 32px;
  color: var(--primary);
  font-weight: 700;
  margin-bottom: 4px;
}

.date-label {
  font-size: 12px;
  color: var(--secondary);
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
  font-size: 11px;
  color: var(--secondary);
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.selector {
  position: relative;
  height: 120px;
  overflow: hidden;
  border-radius: 12px;
  background: var(--bg);
  border: 1px solid rgba(139, 69, 19, 0.2);
}

.selector-scroll {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  scroll-behavior: smooth;
}

.selector-scroll::-webkit-scrollbar {
  display: none;
}

.selector-item-inner {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 16px;
  color: var(--text);
}

.selector-item-inner:hover {
  background: rgba(139, 69, 19, 0.05);
}

.selector-item-inner.active {
  background: var(--primary);
  color: white;
  font-weight: bold;
}

.selector-highlight {
  position: absolute;
  top: 50%;
  left: 4px;
  right: 4px;
  height: 40px;
  transform: translateY(-50%);
  background: rgba(139, 69, 19, 0.08);
  border-radius: 8px;
  pointer-events: none;
}

.history-event {
  background: linear-gradient(135deg, #FFF9F0, #FFF5E6);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
  border-left: 4px solid var(--accent);
}

.history-event-title {
  font-size: 12px;
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
}

.action-buttons {
  display: flex;
  gap: 12px;
}

.btn {
  flex: 1;
  padding: 14px 24px;
  font-size: 15px;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
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
  background: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
}

.btn-secondary:hover {
  background: var(--primary);
  color: white;
}

.progress-bar {
  width: 100%;
  height: 4px;
  background: rgba(139, 69, 19, 0.1);
  border-radius: 2px;
  margin-bottom: 16px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  width: 25%;
  border-radius: 2px;
  transition: width 0.3s ease;
}

.step-indicator {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 16px;
}

.step-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(139, 69, 19, 0.2);
  transition: all 0.3s ease;
}

.step-dot.active {
  background: var(--accent);
  transform: scale(1.2);
}

.step-dot.completed {
  background: var(--primary);
}
</style>