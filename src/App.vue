<template>
  <div class="app">
    <component 
      :is="currentPage" 
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
      return
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
:root {
  --primary: #8B4513;
  --secondary: #D4A574;
  --accent: #C41E3A;
  --bg: #F5F0E6;
  --text: #2C1810;
  --card-bg: rgba(255, 255, 255, 0.95);
  --shadow: 0 8px 32px rgba(139, 69, 19, 0.2);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", "Segoe UI", Arial, sans-serif;
  background: var(--bg);
  min-height: 100vh;
  color: var(--text);
}

.app {
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 16px;
}
</style>