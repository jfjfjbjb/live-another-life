<template>
  <div class="app">
    <component :is="currentPage" @next-page="nextPage" @prev-page="prevPage" @set-page="setPage" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
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

const currentPageIndex = ref(0)
const currentPage = ref(pages[0].component)

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