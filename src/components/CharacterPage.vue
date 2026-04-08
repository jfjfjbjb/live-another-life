<template>
  <div class="container">
    <div class="header">
      <h1>命运roll点</h1>
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
        <span class="birth-icon">📅</span>
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
        <div class="attribute-label">🎭 性格</div>
        <div class="attribute-value">{{ character.personality }}</div>
      </div>

      <div class="attribute-group">
        <div class="attribute-label">🏠 家庭背景</div>
        <div class="attribute-value">{{ character.familyBackground }}</div>
      </div>

      <div class="attribute-group">
        <div class="attribute-label">✨ 天赋特长</div>
        <div class="talent-grid">
          <div class="talent-item" v-for="(talent, index) in character.talents" :key="index">
            {{ talent }}
          </div>
        </div>
      </div>

      <button class="reroll-btn" @click="rerollCharacter">🎲 重新roll一个身份</button>
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
  smart: '📚', diligent: '💪', musical: '🎵', artistic: '🎨', athletic: '🏃',
  social: '🤝', leadership: '👑', technical: '🔧', literary: '📝', business: '💰',
  patient: '🧘', brave: '🦁', charismatic: '✨', creative: '💡', memory: '🧠'
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
  if (age < 3) return '👶'
  if (age < 7) return '🧒'
  if (age < 18) return '👦'
  if (age < 60) return '👨'
  return '👴'
}

const character = ref({
  name: props.gameState.userName || '李建国',
  avatar: '👶',
  role: '婴儿',
  birthDate: props.gameState.birthDate || '1985年6月15日',
  birthPlace: props.gameState.birthPlace || '江苏省苏州市',
  age: 0,
  personality: '内向而稳重，内心有着自己的想法',
  familyBackground: '城市普通家庭',
  talents: ['📚 记忆力强', '🎨 绘画天赋', '🏃 运动细胞'],
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
    talents: rawChar.talents.map(t => `${talentDisplayEmojis[t.id] || '✨'} ${t.name}`),
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
  font-size: 24px;
  color: var(--primary);
  font-weight: 700;
}

.progress-bar {
  width: 100%;
  height: 4px;
  background: rgba(139, 69, 19, 0.1);
  border-radius: 2px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  width: 50%;
  transition: width 0.3s ease;
}

.character-card {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 24px;
  box-shadow: var(--shadow);
  position: relative;
  overflow: hidden;
}

.character-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(90deg, var(--accent), #E6A23C, var(--accent));
}

.character-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px dashed rgba(139, 69, 19, 0.15);
}

.avatar {
  width: 72px;
  height: 72px;
  background: linear-gradient(135deg, var(--secondary), #E8C9A8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  box-shadow: 0 4px 12px rgba(139, 69, 19, 0.2);
  transition: transform 0.3s ease;
}

.avatar:hover {
  transform: scale(1.05) rotate(5deg);
}

.character-info h2 {
  font-size: 20px;
  color: var(--primary);
  margin-bottom: 4px;
}

.character-info .role {
  font-size: 13px;
  color: var(--accent);
  background: rgba(196, 30, 58, 0.1);
  padding: 3px 10px;
  border-radius: 12px;
  display: inline-block;
}

.attribute-group {
  margin-bottom: 16px;
}

.attribute-label {
  font-size: 11px;
  color: var(--secondary);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.attribute-value {
  font-size: 14px;
  color: var(--text);
  padding: 10px 14px;
  background: var(--bg);
  border-radius: 10px;
  border-left: 3px solid var(--secondary);
}

.talent-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.talent-item {
  background: linear-gradient(135deg, #FFF9F0, #FFF5E6);
  border-radius: 10px;
  padding: 12px 8px;
  text-align: center;
  font-size: 12px;
  color: var(--text);
  border: 1px solid rgba(139, 69, 19, 0.1);
  transition: all 0.2s ease;
}

.talent-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(139, 69, 19, 0.15);
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
  padding: 12px;
  background: transparent;
  border: 2px dashed var(--secondary);
  border-radius: 12px;
  font-size: 14px;
  color: var(--secondary);
  cursor: pointer;
  margin-top: 16px;
  transition: all 0.2s;
  font-family: inherit;
}

.reroll-btn:hover {
  background: var(--secondary);
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

.birth-info {
  background: linear-gradient(135deg, #FFF9F0, #FFE8D6);
  border-radius: 12px;
  padding: 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid rgba(139, 69, 19, 0.1);
}

.birth-icon {
  font-size: 28px;
}

.birth-details {
  flex: 1;
}

.birth-date {
  font-size: 14px;
  color: var(--primary);
  font-weight: 700;
}

.birth-place {
  font-size: 12px;
  color: var(--text);
  opacity: 0.7;
}

.age-info {
  background: linear-gradient(135deg, #FFF9F0, #FFE8D6);
  border-radius: 12px;
  padding: 14px;
  margin-bottom: 16px;
  border: 1px solid rgba(139, 69, 19, 0.1);
}

.age-label {
  font-size: 12px;
  color: var(--secondary);
  margin-bottom: 4px;
}

.age-value {
  font-size: 20px;
  color: var(--primary);
  font-weight: 700;
}
</style>