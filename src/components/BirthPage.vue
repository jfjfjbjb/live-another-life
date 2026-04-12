<template>
  <div class="container">
    <div class="header">
      <h1>选择出生日期</h1>
    </div>

    <div class="progress-bar">
      <div class="progress-fill"></div>
    </div>

    <div class="card">
      <div class="year-section">
        <div class="year-display">
          <div class="year-icon">📅</div>
          <div class="year-text">{{ selectedYear }}年</div>
        </div>

        <div class="year-selector">
          <div class="selector-label">上下滑动选择年份</div>
          <div class="selector">
            <div class="selector-highlight"></div>
            <div class="selector-scroll" ref="yearScrollInner">
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
      </div>

      <div class="form-section">
        <div class="form-group">
          <label class="form-label">姓名</label>
          <input type="text" v-model="userName" class="pixel-input" placeholder="请输入您的姓名">
        </div>

        <div class="form-group">
          <label class="form-label">性别</label>
          <div class="gender-selector">
            <div
              class="gender-option"
              :class="{ active: selectedGender === 'male' }"
              @click="selectedGender = 'male'"
            >
              <span class="gender-icon">♂</span>
              <span>男</span>
            </div>
            <div
              class="gender-option"
              :class="{ active: selectedGender === 'female' }"
              @click="selectedGender = 'female'"
            >
              <span class="gender-icon">♀</span>
              <span>女</span>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">出生地</label>
          <input type="text" v-model="birthPlace" class="pixel-input" placeholder="请输入您的出生地">
        </div>
      </div>

      <div class="history-event">
        <div class="history-event-title">
          <span>#</span> 历史上这一年
        </div>
        <div class="history-event-content">
          {{ historyEvent }}
        </div>
      </div>

      <div class="action-buttons">
        <button class="btn btn-secondary" @click="$emit('prev-page')">上一步</button>
        <button class="btn btn-primary" @click="confirmBirth">下一步</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { historyEvents } from '../data/historyEvents.js'

const props = defineProps({
  gameState: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['update:game-state', 'next-page', 'prev-page'])

const selectedYear = ref(1949)
const userName = ref(props.gameState?.userName || '')
const birthPlace = ref(props.gameState?.birthPlace || '')
const selectedGender = ref(props.gameState?.gender || 'male')

const years = Array.from({ length: 76 }, (_, i) => 1949 + i)

const historyEvent = ref('')

const yearScrollInner = ref(null)

const selectYear = (year) => {
  selectedYear.value = year
  updateHistoryEvent()
}

const updateHistoryEvent = () => {
  const yearEvents = historyEvents[selectedYear.value]
  if (yearEvents && yearEvents.length > 0) {
    const event = yearEvents[Math.floor(Math.random() * yearEvents.length)]
    historyEvent.value = `${event.title}：${event.description}`
  } else {
    historyEvent.value = `${selectedYear.value}年虽然没有重大历史记录，但你出生的这一年，注定将写下属于你自己的故事。`
  }
}

const confirmBirth = () => {
  const birthDate = `${selectedYear.value}年`
  emit('update:game-state', {
    userName: userName.value,
    birthDate: birthDate,
    birthPlace: birthPlace.value,
    gender: selectedGender.value
  })
  emit('next-page')
}

onMounted(() => {
  scrollToSelected(yearScrollInner.value, selectedYear.value - 1949)
  updateHistoryEvent()
})

const scrollToSelected = (scrollElement, index) => {
  if (scrollElement) {
    const itemHeight = 40
    const containerHeight = scrollElement.clientHeight
    const maxScroll = scrollElement.scrollHeight - containerHeight
    const targetScrollTop = index * itemHeight - (containerHeight / 2 - itemHeight / 2)
    scrollElement.scrollTop = Math.max(0, Math.min(maxScroll, targetScrollTop))
  }
}

watch(selectedYear, (newYear) => {
  scrollToSelected(yearScrollInner.value, newYear - 1949)
})

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
  margin-bottom: 16px;
}

.header h1 {
  font-family: 'Press Start 2P', monospace;
  font-size: 14px;
  color: var(--gold);
  text-shadow: 2px 2px 0 var(--primary);
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
  width: 33%;
  transition: width 0.3s ease;
}

.card {
  background: var(--card-bg);
  border: 4px solid var(--pixel-border);
  padding: 20px;
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

.year-section {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
  padding: 16px;
  background: var(--bg);
  border: 4px solid var(--pixel-border);
  box-shadow: inset 4px 4px 0 rgba(0,0,0,0.3);
}

.year-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  min-width: 80px;
}

.year-icon {
  font-size: 28px;
  line-height: 1;
}

.year-text {
  font-family: 'Press Start 2P', monospace;
  font-size: 14px;
  color: var(--gold);
}

.year-selector {
  flex: 1;
}

.selector-label {
  font-family: 'Press Start 2P', monospace;
  font-size: 7px;
  color: var(--accent2);
  margin-bottom: 8px;
  text-align: center;
}

.selector {
  position: relative;
  height: 100px;
  overflow: hidden;
  background: var(--card-bg);
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
  width: 6px;
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
  font-size: 11px;
  color: var(--text);
}

.selector-item-inner:hover {
  background: rgba(232, 74, 95, 0.1);
  color: var(--accent);
}

.selector-item-inner.active {
  background: var(--accent);
  color: white;
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
  z-index: 0;
}

.form-section {
  margin-bottom: 16px;
}

.form-group {
  margin-bottom: 16px;
}

.form-label {
  display: block;
  font-family: 'Press Start 2P', monospace;
  font-size: 7px;
  color: var(--accent2);
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.pixel-input {
  font-family: 'Noto Sans SC', sans-serif;
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

.gender-selector {
  display: flex;
  gap: 12px;
}

.gender-option {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px;
  background: var(--bg);
  border: 4px solid var(--pixel-border);
  cursor: pointer;
  transition: all 0.1s;
  font-family: 'Noto Sans SC', sans-serif;
  font-size: 14px;
  color: var(--text);
  box-shadow: inset 4px 4px 0 rgba(0,0,0,0.3);
}

.gender-option:hover {
  border-color: var(--accent);
}

.gender-option.active {
  background: var(--accent);
  color: white;
  border-color: var(--accent);
  box-shadow: inset -4px -4px 0 rgba(0,0,0,0.3);
}

.gender-icon {
  font-size: 18px;
}

.history-event {
  background: var(--bg);
  padding: 14px;
  margin-bottom: 16px;
  border-left: 4px solid var(--accent);
}

.history-event-title {
  font-family: 'Press Start 2P', monospace;
  font-size: 7px;
  color: var(--accent);
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.history-event-content {
  font-size: 12px;
  color: var(--text);
  line-height: 1.5;
  font-family: 'Noto Sans SC', sans-serif;
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
</style>