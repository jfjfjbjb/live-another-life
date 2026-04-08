// 大事件数据
// effect: { health: ±数值, wealth: ±数值, happiness: ±数值 }
// probability: 触发概率倍率 (默认1.0，性格/天赋可影响)

export const bigEvents = {
  // 适用于所有年龄段的大事件
  universal: [
    {
      title: '意外',
      description: '发生了意外事件，对你的生活产生了重大影响。',
      effect: { health: -30, wealth: -20, happiness: -15 },
      probability: 1.0
    },
    {
      title: '健康危机',
      description: '你遭遇了健康问题，开始重视身体保健。',
      effect: { health: -25, wealth: -10, happiness: -10 },
      probability: 1.0
    },
    {
      title: '财富机遇',
      description: '你遇到了重要的财富机遇，改变了经济状况。',
      effect: { health: 0, wealth: 40, happiness: 15 },
      probability: 1.0
    },
    {
      title: '搬迁',
      description: '你搬到了一个新的地方，开始了新的生活。',
      effect: { health: 0, wealth: -10, happiness: 5 },
      probability: 1.0
    },
    {
      title: '获奖',
      description: '你获得了一个重要的奖项，得到了认可。',
      effect: { health: 0, wealth: 15, happiness: 25 },
      probability: 1.0
    },
    {
      title: '疾病',
      description: '你生病了，需要一段时间来恢复。',
      effect: { health: -20, wealth: -15, happiness: -10 },
      probability: 1.0
    },
    {
      title: '机遇',
      description: '你遇到了一个重要的机遇，改变了人生轨迹。',
      effect: { health: 0, wealth: 25, happiness: 20 },
      probability: 1.0
    },
    {
      title: '交通事故',
      description: '你遭遇了一场交通事故，所幸没有大碍。',
      effect: { health: -35, wealth: -15, happiness: -20 },
      probability: 0.8
    },
    {
      title: '中彩票',
      description: '你运气爆棚，中了一笔不小的奖金！',
      effect: { health: 0, wealth: 50, happiness: 30 },
      probability: 0.3
    },
    {
      title: '亲人离世',
      description: '你最亲近的人离开了你，你很伤心。',
      effect: { health: -15, wealth: 0, happiness: -30 },
      probability: 1.0
    },
    {
      title: '出生',
      description: '你来到了这个世界，开始了新的人生。',
      effect: { health: 0, wealth: 0, happiness: 0 },
      probability: 0,
      isCritical: true
    },
    {
      title: '结婚',
      description: '你与相爱的人携手走进了婚姻的殿堂。',
      effect: { health: 5, wealth: -20, happiness: 30 },
      probability: 1.0
    },
    {
      title: '离婚',
      description: '婚姻走到了尽头，你选择独自面对未来。',
      effect: { health: -10, wealth: -30, happiness: -25 },
      probability: 0.7
    },
    {
      title: '生子',
      description: '一个新的生命降临到你家，你升级成为了父母。',
      effect: { health: -10, wealth: -15, happiness: 25 },
      probability: 1.0
    },
    {
      title: '升学',
      description: '你成功升学，来到了新的学校。',
      effect: { health: 0, wealth: -10, happiness: 15 },
      probability: 1.0
    },
    {
      title: '毕业',
      description: '你完成了学业，即将踏入社会。',
      effect: { health: 0, wealth: 0, happiness: 20 },
      probability: 1.0
    },
    {
      title: '犯罪',
      description: '你因一时冲动犯了错误，付出了代价。',
      effect: { health: -5, wealth: -25, happiness: -20 },
      probability: 0.5
    },
    {
      title: '见义勇为',
      description: '你挺身而出保护了他人的安全。',
      effect: { health: -10, wealth: 0, happiness: 25 },
      probability: 0.6
    },
    {
      title: '房产购置',
      description: '你购买了一套房产，有了自己的家。',
      effect: { health: 5, wealth: -40, happiness: 20 },
      probability: 1.0
    },
    {
      title: '投资成功',
      description: '你的投资获得了丰厚的回报。',
      effect: { health: 0, wealth: 45, happiness: 20 },
      probability: 0.6
    },
    {
      title: '投资失败',
      description: '你的投资失败了，损失惨重。',
      effect: { health: -5, wealth: -35, happiness: -20 },
      probability: 0.7
    },
    {
      title: '出国',
      description: '你踏上了出国的旅程，看到了更大的世界。',
      effect: { health: 0, wealth: -20, happiness: 15 },
      probability: 0.8
    },
    {
      title: '移民',
      description: '你决定在新的国家开始新的生活。',
      effect: { health: 0, wealth: -30, happiness: 10 },
      probability: 0.5
    },
    {
      title: '自然灾害',
      description: '你所在的地区遭遇了自然灾害。',
      effect: { health: -20, wealth: -30, happiness: -15 },
      probability: 0.6
    },
    {
      title: '遗产继承',
      description: '你继承了一笔遗产，生活得到了改善。',
      effect: { health: 0, wealth: 40, happiness: 15 },
      probability: 0.6
    },
    {
      title: '创业成功',
      description: '你的创业之路取得了成功！',
      effect: { health: -10, wealth: 60, happiness: 30 },
      probability: 0.5
    },
    {
      title: '创业失败',
      description: '你的创业梦想破灭了。',
      effect: { health: -15, wealth: -40, happiness: -25 },
      probability: 0.7
    },
    {
      title: '晋升',
      description: '你在工作中获得了晋升，担任了更高的职位。',
      effect: { health: 0, wealth: 25, happiness: 20 },
      probability: 1.0
    },
    {
      title: '裁员',
      description: '你不幸被裁员，失去了工作。',
      effect: { health: -10, wealth: -30, happiness: -20 },
      probability: 0.7
    },
    {
      title: '退休',
      description: '你正式退休，结束了职业生涯。',
      effect: { health: 10, wealth: 0, happiness: 5 },
      probability: 1.0
    }
  ],

  // 按年龄段分类的大事件
  byAge: {
    0: [],
    7: [
      {
        title: '入学',
        description: '你开始上小学，正式开始了学习生涯。',
        effect: { health: 0, wealth: 0, happiness: 15 },
        probability: 1.0
      },
      {
        title: '朋友',
        description: '你认识了人生中的第一个好朋友。',
        effect: { health: 0, wealth: 0, happiness: 20 },
        probability: 1.0
      },
      {
        title: '获奖',
        description: '你在学校比赛中获得了奖项。',
        effect: { health: 0, wealth: 0, happiness: 20 },
        probability: 1.0
      },
      {
        title: '生病',
        description: '你小时候生了一场病，让家人很担心。',
        effect: { health: -15, wealth: -5, happiness: -10 },
        probability: 0.8
      }
    ],
    13: [
      {
        title: '升学',
        description: '你成功考上了初中，迈向了青少年时期。',
        effect: { health: 0, wealth: -5, happiness: 15 },
        probability: 1.0
      },
      {
        title: '青春',
        description: '你开始进入青春期，身体和心理都发生了变化。',
        effect: { health: -5, wealth: 0, happiness: 5 },
        probability: 1.0
      },
      {
        title: '初恋',
        description: '你开始了人生中的第一段恋情，心跳加速。',
        effect: { health: 0, wealth: 0, happiness: 25 },
        probability: 0.8
      },
      {
        title: '叛逆',
        description: '青春期的你开始叛逆，和父母有了争执。',
        effect: { health: 0, wealth: 0, happiness: -15 },
        probability: 0.7
      }
    ],
    16: [
      {
        title: '升学',
        description: '你成功考上了高中，为未来的大学做准备。',
        effect: { health: 0, wealth: -10, happiness: 15 },
        probability: 1.0
      },
      {
        title: '初恋',
        description: '高中生涯中，你经历了一段纯真的恋爱。',
        effect: { health: 0, wealth: 0, happiness: 20 },
        probability: 0.7
      },
      {
        title: '高考压力',
        description: '高考的压力让你喘不过气来。',
        effect: { health: -10, wealth: 0, happiness: -10 },
        probability: 0.9
      },
      {
        title: '文理分科',
        description: '你选择了自己喜欢的方向。',
        effect: { health: 0, wealth: 0, happiness: 10 },
        probability: 1.0
      }
    ],
    19: [
      {
        title: '升学',
        description: '你成功考上了大学，开始了独立生活。',
        effect: { health: 0, wealth: -20, happiness: 25 },
        probability: 1.0
      },
      {
        title: '独立',
        description: '你开始独立生活，学会了照顾自己。',
        effect: { health: 0, wealth: -10, happiness: 15 },
        probability: 1.0
      },
      {
        title: '初恋分手',
        description: '毕业季即分手季，你们和平分开了。',
        effect: { health: -5, wealth: 0, happiness: -20 },
        probability: 0.8
      },
      {
        title: '大学恋爱',
        description: '你在大学里开始了新的恋情。',
        effect: { health: 0, wealth: -5, happiness: 20 },
        probability: 0.7
      }
    ],
    23: [
      {
        title: '就业',
        description: '你找到了第一份工作，开始了职业生涯。',
        effect: { health: -5, wealth: 20, happiness: 15 },
        probability: 1.0
      },
      {
        title: '结婚',
        description: '你与爱人步入了婚姻的殿堂，组建了自己的家庭。',
        effect: { health: 5, wealth: -20, happiness: 30 },
        probability: 0.6
      },
      {
        title: '创业',
        description: '你开始了自己的创业之路，追求梦想。',
        effect: { health: -10, wealth: -20, happiness: 20 },
        probability: 0.5
      },
      {
        title: '失业',
        description: '你失去了工作，不得不重新开始。',
        effect: { health: -10, wealth: -25, happiness: -20 },
        probability: 0.6
      },
      {
        title: '考研',
        description: '你决定继续深造，考研成功。',
        effect: { health: -5, wealth: -10, happiness: 20 },
        probability: 0.7
      }
    ],
    25: [
      {
        title: '生子',
        description: '你的孩子出生了，为人父母的生活开始了。',
        effect: { health: -10, wealth: -15, happiness: 25 },
        probability: 0.8
      },
      {
        title: '购房',
        description: '你购买了自己的第一套房子，有了自己的家。',
        effect: { health: 5, wealth: -40, happiness: 20 },
        probability: 0.8
      },
      {
        title: '晋升',
        description: '你在工作中表现出色，获得了晋升机会。',
        effect: { health: 0, wealth: 25, happiness: 20 },
        probability: 0.8
      },
      {
        title: '加薪',
        description: '你的努力得到了回报，工资涨了。',
        effect: { health: 0, wealth: 20, happiness: 15 },
        probability: 0.9
      }
    ],
    30: [
      {
        title: '晋升',
        description: '你在工作中表现出色，获得了晋升机会。',
        effect: { health: 0, wealth: 25, happiness: 20 },
        probability: 0.8
      },
      {
        title: '事业',
        description: '你在事业上取得了重要的成就，得到了认可。',
        effect: { health: -5, wealth: 30, happiness: 25 },
        probability: 0.7
      },
      {
        title: '第二个孩子',
        description: '你的第二个孩子出生了，家庭更加完整。',
        effect: { health: -10, wealth: -15, happiness: 25 },
        probability: 0.6
      },
      {
        title: '中年危机',
        description: '你面临中年危机，开始重新思考人生。',
        effect: { health: -5, wealth: 0, happiness: -15 },
        probability: 0.7
      }
    ],
    40: [
      {
        title: '中年危机',
        description: '你面临中年危机，开始重新思考人生。',
        effect: { health: -5, wealth: 0, happiness: -15 },
        probability: 0.7
      },
      {
        title: '子女教育',
        description: '你的孩子开始上学，你需要关注他们的教育。',
        effect: { health: 0, wealth: -20, happiness: 10 },
        probability: 1.0
      },
      {
        title: '父母养老',
        description: '你的父母开始需要你的照顾，你承担起了责任。',
        effect: { health: -5, wealth: -15, happiness: -10 },
        probability: 0.8
      },
      {
        title: '职业瓶颈',
        description: '你在职业发展上遇到了瓶颈。',
        effect: { health: -5, wealth: 0, happiness: -15 },
        probability: 0.7
      },
      {
        title: '再次创业',
        description: '你决定再次创业，追求更大的发展。',
        effect: { health: -10, wealth: -25, happiness: 15 },
        probability: 0.5
      }
    ],
    50: [
      {
        title: '退休规划',
        description: '你开始规划退休生活，为未来做准备。',
        effect: { health: 5, wealth: -10, happiness: 10 },
        probability: 1.0
      },
      {
        title: '父母养老',
        description: '你的父母需要更多的照顾，你尽孝床前。',
        effect: { health: -5, wealth: -15, happiness: -5 },
        probability: 0.8
      },
      {
        title: '子女成才',
        description: '你的孩子考上了理想的大学，你很欣慰。',
        effect: { health: 0, wealth: -20, happiness: 30 },
        probability: 0.8
      },
      {
        title: '健康检查',
        description: '体检发现了一些问题，你开始重视健康。',
        effect: { health: -15, wealth: -5, happiness: -5 },
        probability: 0.7
      },
      {
        title: '再婚',
        description: '你遇到了新的伴侣，决定再次步入婚姻。',
        effect: { health: 5, wealth: -15, happiness: 20 },
        probability: 0.4
      }
    ],
    60: [
      {
        title: '退休',
        description: '你正式退休，开始了晚年生活。',
        effect: { health: 10, wealth: 0, happiness: 5 },
        probability: 1.0
      },
      {
        title: '孙辈',
        description: '你有了孙子/孙女，享受天伦之乐。',
        effect: { health: 5, wealth: 0, happiness: 25 },
        probability: 0.8
      },
      {
        title: '金婚',
        description: '你和伴侣携手走过了50年，庆祝金婚。',
        effect: { health: 5, wealth: 0, happiness: 30 },
        probability: 0.6
      },
      {
        title: '大病',
        description: '一场大病让你住院治疗。',
        effect: { health: -30, wealth: -20, happiness: -20 },
        probability: 0.7
      },
      {
        title: '环游中国',
        description: '退休后的你决定环游中国。',
        effect: { health: 5, wealth: -25, happiness: 25 },
        probability: 0.6
      }
    ]
  }
}

