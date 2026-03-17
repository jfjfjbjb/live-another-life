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
      <button class="btn btn-primary" @click="$emit('next-page')">开始人生 →</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const character = ref({
  name: '李建国',
  avatar: '👨‍🎓',
  role: '初中生',
  birthDate: '1985年6月15日',
  birthPlace: '江苏省苏州市平江区',
  personality: '内向而稳重，内心有着自己的想法',
  familyBackground: '城市普通家庭 · 父亲是工厂工人 · 母亲在纺织厂上班',
  talents: ['📚 记忆力强', '🎨 绘画天赋', '🏃 运动细胞']
})

const roles = ['农民', '工人', '学生', '教师', '医生', '护士', '工程师', '科学家', '军人', '警察', '公务员', '商人', '司机', '厨师', '服务员', '个体户', '艺术家', '作家', '记者', '主持人']
const personalities = [
  '内向而稳重，内心有着自己的想法',
  '外向开朗，善于与人交流',
  '中庸之道，遇事冷静思考',
  '活泼好动，充满好奇心',
  '沉稳内敛，做事认真负责'
]
const familyBackgrounds = [
  '城市富裕家庭 · 父亲是企业家 · 母亲是教师',
  '城市普通家庭 · 父亲是工厂工人 · 母亲在纺织厂上班',
  '城市贫困家庭 · 父母都是普通工人',
  '农村富裕家庭 · 家里有大片农田',
  '农村普通家庭 · 父母都是农民',
  '农村贫困家庭 · 生活比较艰苦'
]
const talents = [
  '📚 记忆力强',
  '🎨 绘画天赋',
  '🏃 运动细胞',
  '🎵 音乐天赋',
  '🧮 数学天赋',
  '📝 写作天赋',
  '💡 创新思维',
  '🤝 人际交往',
  '💪 体力充沛',
  '🧠 逻辑思维'
]
const provinces = ['北京市', '上海市', '江苏省', '浙江省', '广东省', '山东省', '河南省', '四川省', '湖北省', '湖南省', '河北省', '福建省', '安徽省', '辽宁省', '黑龙江省', '吉林省', '山西省', '陕西省', '江西省', '云南省', '贵州省', '广西壮族自治区', '内蒙古自治区', '新疆维吾尔自治区', '宁夏回族自治区', '青海省', '甘肃省', '西藏自治区', '海南省', '重庆市', '天津市', '香港特别行政区', '澳门特别行政区', '台湾省']
const cities = {
  '北京市': ['北京市'],
  '上海市': ['上海市'],
  '江苏省': ['南京市', '苏州市', '无锡市', '常州市', '南通市'],
  '浙江省': ['杭州市', '宁波市', '温州市', '嘉兴市', '湖州市'],
  '广东省': ['广州市', '深圳市', '佛山市', '东莞市', '中山市'],
  '山东省': ['济南市', '青岛市', '烟台市', '潍坊市', '临沂市'],
  '河南省': ['郑州市', '洛阳市', '开封市', '安阳市', '新乡市'],
  '四川省': ['成都市', '绵阳市', '德阳市', '自贡市', '泸州市'],
  '湖北省': ['武汉市', '宜昌市', '襄阳市', '荆州市', '黄冈市'],
  '湖南省': ['长沙市', '株洲市', '湘潭市', '衡阳市', '邵阳市'],
  '河北省': ['石家庄市', '唐山市', '秦皇岛市', '邯郸市', '保定市'],
  '福建省': ['福州市', '厦门市', '泉州市', '漳州市', '莆田市'],
  '安徽省': ['合肥市', '芜湖市', '蚌埠市', '淮南市', '马鞍山市'],
  '辽宁省': ['沈阳市', '大连市', '鞍山市', '抚顺市', '本溪市'],
  '黑龙江省': ['哈尔滨市', '齐齐哈尔市', '牡丹江市', '佳木斯市', '大庆市'],
  '吉林省': ['长春市', '吉林市', '四平市', '辽源市', '通化市'],
  '山西省': ['太原市', '大同市', '阳泉市', '长治市', '晋城市'],
  '陕西省': ['西安市', '宝鸡市', '咸阳市', '铜川市', '渭南市'],
  '江西省': ['南昌市', '九江市', '景德镇市', '萍乡市', '新余市'],
  '云南省': ['昆明市', '曲靖市', '玉溪市', '保山市', '昭通市'],
  '贵州省': ['贵阳市', '遵义市', '六盘水市', '安顺市', '毕节市'],
  '广西壮族自治区': ['南宁市', '柳州市', '桂林市', '梧州市', '北海市'],
  '内蒙古自治区': ['呼和浩特市', '包头市', '乌海市', '赤峰市', '通辽市'],
  '新疆维吾尔自治区': ['乌鲁木齐市', '克拉玛依市', '吐鲁番市', '哈密市', '阿克苏地区'],
  '宁夏回族自治区': ['银川市', '石嘴山市', '吴忠市', '固原市', '中卫市'],
  '青海省': ['西宁市', '海东市', '海北藏族自治州', '黄南藏族自治州', '海南藏族自治州'],
  '甘肃省': ['兰州市', '嘉峪关市', '金昌市', '白银市', '天水市'],
  '西藏自治区': ['拉萨市', '日喀则市', '昌都市', '林芝市', '山南市'],
  '海南省': ['海口市', '三亚市', '三沙市', '儋州市', '文昌市'],
  '重庆市': ['重庆市'],
  '天津市': ['天津市'],
  '香港特别行政区': ['香港'],
  '澳门特别行政区': ['澳门'],
  '台湾省': ['台北市', '高雄市', '台中市', '台南市', '新北市']
}
const districts = ['朝阳区', '海淀区', '东城区', '西城区', '丰台区', '石景山区', '门头沟区', '房山区', '通州区', '顺义区', '昌平区', '大兴区', '怀柔区', '平谷区', '密云区', '延庆区', '平江区', '沧浪区', '金阊区', '虎丘区', '吴中区', '相城区', '昆山市', '张家港市', '常熟市', '太仓市']

