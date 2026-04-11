<template>
  <div class="container">
    <div class="header">
      <h1>命运ROLL点</h1>
    </div>

    <div class="progress-bar">
      <div class="progress-fill" style="width: 50%"></div>
    </div>

    <div class="character-card">
      <div class="character-header">
        <div class="avatar">{{ character.avatar }}</div>
        <div class="character-info">
          <h2>{{ character.name }}</h2>
          <span class="role">{{ character.role }}</span>
        </div>
      </div>

      <div class="birth-info">
        <span class="birth-icon">+</span>
        <div class="birth-details">
          <div class="birth-date">{{ character.birthDate }}</div>
          <div class="birth-place">{{ character.birthPlace }}</div>
        </div>
      </div>

      <div class="age-info">
        <div class="age-label">当前年龄</div>
        <div class="age-value">{{ character.age }}岁</div>
      </div>

      <div class="attribute-group">
        <div class="attribute-label"># 性格</div>
        <div class="attribute-value">{{ character.personality }}</div>
      </div>

      <div class="attribute-group">
        <div class="attribute-label"># 家庭背景</div>
        <div class="attribute-value">{{ character.familyBackground }}</div>
      </div>

      <div class="attribute-group">
        <div class="attribute-label">* 天赋特长</div>
        <div class="talent-grid">
          <div class="talent-item" v-for="(talent, index) in character.talents" :key="index">
            {{ talent }}
          </div>
        </div>
      </div>

      <button class="reroll-btn" @click="rerollCharacter">! 重新ROLL一个身份</button>
    </div>

    <div class="action-buttons">
      <button class="btn btn-secondary" @click="$emit('prev-page')">上一步</button>
      <button class="btn btn-primary" @click="startLife">开始人生</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { generateCharacter } from '../data/characters.js'
import { generateLocation } from '../data/locations.js'

