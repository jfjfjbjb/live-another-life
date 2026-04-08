# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"重活一世" (Live Another Life) is a Vue 3 H5 life simulation game with three phases:
1. **初始化** — 用户填写姓名、选择出生日期（1949年至今），随机分配角色（职业、性格、天赋、家庭背景）
2. **人生模拟** — 定时器每10秒推进1年，记录每日天气/心情、人生大事记（含历史大事件），充满随机性，支持手动跳过
3. **结束总结** — 死亡后展示一生回顾，支持重新开始或分享

## Tech Stack

- Vue 3 (Composition API with `<script setup>`)
- Vite 6 for build tooling
- Pure frontend, no backend - state persists via localStorage

## Common Commands

```bash
npm install     # Install dependencies
npm run dev     # Start dev server
npm run build   # Production build
npm run preview # Preview production build
```

## Architecture

### Page Flow
App.vue manages a fixed 6-page sequence via `currentPageIndex`:
1. **StartPage** → 2. **BirthPage** → 3. **CharacterPage** → 4. **LifePage** → 5. **TimelinePage** → 6. **EndPage**

### Game State (App.vue)
Centralized `gameState` ref contains: userName, birthDate, birthPlace, character, currentDate, age, events[], stats{health, wealth, education}, isGameStarted, realTimeDays. State auto-saves to localStorage on every update via `saveGameState()`.

### Data Files (src/data/)
- **characters.js** - `generateCharacter()` produces random profession, personality, familyBackground, talents, and attributes
- **bigEvents.js** - universal events + age-segmented events (byAge: 7/13/16/19/23/25/30/40/50/60)
- **historyEvents.js** - keyed by year (1949+), real historical events that can trigger
- **events.js** - age-specific event content (baby, kindergarten, elementary, middle, high, college, earlyCareer, midCareer, lateCareer, preRetirement, retirement, oldAge)
- **locations.js** - provinces/cities/districts with population and description
- **weather.js** - weather types with icons and locationWeatherMap for region-based generation
- **moods.js** - emotional states with icons and attributes

### Key Components
- **LifePage.vue** - Core game loop with 10-second timer advancing 1 year per tick. `nextYear()` handles health decay, wealth changes, education progression, big event chance roll, and death check. Supports skip dialog (1/5/10/20 years) and direct end.
- **TimelinePage.vue** - Full event history viewer

### Design System
CSS variables in App.vue root define the visual theme:
- `--primary: #8B4513` (brown), `--secondary: #D4A574`, `--accent: #C41E3A` (red), `--bg: #F5F0E6` (cream), `--text: #2C1810`
- Max width: 480px centered layout, card-based UI with warm earth tones

## Notes

- Game timer in LifePage auto-advances 1 year every 10 seconds
- Health decays based on age brackets: 0.5/year (young) → 3/year (45-59) → 8/year (60-69) → 15/year (70+)
- Big events trigger chance rolls weighted by life stage (higher during key ages 19-30)
- Historical events from historyEvents.js have 20% trigger chance if player is at that birth year
- When game ends (health=0 or age=120), `clearGameState()` resets and returns to StartPage
