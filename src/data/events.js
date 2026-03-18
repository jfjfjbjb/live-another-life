// 事件类型数据
export const eventTypes = [
  { tags: ['家庭'], content: '今天和家人一起度过了愉快的一天。' },
  { tags: ['学习'], content: '今天学习了很多新知识，感觉很充实。' },
  { tags: ['工作'], content: '今天工作很顺利，得到了领导的表扬。' },
  { tags: ['娱乐'], content: '今天和朋友一起出去玩，玩得很开心。' },
  { tags: ['健康'], content: '今天去运动了，感觉身体很舒服。' },
  { tags: ['社交'], content: '今天认识了新的朋友，拓展了社交圈。' },
  { tags: ['旅行'], content: '今天去了一个新的地方旅行，开拓了眼界。' },
  { tags: ['兴趣'], content: '今天投入到自己的兴趣爱好中，感到很满足。' },
  { tags: ['挑战'], content: '今天完成了一个挑战，增强了自信心。' },
  { tags: ['休息'], content: '今天好好休息了一天，恢复了精力。' }
]

// 不同年龄段的年度事件
export const ageEvents = {
  baby: {
    content: `这一年你度过了婴儿时光，学会了基本的动作和语言。`,
    tags: ['成长', '婴儿']
  },
  kindergarten: {
    content: `这一年你在幼儿园度过了快乐的时光，认识了很多新朋友。`,
    tags: ['成长', '幼儿园']
  },
  elementary: {
    content: `这一年你在小学学习了基础知识，开始了解这个世界。`,
    tags: ['学习', '小学']
  },
  middle: {
    content: `这一年你在初中继续学习，开始思考人生的意义。`,
    tags: ['学习', '初中']
  },
  high: {
    content: `这一年你在高中努力学习，为将来的大学做准备。`,
    tags: ['学习', '高中']
  },
  college: {
    content: `这一年你在大学学习专业知识，开始规划自己的未来。`,
    tags: ['学习', '大学']
  },
  earlyCareer: {
    content: `这一年你开始了职业生涯，努力在社会上站稳脚跟。`,
    tags: ['工作', '职业']
  },
  midCareer: {
    content: `这一年你在职场上继续努力，为自己的事业奋斗。`,
    tags: ['工作', '事业']
  },
  lateCareer: {
    content: `这一年你事业有成，开始思考人生的意义。`,
    tags: ['事业', '人生']
  },
  preRetirement: {
    content: `这一年你继续工作，为退休后的生活做准备。`,
    tags: ['工作', '规划']
  },
  retirement: {
    content: `这一年你退休了，开始享受晚年生活。`,
    tags: ['退休', '生活']
  },
  oldAge: {
    content: `这一年你继续享受退休生活，回忆过去的点点滴滴。`,
    tags: ['退休', '回忆']
  }
}