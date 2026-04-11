<template>
  <div class="app">
    <component
      :is="currentPage"
      :key="currentPageIndex"
      @next-page="nextPage"
      @prev-page="prevPage"
      @set-page="setPage"
      @update:game-state="handleDataFromChild"
      :game-state="gameState"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import StartPage from './components/StartPage.vue'
import BirthPage from './components/BirthPage.vue'
import CharacterPage from './components/CharacterPage.vue'
import LifePage from './components/LifePage.vue'
import TimelinePage from './components/TimelinePage.vue'
import EndPage from './components/EndPage.vue'

const pages = [
  { name: 'StartPage', component: StartPage },
  { name: 'BirthPage', component: BirthPage },
  { name: 'CharacterPage', component: CharacterPage },
  { name: 'LifePage', component: LifePage },
  { name: 'TimelinePage', component: TimelinePage },
  { name: 'EndPage', component: EndPage }
]

// 游戏状态
const gameState = ref({
  userName: '',
  birthDate: '',
  birthPlace: '',
  character: null,
  currentDate: '',
  age: 0,
  events: [],
  stats: {
    health: 100,
    wealth: 0,
    education: ''
  },
  isGameStarted: false,
  realTimeDays: 0
})

const currentPageIndex = ref(0)
const currentPage = ref(pages[0].component)

// 从localStorage加载游戏状态
const loadGameState = () => {
  const savedState = localStorage.getItem('liveAnotherLife')
  if (savedState) {
    const parsedState = JSON.parse(savedState)
    // 检查是否是已结束的游戏（需要清除）
    if (parsedState.isGameEnded) {
      // 清除已结束的游戏数据
      localStorage.removeItem('liveAnotherLife')
      return // gameState 保持默认值，不跳转
    }
    gameState.value = parsedState
    // 如果游戏已经开始，直接跳转到主页面
    if (gameState.value.isGameStarted) {
      setPage('LifePage')
    }
  }
}

// 保存游戏状态到localStorage
const saveGameState = () => {
  localStorage.setItem('liveAnotherLife', JSON.stringify(gameState.value))
}

// 清除游戏状态（人生结束后调用）
const clearGameState = () => {
  // 直接清除本地存储
  localStorage.removeItem('liveAnotherLife')
  
  // 重置到初始状态
  gameState.value = {
    userName: '',
    birthDate: '',
    birthPlace: '',
    character: null,
    currentDate: '',
    age: 0,
    events: [],
    stats: {
      health: 100,
      wealth: 0,
      education: ''
    },
    isGameStarted: false,
    isGameEnded: false,
    realTimeDays: 0
  }
  
  // 跳转到开始页面
  setPage('StartPage')
}

const nextPage = () => {
  if (currentPageIndex.value < pages.length - 1) {
    currentPageIndex.value++
    currentPage.value = pages[currentPageIndex.value].component
  }
}

const prevPage = () => {
  if (currentPageIndex.value > 0) {
    currentPageIndex.value--
    currentPage.value = pages[currentPageIndex.value].component
  }
}

const setPage = (pageName) => {
  const index = pages.findIndex(page => page.name === pageName)
  if (index !== -1) {
    currentPageIndex.value = index
    currentPage.value = pages[index].component
  }
}

// 处理页面间数据传递
const handleDataFromChild = (data) => {
  if (data.userName) gameState.value.userName = data.userName
  if (data.birthDate) gameState.value.birthDate = data.birthDate
  if (data.birthPlace) gameState.value.birthPlace = data.birthPlace
  if (data.character) gameState.value.character = data.character
  if (data.isGameStarted !== undefined) gameState.value.isGameStarted = data.isGameStarted
  if (data.currentDate) gameState.value.currentDate = data.currentDate
  if (data.age !== undefined) gameState.value.age = data.age
  if (data.stats) gameState.value.stats = data.stats
  if (data.events) gameState.value.events = data.events
  if (data.realTimeDays !== undefined) gameState.value.realTimeDays = data.realTimeDays
  if (data.clearGame) {
    // 处理游戏结束清除
    clearGameState()
    return
  }
  saveGameState()
}

