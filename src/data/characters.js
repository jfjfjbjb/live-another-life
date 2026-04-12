export const professions = [
  { id: 'farmer', name: '农民', category: '农业', baseIncome: 50, workType: '体力劳动' },
  { id: 'worker', name: '工人', category: '工业', baseIncome: 120, workType: '体力劳动' },
  { id: 'student', name: '学生', category: '教育', baseIncome: 0, workType: '学习' },
  { id: 'teacher', name: '教师', category: '教育', baseIncome: 200, workType: '脑力劳动' },
  { id: 'doctor', name: '医生', category: '医疗', baseIncome: 300, workType: '专业技术' },
  { id: 'nurse', name: '护士', category: '医疗', baseIncome: 180, workType: '专业技术' },
  { id: 'engineer', name: '工程师', category: '技术', baseIncome: 350, workType: '技术工作' },
  { id: 'scientist', name: '科学家', category: '科研', baseIncome: 400, workType: '科研工作' },
  { id: 'soldier', name: '军人', category: '军事', baseIncome: 200, workType: '军事工作' },
  { id: 'police', name: '警察', category: '执法', baseIncome: 250, workType: '执法工作' },
  { id: 'civilServant', name: '公务员', category: '政府', baseIncome: 280, workType: '行政工作' },
  { id: 'businessman', name: '商人', category: '商业', baseIncome: 500, workType: '商业活动' },
  { id: 'driver', name: '司机', category: '运输', baseIncome: 150, workType: '运输工作' },
  { id: 'chef', name: '厨师', category: '餐饮', baseIncome: 180, workType: '餐饮工作' },
  { id: 'waiter', name: '服务员', category: '餐饮', baseIncome: 100, workType: '服务行业' },
  { id: 'individual', name: '个体户', category: '商业', baseIncome: 250, workType: '个体经营' },
  { id: 'artist', name: '艺术家', category: '文化', baseIncome: 200, workType: '艺术创作' },
  { id: 'writer', name: '作家', category: '文化', baseIncome: 180, workType: '文学创作' },
  { id: 'journalist', name: '记者', category: '媒体', baseIncome: 250, workType: '新闻工作' },
  { id: 'host', name: '主持人', category: '媒体', baseIncome: 350, workType: '媒体工作' },
  { id: 'lawyer', name: '律师', category: '法律', baseIncome: 400, workType: '法律工作' },
  { id: 'accountant', name: '会计', category: '财务', baseIncome: 220, workType: '财务工作' },
  { id: 'nurse', name: '月嫂', category: '服务', baseIncome: 300, workType: '护理服务' },
  { id: 'courier', name: '快递员', category: '物流', baseIncome: 180, workType: '物流工作' },
  { id: 'electrician', name: '电工', category: '技术', baseIncome: 200, workType: '技术工作' },
  { id: 'plumber', name: '水管工', category: '技术', baseIncome: 180, workType: '技术工作' },
  { id: 'carpenter', name: '木匠', category: '手工业', baseIncome: 160, workType: '手工业' },
  { id: 'barber', name: '理发师', category: '服务', baseIncome: 150, workType: '服务业' },
  { id: 'photographer', name: '摄影师', category: '文化', baseIncome: 250, workType: '摄影工作' },
  { id: 'fitnessCoach', name: '健身教练', category: '体育', baseIncome: 300, workType: '体育工作' },
  { id: 'realEstate', name: '房产中介', category: '房地产', baseIncome: 280, workType: '中介服务' },
  { id: 'insurance', name: '保险员', category: '金融', baseIncome: 250, workType: '销售工作' },
  { id: 'it', name: 'IT工程师', category: '科技', baseIncome: 400, workType: '技术工作' },
  { id: 'designer', name: '设计师', category: '设计', baseIncome: 350, workType: '设计工作' },
  { id: 'manager', name: '企业经理', category: '管理', baseIncome: 500, workType: '管理工作' },
  { id: 'shopOwner', name: '店主', category: '商业', baseIncome: 300, workType: '商业经营' },
  { id: 'fisherman', name: '渔民', category: '农业', baseIncome: 120, workType: '渔业' },
  { id: 'herdsman', name: '牧民', category: '农业', baseIncome: 100, workType: '畜牧业' },
  { id: 'bricklayer', name: '泥瓦匠', category: '建筑', baseIncome: 180, workType: '建筑工作' },
  { id: 'tailor', name: '裁缝', category: '手工业', baseIncome: 140, workType: '手工业' },
  { id: 'guard', name: '保安', category: '服务', baseIncome: 120, workType: '安保工作' },
  { id: 'cleaner', name: '清洁工', category: '服务', baseIncome: 100, workType: '服务工作' },
  { id: 'nanny', name: '保姆', category: '服务', baseIncome: 150, workType: '家政服务' },
  { id: 'vendor', name: '小商贩', category: '商业', baseIncome: 120, workType: '小本经营' },
  { id: 'veterinarian', name: '兽医', category: '医疗', baseIncome: 250, workType: '兽医工作' },
  { id: 'florist', name: '花店老板', category: '商业', baseIncome: 200, workType: '花卉经营' },
  { id: 'baker', name: '烘焙师', category: '餐饮', baseIncome: 200, workType: '烘焙工作' },
  { id: 'mechanic', name: '修理工', category: '技术', baseIncome: 180, workType: '修理工作' },
  { id: 'pilot', name: '飞行员', category: '交通', baseIncome: 800, workType: '航空工作' },
  { id: 'captain', name: '船长', category: '交通', baseIncome: 500, shipWork: '航海工作' }
]