// 职业相关大事件
export const professionBigEvents = {
  farmer: [
    {
      title: '丰收年',
      description: '这一年风调雨顺，庄稼大丰收！',
      effect: { health: 0, wealth: 35, happiness: 20 },
      probability: 1.0
    },
    {
      title: '自然灾害',
      description: '遭遇了洪涝/干旱/虫灾，损失惨重。',
      effect: { health: -10, wealth: -40, happiness: -25 },
      probability: 0.8
    },
    {
      title: '土地改革',
      description: '农村土地政策调整，你受益了。',
      effect: { health: 0, wealth: 25, happiness: 15 },
      probability: 0.7
    },
    {
      title: '进城务工',
      description: '你决定去城市打工，见识了更大的世界。',
      effect: { health: -5, wealth: 30, happiness: 10 },
      probability: 0.6
    },
    {
      title: '新型农业',
      description: '你学习使用了新型农业技术，效率大大提高。',
      effect: { health: 0, wealth: 25, happiness: 15 },
      probability: 0.7
    }
  ],
  worker: [
    {
      title: '工厂先进',
      description: '你被评为工厂的先进工作者。',
      effect: { health: 0, wealth: 15, happiness: 20 },
      probability: 0.8
    },
    {
      title: '工厂事故',
      description: '工厂发生了一起安全事故，你受了伤。',
      effect: { health: -30, wealth: -15, happiness: -15 },
      probability: 0.5
    },
    {
      title: '国企改革',
      description: '国企改革浪潮中，你的工厂被合并了。',
      effect: { health: -5, wealth: -20, happiness: -15 },
      probability: 0.6
    },
    {
      title: '技术革新',
      description: '你掌握了新技术，被提拔为技术骨干。',
      effect: { health: 0, wealth: 20, happiness: 20 },
      probability: 0.8
    },
    {
      title: '下岗',
      description: '工厂裁员，你下岗了。',
      effect: { health: -10, wealth: -30, happiness: -25 },
      probability: 0.6
    }
  ],
  doctor: [
    {
      title: '妙手回春',
      description: '你成功救治了一位危重病人，家属感激涕零。',
      effect: { health: 5, wealth: 20, happiness: 25 },
      probability: 0.9
    },
    {
      title: '医患纠纷',
      description: '你遇到了一起医患纠纷，很困扰。',
      effect: { health: -10, wealth: -10, happiness: -20 },
      probability: 0.6
    },
    {
      title: '职称晋升',
      description: '你晋升为副主任医师。',
      effect: { health: 0, wealth: 25, happiness: 20 },
      probability: 0.7
    },
    {
      title: '攻克难题',
      description: '你攻克了一个医学难题，发表了论文。',
      effect: { health: 0, wealth: 15, happiness: 25 },
      probability: 0.6
    },
    {
      title: '援外医疗',
      description: '你参加了援外医疗队，在异国他乡救死扶伤。',
      effect: { health: -10, wealth: 20, happiness: 20 },
      probability: 0.4
    }
  ],
  teacher: [
    {
      title: '桃李满天下',
      description: '你的学生考上了名校，你深感欣慰。',
      effect: { health: 5, wealth: 10, happiness: 30 },
      probability: 0.8
    },
    {
      title: '教学比赛',
      description: '你在教学比赛中获得了一等奖。',
      effect: { health: 0, wealth: 15, happiness: 25 },
      probability: 0.7
    },
    {
      title: '职称评定',
      description: '你评上了高级教师。',
      effect: { health: 0, wealth: 20, happiness: 20 },
      probability: 0.7
    },
    {
      title: '师生情',
      description: '毕业多年的学生来看望你，你很感动。',
      effect: { health: 0, wealth: 0, happiness: 25 },
      probability: 0.8
    },
    {
      title: '支教',
      description: '你去偏远地区支教，虽然艰苦但很有意义。',
      effect: { health: -10, wealth: -5, happiness: 20 },
      probability: 0.5
    }
  ],
  soldier: [
    {
      title: '立功',
      description: '你在一次任务中立了功，获得了勋章。',
      effect: { health: 0, wealth: 15, happiness: 25 },
      probability: 0.6
    },
    {
      title: '抗洪抢险',
      description: '你参与了抗洪抢险，保护了人民生命财产。',
      effect: { health: -15, wealth: 0, happiness: 30 },
      probability: 0.7
    },
    {
      title: '演习',
      description: '你参加了大规模军事演习，表现优异。',
      effect: { health: -5, wealth: 10, happiness: 15 },
      probability: 0.8
    },
    {
      title: '退伍',
      description: '你光荣退伍，结束了军旅生涯。',
      effect: { health: 10, wealth: 0, happiness: 10 },
      probability: 1.0
    },
    {
      title: '边境巡逻',
      description: '你在边境巡逻，保卫国家安全。',
      effect: { health: -10, wealth: 10, happiness: 15 },
      probability: 0.7
    }
  ],
  policeman: [
    {
      title: '破案',
      description: '你成功破获了一起重大案件。',
      effect: { health: 0, wealth: 15, happiness: 25 },
      probability: 0.8
    },
    {
      title: '表彰',
      description: '你被授予"人民满意警察"荣誉称号。',
      effect: { health: 0, wealth: 20, happiness: 25 },
      probability: 0.6
    },
    {
      title: '负伤',
      description: '在执行任务时你负了伤。',
      effect: { health: -25, wealth: -5, happiness: -15 },
      probability: 0.5
    },
    {
      title: '救民于危难',
      description: '你从火场/水中救出了群众。',
      effect: { health: -10, wealth: 0, happiness: 30 },
      probability: 0.6
    },
    {
      title: '社区民警',
      description: '你成为了一名社区民警，和居民关系融洽。',
      effect: { health: 0, wealth: 10, happiness: 20 },
      probability: 0.8
    }
  ],
  businessman: [
    {
      title: '第一桶金',
      description: '你赚到了人生的第一桶金！',
      effect: { health: 0, wealth: 40, happiness: 25 },
      probability: 0.5
    },
    {
      title: '商业危机',
      description: '你的企业遇到了危机，濒临破产。',
      effect: { health: -15, wealth: -45, happiness: -30 },
      probability: 0.6
    },
    {
      title: '上市',
      description: '你的公司成功上市！',
      effect: { health: -5, wealth: 60, happiness: 35 },
      probability: 0.3
    },
    {
      title: '反倾销调查',
      description: '你遭遇了商业对手的反倾销调查。',
      effect: { health: -5, wealth: -25, happiness: -15 },
      probability: 0.5
    },
    {
      title: '慈善捐赠',
      description: '你做了一笔慈善捐赠，回馈社会。',
      effect: { health: 0, wealth: -20, happiness: 25 },
      probability: 0.7
    }
  ],
  scientist: [
    {
      title: '论文发表',
      description: '你的论文发表在了国际顶级期刊上。',
      effect: { health: 0, wealth: 15, happiness: 30 },
      probability: 0.6
    },
    {
      title: '科研突破',
      description: '你的研究取得了突破性进展！',
      effect: { health: 0, wealth: 20, happiness: 35 },
      probability: 0.4
    },
    {
      title: '获得奖项',
      description: '你获得了国家自然科学奖。',
      effect: { health: 0, wealth: 25, happiness: 30 },
      probability: 0.4
    },
    {
      title: '科研经费',
      description: '你申请到了大额科研经费。',
      effect: { health: 0, wealth: 30, happiness: 20 },
      probability: 0.5
    },
    {
      title: '学术交流',
      description: '你出国参加学术会议，收获颇丰。',
      effect: { health: 0, wealth: -10, happiness: 20 },
      probability: 0.6
    }
  ]
}

