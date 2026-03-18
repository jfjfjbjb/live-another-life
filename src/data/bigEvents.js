// 大事件数据
export const bigEvents = {
  // 适用于所有年龄段的大事件
  universal: [
    { title: '意外', description: '发生了意外事件，对你的生活产生了重大影响。' },
    { title: '健康危机', description: '你遭遇了健康问题，开始重视身体保健。' },
    { title: '财富机遇', description: '你遇到了重要的财富机遇，改变了经济状况。' },
    { title: '搬迁', description: '你搬到了一个新的地方，开始了新的生活。' },
    { title: '获奖', description: '你获得了一个重要的奖项，得到了认可。' },
    { title: '疾病', description: '你生病了，需要一段时间来恢复。' },
    { title: '机遇', description: '你遇到了一个重要的机遇，改变了人生轨迹。' }
  ],
  // 按年龄段分类的大事件
  byAge: {
    0: [], // 0-6岁
    7: [
      { title: '入学', description: '你开始上小学，正式开始了学习生涯。' },
      { title: '朋友', description: '你认识了人生中的第一个好朋友。' }
    ],
    13: [
      { title: '升学', description: '你成功考上了初中，迈向了青少年时期。' },
      { title: '青春', description: '你开始进入青春期，身体和心理都发生了变化。' }
    ],
    16: [
      { title: '升学', description: '你成功考上了高中，为未来的大学做准备。' },
      { title: '初恋', description: '你开始了人生中的第一段恋情。' }
    ],
    19: [
      { title: '升学', description: '你成功考上了大学，开始了独立生活。' },
      { title: '独立', description: '你开始独立生活，学会了照顾自己。' }
    ],
    23: [
      { title: '就业', description: '你找到了第一份工作，开始了职业生涯。' },
      { title: '结婚', description: '你与爱人步入了婚姻的殿堂，组建了自己的家庭。' },
      { title: '创业', description: '你开始了自己的创业之路，追求梦想。' }
    ],
    25: [
      { title: '生子', description: '你的孩子出生了，为人父母的生活开始了。' },
      { title: '购房', description: '你购买了自己的第一套房子，有了自己的家。' }
    ],
    30: [
      { title: '晋升', description: '你在工作中表现出色，获得了晋升机会。' },
      { title: '事业', description: '你在事业上取得了重要的成就，得到了认可。' }
    ],
    40: [
      { title: '中年危机', description: '你面临中年危机，开始重新思考人生。' },
      { title: '子女教育', description: '你的孩子开始上学，你需要关注他们的教育。' }
    ],
    50: [
      { title: '退休规划', description: '你开始规划退休生活，为未来做准备。' },
      { title: '父母养老', description: '你的父母开始需要你的照顾，你承担起了责任。' }
    ],
    60: [
      { title: '退休', description: '你正式退休，开始了晚年生活。' },
      { title: '孙辈', description: '你有了孙子/孙女，享受天伦之乐。' }
    ]
  }
}