onMounted(() => {
  loadGameState()
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Noto+Sans+SC:wght@400;700&display=swap');

:root {
  /* Pixel Art Color Palette */
  --primary: #5D4E37;
  --secondary: #C4A574;
  --accent: #E84A5F;
  --accent2: #2EC4B6;
  --bg: #1A1A2E;
  --bg2: #16213E;
  --card-bg: #0F3460;
  --text: #EAEAEA;
  --text-dim: #8B8B8B;
  --gold: #FFD93D;
  --green: #6BCB77;
  --health: #FF6B6B;
  --pixel-border: #2A2A4A;
  --shadow: 0 0 0 4px var(--primary);
  --glow: 0 0 20px rgba(232, 74, 95, 0.5);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Noto Sans SC', 'Press Start 2P', monospace;
  background: var(--bg);
  min-height: 100vh;
  color: var(--text);
  image-rendering: pixelated;
  -webkit-font-smoothing: none;
}

/* Scanline effect */
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.15),
    rgba(0, 0, 0, 0.15) 1px,
    transparent 1px,
    transparent 2px
  );
  pointer-events: none;
  z-index: 9999;
}

.app {
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 16px;
  position: relative;
}

/* Pixel button base style */
.pixel-btn {
  font-family: 'Press Start 2P', monospace;
  font-size: 10px;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
  position: relative;
  transition: all 0.1s;
  text-transform: uppercase;
}

.pixel-btn-primary {
  background: var(--accent);
  color: white;
  box-shadow:
    inset -4px -4px 0px rgba(0, 0, 0, 0.3),
    inset 4px 4px 0px rgba(255, 255, 255, 0.2),
    0 0 0 4px var(--primary);
}

.pixel-btn-primary:hover {
  transform: translate(-2px, -2px);
  box-shadow:
    inset -4px -4px 0px rgba(0, 0, 0, 0.3),
    inset 4px 4px 0px rgba(255, 255, 255, 0.2),
    0 0 0 4px var(--primary),
    0 4px 0 4px var(--primary);
}

.pixel-btn-primary:active {
  transform: translate(2px, 2px);
  box-shadow:
    inset 4px 4px 0px rgba(0, 0, 0, 0.3),
    inset -4px -4px 0px rgba(255, 255, 255, 0.2),
    0 0 0 4px var(--primary);
}

.pixel-btn-secondary {
  background: var(--card-bg);
  color: var(--text);
  box-shadow:
    inset -4px -4px 0px rgba(0, 0, 0, 0.3),
    inset 4px 4px 0px rgba(255, 255, 255, 0.1),
    0 0 0 4px var(--pixel-border);
}

.pixel-btn-secondary:hover {
  background: var(--bg2);
  transform: translate(-2px, -2px);
  box-shadow:
    inset -4px -4px 0px rgba(0, 0, 0, 0.3),
    inset 4px 4px 0px rgba(255, 255, 255, 0.1),
    0 0 0 4px var(--pixel-border),
    0 4px 0 4px var(--pixel-border);
}

.pixel-btn-secondary:active {
  transform: translate(2px, 2px);
  box-shadow:
    inset 4px 4px 0px rgba(0, 0, 0, 0.3),
    inset -4px -4px 0px rgba(255, 255, 255, 0.1),
    0 0 0 4px var(--pixel-border);
}

/* Pixel card base style */
.pixel-card {
  background: var(--card-bg);
  border: 4px solid var(--pixel-border);
  position: relative;
  image-rendering: pixelated;
}

.pixel-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: repeating-linear-gradient(
    90deg,
    var(--accent),
    var(--accent) 8px,
    var(--gold) 8px,
    var(--gold) 16px
  );
}

/* Pixel input style */
.pixel-input {
  font-family: 'Noto Sans SC', monospace;
  font-size: 14px;
  padding: 12px 16px;
  background: var(--bg);
  border: 4px solid var(--pixel-border);
  color: var(--text);
  width: 100%;
  outline: none;
}

.pixel-input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 2px rgba(232, 74, 95, 0.3);
}

.pixel-input::placeholder {
  color: var(--text-dim);
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--bg);
}

::-webkit-scrollbar-thumb {
  background: var(--pixel-border);
  border: 2px solid var(--bg);
}
</style>