export const personalities = [
  { id: 'introvert', name: '内向', description: '安静、内敛、喜欢独处', socialBonus: -10, happinessBonus: 5 },
  { id: 'extrovert', name: '外向', description: '活泼、善于交际、喜欢热闹', socialBonus: 15, happinessBonus: 0 },
  { id: 'balanced', name: '中庸', description: '稳重、随和、适应性强', socialBonus: 5, happinessBonus: 3 },
  { id: 'optimist', name: '乐观', description: '积极向上、总是看到好的一面', socialBonus: 5, happinessBonus: 15 },
  { id: 'pessimist', name: '悲观', description: '消极、容易担忧、总是看到困难', socialBonus: -5, happinessBonus: -10 },
  { id: 'stubborn', name: '固执', description: '坚持己见、不轻易改变主意', socialBonus: -10, happinessBonus: 5 },
  { id: 'gentle', name: '温柔', description: '善良、体贴、善于照顾他人', socialBonus: 10, happinessBonus: 8 },
  { id: 'ambitious', name: '有野心', description: '有目标、追求成功、不甘平凡', socialBonus: 0, happinessBonus: -5 },
  { id: 'carefree', name: '豁达', description: '看得开、不斤斤计较、随遇而安', socialBonus: 5, happinessBonus: 20 },
  { id: 'cautious', name: '谨慎', description: '小心仔细、三思而后行', socialBonus: 0, happinessBonus: 5 }
]

export const talents = [
  { id: 'smart', name: '聪明', description: '学习能力强，理解力超群', effect: { intelligence: 20 } },
  { id: 'diligent', name: '勤奋', description: '吃苦耐劳，努力上进', effect: { workEfficiency: 15 } },
  { id: 'musical', name: '音乐天赋', description: '对音乐有独特的感知力', effect: { artistic: 20 } },
  { id: 'artistic', name: '艺术天赋', description: '有绘画雕塑等艺术才能', effect: { artistic: 20 } },
  { id: 'athletic', name: '运动天赋', description: '体育方面很有潜力', effect: { health: 10, athletic: 20 } },
  { id: 'social', name: '社交达人', description: '善于与人打交道', effect: { social: 25 } },
  { id: 'leadership', name: '领导力', description: '有组织协调能力', effect: { leadership: 25 } },
  { id: 'technical', name: '技术能手', description: '动手能力强擅长技术', effect: { technical: 25 } },
  { id: 'literary', name: '文学天赋', description: '写作方面有才华', effect: { literary: 25 } },
  { id: 'business', name: '商业头脑', description: '善于发现商机', effect: { business: 25 } },
  { id: 'patient', name: '耐心', description: '能够坚持不懈', effect: { patience: 20 } },
  { id: 'brave', name: '勇敢', description: '敢于冒险勇于尝试', effect: { brave: 20 } },
  { id: 'charismatic', name: '魅力', description: '吸引他人让人喜欢', effect: { charisma: 25 } },
  { id: 'creative', name: '创造力', description: '想法多创意丰富', effect: { creativity: 25 } },
  { id: 'memory', name: '过目不忘', description: '记忆力超群', effect: { intelligence: 15 } }
]

export const familyBackgrounds = [
  { id: 'urbanRich', name: '城市富裕', cityType: '城市', wealthLevel: '富裕', income: 500, education: 12, description: '生活在城市，家庭条件优渥', wealthGrowthRate: 1.5 },
  { id: 'urbanMiddle', name: '城市普通', cityType: '城市', wealthLevel: '普通', income: 200, education: 10, description: '生活在城市，家庭条件一般', wealthGrowthRate: 1.0 },
  { id: 'urbanPoor', name: '城市贫困', cityType: '城市', wealthLevel: '贫困', income: 80, education: 8, description: '生活在城市，家庭条件困难', wealthGrowthRate: 0.7 },
  { id: 'ruralRich', name: '农村富裕', cityType: '农村', wealthLevel: '富裕', income: 300, education: 8, description: '生活在农村，家庭条件较好', wealthGrowthRate: 1.2 },
  { id: 'ruralMiddle', name: '农村普通', cityType: '农村', wealthLevel: '普通', income: 100, education: 6, description: '生活在农村，家庭条件一般', wealthGrowthRate: 0.8 },
  { id: 'ruralPoor', name: '农村贫困', cityType: '农村', wealthLevel: '贫困', income: 50, education: 4, description: '生活在农村，家庭条件困难', wealthGrowthRate: 0.5 }
]

export function generateCharacter() {
  const profession = professions[Math.floor(Math.random() * professions.length)]
  const personality = personalities[Math.floor(Math.random() * personalities.length)]
  const familyBackground = familyBackgrounds[Math.floor(Math.random() * familyBackgrounds.length)]
  
  const talentCount = 3
  const shuffledTalents = [...talents].sort(() => Math.random() - 0.5)
  const selectedTalents = shuffledTalents.slice(0, talentCount)
  
  return {
    profession,
    personality,
    familyBackground,
    talents: selectedTalents,
    attributes: {
      intelligence: Math.floor(Math.random() * 50) + 50,
      health: Math.floor(Math.random() * 30) + 70,
      social: Math.floor(Math.random() * 50) + 50,
      happiness: Math.floor(Math.random() * 30) + 70,
      wealth: Math.floor(Math.random() * 30) + 70,
      career: Math.floor(Math.random() * 30) + 50
    }
  }
}