// 获取适合当前年龄的大事件列表
export const getAvailableBigEvents = (age) => {
  const available = [...bigEvents.universal]

  // 添加适合当前年龄的事件
  Object.keys(bigEvents.byAge).forEach(ageThreshold => {
    if (age >= parseInt(ageThreshold)) {
      available.push(...bigEvents.byAge[ageThreshold])
    }
  })

  return available
}

// 根据职业获取大事件
export const getProfessionBigEvents = (professionId) => {
  return professionBigEvents[professionId] || []
}

// 根据性格调整事件触发概率
export const adjustProbabilityByPersonality = (baseProbability, personalityId) => {
  const personalityBonus = {
    brave: { risk: 1.5, normal: 1.0 },        // 勇敢的人更容易遇到风险事件
    cautious: { risk: 0.6, normal: 1.2 },     // 谨慎的人风险事件少，好事件也少
    optimistic: { good: 1.3, bad: 0.7 },      // 乐观的人更容易遇到好事
    pessimist: { good: 0.7, bad: 1.3 },        // 悲观的人更容易遇到坏事
    carefree: { good: 1.2, bad: 0.8 }          // 豁达的人更容易遇到好事
  }

  const bonus = personalityBonus[personalityId]
  if (!bonus) return baseProbability

  // 这里返回调整后的概率（简化处理）
  return baseProbability * (bonus.normal || 1.0)
}

// 根据天赋调整事件触发
export const adjustByTalent = (event, talents) => {
  const talentEventMap = {
    smart: ['获奖', '科研突破', '攻克难题', '论文发表'],
    diligent: ['晋升', '事业', '丰收年'],
    musical: ['获奖'],
    athletic: ['获奖'],
    brave: ['见义勇为', '立功', '救民于危难'],
    social: ['结婚', '朋友', '社交'],
    leadership: ['晋升', '事业', '公司上市'],
    business: ['第一桶金', '商业危机', '上市', '投资成功'],
    lucky: ['中彩票', '财富机遇']
  }

  for (const talent of talents) {
    const talentKey = talent.id || talent
    const eventTitles = talentEventMap[talentKey]
    if (eventTitles && eventTitles.includes(event.title)) {
      // 有相关天赋的人更容易触发相关事件
      event.probability = (event.probability || 1.0) * 1.5
    }
  }

  return event
}