const props = defineProps({
  gameState: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['update:game-state', 'next-page', 'prev-page'])

// 角色显示用的映射
const roleDisplayNames = {
  farmer: '农民', worker: '工人', student: '学生', teacher: '教师',
  doctor: '医生', nurse: '护士', engineer: '工程师', scientist: '科学家',
  soldier: '军人', police: '警察', civilServant: '公务员', businessman: '商人',
  driver: '司机', chef: '厨师', waiter: '服务员', individual: '个体户',
  artist: '艺术家', writer: '作家', journalist: '记者', host: '主持人',
  lawyer: '律师', accountant: '会计', courier: '快递员', electrician: '电工',
  plumber: '水管工', carpenter: '木匠', barber: '理发师', photographer: '摄影师',
  fitnessCoach: '健身教练', realEstate: '房产中介', insurance: '保险员', it: 'IT工程师',
  designer: '设计师', manager: '企业经理', shopOwner: '店主', fisherman: '渔民',
  herdsman: '牧民', bricklayer: '泥瓦匠', tailor: '裁缝', guard: '保安',
  cleaner: '清洁工', nanny: '保姆', vendor: '小商贩', veterinarian: '兽医',
  florist: '花店老板', baker: '烘焙师', mechanic: '修理工', pilot: '飞行员', captain: '船长'
}

const talentDisplayEmojis = {
  smart: 'i', diligent: 'II', musical: 'III', artistic: 'IV', athletic: 'V',
  social: 'VI', leadership: 'VII', technical: 'VIII', literary: 'IX', business: 'X',
  patient: 'XI', brave: 'XII', charismatic: 'XIII', creative: 'XIV', memory: 'XV'
}

const randomElement = (array) => array[Math.floor(Math.random() * array.length)]

const generateName = () => {
  const surnames = ['李', '王', '张', '刘', '陈', '杨', '赵', '黄', '周', '吴', '徐', '孙', '马', '朱', '胡', '郭', '何', '高', '林', '罗', '郑', '梁', '谢', '宋', '唐', '许', '韩', '冯', '邓', '曹', '彭', '曾', '肖', '田', '董', '袁', '潘', '于', '蒋', '蔡', '余', '杜', '叶', '程', '苏', '魏', '吕', '丁', '任', '沈']
  const names = ['建国', '建军', '建民', '建华', '小明', '小红', '小华', '小丽', '小强', '小刚', '小芳', '小亮', '小伟', '小燕', '小敏', '小霞', '小娟', '小杰', '小涛', '小磊', '小辉', '小宇', '小俊', '小琳', '小丹', '小琴', '小婷', '小娜', '小佳', '小慧']
  return randomElement(surnames) + randomElement(names)
}

const generateRoleByAge = (age) => {
  if (age < 3) return '婴儿'
  if (age < 7) return '幼儿'
  if (age < 13) return '小学生'
  if (age < 16) return '初中生'
  if (age < 19) return '高中生'
  if (age < 23) return '大学生'
  if (age < 60) return '打工人'
  return '退休人员'
}

const generateAvatarByAge = (age) => {
  if (age < 3) return '[B]'
  if (age < 7) return '[b]'
  if (age < 18) return '[y]'
  if (age < 60) return '[M]'
  return '[O]'
}

const character = ref({
  name: props.gameState.userName || '李建国',
  avatar: '[B]',
  role: '婴儿',
  birthDate: props.gameState.birthDate || '1985年6月15日',
  birthPlace: props.gameState.birthPlace || '江苏省苏州市',
  age: 0,
  personality: '内向而稳重，内心有着自己的想法',
  familyBackground: '城市普通家庭',
  talents: ['i 记忆力强', 'II 绘画天赋', 'III 运动细胞'],
  _raw: null // 存储原始角色数据供游戏使用
})

const rerollCharacter = () => {
  // 使用统一的角色生成函数
  const rawChar = generateCharacter()
  const location = generateLocation()
  const age = character.value.age

  // 构建显示用角色
  character.value = {
    name: props.gameState.userName || generateName(),
    avatar: generateAvatarByAge(age),
    role: generateRoleByAge(age),
    birthDate: props.gameState.birthDate || '1985年6月15日',
    birthPlace: location.fullAddress,
    age: age,
    personality: `${rawChar.personality.name} · ${rawChar.personality.description}`,
    familyBackground: `${rawChar.familyBackground.cityType === '城市' ? '城市' : '农村'}${rawChar.familyBackground.wealthLevel}家庭 · ${rawChar.familyBackground.description}`,
    talents: rawChar.talents.map(t => `${talentDisplayEmojis[t.id] || '*'} ${t.name}`),
    _raw: rawChar
  }
}

const startLife = () => {
  // 构建完整的角色数据（包含游戏所需属性和显示属性）
  const fullCharacter = {
    ...(character.value._raw || {}),
    birthPlace: character.value.birthPlace,
    name: character.value.name
  }
  emit('update:game-state', {
    character: fullCharacter,
    currentDate: character.value.birthDate,
    age: character.value.age,
    stats: {
      health: 100,
      wealth: character.value._raw?.familyBackground?.income || 100,
      education: ''
    },
    events: [],
    isGameStarted: true
  })
  emit('next-page')
}

onMounted(() => {
  rerollCharacter()
})

// 监听 gameState 变化，当游戏重置时重新生成角色
watch(() => props.gameState, (newState) => {
  if (newState && !newState.character && newState.userName !== undefined) {
    // 游戏被重置，重新生成角色
    rerollCharacter()
  }
}, { immediate: true })
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  animation: fadeInUp 0.4s ease-out;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.header {
  text-align: center;
  margin-bottom: 8px;
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
  width: 50%;
  transition: width 0.3s ease;
}

.character-card {
  background: var(--card-bg);
  border: 4px solid var(--pixel-border);
  padding: 24px;
  position: relative;
  box-shadow:
    inset -4px -4px 0px rgba(0, 0, 0, 0.3),
    inset 4px 4px 0px rgba(255, 255, 255, 0.1);
}

.character-card::before {
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

.character-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 4px solid var(--pixel-border);
}

.avatar {
  width: 72px;
  height: 72px;
  background: var(--bg);
  border: 4px solid var(--pixel-border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Press Start 2P', monospace;
  font-size: 24px;
  color: var(--gold);
  box-shadow:
    inset -4px -4px 0px rgba(0, 0, 0, 0.3),
    inset 4px 4px 0px rgba(255, 255, 255, 0.1);
  transition: transform 0.1s;
}

.avatar:hover {
  transform: rotate(5deg);
}

.character-info h2 {
  font-family: 'Press Start 2P', monospace;
  font-size: 12px;
  color: var(--gold);
  margin-bottom: 8px;
}

.character-info .role {
  font-family: 'Press Start 2P', monospace;
  font-size: 8px;
  color: var(--accent);
  background: var(--bg);
  padding: 4px 8px;
  border: 2px solid var(--accent);
  display: inline-block;
}

.attribute-group {
  margin-bottom: 16px;
}

.attribute-label {
  font-family: 'Press Start 2P', monospace;
  font-size: 8px;
  color: var(--accent2);
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.attribute-value {
  font-size: 13px;
  color: var(--text);
  padding: 12px 14px;
  background: var(--bg);
  border-left: 4px solid var(--accent2);
  font-family: 'Noto Sans SC', monospace;
}

.talent-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.talent-item {
  background: var(--bg);
  padding: 12px 8px;
  text-align: center;
  font-size: 10px;
  color: var(--text);
  border: 3px solid var(--pixel-border);
  font-family: 'Noto Sans SC', monospace;
  transition: all 0.1s;
}

.talent-item:hover {
  border-color: var(--gold);
  transform: translateY(-2px);
}

.talent-item:nth-child(1) { animation: fadeIn 0.3s ease 0.2s both; }
.talent-item:nth-child(2) { animation: fadeIn 0.3s ease 0.3s both; }
.talent-item:nth-child(3) { animation: fadeIn 0.3s ease 0.4s both; }

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

.reroll-btn {
  width: 100%;
  padding: 14px;
  background: transparent;
  border: 4px dashed var(--pixel-border);
  font-family: 'Press Start 2P', monospace;
  font-size: 10px;
  color: var(--text);
  cursor: pointer;
  margin-top: 16px;
  transition: all 0.1s;
}

.reroll-btn:hover {
  background: var(--pixel-border);
  color: white;
  border-style: solid;
}

.reroll-btn:active {
  transform: scale(0.98);
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

.birth-info {
  background: var(--bg);
  padding: 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  border: 3px solid var(--pixel-border);
  margin-bottom: 12px;
}

.birth-icon {
  font-family: 'Press Start 2P', monospace;
  font-size: 20px;
  color: var(--gold);
}

.birth-details {
  flex: 1;
}

.birth-date {
  font-family: 'Press Start 2P', monospace;
  font-size: 10px;
  color: var(--gold);
  margin-bottom: 4px;
}

.birth-place {
  font-size: 11px;
  color: var(--text-dim);
  font-family: 'Noto Sans SC', monospace;
}

.age-info {
  background: var(--bg);
  padding: 14px;
  margin-bottom: 16px;
  border: 3px solid var(--pixel-border);
}

.age-label {
  font-family: 'Press Start 2P', monospace;
  font-size: 8px;
  color: var(--text-dim);
  margin-bottom: 4px;
}

.age-value {
  font-family: 'Press Start 2P', monospace;
  font-size: 16px;
  color: var(--accent2);
}
</style>