const randomElement = (array) => array[Math.floor(Math.random() * array.length)]

const generateName = () => {
  const surnames = ['李', '王', '张', '刘', '陈', '杨', '赵', '黄', '周', '吴', '徐', '孙', '马', '朱', '胡', '郭', '何', '高', '林', '罗', '郑', '梁', '谢', '宋', '唐', '许', '韩', '冯', '邓', '曹', '彭', '曾', '肖', '田', '董', '袁', '潘', '于', '蒋', '蔡', '余', '杜', '叶', '程', '苏', '魏', '吕', '丁', '任', '沈']
  const names = ['建国', '建军', '建民', '建华', '小明', '小红', '小华', '小丽', '小强', '小刚', '小芳', '小亮', '小伟', '小燕', '小敏', '小霞', '小娟', '小杰', '小涛', '小磊', '小辉', '小宇', '小俊', '小琳', '小丹', '小琴', '小婷', '小娜', '小佳', '小慧']
  return randomElement(surnames) + randomElement(names)
}

const generateAvatar = () => {
  const avatars = ['👶', '🧒', '👦', '👧', '👨', '👩', '👴', '👵', '👨‍🎓', '👩‍🎓', '👨‍💼', '👩‍💼', '👨‍⚕️', '👩‍⚕️', '👨‍🏫', '👩‍🏫', '👨‍🔧', '👩‍🔧', '👨‍🌾', '👩‍🌾']
  return randomElement(avatars)
}

const generateBirthPlace = () => {
  const province = randomElement(provinces)
  const city = randomElement(cities[province] || [province])
  const district = randomElement(districts)
  return `${province}${city}${district}`
}

const generateTalents = () => {
  const shuffled = talents.sort(() => 0.5 - Math.random())
  return shuffled.slice(0, 3)
}

const rerollCharacter = () => {
  character.value = {
    name: generateName(),
    avatar: generateAvatar(),
    role: randomElement(roles),
    birthDate: '1985年6月15日', // 这里应该从BirthPage传递过来
    birthPlace: generateBirthPlace(),
    personality: randomElement(personalities),
    familyBackground: randomElement(familyBackgrounds),
    talents: generateTalents()
  }
}

onMounted(() => {
  // 初始化角色
  rerollCharacter()
})
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
</style>