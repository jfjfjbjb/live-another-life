// 大学数据
export const universities = [
  { name: '北京大学', alias: '北大', type: '综合', region: '北京', rank: '顶尖', description: '中国最著名的高等学府之一' },
  { name: '清华大学', alias: '清华', type: '理工', region: '北京', rank: '顶尖', description: '中国工科排名第一的大学' },
  { name: '复旦大学', alias: '复旦', type: '综合', region: '上海', rank: '顶尖', description: '江南第一名校' },
  { name: '上海交通大学', alias: '上交', type: '理工', region: '上海', rank: '顶尖', description: '工科实力雄厚' },
  { name: '浙江大学', alias: '浙大', type: '综合', region: '浙江', rank: '顶尖', description: '综合实力全国前三' },
  { name: '南京大学', alias: '南大', type: '综合', region: '江苏', rank: '顶尖', description: '历史悠久的百年名校' },
  { name: '中国人民大学', alias: '人大', type: '人文社科', region: '北京', rank: '顶尖', description: '人文社会科学见长' },
  { name: '武汉大学', alias: '武大', type: '综合', region: '湖北', rank: '一流', description: '樱花烂漫的美丽校园' },
  { name: '中山大学', alias: '中大', type: '综合', region: '广东', rank: '一流', description: '华南地区知名学府' },
  { name: '华中科技大学', alias: '华科', type: '理工', region: '湖北', rank: '一流', description: '工科实力强劲' },
  { name: '四川大学', alias: '川大', type: '综合', region: '四川', rank: '一流', description: '西南地区综合性大学' },
  { name: '西安交通大学', alias: '西交', type: '理工', region: '陕西', rank: '一流', description: '老牌工科名校' },
  { name: '同济大学', alias: '同济', type: '理工', region: '上海', rank: '一流', description: '建筑土木全国领先' },
  { name: '哈尔滨工业大学', alias: '哈工大', type: '理工', region: '黑龙江', rank: '一流', description: '航天工程领域的翘楚' },
  { name: '北京航空航天大学', alias: '北航', type: '理工', region: '北京', rank: '一流', description: '航空宇航全国第一' },
  { name: '南开大学', alias: '南开', type: '综合', region: '天津', rank: '一流', description: '数学化学著称' },
  { name: '天津大学', alias: '天大', type: '理工', region: '天津', rank: '一流', description: '化工工程一流' },
  { name: '东南大学', alias: '东大', type: '理工', region: '江苏', rank: '一流', description: '建筑交通赫赫有名' },
  { name: '厦门大学', alias: '厦大', type: '综合', region: '福建', rank: '一流', description: '海滨花园式大学' },
  { name: '中南大学', alias: '中南', type: '综合', region: '湖南', rank: '一流', description: '医学铁路特色鲜明' },
  { name: '北京师范大学', alias: '北师大', type: '师范', region: '北京', rank: '一流', description: '师范类院校之首' },
  { name: '华东师范大学', alias: '华东师大', type: '师范', region: '上海', rank: '一流', description: '教育学心理学见长' },
  { name: '电子科技大学', alias: '电子科大', type: '理工', region: '四川', rank: '一流', description: '电子信息全国领先' },
  { name: '大连理工大学', alias: '大工', type: '理工', region: '辽宁', rank: '一流', description: '力学化工传统强项' },
  { name: '华南理工大学', alias: '华工', type: '理工', region: '广东', rank: '一流', description: '轻工食品全国第一' },
  { name: '北京理工大学', alias: '北理工', type: '理工', region: '北京', rank: '一流', description: '兵器科技全国领先' },
  { name: '南京航空航天大学', alias: '南航', type: '理工', region: '江苏', rank: '优秀', description: '航空宇航特色大学' },
  { name: '西安电子科技大学', alias: '西电', type: '理工', region: '陕西', rank: '优秀', description: '电子信息领域名校' },
  { name: '重庆大学', alias: '重大', type: '综合', region: '重庆', rank: '优秀', description: '电气机械传统强校' },
  { name: '吉林大学', alias: '吉大', type: '综合', region: '吉林', rank: '优秀', description: '汽车工程全国前列' },
  { name: '山东大学', alias: '山大', type: '综合', region: '山东', rank: '优秀', description: '文史哲传统强项' },
  { name: '兰州大学', alias: '兰大', type: '综合', region: '甘肃', rank: '优秀', description: '草学化学西北领先' },
  { name: '湖南大学', alias: '湖大', type: '综合', region: '湖南', rank: '优秀', description: '土木工程传统名校' },
  { name: '暨南大学', alias: '暨大', type: '综合', region: '广东', rank: '优秀', description: '华侨最高学府' },
  { name: '苏州大学', alias: '苏大', type: '综合', region: '江苏', rank: '良好', description: '丝绸工程特色鲜明' },
  { name: '上海大学', alias: '上大', type: '综合', region: '上海', rank: '良好', description: '机械自动化见长' },
  { name: '南京师范大学', alias: '南师大', type: '师范', region: '江苏', rank: '良好', description: '教育资源丰富' },
  { name: '浙江工业大学', alias: '浙工大', type: '理工', region: '浙江', rank: '良好', description: '化工机械实力不错' },
  { name: '深圳大学', alias: '深大', type: '综合', region: '广东', rank: '良好', description: '改革开放前沿名校' },
  // 二本院校
  { name: '安徽大学', alias: '安大', type: '综合', region: '安徽', rank: '二本', description: '安徽省属重点综合大学' },
  { name: '河北大学', alias: '河大', type: '综合', region: '河北', rank: '二本', description: '河北省属综合大学' },
  { name: '广西大学', alias: '广大', type: '综合', region: '广西', rank: '二本', description: '广西最高学府' },
  { name: '西华大学', alias: '西华', type: '综合', region: '四川', rank: '二本', description: '四川省属重点大学' },
  { name: '河南工业大学', alias: '河工大', type: '理工', region: '河南', rank: '二本', description: '粮食油脂特色明显' },
  { name: '山西大学', alias: '山大', type: '综合', region: '山西', rank: '二本', description: '山西省属综合大学' },
  { name: '贵州大学', alias: '贵大', type: '综合', region: '贵州', rank: '二本', description: '贵州省最大综合大学' },
  { name: '云南大学', alias: '云大', type: '综合', region: '云南', rank: '二本', description: '云南省综合性大学' },
  { name: '江西师范大学', alias: '江西师大', type: '师范', region: '江西', rank: '二本', description: '江西省属重点师范大学' },
  { name: '湖南师范大学', alias: '湖南师大', type: '师范', region: '湖南', rank: '二本', description: '湖南省属重点师范大学' },
  { name: '首都师范大学', alias: '首师大', type: '师范', region: '北京', rank: '二本', description: '北京市属师范大学' },
  { name: '广东工业大学', alias: '广工', type: '理工', region: '广东', rank: '二本', description: '广东省属理工大学' },
  { name: '成都大学', alias: '成大', type: '综合', region: '四川', rank: '二本', description: '成都市属综合大学' },
  { name: '武汉工程大学', alias: '武工程', type: '理工', region: '湖北', rank: '二本', description: '化工石化特色大学' },
  // 三本/民办院校
  { name: '吉林财经大学', alias: '吉财大', type: '财经', region: '吉林', rank: '三本', description: '东北地区财经类大学' },
  { name: '西安培华学院', alias: '培华', type: '综合', region: '陕西', rank: '三本', description: '民办综合院校' },
  { name: '武汉学院', alias: '武汉学院', type: '综合', region: '湖北', rank: '三本', description: '民办综合院校' },
  { name: '广州商学院', alias: '广商', type: '商科', region: '广东', rank: '三本', description: '民办商科院校' },
  { name: '北京工商大学嘉华学院', alias: '嘉华', type: '综合', region: '北京', rank: '三本', description: '民办独立院校' },
  // 高职高专
  { name: '深圳职业技术大学', alias: '深职大', type: '职业', region: '广东', rank: '高职', description: '国内领先的职业技术大学' },
  { name: '金华职业技术大学', alias: '金职院', type: '职业', region: '浙江', rank: '高职', description: '国家示范性高职院校' },
  { name: '义乌工商职业技术大学', alias: '义乌工商', type: '职业', region: '浙江', rank: '高职', description: '商贸类职业院校' },
  { name: '顺德职业技术学院', alias: '顺职院', type: '职业', region: '广东', rank: '高职', description: '粤港澳大湾区知名职校' },
  { name: '重庆电子工程职业学院', alias: '重电院', type: '职业', region: '重庆', rank: '高职', description: '西部电子信息职业院校' },
  { name: '北京财贸职业学院', alias: '北财贸', type: '职业', region: '北京', rank: '高职', description: '商贸财经类职业学院' },
  { name: '成都航空职业技术学院', alias: '成航院', type: '职业', region: '四川', rank: '高职', description: '航空类职业院校' },
  { name: '武汉职业技术学院', alias: '武职院', type: '职业', region: '湖北', rank: '高职', description: '综合性高职院校' },
  // 更多二本院校（扩充）
  { name: '海南大学', alias: '海大', type: '综合', region: '海南', rank: '二本', description: '海南省综合性大学' },
  { name: '石河子大学', alias: '石大', type: '综合', region: '新疆', rank: '二本', description: '新疆生产建设兵团高校' },
  { name: '湖北师范大学', alias: '湖北师大', type: '师范', region: '湖北', rank: '二本', description: '湖北省属师范类大学' },
  { name: '四川师范大学', alias: '川师大', type: '师范', region: '四川', rank: '二本', description: '四川省属重点师范大学' },
  { name: '安徽工业大学', alias: '安工大', type: '理工', region: '安徽', rank: '二本', description: '以工为主的省属重点大学' },
  { name: '河南科技大学', alias: '河科大', type: '综合', region: '河南', rank: '二本', description: '河南省属综合性大学' },
  { name: '湖南科技大学', alias: '湖科大', type: '综合', region: '湖南', rank: '二本', description: '湖南省属综合性大学' },
  { name: '南华大学', alias: '南华', type: '综合', region: '湖南', rank: '二本', description: '湖南省属综合性大学' },
  { name: '浙江农林大学', alias: '浙农林', type: '农林', region: '浙江', rank: '二本', description: '以农林为特色的省属大学' },
  { name: '江苏大学', alias: '江大', type: '理工', region: '江苏', rank: '二本', description: '以工为主的省属综合大学' },
  { name: '扬州大学', alias: '扬大', type: '综合', region: '江苏', rank: '二本', description: '综合性省属大学' },
  { name: '广西师范大学', alias: '广西师大', type: '师范', region: '广西', rank: '二本', description: '广西重点师范大学' },
  { name: '桂林理工大学', alias: '桂工', type: '理工', region: '广西', rank: '二本', description: '广西理工类省属大学' },
  { name: '福建师范大学', alias: '福建师大', type: '师范', region: '福建', rank: '二本', description: '福建省属重点师范大学' },
  { name: '江西科技师范大学', alias: '江科师大', type: '师范', region: '江西', rank: '二本', description: '职教师资培训特色大学' },
  { name: '沈阳工业大学', alias: '沈工大', type: '理工', region: '辽宁', rank: '二本', description: '辽宁省属理工类大学' },
  { name: '天津商业大学', alias: '天商大', type: '综合', region: '天津', rank: '二本', description: '天津市属商贸类大学' },
  { name: '西安工业大学', alias: '西安工大', type: '理工', region: '陕西', rank: '二本', description: '陕西省属理工类大学' },
  { name: '内蒙古大学', alias: '内大', type: '综合', region: '内蒙古', rank: '二本', description: '内蒙古自治区综合性大学' },
  { name: '兰州工业学院', alias: '兰工院', type: '理工', region: '甘肃', rank: '二本', description: '甘肃省属工科院校' },
  // 更多三本/民办院校（扩充）
  { name: '成都文理学院', alias: '成文理', type: '综合', region: '四川', rank: '三本', description: '民办综合院校' },
  { name: '重庆人文科技学院', alias: '重庆人文', type: '综合', region: '重庆', rank: '三本', description: '民办综合院校' },
  { name: '武汉工商学院', alias: '武工商', type: '商科', region: '湖北', rank: '三本', description: '民办商科院校' },
  { name: '广州城市理工学院', alias: '广城理工', type: '理工', region: '广东', rank: '三本', description: '民办理工类院校' },
  { name: '南京工业大学浦江学院', alias: '浦江学院', type: '工科', region: '江苏', rank: '三本', description: '民办独立学院' },
  { name: '郑州工业应用技术学院', alias: '郑工应技', type: '理工', region: '河南', rank: '三本', description: '民办应用型院校' },
  { name: '西安翻译学院', alias: '西译', type: '综合', region: '陕西', rank: '三本', description: '民办外语特色院校' },
  { name: '湖南涉外经济学院', alias: '湖南涉外', type: '综合', region: '湖南', rank: '三本', description: '民办综合性院校' },
  // 更多高职高专（扩充）
  { name: '常州信息职业技术学院', alias: '常信院', type: '职业', region: '江苏', rank: '高职', description: '国家双高计划高职院校' },
  { name: '南京信息职业技术学院', alias: '南信院', type: '职业', region: '江苏', rank: '高职', description: '信息类特色高职院校' },
  { name: '浙江机电职业技术大学', alias: '浙机电', type: '职业', region: '浙江', rank: '高职', description: '机电类国家示范性职校' },
  { name: '广东轻工职业技术大学', alias: '广轻工', type: '职业', region: '广东', rank: '高职', description: '轻工类特色职业院校' },
  { name: '四川建筑职业技术学院', alias: '四建院', type: '职业', region: '四川', rank: '高职', description: '建筑类高职院校' },
  { name: '山东职业学院', alias: '山职院', type: '职业', region: '山东', rank: '高职', description: '综合性高职院校' },
  { name: '天津轻工职业技术学院', alias: '天轻院', type: '职业', region: '天津', rank: '高职', description: '轻工类特色职业院校' },
  { name: '河南职业技术学院', alias: '河职院', type: '职业', region: '河南', rank: '高职', description: '综合性高职院校' },
  { name: '安徽职业技术学院', alias: '安职院', type: '职业', region: '安徽', rank: '高职', description: '综合性高职院校' },
  { name: '湖南铁道职业技术学院', alias: '湖铁院', type: '职业', region: '湖南', rank: '高职', description: '铁道特色职业院校' },
  { name: '西安航空职业技术学院', alias: '西航职', type: '职业', region: '陕西', rank: '高职', description: '航空类特色高职院校' },
  { name: '长春汽车工业高等专科学校', alias: '长汽专', type: '职业', region: '吉林', rank: '高职', description: '汽车工业特色职业院校' }
]

// 公司企业数据
export const companies = {
  // 互联网科技（1990年代后期起）
  internet: [
    { name: '阿里巴巴', type: '电商/科技', foundingYear: 1999, description: '全球领先的电子商务企业' },
    { name: '腾讯', type: '互联网/科技', foundingYear: 1998, description: '中国最大的互联网综合服务提供商' },
    { name: '百度', type: '互联网/搜索', foundingYear: 2000, description: '全球最大的中文搜索引擎' },
    { name: '字节跳动', type: '互联网/内容', foundingYear: 2012, description: '旗下有抖音、今日头条等产品' },
    { name: '美团', type: '本地生活', foundingYear: 2010, description: '中国领先的生活服务电子商务平台' },
    { name: '京东', type: '电商/物流', foundingYear: 1998, description: '中国第二大电商平台' },
    { name: '拼多多', type: '电商/社交', foundingYear: 2015, description: '社交电商新锐' },
    { name: '网易', type: '互联网/游戏', foundingYear: 1997, description: '中国领先的互联网技术公司' },
    { name: '新浪', type: '互联网/媒体', foundingYear: 1998, description: '中国四大门户网站之一' },
    { name: '搜狐', type: '互联网/媒体', foundingYear: 1998, description: '中国领先的互联网媒体' },
    { name: '小米', type: '硬件/互联网', foundingYear: 2010, description: '全球领先的智能硬件企业' },
    { name: '华为', type: '通信/科技', foundingYear: 1987, description: '全球领先的ICT基础设施和智能终端提供商' },
    { name: 'OPPO', type: '手机/科技', foundingYear: 2001, description: '全球领先的智能设备制造商' },
    { name: 'vivo', type: '手机/科技', foundingYear: 2009, description: '专注于智能手机领域的品牌' },
    { name: '联想', type: '电脑/科技', foundingYear: 1984, description: '全球知名的电脑制造商' },
    { name: '海尔', type: '家电/制造', foundingYear: 1989, description: '全球领先的家电品牌' },
    { name: '格力', type: '家电/制造', foundingYear: 1989, description: '中国空调行业的领军企业' },
    { name: '比亚迪', type: '汽车/新能源', foundingYear: 1995, description: '中国新能源汽车领导者' }
  ],
  // 国有企业（1940年代起，工商银行等1984年后才有）
  soe: [
    { name: '中国石油', type: '能源/国企', foundingYear: 1988, description: '中国最大的油气生产商和供应商' },
    { name: '中国石化', type: '能源/国企', foundingYear: 1983, description: '中国最大的炼油化工企业' },
    { name: '中国建筑', type: '建筑/国企', foundingYear: 1982, description: '全球最大的投资建设集团' },
    { name: '中国中铁', type: '基建/国企', foundingYear: 1950, description: '中国铁路工程总公司' },
    { name: '中国铁建', type: '基建/国企', foundingYear: 1950, description: '中国领先的建筑企业' },
    { name: '中国交通', type: '基建/国企', foundingYear: 1950, description: '中国交通建设集团有限公司' },
    { name: '国家电网', type: '电力/国企', foundingYear: 2002, description: '全球最大的公用事业企业' },
    { name: '中国银行', type: '金融/国企', foundingYear: 1912, description: '中国四大国有商业银行之一' },
    { name: '中国工商银行', type: '金融/国企', foundingYear: 1984, description: '全球最大的商业银行' },
    { name: '中国建设银行', type: '金融/国企', foundingYear: 1954, description: '中国领先的商业银行' },
    { name: '中国农业银行', type: '金融/国企', foundingYear: 1951, description: '服务三农的国有大行' },
    { name: '中国电信', type: '通信/国企', foundingYear: 1995, description: '中国主要的电信运营商' },
    { name: '中国移动', type: '通信/国企', foundingYear: 2000, description: '全球最大的移动通信运营商' },
    { name: '中国联通', type: '通信/国企', foundingYear: 1994, description: '中国主要的电信运营商' },
    { name: '中国商飞', type: '航空/国企', foundingYear: 2008, description: '国产大飞机C919制造商' },
    { name: '中航工业', type: '航空/国企', foundingYear: 1999, description: '中国航空工业集团公司' }
  ],
  // 金融机构（1980年代起）
  finance: [
    { name: '平安保险', type: '保险/金融', foundingYear: 1988, description: '中国最大的综合金融集团' },
    { name: '中国人寿', type: '保险/金融', foundingYear: 1949, description: '中国最大的寿险公司' },
    { name: '招商银行', type: '银行/金融', foundingYear: 1987, description: '中国领先的股份制商业银行' },
    { name: '浦发银行', type: '银行/金融', foundingYear: 1992, description: '上海浦东发展银行' },
    { name: '兴业银行', type: '银行/金融', foundingYear: 1988, description: '全国性股份制商业银行' },
    { name: '中信证券', type: '证券/金融', foundingYear: 1995, description: '中国最大的证券公司' },
    { name: '东方财富', type: '互联网金融', foundingYear: 1997, description: '中国领先的互联网财经门户' },
    { name: '蚂蚁集团', type: '金融科技', foundingYear: 2014, description: '阿里旗下的金融科技平台' }
  ],
  // 制造业（1980年代起）
  manufacturing: [
    { name: '宝武钢铁', type: '钢铁/制造', foundingYear: 2016, description: '中国最大的钢铁企业' },
    { name: '沙钢集团', type: '钢铁/制造', foundingYear: 1975, description: '中国最大的民营钢铁企业' },
    { name: '中车集团', type: '轨道交通/制造', foundingYear: 2015, description: '全球最大的轨道交通装备制造商' },
    { name: '中船重工', type: '船舶/制造', foundingYear: 1999, description: '中国船舶重工集团公司' },
    { name: '三一重工', type: '机械/制造', foundingYear: 1989, description: '全球工程机械制造商50强' },
    { name: '中联重科', type: '机械/制造', foundingYear: 1992, description: '中国工程机械领军企业' },
    { name: '徐工集团', type: '机械/制造', foundingYear: 1989, description: '中国工程机械行业的前列企业' },
    { name: '美的集团', type: '家电/制造', foundingYear: 1968, description: '全球知名的家电暖通空调集团' },
    { name: '海信集团', type: '家电/制造', foundingYear: 1969, description: '中国主要的家电制造商' },
    { name: 'TCL', type: '家电/制造', foundingYear: 1981, description: '全球化的智能产品制造企业' }
  ],
  // 房地产（1990年代起）
  realEstate: [
    { name: '万科地产', type: '房地产', foundingYear: 1984, description: '中国最大的房地产开发企业' },
    { name: '碧桂园', type: '房地产', foundingYear: 1992, description: '中国最大的新型城镇化住宅开发商' },
    { name: '中国恒大', type: '房地产', foundingYear: 1996, description: '中国规模最大的房地产开发企业' },
    { name: '融创中国', type: '房地产', foundingYear: 2003, description: '中国领先的房地产开发企业' },
    { name: '保利发展', type: '房地产/国企', foundingYear: 1992, description: '中国保利集团旗下的房地产开发公司' },
    { name: '龙湖集团', type: '房地产', foundingYear: 1993, description: '中国领先的房地产开发企业' },
    { name: '中海地产', type: '房地产/国企', foundingYear: 1979, description: '中国建筑旗下的房地产开发公司' },
    { name: '华润置地', type: '房地产/国企', foundingYear: 1994, description: '华润集团旗下的地产业务平台' }
  ],
  // 医疗健康
  healthcare: [
    { name: '恒瑞医药', type: '医药/健康', foundingYear: 1970, description: '中国最大的抗肿瘤药物研究企业' },
    { name: '药明康德', type: '医药/健康', foundingYear: 2000, description: '全球领先的CRO/CDMO企业' },
    { name: '迈瑞医疗', type: '医疗器械', foundingYear: 1991, description: '中国最大的医疗器械制造商' },
    { name: '爱尔眼科', type: '医疗/服务', foundingYear: 2003, description: '全球最大的眼科连锁医疗机构' },
    { name: '通策医疗', type: '医疗/服务', foundingYear: 1995, description: '国内口腔医疗服务的领先企业' },
    { name: '云南白药', type: '医药/健康', foundingYear: 1971, description: '中国中医药行业的龙头企业' },
    { name: '同仁堂', type: '医药/健康', foundingYear: 1669, description: '中华老字号中医药企业' },
    { name: '片仔癀', type: '医药/健康', foundingYear: 1956, description: '国家中药绝密配方企业' }
  ],
  // 教育服务（1990年代起）
  education: [
    { name: '新东方', type: '教育/培训', foundingYear: 1993, description: '中国最大的私立教育机构' },
    { name: '好未来', type: '教育/培训', foundingYear: 2003, description: '中国领先的智慧教育服务商' },
    { name: '学而思', type: '教育/培训', foundingYear: 2003, description: 'K12教育培训知名品牌' },
    { name: '中公教育', type: '教育/培训', foundingYear: 1999, description: '国内领先的多品类职业教育机构' }
  ],
  // 食品饮料
  foodBeverage: [
    { name: '茅台集团', type: '白酒/制造', foundingYear: 1951, description: '中国白酒行业的龙头企业' },
    { name: '五粮液', type: '白酒/制造', foundingYear: 1959, description: '中国浓香型白酒的代表' },
    { name: '伊利集团', type: '乳制品/快消', foundingYear: 1993, description: '中国最大的乳制品企业' },
    { name: '蒙牛乳业', type: '乳制品/快消', foundingYear: 1999, description: '中国领先的乳制品制造商' },
    { name: '娃哈哈', type: '饮料/快消', foundingYear: 1987, description: '中国最大的饮料生产企业' },
    { name: '农夫山泉', type: '饮料/快消', foundingYear: 1996, description: '中国饮用水的领先品牌' },
    { name: '康师傅', type: '食品/快消', foundingYear: 1992, description: '中国方便食品行业的龙头企业' },
    { name: '统一企业', type: '食品/快消', foundingYear: 1967, description: '台湾食品企业在大陆的子公司' }
  ],
  // 文化传媒
  media: [
    { name: '万达集团', type: '文化/地产', foundingYear: 1988, description: '全球领先的不动产企业' },
    { name: '华谊兄弟', type: '影视/传媒', foundingYear: 1994, description: '中国知名的影视制作公司' },
    { name: '光线传媒', type: '影视/传媒', foundingYear: 2000, description: '中国领先的民营传媒公司' },
    { name: '芒果超媒', type: '影视/传媒', foundingYear: 2005, description: '湖南广播电视台旗下新媒体' },
    { name: '分众传媒', type: '广告/传媒', foundingYear: 2003, description: '全球最大的电梯媒体集团' }
  ],
  // 交通物流（1990年代起）
  logistics: [
    { name: '顺丰速运', type: '物流/快递', foundingYear: 1993, description: '中国领先的快递物流综合服务商' },
    { name: '中通快递', type: '物流/快递', foundingYear: 2002, description: '中国快递行业的第一梯队' },
    { name: '圆通速递', type: '物流/快递', foundingYear: 2000, description: '国内大型现代快递企业' },
    { name: '韵达快递', type: '物流/快递', foundingYear: 1999, description: '中国快递行业知名企业' },
    { name: '中国外运', type: '物流/国企', foundingYear: 1951, description: '中国最大的国际货运代理公司' },
    { name: '中远海运', type: '航运/国企', foundingYear: 2016, description: '全球最大的航运公司' }
  ],
  // 灵活就业/平台经济（2010年代起）
  gig: [
    { name: '滴滴出行', type: '网约车/平台', foundingYear: 2012, description: '中国最大的网约车平台，自己当老板' },
    { name: '美团外卖', type: '外卖/平台', foundingYear: 2013, description: '中国最大的外卖平台，送餐骑手' },
    { name: '饿了么', type: '外卖/平台', foundingYear: 2008, description: '阿里旗下外卖平台，餐饮配送' },
    { name: '美团闪购', type: '即时零售/平台', foundingYear: 2018, description: '即时零售配送员' },
    { name: '货拉拉', type: '货运/平台', foundingYear: 2013, description: '同城货运平台，司机灵活接单' },
    { name: '满帮集团', type: '货运/平台', foundingYear: 2017, description: '公路货运信息平台，货车司机' },
    { name: '闲鱼', type: '二手/平台', foundingYear: 2014, description: '阿里旗下二手交易平台' },
    { name: '58同城', type: '生活服务', foundingYear: 2005, description: '分类信息平台，各类零工信息' },
    { name: '哈啰出行', type: '共享/平台', foundingYear: 2016, description: '共享单车和电动车平台，骑手兼职接单' },
    { name: '嘀嗒出行', type: '顺风车/平台', foundingYear: 2014, description: '顺风车平台，私家车顺风顺路接单' },
    { name: '快狗打车', type: '货运/平台', foundingYear: 2014, description: '同城货运平台，小货车司机接单' },
    { name: '叮咚买菜', type: '生鲜/平台', foundingYear: 2017, description: '前置仓生鲜配送，最后一公里骑手' },
    { name: '闪送', type: '即时配送/平台', foundingYear: 2014, description: '同城急配平台，专人直送' },
    { name: '京东物流', type: '物流/平台', foundingYear: 2007, description: '自建物流体系，快递员和仓储工人' }
  ],
  // 餐饮服务
  catering: [
    { name: '沙县小吃', type: '餐饮/个体', foundingYear: 1996, description: '遍布全国的国民小吃品牌' },
    { name: '兰州拉面馆', type: '餐饮/个体', foundingYear: 1980, description: '街头巷尾的拉面小馆' },
    { name: '华莱士', type: '快餐/连锁', foundingYear: 2001, description: '中国本土快餐连锁品牌' },
    { name: '正新鸡排', type: '小吃/连锁', foundingYear: 2000, description: '街边鸡排小吃连锁' },
    { name: '蜜雪冰城', type: '饮品/连锁', foundingYear: 1997, description: '下沉市场茶饮连锁品牌' },
    { name: '海底捞', type: '餐饮/连锁', foundingYear: 1994, description: '知名火锅连锁，服务员待遇不错' },
    { name: '呷哺呷哺', type: '餐饮/连锁', foundingYear: 1998, description: '台式小火锅连锁' },
    { name: '麦当劳', type: '快餐/连锁', foundingYear: 1990, description: '全球知名快餐连锁，店员工作' },
    { name: '肯德基', type: '快餐/连锁', foundingYear: 1987, description: '全球知名快餐连锁，后厨员工' },
    { name: '汉堡王', type: '快餐/连锁', foundingYear: 2005, description: '汉堡连锁品牌，门店服务员' },
    { name: '瑞幸咖啡', type: '咖啡/连锁', foundingYear: 2017, description: '国产咖啡连锁品牌，咖啡师' },
    { name: '喜茶', type: '茶饮/连锁', foundingYear: 2012, description: '网红茶饮品牌，调茶员' },
    { name: '古茗奶茶', type: '茶饮/连锁', foundingYear: 2010, description: '下沉市场奶茶连锁，门店员工' },
    { name: '周黑鸭', type: '卤味/连锁', foundingYear: 1997, description: '卤味食品连锁门店员工' },
    { name: '老乡鸡', type: '快餐/连锁', foundingYear: 2003, description: '中式快餐连锁，服务员' }
  ],
  // 零售服务
  retail: [
    { name: '沃尔玛', type: '超市/零售', foundingYear: 1996, description: '全球最大的零售企业' },
    { name: '大润发', type: '超市/零售', foundingYear: 1996, description: '大陆知名超市连锁' },
    { name: '永辉超市', type: '超市/零售', foundingYear: 2001, description: '生鲜特色超市连锁' },
    { name: '盒马鲜生', type: '新零售/超市', foundingYear: 2016, description: '阿里旗下新零售超市' },
    { name: '名创优品', type: '零售/连锁', foundingYear: 2013, description: '生活家居设计连锁' },
    { name: '屈臣氏', type: '美妆/零售', foundingYear: 1989, description: '亚洲知名健与美零售连锁' },
    { name: '全家便利店', type: '便利店/零售', foundingYear: 2004, description: '台系便利店连锁，收银员工作' },
    { name: '罗森便利店', type: '便利店/零售', foundingYear: 1996, description: '日系便利店连锁，店员工作' },
    { name: '物美超市', type: '超市/零售', foundingYear: 1994, description: '北方区域大型连锁超市' },
    { name: '步步高超市', type: '超市/零售', foundingYear: 1995, description: '中南地区知名连锁超市' },
    { name: '华润万家', type: '超市/零售', foundingYear: 2003, description: '华润集团旗下超市连锁' },
    { name: '优衣库', type: '服装/零售', foundingYear: 2002, description: '日系休闲服装连锁，店员工作' }
  ],
  // 普通工厂/制造（1980年代起）
  factory: [
    { name: '富士康', type: '代工/制造', foundingYear: 1988, description: '全球最大的电子代工厂' },
    { name: '立讯精密', type: '电子/制造', foundingYear: 2004, description: '苹果代工合作伙伴' },
    { name: '伯恩光学', type: '光学/制造', foundingYear: 2008, description: '手机玻璃面板制造商' },
    { name: '比亚迪代工厂', type: '代工/制造', foundingYear: 1995, description: '电子代工生产线工人' },
    { name: '当地纺织厂', type: '纺织/制造', foundingYear: 1980, description: '普通纺织制造企业' },
    { name: '当地食品加工厂', type: '食品/制造', foundingYear: 1980, description: '食品包装加工生产线' },
    { name: '当地汽配厂', type: '汽配/制造', foundingYear: 1985, description: '汽车零部件加工生产线' },
    { name: '当地制鞋厂', type: '鞋业/制造', foundingYear: 1980, description: '制鞋流水线，按双计件' },
    { name: '当地玩具厂', type: '玩具/制造', foundingYear: 1985, description: '玩具组装生产线，出口为主' },
    { name: '当地印刷厂', type: '印刷/制造', foundingYear: 1980, description: '印刷装订生产线工人' },
    { name: '当地电子厂', type: '电子/制造', foundingYear: 1990, description: '电子元件组装车间' },
    { name: '当地纸箱厂', type: '包装/制造', foundingYear: 1980, description: '纸箱包装加工工人' },
    { name: '当地服装厂', type: '服装/制造', foundingYear: 1980, description: '服装流水线缝纫工' }
  ],
  // 建筑工地
  construction: [
    { name: '中建三局', type: '建筑/国企', foundingYear: 1965, description: '中国建筑集团旗下施工企业' },
    { name: '万达建设', type: '建筑/民企', foundingYear: 1988, description: '万达集团旗下建设公司' },
    { name: '当地建筑队', type: '建筑/小微', foundingYear: 1980, description: '本地承包工程的施工队' },
    { name: '市政工程队', type: '市政/建筑', foundingYear: 1980, description: '城市道路市政施工' },
    { name: '当地装修队', type: '装修/建筑', foundingYear: 1990, description: '家庭和商业室内装修施工队' },
    { name: '钢结构安装队', type: '钢结构/建筑', foundingYear: 1990, description: '厂房钢结构安装施工队' },
    { name: '当地桩基队', type: '基础/建筑', foundingYear: 1990, description: '建筑基础桩基施工队' },
    { name: '苏中建设集团', type: '建筑/民企', foundingYear: 1985, description: '民营建筑施工总承包企业' },
    { name: '当地拆迁队', type: '拆迁/建筑', foundingYear: 2000, description: '旧房拆迁和改造施工队' }
  ],
  // 计划经济时代单位（1949-1970年代）
  plannedEconomy: [
    { name: '国营百货大楼', type: '商业/国营', foundingYear: 1950, description: '城市中心的大型国营零售商店' },
    { name: '供销合作社', type: '商业/集体', foundingYear: 1950, description: '城乡物资供应的国有合作组织' },
    { name: '人民公社', type: '农业/集体', foundingYear: 1958, description: '农村集体经济组织' },
    { name: '国营粮站', type: '粮食/国营', foundingYear: 1953, description: '国家粮食统购统销的执行单位' },
    { name: '国营棉纺厂', type: '纺织/国营', foundingYear: 1950, description: '大型国有纺织企业' },
    { name: '国营机械厂', type: '机械/国营', foundingYear: 1950, description: '国有大型机械制造厂' },
    { name: '国营煤矿', type: '能源/国营', foundingYear: 1950, description: '国家经营的煤矿企业' },
    { name: '国营糖厂', type: '食品/国营', foundingYear: 1950, description: '国有制糖企业' },
    { name: '当地信用社', type: '金融/集体', foundingYear: 1951, description: '农村信用合作社' },
    { name: '国营书店', type: '文化/国营', foundingYear: 1950, description: '国有图书发行单位' },
    { name: '国营邮局', type: '通信/国营', foundingYear: 1950, description: '国家邮政服务网点' },
    { name: '国营招待所', type: '服务/国营', foundingYear: 1950, description: '政府和国有单位招待旅客的场所' },
    { name: '国营理发店', type: '服务/国营', foundingYear: 1950, description: '国有理发服务网点' },
    { name: '国营照相馆', type: '服务/国营', foundingYear: 1950, description: '国有摄影服务单位' },
    { name: '街道合作社', type: '工业/集体', foundingYear: 1958, description: '城市街道组织的集体生产企业' },
    { name: '国营制药厂', type: '医药/国营', foundingYear: 1950, description: '国有医药生产企业' },
    { name: '国营被服厂', type: '服装/国营', foundingYear: 1950, description: '国有服装被褥生产企业' },
    { name: '地方国营农场', type: '农业/国营', foundingYear: 1950, description: '国有农业生产单位' }
  ],
  // 改革开放初期（1980-1989）
  reformEra: [
    { name: '乡镇企业', type: '企业/集体', foundingYear: 1980, description: '农村乡镇创办的集体或私营企业' },
    { name: '个体饭馆', type: '餐饮/个体', foundingYear: 1980, description: '改革开放后的第一批私营小饭馆' },
    { name: '私营企业', type: '商业/私营', foundingYear: 1980, description: '改革开放后涌现的民营企业' },
    { name: '贸易公司', type: '商业/私营', foundingYear: 1980, description: '从事商品流通的私营贸易企业' },
    { name: '知青商店', type: '商业/集体', foundingYear: 1980, description: '返城知青创办的集体所有制商店' },
    { name: '农贸市场', type: '商业/个体', foundingYear: 1980, description: '改革开放后恢复的农副产品市场' },
    { name: '批发档口', type: '商业/个体', foundingYear: 1983, description: '小商品批发摊位' },
    { name: '录像厅', type: '娱乐/个体', foundingYear: 1985, description: '80年代流行的录像带放映场所' },
    { name: '台球厅', type: '娱乐/个体', foundingYear: 1985, description: '街边台球娱乐场所' },
    { name: '歌舞厅', type: '娱乐/私营', foundingYear: 1986, description: '80年代末兴起的娱乐场所' },
    { name: '早点摊', type: '餐饮/个体', foundingYear: 1980, description: '街边早餐小吃摊位' },
    { name: '豆腐坊', type: '食品/个体', foundingYear: 1980, description: '个体经营的豆制品作坊' },
    { name: '裁缝店', type: '服务/个体', foundingYear: 1980, description: '私人裁缝服装店' },
    { name: '修理铺', type: '服务/个体', foundingYear: 1980, description: '自行车、电器修理小店' },
    { name: '美发店', type: '服务/个体', foundingYear: 1985, description: '个体美发美容院' },
    { name: '小卖部', type: '商业/个体', foundingYear: 1980, description: '居民区小型商店' },
    { name: '砖瓦厂', type: '建材/乡镇', foundingYear: 1980, description: '乡镇创办的建筑材料厂' },
    { name: '石灰窑', type: '建材/乡镇', foundingYear: 1980, description: '农村土法石灰生产企业' },
    { name: '运输队', type: '运输/集体', foundingYear: 1980, description: '乡镇组织的货物运输队伍' },
    { name: '采石场', type: '建材/乡镇', foundingYear: 1980, description: '乡镇集体的石料开采场' }
  ],
  // 90年代企业（1990-1999）
  ninetyEra: [
    { name: '早期网吧', type: '互联网/个体', foundingYear: 1995, description: '90年代兴起的互联网营业场所' },
    { name: '录像带出租店', type: '娱乐/个体', foundingYear: 1990, description: '录像带租借小店' },
    { name: '台球城', type: '娱乐/私营', foundingYear: 1992, description: '规模化经营的台球娱乐场所' },
    { name: '电子游戏厅', type: '娱乐/私营', foundingYear: 1990, description: '90年代流行的电子游戏场所' },
    { name: '美容美发店', type: '服务/私营', foundingYear: 1990, description: '私营美容美发沙龙' },
    { name: '干洗店', type: '服务/私营', foundingYear: 1992, description: '服装干洗服务店' },
    { name: '复印店', type: '服务/私营', foundingYear: 1990, description: '文件复印打印服务' },
    { name: '电脑培训班', type: '教育/私营', foundingYear: 1995, description: '90年代兴起的电脑技能培训' },
    { name: 'call机柜台', type: '通信/私营', foundingYear: 1995, description: '寻呼机销售和入网服务' },
    { name: '手机店', type: '通信/私营', foundingYear: 1997, description: '早期移动电话销售门店' },
    { name: '装饰公司', type: '服务/私营', foundingYear: 1995, description: '家庭装修设计公司' },
    { name: '房产中介', type: '服务/私营', foundingYear: 1998, description: '二手房买卖租赁中介' },
    { name: '广告公司', type: '服务/私营', foundingYear: 1994, description: '商业广告设计制作公司' },
    { name: '印刷厂', type: '印刷/私营', foundingYear: 1990, description: '私营印刷企业' },
    { name: '养殖场', type: '农业/私营', foundingYear: 1990, description: '规模化养殖企业' },
    { name: '食品厂', type: '食品/私营', foundingYear: 1992, description: '私营食品加工企业' },
    { name: '配件厂', type: '工业/私营', foundingYear: 1990, description: '机械零部件加工小厂' },
    { name: '塑料厂', type: '化工/私营', foundingYear: 1990, description: '塑料制品生产企业' },
    { name: '家具厂', type: '木材/私营', foundingYear: 1990, description: '板式家具制造企业' },
    { name: '门窗厂', type: '建材/私营', foundingYear: 1995, description: '金属门窗加工制作厂' }
  ]
}

// 获取随机大学（加权：越普通的学校概率越高，更贴近现实）
export const getRandomUniversity = () => {
  const rankWeight = { '顶尖': 1, '一流': 2, '优秀': 3, '良好': 4, '二本': 10, '三本': 8, '高职': 9 }
  const weightedList = []
  universities.forEach(u => {
    const w = rankWeight[u.rank] || 3
    for (let i = 0; i < w; i++) weightedList.push(u)
  })
  return weightedList[Math.floor(Math.random() * weightedList.length)]
}

// 获取随机公司（普通工作类别有更高权重，更贴近现实）
// year参数表示当前年份，用于过滤在公司创立之前的公司
export const getRandomCompany = (category = null, year = 2020) => {
  // 根据年份确定可用的公司类别
  const getAvailableCategories = (currentYear) => {
    const baseCategories = ['plannedEconomy'] // 计划经济时代单位始终可用
    if (currentYear >= 1980) baseCategories.push('reformEra')
    if (currentYear >= 1990) {
      baseCategories.push('internet', 'finance', 'manufacturing', 'realEstate', 'healthcare', 'education', 'foodBeverage', 'media', 'logistics', 'gig', 'catering', 'retail', 'factory', 'construction')
    }
    if (currentYear >= 1984) baseCategories.push('soe') // 工商银行成立于1984年
    return baseCategories
  }

  let companyList = []
  const availableCategories = getAvailableCategories(year)

  if (category && companies[category]) {
    // 指定类别时，只返回该类别中成立年份 <= year 的公司
    companyList = companies[category].filter(c => !c.foundingYear || c.foundingYear <= year)
  } else {
    // 合并所有可用类别的公司，根据年代加权
    const weightMap = {
      plannedEconomy: year < 1990 ? 5 : 0.5,  // 90前计划经济权重高，90后降低
      reformEra: year >= 1980 && year < 2000 ? 4 : 0.3,  // 80-99年代权重高
      ninetyEra: year >= 1990 && year < 2010 ? 3 : 0.3,  // 90-09年代权重高
      gig: year >= 2010 ? 3 : 0,
      factory: year >= 1980 ? 3 : 0,
      catering: year >= 1980 ? 2 : 0,
      retail: year >= 1990 ? 2 : 0,
      construction: year >= 1980 ? 2 : 0,
      internet: year >= 1998 ? 1 : 0,
      soe: year >= 1984 ? 1 : 0
    }

    availableCategories.forEach(key => {
      if (companies[key]) {
        const list = companies[key].filter(c => !c.foundingYear || c.foundingYear <= year)
        const w = weightMap[key] || 1
        for (let i = 0; i < w; i++) companyList.push(...list)
      }
    })
  }

  if (companyList.length === 0) {
    // 兜底：返回任意可用公司
    Object.values(companies).forEach(list => {
      companyList.push(...list.filter(c => !c.foundingYear || c.foundingYear <= year))
    })
  }

  return companyList[Math.floor(Math.random() * companyList.length)]
}

// 根据职业获取相关公司类别
export const getCompanyCategoryByProfession = (professionId) => {
  const categoryMap = {
    farmer: 'factory',
    worker: 'factory',
    engineer: 'internet',
    scientist: 'internet',
    doctor: 'healthcare',
    teacher: 'education',
    policeman: 'soe',
    soldier: 'soe',
    civilServant: 'soe',
    businessman: 'internet',
    it: 'internet',
    designer: 'internet',
    manager: 'internet',
    accountant: 'finance',
    lawyer: 'finance',
    driver: 'gig',
    courier: 'logistics',
    waiter: 'catering',
    chef: 'catering',
    shopOwner: 'retail',
    vendor: 'catering',
    guard: 'retail',
    cleaner: 'retail',
    bricklayer: 'construction',
    plumber: 'construction',
    carpenter: 'construction',
    electrician: 'construction',
    mechanic: 'gig',
    baker: 'catering',
    nanny: 'retail',
    fisherman: 'factory',
    individual: 'catering'
  }
  return categoryMap[professionId] || null
}

// 大事件数据
// effect: { health: ±数值, wealth: ±数值, happiness: ±数值 }
// probability: 触发概率倍率 (默认1.0，性格/天赋可影响)
// variants: 多个描述变体

export const bigEvents = {
  // universal 事件池：真正适用于所有年龄段的事件
  // 有年龄限制的事件已移至 byAge 对应年龄段
  universal: [
    {
      title: '意外',
      description: '发生了意外事件，对你的生活产生了重大影响。',
      effect: { health: -30, wealth: -20, happiness: -15 },
      probability: 0.15,
      minAge: 3, // 3岁以下不太可能发生此类意外
      variants: [
        '走在街上时，你不小心被一辆电动车撞倒，虽然没有大碍，但休养了整整一个月才恢复过来。',
        '下楼时一脚踩空，滚下了楼梯，摔断了肋骨，躺在床上养伤的日子让你深刻体会到健康的重要性。',
        '乘坐公交车时遭遇急刹，你被甩出座位造成了轻微脑震荡，医生让你静养两周。',
        '在厨房做饭时不慎打翻了热油锅，手臂被烫出了一片水泡，留下了淡淡的疤痕。'
      ]
    },
    {
      title: '健康危机',
      description: '你遭遇了健康问题，开始重视身体保健。',
      effect: { health: -25, wealth: -10, happiness: -10 },
      probability: 0.12,
      minAge: 15, // 青少年以下较少有这类健康问题
      variants: [
        '一次例行体检中，医生皱着眉头告诉你血压偏高，需要开始注意饮食和作息了。',
        '连续加班一个月后，你在工位上突然眼前一黑，被同事紧急送往医院，检查结果是严重贫血。',
        '你以为只是普通的感冒咳嗽，吃了半个月药也不见好，最终被诊断为肺炎，住院治疗了两周。',
        '胃痛折磨了你好几个月，做了胃镜检查后发现是胃溃疡，医生严肃地叮嘱你必须改变饮食习惯。'
      ]
    },
    {
      title: '搬迁',
      description: '你搬到了一个新的地方，开始了新的生活。',
      effect: { health: 0, wealth: -10, happiness: 5 },
      probability: 0.1,
      minAge: 3,
      variants: [
        '工作调动的原因，你带着家人离开了生活多年的城市，来到一个完全陌生的地方重新开始。',
        '为了孩子能上更好的学校，你们全家搬到了省城，租住在老旧但离学校很近的房子里。',
        '你用积蓄买了一套二手房，虽然不大，但终于在这个城市有了属于自己的家。',
        '房东突然要卖房，你被迫在一个月内重新找房子搬家，折腾得身心俱疲。'
      ]
    },
    {
      title: '获奖',
      description: '你获得了一个重要的奖项，得到了认可。',
      effect: { health: 0, wealth: 15, happiness: 25 },
      probability: 0.1,
      minAge: 6, // 上小学后才有获奖机会
      variants: [
        '你主持的项目在公司年会上获得了年度创新奖，老板亲自为你颁奖，同事们纷纷鼓掌祝贺。',
        '你撰写的论文在全国评比中获得了一等奖，奖金虽然不多，但这份荣誉让你激动了好久。',
        '孩子在学校举办的绘画比赛中获得了金奖，你看着奖状，感到无比骄傲。',
        '你被评为了单位的先进工作者，这份肯定让你觉得所有的付出都值了。'
      ]
    },
    {
      title: '疾病',
      description: '你生病了，需要一段时间来恢复。',
      effect: { health: -20, wealth: -15, happiness: -10 },
      probability: 0.15,
      minAge: 1,
      variants: [
        '一场突如其来的高烧让你在床上躺了一周，吃什么都没胃口，整个人瘦了一圈。',
        '换季时你没注意添衣，得了重感冒，咳嗽了整整一个月才彻底痊愈。',
        '你的牙疼了好几天，疼得整夜睡不着觉，最终不得不去医院拔掉了一颗蛀牙。',
        '皮肤突然过敏，红肿发痒，你不得不请假在家休养，用了很久的药才慢慢好转。'
      ]
    },
    {
      title: '交通事故',
      description: '你遭遇了一场交通事故，所幸没有大碍。',
      effect: { health: -35, wealth: -15, happiness: -20 },
      probability: 0.08,
      minAge: 12, // 12岁以下较少单独外出
      variants: [
        '过马路时被一辆闯红灯的汽车撞倒，虽然没有生命危险，但你休养了三个月才能正常行走。',
        '骑着电动车下班途中，被一辆转弯的面包车刮倒，膝盖擦伤严重，留下了永久的疤痕。',
        '你乘坐的出租车发生了追尾事故，你的额头撞在副驾驶座椅背上，起了个大包。',
        '下班路上骑自行车时不小心压到了地上的碎玻璃，连人带车摔倒在地，手掌被划了一道深深的口子。'
      ]
    },
    {
      title: '中彩票',
      description: '你运气爆棚，中了一笔不小的奖金！',
      effect: { health: 0, wealth: 50, happiness: 30 },
      probability: 0.05,
      minAge: 18,
      variants: [
        '随手买的一张彩票竟然中了大奖！你反复核对了好几遍才敢相信这是真的。',
        '你一直有买彩票的习惯，这一天你发现竟然中了二等奖，奖金足够买一套房子了。',
        '公司年会抽奖，你竟然抽中了一等奖——十万元现金！同事们都羡慕地看着你。',
        '你帮父母去买菜时顺路买了张彩票，没想到竟然中了五万元，你立刻给父母打了个电话分享这个好消息。'
      ]
    },
    {
      title: '亲人离世',
      description: '你最亲近的人离开了你，你很伤心。',
      effect: { health: -15, wealth: 0, happiness: -30 },
      probability: 0.1,
      minAge: 5, // 5岁以下对亲人离世感知较弱
      variants: [
        '你最敬爱的爷爷在医院平静地闭上了眼睛，那一刻你觉得整个世界都失去了颜色。',
        '得知奶奶去世的消息时，你正在公司开会，你忍不住冲出会议室，在走廊里痛哭出声。',
        '父亲走得很突然，心肌梗塞夺走了他的生命，你甚至来不及见他最后一面，这成了你心中永远的痛。',
        '母亲去世后，你很长时间都走不出来，每次看到她的照片都会泪流满面。'
      ]
    },
    {
      title: '出生',
      description: '你来到了这个世界，开始了新的人生。',
      effect: { health: 0, wealth: 0, happiness: 0 },
      probability: 0,
      isCritical: true,
      variants: [
        '一声响亮的啼哭划破了产房的宁静，你挥舞着小拳头来到了这个世界，开启了属于你的传奇人生。',
        '母亲后来告诉你，你出生时正好是黎明时分，第一缕阳光照进病房，而你正在睁着大大的眼睛好奇地打量这个世界。',
        '你的出生给这个家庭带来了无尽的喜悦，爷爷给你取了一个寓意深远的名字。'
      ]
    },
    {
      title: '离婚',
      description: '婚姻走到了尽头，你选择独自面对未来。',
      effect: { health: -10, wealth: -30, happiness: -25 },
      probability: 0.15,
      minAge: 22, // 22岁以下结婚概率很低
      variants: [
        '长久的争吵和冷战终于耗尽了你们之间的感情，在民政局门口，你和曾经的的爱人各奔东西。',
        '离婚协议书上签下名字的那一刻，你感到一阵前所未有的轻松和解脱，但也夹杂着淡淡的失落。',
        '房子归了对方，你只带走了自己的衣物，走出那个曾经温暖的家，你深吸一口气告诉自己一切重新开始。',
        '孩子的抚养权归了对方，每次探视结束看着孩子离去的背影，你的心都像被刀割一样疼。'
      ]
    },
    {
      title: '犯罪',
      description: '你因一时冲动犯了错误，付出了代价。',
      effect: { health: -5, wealth: -25, happiness: -20 },
      probability: 0.08,
      minAge: 14, // 青少年可能犯罪
      variants: [
        '一时贪图小利，你帮人转移了一笔来路不明的钱，最终被警方调查，虽然不是主犯但也受到了应有的惩罚。',
        '酒后将人打伤，你赔偿了大笔医药费还被拘留了半个月，这段经历成了你人生中最深刻的教训。',
        '你没想到自己的小聪明会带来这么大的后果，法律的制裁让你彻底清醒了。',
        '一时冲动下的决定让你后悔莫及，虽然事情最终得到解决，但你的人生从此多了一个污点。'
      ]
    },
    {
      title: '见义勇为',
      description: '你挺身而出保护了他人的安全。',
      effect: { health: -10, wealth: 0, happiness: 25 },
      probability: 0.1,
      minAge: 14,
      variants: [
        '看到一个小女孩快要被车撞到，你冲上去把她拉到一边，自己却被擦伤了手臂，你觉得很值。',
        '公交车上遇到小偷，你大喊一声并冲上去制止，虽然被报复打了几拳，但成功帮失主追回了钱包。',
        '有人落水，周围人都在犹豫，你毫不犹豫地跳下去救人，事后默默离开了现场。',
        '火灾发生时你协助疏散了整层楼的邻居，自己却被烟雾呛得咳嗽了好几天。'
      ]
    },
    {
      title: '自然灾害',
      description: '你所在的地区遭遇了自然灾害。',
      effect: { health: -20, wealth: -30, happiness: -15 },
      probability: 0.08,
      variants: [
        '百年不遇的洪水淹没了你的家乡，你站在高处看着被淹没的房屋，心中满是无奈。',
        '一场强烈的地震摧毁了你的房子，你不得不在临时安置点里度过了艰难的日子。',
        '台风过境，狂风暴雨把你的屋顶掀翻了一角，雨水灌进屋内，你彻夜未眠。',
        '干旱让庄稼颗粒无收，你看着龟裂的土地，叹息这一年的辛苦又白费了。'
      ]
    },
    {
      title: '遗产继承',
      description: '你继承了一笔遗产，生活得到了改善。',
      effect: { health: 0, wealth: 40, happiness: 15 },
      probability: 0.1,
      minAge: 20,
      variants: [
        '远在海外多年未联系的亲戚去世，你意外继承了一笔可观的遗产。',
        '父母去世后留下的房产和存款由你继承，你用这笔钱还清了所有债务，生活轻松了许多。',
        '你意外得知自己是某个家族企业的合法继承人，经过漫长的法律程序后终于拿到了属于自己的那份。',
        '去世的老人在遗嘱中将你指定为财产继承人，你感念他的信任，用这笔钱开始了自己的事业。'
      ]
    },
    {
      title: '欠薪讨薪',
      description: '老板拖欠了你的工资，你不得不想办法讨薪。',
      effect: { health: -10, wealth: -20, happiness: -25 },
      probability: 0.1,
      minAge: 18, // 18岁以下打工较少
      variants: [
        '年底老板跑路，几个月的工资全没了，你和几个工友一起去劳动局投诉，折腾了三个月才拿回了一部分。',
        '老板一再借口资金紧张，把工资拖了一个月又一个月，你急得睡不着觉，家里老小都等着这笔钱过年。',
        '工程款迟迟不到位，包工头传话说钱还没下来，你蹲在工地门口等了整整一周，才等来了一半工资。',
        '你在讨薪途中遇到很多障碍，最终在劳动仲裁帮助下拿回了工资，这段经历让你明白要签好劳动合同。'
      ]
    },
    {
      title: '租房涨价',
      description: '房东突然大幅涨租，你不得不做出选择。',
      effect: { health: -5, wealth: -15, happiness: -15 },
      probability: 0.1,
      minAge: 18, // 18岁以下较少单独租房
      variants: [
        '住了两年的房子，房东突然说下个月要涨三成，你算了算收入，只能含泪答应或者搬到更远的地方。',
        '城中村改造，你住的握手楼被通知要拆，你扛着行李在附近转了一圈，发现能租的都贵了一倍。',
        '中介说那套房子被别人看中了，要加价才留给你，你气头上说"爱租不租"，当晚在网上找了三个小时新房源。',
        '整个城市的租金都在涨，你搬到了更偏的地方，通勤时间长了一倍，但每个月能省下几百块房租。'
      ]
    },
    {
      title: '亲友借钱',
      description: '亲戚朋友向你借钱，让你左右为难。',
      effect: { health: -5, wealth: -15, happiness: -15 },
      probability: 0.12,
      minAge: 18,
      variants: [
        '发小说做生意资金周转不过来，开口借五万，你咬咬牙借了，就怕再要的时候要不回来。',
        '亲戚说借钱是投资，你半信半疑，后来发现是传销，钱是要不回来了，亲情也伤了。',
        '你说自己也手头紧，婉拒了，对方从此见了面就眼神不对，你觉得很委屈。',
        '你借出去的钱到期没还，上门催讨对方装作没事人，你进退两难，最后选择当作算了。'
      ]
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
        probability: 1.0,
        variants: [
          '背上崭新的书包，你正式成为了一名小学生，走进教室时既紧张又期待。',
          '开学第一天，老师让你自我介绍，你红着脸磕磕绊绊地介绍完，全班同学都在笑。',
          '你被分到了红领巾中队，放学后戴着红领巾跑回家向爸妈报喜。',
          '第一天上课你就走神了，被老师点名回答问题，你完全答不上来，感到很丢人。'
        ]
      },
      {
        title: '朋友',
        description: '你认识了人生中的第一个好朋友。',
        effect: { health: 0, wealth: 0, happiness: 20 },
        probability: 1.0,
        variants: [
          '一个调皮的男生主动找你玩，你们很快成了形影不离的好朋友。',
          '同桌借了你一支铅笔，你觉得很开心，就这样慢慢熟络起来，成了最好的朋友。',
          '课间游戏时你被欺负了，是那个内向的女生站出来帮你，你们从此成了好朋友。',
          '你和一个转学生成了同桌，你们一起学习一起玩耍，友谊纯真而美好。'
        ]
      },
      {
        title: '获奖',
        description: '你在学校比赛中获得了奖项。',
        effect: { health: 0, wealth: 0, happiness: 20 },
        probability: 1.0,
        variants: [
          '你在校园绘画比赛中获得了一等奖，作品被展示在学校的宣传栏里，你骄傲极了。',
          '数学竞赛你拿了三等奖，虽然不是最好的，但爸妈还是夸你很棒。',
          '运动会上你在跑步比赛中获得了第二名，拿着奖牌回家时高兴得蹦蹦跳跳。',
          '作文被老师当作范文在全班朗读，你第一次感受到了写作的成就感。'
        ]
      },
      {
        title: '生病',
        description: '你小时候生了一场病，让家人很担心。',
        effect: { health: -15, wealth: -5, happiness: -10 },
        probability: 0.8,
        variants: [
          '你发高烧到40度，住了一个星期的医院，每天都要打吊针，妈妈心疼得直掉眼泪。',
          '出水痘的那两周你只能待在家里，不能出门玩耍，痒得难受却不能抓。',
          '你得了肺炎，咳嗽得整夜睡不着，爷爷奶奶天天守在你床边照顾你。',
          '一次严重的过敏让你脸上起了很多红疹子，同学们都躲着你，你难过了好久。'
        ]
      }
    ],
    13: [
      {
        title: '升学',
        description: '你成功考上了初中，迈向了青少年时期。',
        effect: { health: 0, wealth: -5, happiness: 15 },
        probability: 1.0,
        variants: [
          '拿着重点中学的录取通知书，你感到无比自豪，这是对你小学六年努力的最好回报。',
          '开学第一天，看着比小学大好几倍的校园，你既兴奋又有点害怕。',
          '你考进了实验班，周围的同学都是各个学校的尖子生，你感到了压力。',
          '进入青春期后第一次住校，你很想家，但也慢慢学会了独立生活。'
        ]
      },
      {
        title: '青春',
        description: '你开始进入青春期，身体和心理都发生了变化。',
        effect: { health: -5, wealth: 0, happiness: 5 },
        probability: 1.0,
        variants: [
          '你开始长个子了，座位从第一排慢慢调到了后面，声音也变得越来越低沉。',
          '你发现自己的情绪变得很奇怪，有时候会莫名其妙地烦躁和低落。',
          '青春期的到来让你对自己的外表变得在意，你开始偷偷照镜子。',
          '第一次梦遗让你惊慌失措，还好从生物课本里你慢慢了解了这是正常的。'
        ]
      },
      {
        title: '初恋',
        description: '你开始了人生中的第一段恋情，心跳加速。',
        effect: { health: 0, wealth: 0, happiness: 25 },
        probability: 0.8,
        variants: [
          '你暗恋隔壁班的女生，每次经过她们班你都会偷偷看一眼，被哥们发现后笑话了好久。',
          '你收到了人生中第一封情书，心跳得厉害，却不知道该怎么回复。',
          '你和班上的一个男生互生好感，你们一起写作业一起回家，但谁都没有说破。',
          '你鼓起勇气表白了，虽然被拒绝，但你觉得能说出来就已经很勇敢了。'
        ]
      },
      {
        title: '叛逆',
        description: '青春期的你开始叛逆，和父母有了争执。',
        effect: { health: 0, wealth: 0, happiness: -15 },
        probability: 0.7,
        variants: [
          '妈妈翻看了你的日记，你们大吵一架，你摔门而出，在外面待到天黑才回家。',
          '你开始顶撞父母，觉得他们什么都不懂，什么都要管，让你很烦。',
          '你开始逃课去网吧，被老师叫家长，爸爸失望的眼神让你心里很不是滋味。',
          '你染了头发打了耳洞，回家后被爸妈训斥了一顿，你觉得自己只是在做自己。'
        ]
      }
    ],
    16: [
      {
        title: '升学',
        description: '你成功考上了高中，为未来的大学做准备。',
        effect: { health: 0, wealth: -10, happiness: 15 },
        probability: 1.0,
        variants: [
          '收到高中录取通知书时，你激动得跳了起来，中考的辛苦终于有了回报。',
          '你考进了全市最好的高中，爸妈高兴得摆了升学宴，你成了全家人的骄傲。',
          '开学第一天，看着周围同学眼中的斗志，你知道自己进入了更激烈的竞争。',
          '进入高中后学业压力陡然增大，你第一次感受到了什么叫竞争激烈。'
        ]
      },
      {
        title: '初恋',
        description: '高中生涯中，你经历了一段纯真的恋爱。',
        effect: { health: 0, wealth: 0, happiness: 20 },
        probability: 0.7,
        variants: [
          '你和班上的第一名谈起了恋爱，你们一起刷题一起进步，老师说你们是学霸情侣。',
          '图书馆里你对一个学长一见钟情，你开始频繁去图书馆，只为了多看他几眼。',
          '你收到了一个精美的礼物，里面夹着一封情书，你感到心跳加速。',
          '你们偷偷谈起了恋爱，放学后一起去公园，一起谈理想谈未来。'
        ]
      },
      {
        title: '高考压力',
        description: '高考的压力让你喘不过气来。',
        effect: { health: -10, wealth: 0, happiness: -10 },
        probability: 0.9,
        variants: [
          '高三的题海战术让你筋疲力尽，每天睡眠不足六小时，你开始怀疑自己。',
          '模拟考成绩一落千丈，你躲在被窝里哭了一整晚，第二天又擦干眼泪继续刷题。',
          '父母期望的眼神让你压力山大，你害怕辜负他们的期望，晚上经常失眠。',
          '教室里弥漫着紧张的气氛，每个人都在埋头苦读，你也被这种氛围裹挟着前进。'
        ]
      },
      {
        title: '文理分科',
        description: '你选择了自己喜欢的方向。',
        effect: { health: 0, wealth: 0, happiness: 10 },
        probability: 1.0,
        variants: [
          '你选择了文科，因为你对历史和文字有着浓厚的兴趣，这条路你走得很坚定。',
          '你决定学理，因为你对物理化学的逻辑推导着迷，虽然很难但你乐在其中。',
          '分科时你和父母产生了分歧，但你坚持了自己的选择，用成绩证明了自己。',
          '经过深思熟虑，你选择了文科，虽然有人说文科没前途，但你觉得兴趣最重要。'
        ]
      }
    ],
    19: [
      {
        title: '升学',
        description: '你成功考上了大学，开始了独立生活。',
        effect: { health: 0, wealth: -20, happiness: 25 },
        probability: 1.0,
        variants: [
          '你被{UNIV}录取了！拿着录取通知书，你感到人生第一次如此自由。',
          '你考上了{UNIV}，第一次离开家乡来到陌生的城市，你既兴奋又忐忑。',
          '你顺利进入了{UNIV}就读，父母为你感到骄傲。',
          '父母送你去{UNIV}报到，临别时妈妈红着眼眶叮嘱你照顾好自己，你努力忍住眼泪。',
          '你考上了{UNIV}，虽然不是理想中的学校，但你告诉自己，平台只是起点，努力才是关键。',
          '你进了{UNIV}，宿舍里六个人来自天南地北，你们第一天就一起出去吃了顿烧烤，感觉还不错。',
          '你没有考上本科，去了所大专学技术，虽然不是理想的结果，但你相信行行出状元。'
        ]
      },
      {
        title: '独立',
        description: '你开始独立生活，学会了照顾自己。',
        effect: { health: 0, wealth: -10, happiness: 15 },
        probability: 1.0,
        variants: [
          '第一次自己洗衣服，你把衣服洗得花一块白一块的，只好偷偷拿到洗衣店处理。',
          '你学会了合理安排生活费，虽然偶尔还是会月光，但大部分时候都能存下一点钱。',
          '你开始自己打扫宿舍、整理床铺，父母看到你发来的照片说他们很欣慰。',
          '你独自去医院看病，挂号、检查、取药，一个人完成了所有流程，你觉得自己真的长大了。'
        ]
      },
      {
        title: '外出打工',
        description: '你没有考上大学，跟着老乡出来打工。',
        effect: { health: -10, wealth: 15, happiness: -5 },
        probability: 0.6,
        variants: [
          '高考失利后你没有选择复读，跟着村里的老乡坐上了去城里的大巴，开始了打工生涯。',
          '你拎着一个编织袋来到了工厂，宿舍八个人挤在一起，你在上铺铺开被子，告诉自己先挣钱再说。',
          '你没有大学文凭，只能从流水线上的工人做起，但你暗暗下定决心，以后要靠自己闯出一片天。',
          '来城里的第一天你迷路了，问了好几个人才找到工厂，你站在厂门口深呼吸，新生活开始了。'
        ]
      },
      {
        title: '职业技能',
        description: '你选择学一门手艺，走职业技能路线。',
        effect: { health: 0, wealth: 10, happiness: 15 },
        probability: 0.5,
        variants: [
          '你进了职业学校学厨师，师父说你有悟性，炉火前苦练了两年，出来就找到了一份不错的工作。',
          '你跟着师傅学汽车修理，每天蹲在车底下，手上总是油腻腻的，但学成后开了家修车铺，生意不错。',
          '你报了电焊培训班，苦练半年拿到了证书，进了工厂干高薪技工，比很多本科毕业生挣得还多。',
          '你选择学美发，在小城里开了一家理发店，虽然不起眼，但这门手艺养活了你和你的家。'
        ]
      },
      {
        title: '初恋分手',
        description: '毕业季即分手季，你们和平分开了。',
        effect: { health: -5, wealth: 0, happiness: -20 },
        probability: 0.8,
        variants: [
          '毕业的钟声敲响，你们含泪拥抱告别，这段感情最终还是败给了现实和距离。',
          '她选择了出国，你选择了留下，两个人都知道这段感情已经没有未来。',
          '分手那天你们吃了一顿最后的晚餐，聊着曾经的美好，然后各自转身离开。',
          '毕业旅行成了你们的分手之旅，沿途的风景很美，但你们的心却越来越远。'
        ]
      },
      {
        title: '大学恋爱',
        description: '你在大学里开始了新的恋情。',
        effect: { health: 0, wealth: -5, happiness: 20 },
        probability: 0.7,
        variants: [
          '在社团活动中你认识了她，你们志趣相投，很快就走到了一起。',
          '图书馆的偶遇让你们相识，后来你经常在图书馆"偶遇"她，慢慢地你们熟悉了。',
          '你追求了她整整一年，终于在一个雪夜表白成功，那一刻你觉得自己是世界上最幸福的人。',
          '你们是同学眼中羡慕的情侣，一起上课、一起吃饭、一起泡图书馆，感情稳定而甜蜜。'
        ]
      }
    ],
    23: [
      {
        title: '就业',
        description: '你找到了第一份工作，开始了职业生涯。',
        effect: { health: -5, wealth: 20, happiness: 15 },
        probability: 1.0,
        variants: [
          '你收到了{COMPANY}的offer，那天晚上你兴奋得睡不着觉。',
          '你进入了{COMPANY}工作，虽然辛苦但成长很快，你相信付出总会有回报。',
          '你考上了{COMPANY}的岗位，成为了体制内的一员。',
          '你成功应聘到{COMPANY}，开始了职业生涯的新篇章。',
          '你注册成为了{COMPANY}平台的骑手，穿上工作服的那天你告诉自己，先干着，慢慢来。',
          '你进了{COMPANY}的生产线，上班打卡、下班打卡，日子规律得像机器运转。',
          '你在{COMPANY}找到了一份服务员的工作，虽然不是理想中的，但至少能养活自己。',
          '面了十几家公司都碰壁，最后你来到{COMPANY}，老板问你能吃苦吗，你点头说能。'
        ]
      },
      {
        title: '结婚',
        description: '你与爱人步入了婚姻的殿堂，组建了自己的家庭。',
        effect: { health: 5, wealth: -20, happiness: 30 },
        probability: 0.6,
        variants: [
          '在相识三年后，你们终于领证结婚了，从此以后你们是一家人了。',
          '婚礼上你紧张得手心出汗，但看到她的那一刻你觉得一切都值了。',
          '你们裸婚，没有房子没有车子，但你们相信只要一起努力，面包会有的。',
          '你们旅行结婚，在丽江的古城里拍了婚纱照，简单却浪漫终生难忘。'
        ]
      },
      {
        title: '创业',
        description: '你开始了自己的创业之路，追求梦想。',
        effect: { health: -10, wealth: -20, happiness: 20 },
        probability: 0.5,
        variants: [
          '你辞去了稳定的工作，和朋友一起创办了自己的公司，前路未知但你充满信心。',
          '你用积蓄租了一个小小的办公室，买了第一台服务器，正式开始了创业生涯。',
          '创业初期你一个人干三个人的活，累得站着都能睡着，但你从未想过放弃。',
          '虽然知道创业成功率很低，但你还是决定为自己的梦想搏一把。'
        ]
      },
      {
        title: '失业',
        description: '你失去了工作，不得不重新开始。',
        effect: { health: -10, wealth: -25, happiness: -20 },
        probability: 0.6,
        variants: [
          '公司突然宣布裁员，你收到了解聘通知，收拾东西离开时感到无比迷茫。',
          '你投递了几十份简历都石沉大海，你开始怀疑自己是不是真的不够好。',
          '试用期结束时被告知不适合岗位，你带着挫败感离开了这家公司。',
          '公司倒闭的消息来得猝不及防，你辛苦工作的地方一夜之间人去楼空。'
        ]
      },
      {
        title: '考研',
        description: '你决定继续深造，考研成功。',
        effect: { health: -5, wealth: -10, happiness: 20 },
        probability: 0.05,
        variants: [
          '经过大半年的备考，你终于收到了研究生的录取通知书，所有的付出都值了。',
          '你选择了跨专业考研，虽然难度很大，但你凭借毅力成功上岸。',
          '考研的那两天你发烧39度，但你咬牙坚持完了所有科目，最终成功考上了。',
          '研究生入学那天，你站在新的起点上，深知这又是一个新的开始。'
        ]
      },
      {
        title: '投资成功',
        description: '你的投资获得了丰厚的回报。',
        effect: { health: 0, wealth: 45, happiness: 20 },
        probability: 0.15,
        variants: [
          '你多年前投资的一套房子如今价值翻了三倍，你庆幸自己当初做了正确的决定。',
          '在朋友推荐下投资的商铺开始盈利，每个月的租金收入让你的生活质量提高了不少。',
          '你深入研究后买入的股票一路上涨，你果断止盈，赚到了改变命运的一桶金。',
          '你参股了一个朋友的创业公司，如今公司发展良好，你的投资已经翻了好几倍。'
        ]
      },
      {
        title: '投资失败',
        description: '你的投资失败了，损失惨重。',
        effect: { health: -5, wealth: -35, happiness: -20 },
        probability: 0.2,
        variants: [
          '你投入多年积蓄的项目突然资金链断裂，血本无归，一夜之间你仿佛苍老了好几岁。',
          '听信了所谓内幕消息，你全仓买入的股票连续跌停，亏损超过了一半，你欲哭无泪。',
          '你投资的商铺无人问津，每个月还要还贷款，你不得不同时打三份工来维持运转。',
          '朋友拉你入伙的项目最终失败，你还背上了担保债务，不得不变卖家产来还债。'
        ]
      },
      {
        title: '裁员',
        description: '你不幸被裁员，失去了工作。',
        effect: { health: -10, wealth: -30, happiness: -20 },
        probability: 0.25,
        variants: [
          '公司经营不善进行大规模裁员，你收到了解聘通知，收拾东西离开时感到无比迷茫。',
          '35岁的你被公司优化了，面试了十几家公司都石沉大海，你第一次感受到了年龄歧视的残酷。',
          '整个部门被裁撤，你失业了，每个月要还的房贷让你焦虑得整夜睡不着。',
          '公司倒闭的消息来得猝不及防，你辛苦工作多年的地方一夜之间人去楼空。'
        ]
      },
      {
        title: '创业失败',
        description: '你的创业梦想破灭了。',
        effect: { health: -15, wealth: -40, happiness: -25 },
        probability: 0.25,
        variants: [
          '投入了全部身家后，项目还是失败了，你欠下了一屁股债，不得不去打工还钱。',
          '合伙人突然撤资，你的创业公司一夜之间分崩离析，你第一次感受到了人性的复杂。',
          '产品上线后无人问津，你烧光了所有积蓄却换不来一个用户，只能接受失败的现实。',
          '疫情突然来袭让你的线下门店被迫关闭，你辛苦积攒的创业资金全部打了水漂。'
        ]
      }
    ],
    25: [
      {
        title: '生子',
        description: '你的孩子出生了，为人父母的生活开始了。',
        effect: { health: -10, wealth: -15, happiness: 25 },
        probability: 0.8,
        variants: [
          '产房外等待了十几个小时后，护士抱着你皱巴巴的孩子走出来，那一刻你热泪盈眶。',
          '第一声啼哭响起时，你看到那个小小的生命，心里涌起一股前所未有的感动。',
          '你给孩子取了一个很有意义的名字，希望他/她能健康快乐地成长。',
          '看着怀里这个柔软的小生命，你突然理解了父母当年养育你的艰辛。'
        ]
      },
      {
        title: '购房',
        description: '你购买了自己的第一套房子，有了自己的家。',
        effect: { health: 5, wealth: -40, happiness: 20 },
        probability: 0.8,
        variants: [
          '签完购房合同的那一刻，你终于有了属于自己的房子，虽然背负了贷款，但心里踏实多了。',
          '终于凑够了首付，你买下了心仪已久的房子，站在空荡荡的客厅里，你开始规划未来的家。',
          '经过无数次的看房、比较、谈判，你终于锁定了一套满意的房子，过户那天你激动得几乎落泪。',
          '新房交付那天，你拿着钥匙打开门，看着窗明几净的新家，觉得所有的辛苦都值了。'
        ]
      },
      {
        title: '晋升',
        description: '你在工作中表现出色，获得了晋升机会。',
        effect: { health: 0, wealth: 25, happiness: 20 },
        probability: 0.8,
        variants: [
          '你被提升为项目经理，在{COMPANY}第一次带团队，你既兴奋又感到肩上的责任重大。',
          '晋升通知下来那天，老板拍着你的肩膀说你是公司最有潜力的年轻人。',
          '你凭借出色的业绩升任部门主管，薪资涨了一大截，你对未来充满信心。',
          '在{COMPANY}从技术岗转到管理岗，你克服了重重困难，终于证明了自己可以胜任。'
        ]
      },
      {
        title: '加薪',
        description: '你的努力得到了回报，工资涨了。',
        effect: { health: 0, wealth: 20, happiness: 15 },
        probability: 0.9,
        variants: [
          '年终考核你获得了优秀的评价，薪资普调后到手的钱多了一些，你感到满足。',
          '你成功跳槽到新公司，薪资涨了50%，虽然工作压力大了，但你干劲十足。',
          '老板主动给你加了薪水，说你是公司不可或缺的人才，你很受鼓舞。',
          '你获得了期盼已久的股权激励，这意味着你不仅是员工，更是公司的主人。'
        ]
      }
    ],
    30: [
      {
        title: '晋升',
        description: '你在工作中表现出色，获得了晋升机会。',
        effect: { health: 0, wealth: 25, happiness: 20 },
        probability: 0.8,
        variants: [
          '你升任为部门总监，成了公司最年轻的中层管理之一，责任更大了。',
          '你被提拔为区域负责人，第一次管理这么大的团队，你感到既兴奋又压力山大。',
          '老板找你谈话，要把重要的项目交给你负责，这让你感到被信任和认可。',
          '你的团队业绩突飞猛进，年会上你作为优秀管理者发言，赢得了满堂喝彩。'
        ]
      },
      {
        title: '事业',
        description: '你在事业上取得了重要的成就，得到了认可。',
        effect: { health: -5, wealth: 30, happiness: 25 },
        probability: 0.7,
        variants: [
          '你主导的项目获得了行业大奖，为公司赢得了荣誉，你也成了业内的知名人士。',
          '你的论文发表在了顶级期刊上，业界对您刮目相看，很多公司向你抛出橄榄枝。',
          '你被评为市级优秀人才，获得了政府的人才补贴，这是对您专业能力的认可。',
          '你负责的产品线业绩翻倍，老板决定给你丰厚的奖金和期权作为奖励。'
        ]
      },
      {
        title: '第二个孩子',
        description: '你的第二个孩子出生了，家庭更加完整。',
        effect: { health: -10, wealth: -15, happiness: 25 },
        probability: 0.6,
        variants: [
          '二宝出生的那一刻，哥哥/姐姐蹲在床边好奇地看着这个小不点，家庭翻开了新的一页。',
          '虽然养两个孩子的压力很大，但看着两个孩子的笑脸，你觉得一切都值得。',
          '二宝是个男孩/女孩，正好凑成了一个"好"字，你觉得自己是人生赢家。',
          '两个孩子相差两岁，虽然经常打闹，但看着他们相亲相爱，你觉得这就是幸福。'
        ]
      },
      {
        title: '中年危机',
        description: '你面临中年危机，开始重新思考人生。',
        effect: { health: -5, wealth: 0, happiness: -15 },
        probability: 0.7,
        variants: [
          '有一天加班到深夜，你突然停下来问自己：这是我想要的人生吗？',
          '看到镜子里的自己，你发现鬓角已经有了白发，岁月真的不饶人。',
          '和大学同学聚会后发现差距很大，你开始反思自己这些年的选择。',
          '你开始失眠，思考着未来的方向，上有老下有小的压力让你喘不过气。'
        ]
      },
      {
        title: '创业成功',
        description: '你的创业之路取得了成功！',
        effect: { health: -10, wealth: 60, happiness: 30 },
        probability: 0.15,
        variants: [
          '经历无数个加班的夜晚和失败的尝试后，你的创业公司终于拿到了第一笔大订单，你激动得彻夜未眠。',
          '你的产品获得了市场的认可，用户量爆发式增长，你知道自己赌对了。',
          '从一个人的小工作室到几十人的团队，你用三年时间证明了自己的选择是正确的。',
          '公司被一家大企业收购，你挖到了人生的第一桶金，喜悦之情溢于言表。'
        ]
      },
      {
        title: '创业失败',
        description: '你的创业梦想破灭了。',
        effect: { health: -15, wealth: -40, happiness: -25 },
        probability: 0.2,
        variants: [
          '投入了全部身家后，项目还是失败了，你欠下了一屁股债，不得不去打工还钱。',
          '合伙人突然撤资，你的创业公司一夜之间分崩离析，你第一次感受到了人性的复杂。',
          '产品上线后无人问津，你烧光了所有积蓄却换不来一个用户，只能接受失败的现实。',
          '疫情突然来袭让你的线下门店被迫关闭，你辛苦积攒的创业资金全部打了水漂。'
        ]
      },
      {
        title: '房产购置',
        description: '你购买了一套房产，有了自己的家。',
        effect: { health: 5, wealth: -40, happiness: 20 },
        probability: 0.25,
        variants: [
          '签完购房合同的那一刻，你终于有了属于自己的房子，虽然背负了贷款，但心里踏实多了。',
          '终于凑够了首付，你买下了心仪已久的房子，站在空荡荡的客厅里，你开始规划未来的家。',
          '经过无数次的看房、比较、谈判，你终于锁定了一套满意的房子，过户那天你激动得几乎落泪。',
          '新房交付那天，你拿着钥匙打开门，看着窗明几净的新家，觉得所有的辛苦都值了。'
        ]
      }
    ],
    35: [
      {
        title: '职业瓶颈',
        description: '你在职业发展上遇到了瓶颈。',
        effect: { health: -5, wealth: 0, happiness: -15 },
        probability: 0.6,
        variants: [
          '多年没有升职，看着后来者居上，你第一次感受到了职场的天花板。',
          '公司空降了新领导，你的处境变得尴尬，开始考虑是否该换个环境。',
          '行业不景气，公司开始裁员，你每天提心吊胆，生怕自己被优化。',
          '你开始反思这些年的选择，发现自己错过了很多其他的机会。'
        ]
      },
      {
        title: '投资成功',
        description: '你的投资获得了丰厚的回报。',
        effect: { health: 0, wealth: 45, happiness: 20 },
        probability: 0.2,
        variants: [
          '你多年前投资的一套房子如今价值翻了三倍，你庆幸自己当初做了正确的决定。',
          '在朋友推荐下投资的商铺开始盈利，每个月的租金收入让你的生活质量提高了不少。',
          '你深入研究后买入的股票一路上涨，你果断止盈，赚到了改变命运的一桶金。',
          '你参股了一个朋友的创业公司，如今公司发展良好，你的投资已经翻了好几倍。'
        ]
      },
      {
        title: '投资失败',
        description: '你的投资失败了，损失惨重。',
        effect: { health: -5, wealth: -35, happiness: -20 },
        probability: 0.25,
        variants: [
          '你投入多年积蓄的项目突然资金链断裂，血本无归，一夜之间你仿佛苍老了好几岁。',
          '听信了所谓内幕消息，你全仓买入的股票连续跌停，亏损超过了一半，你欲哭无泪。',
          '你投资的商铺无人问津，每个月还要还贷款，你不得不同时打三份工来维持运转。',
          '朋友拉你入伙的项目最终失败，你还背上了担保债务，不得不变卖家产来还债。'
        ]
      }
    ],
    40: [
      {
        title: '中年危机',
        description: '你面临中年危机，开始重新思考人生。',
        effect: { health: -5, wealth: 0, happiness: -15 },
        probability: 0.7,
        variants: [
          '体检查出几项指标异常，你开始意识到健康的重要性。',
          '孩子青春期的叛逆让你心力交瘁，曾经听话的乖孩子怎么变成了这样？',
          '工作上遇到了天花板，眼看着年轻人一步步赶超，你感到前所未有的焦虑。',
          '你开始回忆年轻时的梦想，发现很多都没有实现，你开始思考人生的意义。'
        ]
      },
      {
        title: '子女教育',
        description: '你的孩子开始上学，你需要关注他们的教育。',
        effect: { health: 0, wealth: -20, happiness: 10 },
        probability: 1.0,
        variants: [
          '为了让孩子上重点学校，你买了学区房，背负了高额贷款，但你觉得值。',
          '青春期的孩子开始有了自己的想法，你们时有冲突，你努力理解他/她。',
          '孩子的成绩起起伏伏，你比孩子还紧张，每次考试都跟着焦虑。',
          '你省吃俭用给孩子报各种培训班，看着孩子疲惫的身影，你有些心疼又无奈。'
        ]
      },
      {
        title: '父母养老',
        description: '你的父母开始需要你的照顾，你承担起了责任。',
        effect: { health: -5, wealth: -15, happiness: -10 },
        probability: 0.8,
        variants: [
          '父亲突发脑梗住院，你白天上班晚上陪床，一个月瘦了十斤。',
          '你把父母接来一起住，但生活习惯的不同让你和父母时有摩擦。',
          '母亲的阿尔茨海默症越来越严重，有时都不认识你了，你心如刀绞。',
          '父母看病需要的钱越来越多，你开始计算自己的收入和存款，感到压力巨大。'
        ]
      },
      {
        title: '职业瓶颈',
        description: '你在职业发展上遇到了瓶颈。',
        effect: { health: -5, wealth: 0, happiness: -15 },
        probability: 0.7,
        variants: [
          '多年没有升职，看着后来者居上，你第一次感受到了职场的天花板。',
          '公司空降了新领导，你的处境变得尴尬，开始考虑是否该换个环境。',
          '行业不景气，公司开始裁员，你每天提心吊胆，生怕自己被优化。',
          '你开始反思这些年的选择，发现自己错过了很多其他的机会。'
        ]
      },
      {
        title: '再次创业',
        description: '你决定再次创业，追求更大的发展。',
        effect: { health: -10, wealth: -25, happiness: 15 },
        probability: 0.5,
        variants: [
          '不惑之年的你再次创业，周围人都说你疯了，但你觉得不试试怎么知道。',
          '你拉上老同事一起干，虽然起步艰难，但你们相信凭借经验能走得更远。',
          '你用积蓄创办了自己的工作室，虽然规模不大，但这是你真正想做的事。',
          '你做了人生中最大的一次赌注，把房子抵押贷款创业，全家人都为你担心。'
        ]
      }
    ],
    50: [
      {
        title: '退休规划',
        description: '你开始规划退休生活，为未来做准备。',
        effect: { health: 5, wealth: -10, happiness: 10 },
        probability: 1.0,
        variants: [
          '你开始了解养老院的情况，为自己和老伴的晚年做准备。',
          '你算了一笔账，发现养老金不太够花，开始考虑退休后做点什么事补贴家用。',
          '你开始培养园艺、书法等兴趣爱好，为退休后的生活寻找新的重心。',
          '你和老伴开始规划退休后的旅行目的地，商量着要一起走遍祖国的大好河山。'
        ]
      },
      {
        title: '父母养老',
        description: '你的父母需要更多的照顾，你尽孝床前。',
        effect: { health: -5, wealth: -15, happiness: -5 },
        probability: 0.8,
        variants: [
          '父母相继离世，你尽心尽力照顾到最后，送他们安详地离开了。',
          '你把父母送进了条件最好的养老院，每周都去看望他们。',
          '父母弥留之际握着你的手说有你这样的孩子很欣慰，你泪流满面。',
          '你请了护工在家照顾父母，虽然花费不小，但你不想留下子欲养而亲不待的遗憾。'
        ]
      },
      {
        title: '子女成才',
        description: '你的孩子考上了理想的大学，你很欣慰。',
        effect: { health: 0, wealth: -20, happiness: 30 },
        probability: 0.8,
        variants: [
          '孩子收到了985大学的录取通知书，你激动得眼眶湿润，觉得这些年的付出都值了。',
          '孩子获得了全额奖学金出国深造，你为他/她感到骄傲，虽然很舍不得。',
          '孩子选择了自己喜欢的专业而不是热门专业，你尊重他/她的选择。',
          '孩子大学毕业获得了保研资格，你感到无比欣慰，你的教育方式是成功的。'
        ]
      },
      {
        title: '健康检查',
        description: '体检发现了一些问题，你开始重视健康。',
        effect: { health: -15, wealth: -5, happiness: -5 },
        probability: 0.7,
        variants: [
          '体检报告显示你有脂肪肝、高血压等老年病，你开始注意饮食和运动。',
          '一次突如其来的头晕让你摔倒在地，所幸没有大碍，但医生警告你必须改变生活方式。',
          '你开始每天早起散步，虽然很不想动，但你强迫自己坚持。',
          '你戒掉了多年的烟酒习惯，老伴说你像是换了一个人。'
        ]
      },
      {
        title: '再婚',
        description: '你遇到了新的伴侣，决定再次步入婚姻。',
        effect: { health: 5, wealth: -15, happiness: 20 },
        probability: 0.4,
        variants: [
          '在一次旅行中你认识了现在的伴侣，你们发现彼此志趣相投，决定相伴余生。',
          '孩子支持你寻找新的幸福，你和新伴侣低调地领了证，开始新的生活。',
          '你们决定不办婚礼旅行结婚，简简单单却也温馨浪漫。',
          '再婚后的生活比想象中磨合得更顺利，你感慨缘分的奇妙。'
        ]
      },
      {
        title: '出国',
        description: '你踏上了出国的旅程，看到了更大的世界。',
        effect: { health: 0, wealth: -20, happiness: 15 },
        probability: 0.2,
        variants: [
          '飞机降落在异国他乡的机场，你拖着行李走出闸口，深吸一口气——新的冒险开始了。',
          '第一次走出国门的你，被眼前的风景和文化深深震撼，世界这么大，你想去看看。',
          '虽然语言不通、习俗不同，但你克服了种种困难，这段经历让你变得更加独立和坚强。',
          '在国外留学的日子里，你不仅学到了知识，更收获了独立生活的能力和跨国界的友谊。'
        ]
      },
      {
        title: '移民',
        description: '你决定在新的国家开始新的生活。',
        effect: { health: 0, wealth: -30, happiness: 10 },
        probability: 0.1,
        variants: [
          '经过漫长的等待和准备，你终于拿到了移民签证，带着全家来到了这个陌生的国度重新开始。',
          '离开熟悉的一切来到异国他乡，你克服了语言障碍和文化差异，在新环境中扎下了根。',
          '虽然很想念国内的亲人和朋友，但新生活也给了你前所未有的体验和机会。',
          '移民后的生活并不像想象中那么美好，但你咬牙坚持，一步步在新国度站稳了脚跟。'
        ]
      }
    ],
    60: [
      {
        title: '退休',
        description: '你正式退休，开始了晚年生活。',
        effect: { health: 10, wealth: 0, happiness: 5 },
        probability: 1.0,
        variants: [
          '在同事们的欢送会后，你收拾好办公桌离开了工作了几十年的地方，心中既有不舍也有期待。',
          '退休手续办完的那一刻，你长舒一口气——终于可以好好休息，做自己想做的事情了。',
          '你站好最后一班岗，把工作交接得清清楚楚，虽然离开了但你觉得问心无愧。',
          '退休后的第一天，你睡到自然醒，然后泡了杯茶坐在阳台上，觉得这就是向往的生活。'
        ]
      },
      {
        title: '孙辈',
        description: '你有了孙子/孙女，享受天伦之乐。',
        effect: { health: 5, wealth: 0, happiness: 25 },
        probability: 0.8,
        variants: [
          '孙子/孙女出生了，你看着那个小小的生命，心都化了。',
          '你帮忙带孙子/孙女，虽然辛苦但看着孩子一天天长大，你觉得很幸福。',
          '孙子/孙女叫你爷爷奶奶的声音是你听过最美的声音。',
          '你给孙子/孙女讲过去的故事，把家族的传承一代代延续下去。'
        ]
      },
      {
        title: '金婚',
        description: '你和伴侣携手走过了50年，庆祝金婚。',
        effect: { health: 5, wealth: 0, happiness: 30 },
        probability: 0.6,
        minAge: 70,
        maxAge: 120,
        oneTime: true,
        variants: [
          '金婚纪念日那天，你和老伴重新拍了一组婚纱照，虽然头发已经花白，但笑容依旧。',
          '你们邀请了儿孙们一起庆祝金婚，回首五十年的风风雨雨，你们相视而笑。',
          '五十年的相守，你们从青丝走到了白发，这份感情比金子还珍贵。',
          '你给老伴写了一封情书，在金婚典礼上念给她/他听，在场的人都被感动了。'
        ]
      },
      {
        title: '大病',
        description: '一场大病让你住院治疗。',
        effect: { health: -30, wealth: -20, happiness: -20 },
        probability: 0.7,
        variants: [
          '一场心脏病让你在ICU住了一个月，鬼门关走了一遭，你对人生有了新的感悟。',
          '被诊断出癌症后，你积极配合治疗，家人无微不至的照顾让你感动落泪。',
          '中风后你半身不遂，不得不开始艰难的康复训练，所幸恢复得比预期好。',
          '一场突如其来的大病让你意识到生命的脆弱，你开始珍惜每一天。'
        ]
      },
      {
        title: '环游中国',
        description: '退休后的你决定环游中国。',
        effect: { health: 5, wealth: -25, happiness: 25 },
        probability: 0.6,
        variants: [
          '你和老伴自驾游中国，从东到西从南到北，一路走来感慨祖国的壮美。',
          '你报名参加了老年旅行团，去了年轻时没时间去的地方，觉得晚年生活真美好。',
          '你坐火车走遍了中国，每到一个地方就给孙子/孙女寄一张明信片。',
          '你和老伴重走了当年蜜月旅行的路线，三十年后再次踏上同样的路，感慨万千。'
        ]
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
      probability: 1.0,
      variants: [
        '一整年的风调雨顺让你迎来了几十年不遇的大丰收，金黄的麦穗堆满了粮仓。',
        '你承包的果园今年大丰收，水果卖了个好价钱，脸上洋溢着满足的笑容。',
        '玉米棒子长得又粗又长，你算了算今年的收入，比去年翻了好几倍。',
        '科学种田让你们家的产量创了新高村里人都来向你请教经验。'
      ]
    },
    {
      title: '自然灾害',
      description: '遭遇了洪涝/干旱/虫灾，损失惨重。',
      effect: { health: -10, wealth: -40, happiness: -25 },
      probability: 0.8,
      variants: [
        '一场突如其来的洪水冲毁了你家的大棚蔬菜，几个月的辛苦付诸东流。',
        '百年不遇的干旱让庄稼颗粒无收，你望着龟裂的土地欲哭无泪。',
        '虫灾来袭，你打光了所有农药也控制不住，眼睁睁看着庄稼被吃光。',
        '冰雹灾害突袭，鸡蛋大的冰雹砸坏了你的大棚和果树，你损失惨重。'
      ]
    },
    {
      title: '土地改革',
      description: '农村土地政策调整，你受益了。',
      effect: { health: 0, wealth: 25, happiness: 15 },
      probability: 0.7,
      variants: [
        '土地确权后你拿到了承包证书，以后再也不用担心土地纠纷了。',
        '村里搞土地流转，你把土地承包给合作社，每年坐收租金还能分红。',
        '国家发放了农业补贴，你种地的积极性更高了。',
        '你流转了更多土地扩大种植规模，现代化农业让你尝到了甜头。'
      ]
    },
    {
      title: '进城务工',
      description: '你决定去城市打工，见识了更大的世界。',
      effect: { health: -5, wealth: 30, happiness: 10 },
      probability: 0.6,
      variants: [
        '你成为了一名建筑工人，虽然辛苦但收入比在家种地强多了。',
        '你进厂当了流水线工人，第一次接触到了现代化的生产方式。',
        '你做起了外卖骑手，每天穿街走巷，虽然辛苦但收入还不错。',
        '你学会了月嫂技能，去城里照顾新生儿，收入让村里人都羡慕。'
      ]
    },
    {
      title: '新型农业',
      description: '你学习使用了新型农业技术，效率大大提高。',
      effect: { health: 0, wealth: 25, happiness: 15 },
      probability: 0.7,
      variants: [
        '你学会了使用无人机喷洒农药，一天能作业上百亩地。',
        '你建起了蔬菜大棚，一年四季都能种菜，收入翻了好几倍。',
        '你学会了上网，通过电商平台卖农产品，再也不愁销路了。',
        '你引进了滴灌技术，节水又增产，成了村里的科技示范户。'
      ]
    }
  ],
  worker: [
    {
      title: '工厂先进',
      description: '你被评为工厂的先进工作者。',
      effect: { health: 0, wealth: 15, happiness: 20 },
      probability: 0.8,
      variants: [
        '你的事迹被贴在工厂的光荣榜上，成了同事们学习的榜样。',
        '你获得了年度优秀员工的称号，奖金虽然不多但荣誉是无价的。',
        '你的工作方法被厂报报道，还被邀请去其他车间分享经验。',
        '你被评为技术能手，带了不少徒弟，桃李满工厂让你很有成就感。'
      ]
    },
    {
      title: '工厂事故',
      description: '工厂发生了一起安全事故，你受了伤。',
      effect: { health: -30, wealth: -15, happiness: -15 },
      probability: 0.5,
      variants: [
        '一次机器故障让你的手指被卷入，虽然保住了手指但留下了残疾。',
        '工厂的安全事故中你被热气烫伤，住院治疗了两个月才恢复。',
        '你不幸中了有毒气体，虽然抢救及时但落下了呼吸道的毛病。',
        '工厂坍塌事故中你被压在废墟下，所幸工友们及时把你救了出来。'
      ]
    },
    {
      title: '国企改革',
      description: '国企改革浪潮中，你的工厂被合并了。',
      effect: { health: -5, wealth: -20, happiness: -15 },
      probability: 0.6,
      variants: [
        '工厂被兼并后换了新老板，你担心自己会被裁员。',
        '你从正式工变成了派遣工，福利待遇差了一大截。',
        '工厂升级改造，你被安排去学习新设备操作，虽然吃力但咬牙坚持。',
        '你选择了一次性买断工龄，拿到了一笔补偿款，开始考虑重新就业。'
      ]
    },
    {
      title: '技术革新',
      description: '你掌握了新技术，被提拔为技术骨干。',
      effect: { health: 0, wealth: 20, happiness: 20 },
      probability: 0.8,
      variants: [
        '你攻克了一个技术难题，为工厂节省了大量成本，被提拔为班组长。',
        '你发明的新型工装夹具在全厂推广，大大提高了生产效率。',
        '你自学了数控机床操作，成了车间里唯一能操作进口设备的人。',
        '你的合理化建议被采纳实施，获得了技术创新奖。'
      ]
    },
    {
      title: '下岗',
      description: '工厂裁员，你下岗了。',
      effect: { health: -10, wealth: -30, happiness: -25 },
      probability: 0.6,
      variants: [
        '收到下岗通知的那天，你一个人坐在工厂门口抽了很久的闷烟。',
        '你茫然地走在街上，不知道没有了这份工作还能干什么。',
        '四十多岁的你找工作四处碰壁，\"35岁以下\"的要求像一座大山挡在你面前。',
        '你决定不等不靠，用存款开了个小店，开始了第二次创业。'
      ]
    }
  ],
  doctor: [
    {
      title: '妙手回春',
      description: '你成功救治了一位危重病人，家属感激涕零。',
      effect: { health: 5, wealth: 20, happiness: 25 },
      probability: 0.9,
      variants: [
        '一个重症肺炎的患儿在你精心治疗下转危为安，家长跪下来感谢你。',
        '连续手术八个小时后，你成功从死亡线上拉回了一个年轻人。',
        '你用精湛的医术诊断出了一例罕见的疾病，为病人争取到了宝贵的治疗时间。',
        '一个心脏骤停的患者被你抢救过来，家属敲锣打鼓送来了锦旗。'
      ]
    },
    {
      title: '医患纠纷',
      description: '你遇到了一起医患纠纷，很困扰。',
      effect: { health: -10, wealth: -10, happiness: -20 },
      probability: 0.6,
      variants: [
        '患者家属认为治疗效果不佳，在医院大厅大闹，你不得不报警求助。',
        '网上突然出现了对你的恶意攻击，虽然最后查明是误会但让你很寒心。',
        '你被患者投诉到了院长那里，虽然调查证明你没有过错但你还是很沮丧。',
        '一个没救回来的患者家属动手打了你，你感到前所未有的委屈。'
      ]
    },
    {
      title: '职称晋升',
      description: '你晋升为副主任医师。',
      effect: { health: 0, wealth: 25, happiness: 20 },
      probability: 0.7,
      variants: [
        '经过多年的努力和论文积累，你终于晋升为副主任医师，专业得到了认可。',
        '你通过了职称评审，工资涨了一大截，你觉得自己这些年的付出终于有了回报。',
        '同事们为你举办了小型庆祝会，你感慨从住院医师到副主任医师这条路走了十五年。',
        '你开始在科室里带硕士研究生，肩负起了培养下一代医生的责任。'
      ]
    },
    {
      title: '攻克难题',
      description: '你攻克了一个医学难题，发表了论文。',
      effect: { health: 0, wealth: 15, happiness: 25 },
      probability: 0.6,
      variants: [
        '你的研究论文发表在了国际顶级医学期刊上，引起了业界关注。',
        '你发现了一种新的手术方法，大大降低了手术风险和并发症。',
        '你在学术会议上汇报了你的研究成果，赢得了国内外专家的一致好评。',
        '你的临床经验被写入了医学教科书，这是对医生最大的肯定。'
      ]
    },
    {
      title: '援外医疗',
      description: '你参加了援外医疗队，在异国他乡救死扶伤。',
      effect: { health: -10, wealth: 20, happiness: 20 },
      probability: 0.4,
      variants: [
        '你主动报名参加了援非医疗队，在缺医少药的非洲大陆上发挥着自己的专长。',
        '在也门的战火中，你冒着生命危险为当地居民提供医疗服务。',
        '援疆期间你走遍了新疆的贫困县，用自己的医术为各族人民带去了健康。',
        '你在太平洋岛国当了一年的志愿医生，这段经历让你对医者仁心有了更深的理解。'
      ]
    }
  ],
  teacher: [
    {
      title: '桃李满天下',
      description: '你的学生考上了名校，你深感欣慰。',
      effect: { health: 5, wealth: 10, happiness: 30 },
      probability: 0.8,
      variants: [
        '你当年教过的一个调皮学生考上了北大，特意回来感谢你，你热泪盈眶。',
        '你的学生在全国奥赛中获得了一等奖，你比谁都开心。',
        '多年后学生们在教师节回来看望你，挤满了整个教室，你觉得自己是世上最幸福的老师。',
        '你的学生成为了科学家、医生、教师......各行各业都有你播撒过的种子。'
      ]
    },
    {
      title: '教学比赛',
      description: '你在教学比赛中获得了一等奖。',
      effect: { health: 0, wealth: 15, happiness: 25 },
      probability: 0.7,
      variants: [
        '你代表学校参加市级教学比赛，荣获一等奖，为学校争了光。',
        '你的公开课获得了专家的一致好评，录像被当作教学范本。',
        '你创新的教学方法在校内获奖并推广，让更多学生受益。',
        '你参加了一师一优课评选，获得了省级优质课的荣誉。'
      ]
    },
    {
      title: '职称评定',
      description: '你评上了高级教师。',
      effect: { health: 0, wealth: 20, happiness: 20 },
      probability: 0.7,
      variants: [
        '经过层层评审，你终于评上了高级教师，这是对你教学能力的最高认可。',
        '你发表了多篇教学论文，终于凑够了评职称的硬件条件。',
        '评职称的过程很漫长，但你咬牙坚持了下来，最终成功上岸。',
        '你被认定为市级骨干教师，获得了更多的培训和交流机会。'
      ]
    },
    {
      title: '师生情',
      description: '毕业多年的学生来看望你，你很感动。',
      effect: { health: 0, wealth: 0, happiness: 25 },
      probability: 0.8,
      variants: [
        '毕业二十年的学生相约来看你，教室里挤满了各行各业的成年人，你几乎认不出来。',
        '一个曾经很内向的学生现在成了企业家，专门回来感谢你当年的鼓励。',
        '你在路上被一个陌生人拦住，原来是你十年前教过的学生，他/她一眼就认出了你。',
        '教师节那天，你收到了来自世界各地学生们的祝福，觉得当老师这辈子值了。'
      ]
    },
    {
      title: '支教',
      description: '你去偏远地区支教，虽然艰苦但很有意义。',
      effect: { health: -10, wealth: -5, happiness: 20 },
      probability: 0.5,
      variants: [
        '你主动报名去西部支教，在大山深处给孩子们带去了知识和希望。',
        '在乡村学校的一年里，你不仅教书还家访，改变了当地很多孩子的命运。',
        '支教期间你生了一场病，但看到孩子们渴望知识的眼神，你咬牙坚持了下来。',
        '你联系的公益组织为学校捐建了新教室，让更多孩子有了更好的学习环境。'
      ]
    }
  ],
  soldier: [
    {
      title: '立功',
      description: '你在一次任务中立了功，获得了勋章。',
      effect: { health: 0, wealth: 15, happiness: 25 },
      probability: 0.6,
      variants: [
        '你在演习中表现突出，荣立了三等功，这是军旅生涯的重要荣誉。',
        '你带领的班级在比武中获得第一名，你个人也被评为优秀班长。',
        '一次突发事件中你果断处置避免了大事故，师部给你记了功。',
        '你的射击成绩打破了团队纪录，被授予神枪手的荣誉称号。'
      ]
    },
    {
      title: '抗洪抢险',
      description: '你参与了抗洪抢险，保护了人民生命财产。',
      effect: { health: -15, wealth: 0, happiness: 30 },
      probability: 0.7,
      variants: [
        '滔涌的洪水中你连续奋战三天三夜，和战友们一起加固堤坝、保护村庄。',
        '你跳入洪水中救出了被围困的群众，上岸后累得直接瘫倒在地。',
        '你们连队负责转移受灾群众，你背老人抱孩子，连续两天没合眼。',
        '抗洪结束后老百姓夹道欢送，你深深感受到了军民鱼水情。'
      ]
    },
    {
      title: '演习',
      description: '你参加了大规模军事演习，表现优异。',
      effect: { health: -5, wealth: 10, happiness: 15 },
      probability: 0.8,
      variants: [
        '你参加了朱日和演习，在近似实战的环境中锻炼了军事素质。',
        '年度演习中你担任主攻任务，带领班级圆满完成了任务。',
        '你第一次体验了真实的战场环境，认识到和平的珍贵。',
        '演习结束后你瘦了十斤，但你觉得这是军人最好的历练。'
      ]
    },
    {
      title: '退伍',
      description: '你光荣退伍，结束了军旅生涯。',
      effect: { health: 10, wealth: 0, happiness: 10 },
      probability: 1.0,
      variants: [
        '摘下军衔的那一刻你泪流满面，多年的军旅生涯历历在目。',
        '你向军旗敬了最后一个礼，然后踏上了回家的列车。',
        '退伍不褪色，你暗暗发誓要把部队的优良作风带到地方。',
        '你选择回到家乡创业，用在部队学到的本事建设家乡。'
      ]
    },
    {
      title: '边境巡逻',
      description: '你在边境巡逻，保卫国家安全。',
      effect: { health: -10, wealth: 10, happiness: 15 },
      probability: 0.7,
      variants: [
        '你在雪域高原巡逻，脚踏冻土头顶烈日，默默守护着每一寸国土。',
        '你和战友们在无人区跋山涉水，用脚步丈量着祖国的边防线。',
        '你在巡逻途中救助了迷路的牧民，被当地群众称为\"金珠玛米\"。',
        '边防线上你度过了无数个春节，虽然想念家人但你知道这是军人的职责。'
      ]
    }
  ],
  policeman: [
    {
      title: '破案',
      description: '你成功破获了一起重大案件。',
      effect: { health: 0, wealth: 15, happiness: 25 },
      probability: 0.8,
      variants: [
        '你跟踪追查三个月的系列盗窃案终于告破，辖区居民拍手称快。',
        '你乔装打入犯罪团伙内部，一举捣毁了这个盘踞多年的窝点。',
        '一起疑难案件在你手中告破DNA比对技术发挥了关键作用。',
        '你成功劝降了一名潜逃多年的重犯，在铁证面前他终于认罪伏法。'
      ]
    },
    {
      title: '表彰',
      description: '你被授予"人民满意警察"荣誉称号。',
      effect: { health: 0, wealth: 20, happiness: 25 },
      probability: 0.6,
      variants: [
        '你被评选为全市优秀人民警察，表彰大会上你佩戴着红花在台上发言。',
        '你收到了群众送来的第一面锦旗，虽然不好意思但心里暖暖的。',
        '你的事迹被媒体报道后，很多人都说这就是人民警察该有的样子。',
        '你立了三等功，这是对你工作最大的肯定。'
      ]
    },
    {
      title: '负伤',
      description: '在执行任务时你负了伤。',
      effect: { health: -25, wealth: -5, happiness: -15 },
      probability: 0.5,
      variants: [
        '抓捕嫌犯时你被对方用刀刺伤，缝了十几针，你笑着说这是警察的勋章。',
        '你跳窗追捕逃犯时扭伤了脚踝，但最终还是把嫌疑人抓住了。',
        '在解救人质的行动中你冲在最前面，被歹徒打伤后仍坚持到任务结束。',
        '处置突发事件时你被砸伤，休息了两周才恢复，心里一直惦记着工作。'
      ]
    },
    {
      title: '救民于危难',
      description: '你从火场/水中救出了群众。',
      effect: { health: -10, wealth: 0, happiness: 30 },
      probability: 0.6,
      variants: [
        '一栋居民楼起火，你冲进火海救出了困在里面的母女二人。',
        '有人落水你毫不犹豫跳下去营救，事后才知道对方是个轻生者。',
        '山体滑坡掩埋了村庄，你和战友们徒手刨出了被埋的群众。',
        '你成功劝解了一名想要轻生的人，挽救了一个家庭。'
      ]
    },
    {
      title: '社区民警',
      description: '你成为了一名社区民警，和居民关系融洽。',
      effect: { health: 0, wealth: 10, happiness: 20 },
      probability: 0.8,
      variants: [
        '你负责的社区连续三年零发案，大爷大妈们都把你当自家孩子。',
        '你建立了微信群，居民有事儿都爱找你，社区警民关系特别融洽。',
        '你帮助辖区内的刑满释放人员重新融入社会，他们都很感激你。',
        '你走家串户了解民情，成了社区的活档案，谁家有事你都知道。'
      ]
    }
  ],
  businessman: [
    {
      title: '第一桶金',
      description: '你赚到了人生的第一桶金！',
      effect: { health: 0, wealth: 40, happiness: 25 },
      probability: 0.5,
      variants: [
        '经过多年的摸爬滚打，你终于赚到了人生的第一个100万。',
        '你抓住了改革开放的机遇，成了万元户，虽然不多但这是起步。',
        '你的店铺终于开始盈利，你数着手里厚厚的现金，激动得说不出话。',
        '你完成了一笔大生意，利润丰厚，你知道自己终于站起来了。'
      ]
    },
    {
      title: '商业危机',
      description: '你的企业遇到了危机，濒临破产。',
      effect: { health: -15, wealth: -45, happiness: -30 },
      probability: 0.6,
      variants: [
        '一场突如其来的疫情让整个行业陷入停滞，你的公司差点倒闭。',
        '合伙人卷款跑路，你不得不独自承担所有债务，一夜之间头发白了一半。',
        '资金链断裂、银行抽贷，你四处求人借款，那个中滋味只有自己知道。',
        '竞争对手恶意抹黑你，消费者纷纷退货，公司声誉一落千丈。'
      ]
    },
    {
      title: '上市',
      description: '你的公司成功上市！',
      effect: { health: -5, wealth: 60, happiness: 35 },
      probability: 0.3,
      variants: [
        '敲钟的那一刻你热泪盈眶，十多年的梦想终于照进了现实。',
        '你的公司登陆了科创板，你的身家一夜之间翻了好几倍。',
        '上市后你成了媒体追逐的焦点，但你知道这只是新的起点。',
        '你带着创业团队一起去纳斯达克敲钟，大家抱在一起哭成了泪人。'
      ]
    },
    {
      title: '反倾销调查',
      description: '你遭遇了商业对手的反倾销调查。',
      effect: { health: -5, wealth: -25, happiness: -15 },
      probability: 0.5,
      variants: [
        '国外竞争对手提起反倾销诉讼，你不得不花费大量人力物力应诉。',
        '你的产品被调查是否低于成本销售，虽然最终证明清白但元气大伤。',
        '一场漫长的反倾销官司打了两年，虽然赢了但公司也拖得半死不活。',
        '你被要求提供大量的成本资料，配合调查的那段时间你几乎没睡过好觉。'
      ]
    },
    {
      title: '慈善捐赠',
      description: '你做了一笔慈善捐赠，回馈社会。',
      effect: { health: 0, wealth: -20, happiness: 25 },
      probability: 0.7,
      variants: [
        '你为贫困地区捐建了一所小学，孩子们终于可以在明亮的教室里上课了。',
        '你设立了奖学金资助贫困大学生完成学业，希望他们不要因为贫穷而失学。',
        '疫情期间你捐赠了大批物资，虽然公司也不宽裕但你觉得应该出一份力。',
        '你回家乡投资建设，还捐资修了路，乡亲们敲锣打鼓地欢迎你回来。'
      ]
    }
  ],
  scientist: [
    {
      title: '论文发表',
      description: '你的论文发表在了国际顶级期刊上。',
      effect: { health: 0, wealth: 15, happiness: 30 },
      probability: 0.6,
      variants: [
        '你的论文被Nature/Science接收，消息传来时你激动得在实验室里欢呼。',
        '你的研究成果引起了国际学术界的关注，被引用次数不断攀升。',
        '你终于发表了第一篇一作论文，虽然只是领域内的期刊但你还是很开心。',
        '你的综述论文被邀请发表，系统总结了领域内的研究进展。'
      ]
    },
    {
      title: '科研突破',
      description: '你的研究取得了突破性进展！',
      effect: { health: 0, wealth: 20, happiness: 35 },
      probability: 0.4,
      variants: [
        '困扰领域多年的难题终于被你攻克，你的方法被证明是可行的！',
        '你的实验取得了预期之外的结果，却打开了新研究的大门。',
        '你发现了新的现象，这个发现可能会改变整个领域的发展方向。',
        '你成功验证了多年的理论假设，那种激动难以言表。'
      ]
    },
    {
      title: '获得奖项',
      description: '你获得了国家自然科学奖。',
      effect: { health: 0, wealth: 25, happiness: 30 },
      probability: 0.4,
      variants: [
        '你的研究成果获得了国家自然科学二等奖，你作为代表上台领奖。',
        '你获得了杰出青年科学基金的资助，这是对青年科学家最大的认可。',
        '你被评选为院士，这是中国科学家最高的荣誉，你觉得自己这辈子值了。',
        '你获得了省部级科技一等奖，奖金虽然不多但荣誉是无价的。'
      ]
    },
    {
      title: '科研经费',
      description: '你申请到了大额科研经费。',
      effect: { health: 0, wealth: 30, happiness: 20 },
      probability: 0.5,
      variants: [
        '你拿下了国家重点研发计划，经费充足了终于可以大干一场。',
        '你申请的国家自然科学基金获批了，周围的同事都来祝贺你。',
        '企业找上门来合作，你拿到了横向课题的经费支持。',
        '你入选了人才计划，获得了稳定的经费支持，可以安心做研究了。'
      ]
    },
    {
      title: '学术交流',
      description: '你出国参加学术会议，收获颇丰。',
      effect: { health: 0, wealth: -10, happiness: 20 },
      probability: 0.6,
      variants: [
        '你受邀在国际学术会议上做报告，第一次站在世界的舞台上展示你的研究。',
        '你去了国际顶级实验室访问学习，开阔了眼界也建立了合作关系。',
        '你参加了学术会议，遇到了领域的泰斗，得到了一句肯定让你信心大增。',
        '你出国参会时顺便参观了当地著名实验室，学到了很多新技术新方法。'
      ]
    }
  ],
  driver: [
    {
      title: '跑单高峰',
      description: '这个月你刻苦跑单，收入超出了预期。',
      effect: { health: -5, wealth: 30, happiness: 15 },
      probability: 0.8,
      variants: [
        '赶上节假日高峰，你连续跑了十五个小时，进账比平时多了一倍，腰酸腿疼但钱包鼓了。',
        '你研究出了最优接单路线，每天多跑了三四单，月底一算比上个月多了好几百块。',
        '大雨天别的司机都不想出门，你硬撑着跑，接到了好几个感激的乘客，还得了满分好评。',
        '平台推出冲单奖励，你盯着目标死磕了一周，最终拿到了奖励，自己给自己庆祝了一顿。'
      ]
    },
    {
      title: '乘客投诉',
      description: '你遭到了乘客的投诉，平台扣了分。',
      effect: { health: -5, wealth: -10, happiness: -20 },
      probability: 0.6,
      variants: [
        '你好声好气载了一个全程打电话的乘客，下车后他给了你差评，理由是你不够安静。',
        '平台派了一个绕远路的订单，你按导航走，乘客坚持说你在乱跑，投诉后平台默认扣了你分。',
        '乘客嫌你开得慢，你加速后他又说你开得太快，怎么都不对，最终还是给了差评。',
        '遇到一个无理取闹的乘客，你百般忍让还是被投诉，那天晚上你坐在车里发了很久的呆。'
      ]
    },
    {
      title: '交通违章',
      description: '你在开车途中被拍到违章，被罚款扣分。',
      effect: { health: 0, wealth: -15, happiness: -15 },
      probability: 0.6,
      variants: [
        '为了赶上乘客，你闯了个红灯，被摄像头拍到，罚款200元扣3分，心疼了好几天。',
        '路边停车下客被贴了罚单，那个停车费比跑一天车还贵，你气得够呛。',
        '驾照积分快被扣完了，你只好去学习替换分，耽误了两天时间。',
        '超速被抓，扣分罚款，你后悔不已，以后在城里永远不超时速了。'
      ]
    },
    {
      title: '平台改规则',
      description: '平台调整了抽成比例，你的收入受到影响。',
      effect: { health: 0, wealth: -15, happiness: -15 },
      probability: 0.7,
      variants: [
        '平台悄悄上调了抽成比例，你算了算每天少挣了几十块，只能接更多单来补回来。',
        '新规要求司机上传更多资质文件，你为此跑了好几个部门，耽误了整整一天跑单。',
        '平台推出了新的评级制度，你的评级一下掉了一档，接单优先级也随之下降。',
        '听说平台要压缩网约车数量，你和车友们都很担心，不知道这门生意还能做多久。'
      ]
    },
    {
      title: '收入比较',
      description: '你和昔日同学聚会，心里五味杂陈。',
      effect: { health: 0, wealth: 0, happiness: -20 },
      probability: 0.5,
      variants: [
        '同学聚会上大家聊着各自的工作，你说自己跑网约车，换来了几声尴尬的附和。',
        '一个以前成绩不如你的同学现在在大厂上班，你看着他光鲜的名片，默默开着导航走了。',
        '你载到了以前的同学，他认出了你，你强作镇定聊了几句，送他到站后久久没动。',
        '但你想了想，自己每天接送孩子、时间自由、比打螺丝强多了，这日子还算行。'
      ]
    }
  ],
  courier: [
    {
      title: '破纪录派件',
      description: '你单日派件数创下新高，获得了奖励。',
      effect: { health: -10, wealth: 25, happiness: 20 },
      probability: 0.8,
      variants: [
        '双十一那天你凌晨三点出发，骑着电动车穿梭在每一栋楼里，一天派了两百多单，创了个人纪录。',
        '你研究出了最优派送路线，把整个片区走成了肌肉记忆，每天总能比别人多派几十单。',
        '新手期结束后你开始稳定派单，站长拍着你的肩说你是这批新人里最稳的一个。',
        '这个月你连续满勤，月底结算奖金比底薪还多，你给家里打了钱，心里很踏实。'
      ]
    },
    {
      title: '用户投诉',
      description: '你因为一次失误被用户投诉，被罚了款。',
      effect: { health: -5, wealth: -15, happiness: -20 },
      probability: 0.7,
      variants: [
        '你把一个客户的快递放错了门，被投诉后平台直接从工资里扣了罚款，那单白跑了。',
        '雨天急着送件，包裹被淋湿了，客户拍照投诉，你只能默默接受处罚。',
        '一个客户说没收到件，你明明放在门口了，但没有拍照，有口难言只能赔偿。',
        '恶意投诉让你整个月的全勤奖泡汤了，你忍着委屈继续出发，告诉自己以后都要拍照。'
      ]
    },
    {
      title: '交通意外',
      description: '送件途中你遭遇了意外。',
      effect: { health: -20, wealth: -10, happiness: -15 },
      probability: 0.5,
      variants: [
        '雨天路滑，你骑着电动车拐弯时摔倒，膝盖蹭破了皮，爬起来拍了拍腿继续送。',
        '你和一辆外卖摩托追尾，双方都没大碍，但两辆车都受损了，处理起来很麻烦。',
        '太赶时间走神了，直接撞上了路边的隔离墩，车子当场报废，你坐在地上半天没说话。',
        '被一辆变道的私家车蹭到，对方坚持说是你的责任，争了半天耽误了一下午的单。'
      ]
    },
    {
      title: '人情温暖',
      description: '你遇到了一位善意的客户，倍感温暖。',
      effect: { health: 5, wealth: 5, happiness: 25 },
      probability: 0.8,
      variants: [
        '一位阿姨每次取件都给你递一杯热水，你在这条楼道里最期待的就是这一杯水。',
        '暴雨天一个客户出来帮你把包裹搬进门，还塞给你一袋糖，你骑车走了好远才回过神。',
        '你送完最后一单时已经晚上十一点，楼道里的保安老大爷给了你半个面包，那天你差点哭出来。',
        '一个小孩替他妈妈签收后追出来递给你一瓶饮料，说"叔叔辛苦了"，你笑着谢了又谢。'
      ]
    }
  ],
  waiter: [
    {
      title: '高峰冲刺',
      description: '餐厅迎来了客流高峰，你忙得连轴转。',
      effect: { health: -10, wealth: 20, happiness: 10 },
      probability: 0.8,
      variants: [
        '节假日餐厅爆满，你一个人端了整整一下午的盘子，下班后脚都不是自己的了，但小费还不少。',
        '你发现自己记路单的本事越来越强，哪张桌几号菜，心里清清楚楚，老板夸你是个好苗子。',
        '一桌大客户点了满满一桌菜，你接待得滴水不漏，他们走之前专门叫住你说服务很好。',
        '旺季到了，餐厅每天翻台好几次，虽然累，但月底工资加上小费，比平时多了不少。'
      ]
    },
    {
      title: '顾客刁难',
      description: '你遇到了一位难缠的客人。',
      effect: { health: -5, wealth: 0, happiness: -20 },
      probability: 0.7,
      variants: [
        '客人嫌菜凉了要重新换，厨房说没问题，但他又等得不耐烦开始冲你发火，你只能点头道歉。',
        '一桌客人酒喝多了开始无理取闹，你叫来了经理，总算把事情压下去了，但你已经受了一肚子气。',
        '客人对菜品不满意，坚持不付账，你夹在老板和客人中间进退两难。',
        '被一个客人骂了很难听的话，你忍着眼泪转身进了厨房，深呼吸一口气，又走了出来。'
      ]
    },
    {
      title: '升堂口',
      description: '你被提拔为领班，承担了更多责任。',
      effect: { health: 0, wealth: 20, happiness: 20 },
      probability: 0.6,
      variants: [
        '老板说你做事稳当靠谱，把领班的位置给了你，虽然多了几百块工资，但肩上的担子也重了。',
        '你开始负责培训新来的服务员，把自己这几年的经验一股脑传下去，还挺有成就感的。',
        '你从服务员做到领班，整整用了两年，周围的老同事都说你是靠实力熬出来的。',
        '升了领班后你学着管人，才发现当时那些被管的滋味，原来老板也不好当。'
      ]
    }
  ],
  vendor: [
    {
      title: '摆摊热卖',
      description: '你的小摊今天销售爆好，赚了一笔。',
      effect: { health: -5, wealth: 25, happiness: 20 },
      probability: 0.8,
      variants: [
        '这天不知道怎么路过的人特别多，你的烤串卖到断货，手机里的收款提示音响个不停。',
        '你研究出了一个招牌口味，一传十十传百，附近的人专门来找你，甚至有人打车过来。',
        '学校放学后一群孩子围着你的摊位，你笑着给每个人多加了一串，他们第二天还来了。',
        '周末夜市气氛正好，你一直卖到凌晨两点，数着一张张零钱，觉得辛苦也值。'
      ]
    },
    {
      title: '城管来了',
      description: '城管执法，你的摊位被驱离了。',
      effect: { health: -5, wealth: -15, happiness: -20 },
      probability: 0.8,
      variants: [
        '刚刚摆好摊城管就来了，你推着车跑，跑慢了半步，一锅汤倒了一地，一上午白干了。',
        '被罚款后你坐在路边发了一会儿呆，然后擦擦脸，把摊子推到另一个地方继续摆。',
        '城管没收了你的炉子，你去所里说好话求半天，最终罚了款才把东西领回来。',
        '你开始研究各个地方的执法时间规律，学会了在夹缝里生存，比之前跑得更灵活了。'
      ]
    },
    {
      title: '租摊位',
      description: '你租到了一个固定摊位，生意逐渐稳定。',
      effect: { health: 5, wealth: 15, happiness: 20 },
      probability: 0.7,
      variants: [
        '夜市管理处给了你一个固定摊位，你总算不用东躲西藏了，把摊子布置得整整齐齐。',
        '有了固定摊位，回头客越来越多，有人专门把你的摊推荐给朋友，你很有成就感。',
        '摊位的位置不错，日流量相当可观，你把摊子扩大了一些，增加了几个品种。',
        '你申请了营业执照，正式成了有证的小商贩，感觉踏实了很多。'
      ]
    }
  ],
  guard: [
    {
      title: '夜班值守',
      description: '你值夜班时阻止了一起盗窃。',
      effect: { health: 0, wealth: 10, happiness: 20 },
      probability: 0.6,
      variants: [
        '你发现一个鬼鬼祟祟的人在地下室附近徘徊，果断拦住盘问，最后证实他意图盗车。',
        '凌晨两点你巡逻时发现一扇虚掩的门，进去查看后制止了一起入室盗窃，公司给你发了奖金。',
        '你拦住了一辆没有通行证的车，司机试图行贿，你坚持叫来了管理，事后领导夸你有原则。',
        '小区业主把钱包落在门口椅子上，你发现后立即归还，被物业评为了当月最佳员工。'
      ]
    },
    {
      title: '轮班疲惫',
      description: '长期夜班让你的身体出现了问题。',
      effect: { health: -20, wealth: 0, happiness: -15 },
      probability: 0.7,
      variants: [
        '三班倒已经持续了两年，你的生物钟彻底乱了，白天睡不着，晚上打盹，精神越来越差。',
        '体检查出轻微心脏问题，医生建议你不要再熬夜，你看了看银行余额，还是默默上班了。',
        '你在岗位上睡着了，幸好没有出事，但那次睡着把自己吓到了，开始怀疑自己还能撑多久。',
        '过年别人回家团圆，你守在亭子里听着远处的炮声，喝了口冷茶，跟自己说明年一定回去。'
      ]
    }
  ],
  cleaner: [
    {
      title: '感谢的话',
      description: '有人对你的工作表示了真诚的感谢。',
      effect: { health: 0, wealth: 5, happiness: 25 },
      probability: 0.8,
      variants: [
        '一个小孩看你打扫楼道，认真地说了一句"叔叔/阿姨辛苦了"，你愣了一下，笑着说谢谢你。',
        '业主特意找到你说楼道打扫得比以前干净多了，那句话让你拿扫把的手轻松了很多。',
        '居委会把你的名字写进了光荣榜，虽然你觉得自己只是尽职尽责，但还是高兴地拍了张照。',
        '街道办组织表彰环卫工人，你作为代表上台发言，说的都是最朴实的话，台下掌声很热烈。'
      ]
    },
    {
      title: '捡到财物',
      description: '你在工作时捡到了贵重财物并上交。',
      effect: { health: 0, wealth: 5, happiness: 20 },
      probability: 0.7,
      variants: [
        '你在垃圾堆里发现了一个钱包，里面有好几千块现金，你交给了居委会，失主找来时激动得直哭。',
        '你扫地时捡到了一串钥匙，认出是哪栋楼的，挨家挨户找到了失主，失主给了你红包你没收。',
        '有人把手机落在长椅上，你捡到后等了半个小时终于等到了失主，那顿道谢让你高兴了一整天。',
        '捡到贵重物品上交后被当地报纸报道了，你的工友们都说你给大家涨了脸。'
      ]
    },
    {
      title: '工作委屈',
      description: '你在工作中受到了不公正的对待。',
      effect: { health: 0, wealth: 0, happiness: -20 },
      probability: 0.7,
      variants: [
        '有居民因为你没扫到一个角落就大声训斥你，你低着头道歉，心里堵得慌。',
        '有人把大量垃圾直接倒在楼道，你打扫了一个早上，下午他们又倒了，你蹲在地上沉默了很久。',
        '你累得腰都直不起来，路过的人看都不看你一眼，你想，要是换了别的活就好了。',
        '你工作的时候被人拍了照发到网上嘲笑，这件事让你消沉了好几天，但第二天还是出门扫街了。'
      ]
    }
  ],
  mechanic: [
    {
      title: '绝活出手',
      description: '你修好了别人都搞不定的老毛病，口碑打出来了。',
      effect: { health: 0, wealth: 25, happiness: 25 },
      probability: 0.7,
      variants: [
        '一辆老款车拖来时连4S店都摇头，你趴在车底鼓捣了两个小时，发动机重新顺畅地转起来了，车主直接给了双倍钱。',
        '你凭经验判断出别人查了三次查不出来的间歇性故障，老板惊得说"这人是真有两下子"。',
        '你修车的名声传出去后，周边几个小区的人都指名来找你，那段时间忙得连饭都顾不上吃。',
        '你把一辆差点报废的旧摩托改造了一番，骑出去完全焕然一新，从此成了附近的传说人物。'
      ]
    },
    {
      title: '以次充好投诉',
      description: '你被客户投诉换了劣质配件，名声受损。',
      effect: { health: -5, wealth: -15, happiness: -20 },
      probability: 0.5,
      variants: [
        '一个客户投诉你用了副厂配件当原厂卖，虽然你解释了半天，但他还是找朋友在网上发帖，生意冷了一段时间。',
        '你进了一批便宜货蒙混了几单，被一个懂行的老师傅识破，当面说出来，你脸红到脖子根。',
        '客户拿着坏掉的配件找回来，你知道是自己手头一时偷懒，没办法只能免费重修，心里懊悔不已。',
        '市场监管部门例行检查，你柜台里的备件抽检了两件不合格，罚款加整改让你折腾了好久。'
      ]
    },
    {
      title: '行业竞争',
      description: '附近新开了几家修理店，生意变难了。',
      effect: { health: 0, wealth: -15, happiness: -15 },
      probability: 0.7,
      variants: [
        '商场旁边突然开了一家连锁汽修，价格打得很低，你的老客户一下子少了一批，你坐在空荡荡的店里发呆。',
        '网上比价平台出现后，客户都开始货比三家，你发现自己只能靠质量和口碑硬撑了。',
        '新进来一批年轻师傅开价比你低得多，你不愿打价格战，只好接一些他们搞不定的复杂活儿。',
        '美团上线了汽修预约服务，你想入驻却搞不懂怎么操作，叫侄子帮忙弄了好几天才上线。'
      ]
    },
    {
      title: '技术升级',
      description: '你花钱学了新技术，接活的范围更广了。',
      effect: { health: 0, wealth: 20, happiness: 20 },
      probability: 0.7,
      variants: [
        '你花了几千块去城里学新能源汽车维修，回来后接了第一辆特斯拉，收费是普通车的三倍。',
        '你买了一台电脑诊断仪，过去靠经验猜的毛病现在一插就出代码，效率翻了好几倍。',
        '你加入了一个技术群，遇到搞不懂的问题在群里一问就有人回答，感觉多了几十个师兄弟帮忙。',
        '你儿子帮你做了个抖音号，发了几条修车视频，粉丝涨了不少，进店问价的客户多了一倍。'
      ]
    }
  ],
  electrician: [
    {
      title: '抢修立功',
      description: '你及时处理了重大电路故障，获得了好评。',
      effect: { health: -5, wealth: 20, happiness: 25 },
      probability: 0.7,
      variants: [
        '小区深夜大停电，你接到物业电话立刻赶到，在配电箱里摸索了一个多小时，全楼恢复了灯光，业主们自发鼓掌。',
        '工厂生产线突然跳闸停机，你当机立断找到了短路点，十分钟内复产，老板当场奖你五百块。',
        '商场圣诞活动当天主路灯断了，你爬上梯子接好线，现场没有停止一分钟，商场经理握着你的手说幸亏有你。',
        '医院手术室备用电源出了问题，你被紧急叫去处理，事后院长特意写了感谢信。'
      ]
    },
    {
      title: '险情处理',
      description: '你在施工中遇到了危险，有惊无险。',
      effect: { health: -20, wealth: -5, happiness: -15 },
      probability: 0.5,
      variants: [
        '拉线时没关闸，一道电弧把你弹出去，所幸穿着绝缘靴，手麻了三天才恢复，你再也不敢省这道步骤了。',
        '在潮湿地下室作业时漏电，你感觉一股麻流遍全身，同事一把把你拉开，你出了一身冷汗。',
        '你爬上高压配电箱排查故障，一不小心螺丝刀碰到了带电端，火花溅出来把眉毛烧了半边。',
        '竣工检查时发现之前的施工队埋线不规范，你苦口婆心让业主重新改造，差点闹翻，但最终避免了一场火灾。'
      ]
    },
    {
      title: '资质证书',
      description: '你考取了高压电工证，接活的范围扩大了。',
      effect: { health: 0, wealth: 20, happiness: 20 },
      probability: 0.8,
      variants: [
        '你去考了高压电工证，拿到证书那天你感叹自己花了两个月背书，终于算没白费。',
        '有了新证书，你开始接工厂变配电室的维护合同，稳定月收入直接翻了一倍。',
        '你花钱考了消防电工证，装修公司立刻找你谈合作，工程一单接着一单。',
        '工程局明确要求持证上岗，你庆幸自己早准备，而没证的师兄只能干看着活儿被你抢走。'
      ]
    }
  ],
  baker: [
    {
      title: '爆款研发',
      description: '你研发出了一款爆款产品，销量大涨。',
      effect: { health: -5, wealth: 30, happiness: 25 },
      probability: 0.7,
      variants: [
        '你摸索了两个月的新口味脏脏包一上架就卖断货，隔天有人专门开一个小时车来买，你知道这款打中了。',
        '你把家乡小吃改良做成了甜品，发到朋友圈后炸开了锅，一天接了三十多个订单，手腕都磨出了茧子。',
        '一个日系造型的慕斯在朋友圈走红，被几个博主转发，你的小店前排起了队，你第一次感受到了流量的力量。',
        '你给孩子做的卡通蛋糕被家长拍照发朋友圈，定制订单从此没断过，价格开得比普通蛋糕高一倍也有人预约。'
      ]
    },
    {
      title: '开小店',
      description: '你开了一家属于自己的小烘焙店。',
      effect: { health: -10, wealth: -20, happiness: 20 },
      probability: 0.6,
      variants: [
        '你把攒了三年的钱租了个十平米的小店面，亲手刷墙、布置橱窗，开业那天买了一套新围裙上阵。',
        '门店第一个月亏了钱，你咬牙坚持，靠着回头客慢慢把口碑做起来，第三个月终于回了本。',
        '你的店不大，只有六个座位，但你把每一个产品都做到极致，大家说这是附近最用心的烘焙店。',
        '开店之后你每天四点起床准备材料，虽然比上班时累多了，但坐在自己店里数钱的感觉截然不同。'
      ]
    },
    {
      title: '食安风波',
      description: '你的产品被投诉卫生问题，生意受到影响。',
      effect: { health: 0, wealth: -20, happiness: -20 },
      probability: 0.5,
      variants: [
        '有客户在朋友圈发了一张说你的面包发霉的照片，你百口莫辩，急忙联系解释，但评论区已经炸锅了。',
        '市监所例行检查抽检，你有一款产品添加剂超标，被整改停卖，重新配方花了将近一个月。',
        '夏天高温，一批奶油蛋糕没冷链配送出了问题，退款赔偿加上损失的口碑，那个月你倒贴了不少钱。',
        '网上出现了一则视频说你的店后厨不卫生，虽然是同行恶意拍摄，但澄清花了很大力气，生意冷了好一阵。'
      ]
    }
  ],
  nanny: [
    {
      title: '雇主信任',
      description: '雇主一家对你越来越信任，你感到被认可。',
      effect: { health: 5, wealth: 15, happiness: 25 },
      probability: 0.8,
      variants: [
        '宝宝第一次叫你"阿姨"，雇主妈妈感动地说宝宝特别喜欢你，你心里暖乎乎的。',
        '雇主出差把孩子全权交给你，临走前说"有你在我放心"，你感受到了被真心信任的分量。',
        '你照顾的老人健康好了很多，子女特意来感谢你，还主动帮你涨了工资。',
        '做满一年后雇主留你继续做，并帮你介绍了另一个家庭，你的活路越来越稳。'
      ]
    },
    {
      title: '雇主矛盾',
      description: '你和雇主产生了矛盾，很难处理。',
      effect: { health: -5, wealth: 0, happiness: -20 },
      probability: 0.6,
      variants: [
        '雇主妈妈和婆婆在教育孩子上意见不同，你夹在中间左右为难，哪边都不敢得罪。',
        '你做的饭菜口味被挑剔了很多次，你已经尽力了，却感觉怎么做都不对，心里很委屈。',
        '雇主发现家里少了件东西，含沙射影地问了你，虽然后来找到了，但你心里的疙瘩没散。',
        '你的休息时间被反复占用，你鼓起勇气提出来，雇主说你太计较，那段时间你考虑要不要换工作。'
      ]
    },
    {
      title: '带娃心得',
      description: '你积累了很多带娃经验，成了行家。',
      effect: { health: 0, wealth: 15, happiness: 20 },
      probability: 0.8,
      variants: [
        '你带过了十几个孩子，感觉每一种脾气都见过，现在遇到任何情况都能从容应对。',
        '同行来向你请教安抚哭闹孩子的方法，你说了十几条，她一边记一边点头，你第一次有了传授经验的成就感。',
        '你考取了家政服务职业资格证，接活的价格可以往上提了，雇主对你也更放心。',
        '你服务的家庭介绍给亲戚，没多久又转介绍，你的活不愁接了，还可以自己筛选雇主了。'
      ]
    }
  ],
  fisherman: [
    {
      title: '大丰收',
      description: '这次出海遇到了大鱼群，满载而归。',
      effect: { health: -5, wealth: 40, happiness: 25 },
      probability: 0.7,
      variants: [
        '你凌晨出发，撒网时感觉拉力比平时大了好几倍，拉上来一看密密麻麻全是鱼，那天你乐得合不拢嘴。',
        '老渔民指了个秘密位置，你去试了试，结果鱼获是平时的三倍，那个老头说他看你为人不错才告诉你。',
        '这一季螃蟹长得好，肉厚黄多，收购价也高，你算了算今年是从事渔业以来最好的一年。',
        '碰到了久违的鱼汛，整条渔船满舱，港口的收购商都在你这里抢货，你把当天的鱼卖了个好价钱。'
      ]
    },
    {
      title: '风浪危险',
      description: '你在海上遭遇了大风浪，九死一生。',
      effect: { health: -30, wealth: -15, happiness: -20 },
      probability: 0.5,
      variants: [
        '气象预报没有精准，海上突然来了台风，你们紧急驾船回港，浪头有两层楼高，你到家后双腿都在抖。',
        '你的渔船在风浪中进水，紧急发出求救信号，等到海警船赶到时，你已经站了三个小时的水里。',
        '你的渔船触礁，船底破了一个洞，好在离岸不远，勉强撑回港口，修船花了将近一个月的收入。',
        '海上迷了雾，罗盘又出了问题，你漂了整整一夜才确定方向，那晚你第一次感受到了大海的残酷。'
      ]
    },
    {
      title: '鱼价低迷',
      description: '水产大量上市，鱼价跌到谷底。',
      effect: { health: 0, wealth: -20, happiness: -15 },
      probability: 0.7,
      variants: [
        '今年大家都大丰收，市场上鱼比白菜便宜，你辛苦出海一趟，刨去油钱几乎没剩什么。',
        '养殖场产量暴涨，野生鱼的价钱也被拉下来了，你气不过但也没辙，市场就是这样。',
        '收购商压价压得厉害，你不卖又没处存放，最后只能忍气吞声，那几箱鱼卖的钱不够当天的柴油费。',
        '禁渔期结束后开海，大家一起出海，鱼获集中上市，你的鱼烂在码头上卖不掉，那段时间你一直在愁。'
      ]
    },
    {
      title: '禁渔政策',
      description: '禁渔期来临，你需要另谋出路。',
      effect: { health: 5, wealth: -10, happiness: -5 },
      probability: 0.8,
      variants: [
        '每年禁渔期你都会去镇上打几个月的零工，今年赶上了工地招人，干了三个月攒了一笔。',
        '村里组织渔民转型培训，你报名学了养殖技术，想着开海后试着搞点网箱养殖。',
        '禁渔期靠政府补贴过日子，虽然不多，但你把船修了修，为开海做好了准备。',
        '你和几个老渔民组了个捕捞合作社，资金入股统一作业，分摊了风险也分担了收益。'
      ]
    }
  ],
  individual: [
    {
      title: '第一笔大单',
      description: '你接到了创业以来最大的一笔生意。',
      effect: { health: -5, wealth: 35, happiness: 25 },
      probability: 0.7,
      variants: [
        '一个做房产中介的朋友帮你介绍了一个批发商，对方一次要了两千件，你连夜联系货源，终于圆满完成。',
        '你坚持摆摊三个月，终于等来了一家公司的团购订单，数量是平时单天的十倍，你手忙脚乱但挺过来了。',
        '你做的手工产品被一个外地经销商看中，签了长期供货合同，这是你打了翻身仗的第一步。',
        '你在朋友圈发了一条产品信息，没想到被人转发后一夜爆单，你一边感谢老天一边熬了三天夜赶货。'
      ]
    },
    {
      title: '竞争对手',
      description: '同行打价格战，你的生意受到了冲击。',
      effect: { health: 0, wealth: -15, happiness: -15 },
      probability: 0.7,
      variants: [
        '原来你是这条街唯一一家，现在对面开了三家，价格比你低两成，你每天看着他们门口的人多心里难受。',
        '有人抄了你的招牌产品，还在网上说是"正宗源头"，你去交涉也没用，只能靠老客户撑着。',
        '平台突然冒出一堆低价竞争者，你研究了半天发现都是工厂直销，你这个中间商越来越难做。',
        '同行拉帮结派排挤你，你在市场里被孤立，拉货的车都绕开你，你只能摸索别的出路。'
      ]
    },
    {
      title: '线上接单',
      description: '你学会了网上接单，生意范围大了很多。',
      effect: { health: 0, wealth: 25, happiness: 20 },
      probability: 0.7,
      variants: [
        '你让儿女帮你弄了个网店，没想到来自外地的订单越来越多，原来互联网真的把生意做大了。',
        '你开始做直播卖货，刚开始手足无措，说话也磕磕绊绊，但真实的风格反而圈了一批铁粉。',
        '你把产品发给几个短视频博主带货，一条视频出去，几天之内进了比平时半年都多的货款。',
        '你加入了本地商家群，互相帮推广，生意范围从原来的几条街扩展到了整个城区。'
      ]
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

// 事件分类：self=个人选择/主动行为，environment=环境施加/不可控
export const eventCategoryMap = {
  // universal events
  '意外': 'environment', '健康危机': 'self', '财富机遇': 'environment',
  '搬迁': 'self', '获奖': 'self', '疾病': 'environment',
  '机遇': 'self', '交通事故': 'environment', '中彩票': 'environment',
  '亲人离世': 'environment', '出生': 'environment', '结婚': 'self',
  '离婚': 'self', '生子': 'self', '升学': 'self', '毕业': 'self',
  '犯罪': 'environment', '见义勇为': 'self', '房产购置': 'self',
  '投资成功': 'self', '投资失败': 'environment', '出国': 'self',
  '移民': 'self', '自然灾害': 'environment', '遗产继承': 'environment',
  '创业成功': 'self', '创业失败': 'environment', '晋升': 'self',
  '裁员': 'environment', '退休': 'self', '金婚': 'self',
  '孙辈': 'self', '桃李满天下': 'self', '中年危机': 'environment',
  '职业瓶颈': 'self', '立功': 'self', '破案': 'self',
  '救民于危难': 'self', '健康危机治愈': 'self',
  // byAge events
  '入学': 'self', '朋友': 'self', '初恋': 'self', '叛逆': 'self',
  '高考压力': 'self', '文理分科': 'self', '独立': 'self', '初恋分手': 'self',
  '大学恋爱': 'self', '就业': 'self', '创业': 'self', '失业': 'environment',
  '外出打工': 'self', '职业技能': 'self',
  '考研': 'self', '购房': 'self', '加薪': 'self', '第二个孩子': 'self',
  '事业': 'self', '子女教育': 'self', '父母养老': 'self', '再次创业': 'self',
  '退休规划': 'self', '子女成才': 'self', '健康检查': 'self', '再婚': 'self',
  '大病': 'environment', '环游中国': 'self',
  // 35岁段
  '职业瓶颈': 'self', '投资成功': 'self', '投资失败': 'environment',
  // profession events
  '丰收年': 'environment', '土地改革': 'environment', '进城务工': 'self',
  '新型农业': 'self', '工厂先进': 'self', '工厂事故': 'environment',
  '国企改革': 'environment', '技术革新': 'self', '下岗': 'environment',
  '妙手回春': 'self', '医患纠纷': 'environment', '职称晋升': 'self',
  '攻克难题': 'self', '援外医疗': 'self', '教学比赛': 'self',
  '职称评定': 'self', '师生情': 'self', '支教': 'self',
  '抗洪抢险': 'environment', '演习': 'self', '退伍': 'self', '边境巡逻': 'self',
  '表彰': 'self', '负伤': 'environment', '社区民警': 'self',
  '第一桶金': 'self', '商业危机': 'environment', '上市': 'self',
  '反倾销调查': 'environment', '慈善捐赠': 'self',
  '论文发表': 'self', '科研突破': 'self', '获得奖项': 'self',
  '科研经费': 'self', '学术交流': 'self',
  // driver/courier/waiter/vendor/guard/cleaner events
  '跑单高峰': 'self', '乘客投诉': 'environment', '交通违章': 'environment',
  '平台改规则': 'environment', '收入比较': 'environment',
  '破纪录派件': 'self', '用户投诉': 'environment', '交通意外': 'environment', '人情温暖': 'environment',
  '高峰冲刺': 'self', '顾客刁难': 'environment', '升堂口': 'self',
  '摆摊热卖': 'self', '城管来了': 'environment', '租摊位': 'self',
  '夜班值守': 'self', '轮班疲惫': 'environment',
  '感谢的话': 'environment', '捡到财物': 'self', '工作委屈': 'environment',
  // mechanic events
  '绝活出手': 'self', '以次充好投诉': 'environment', '行业竞争': 'environment', '技术升级': 'self',
  // electrician events
  '抢修立功': 'self', '险情处理': 'environment', '资质证书': 'self',
  // baker events
  '爆款研发': 'self', '开小店': 'self', '食安风波': 'environment',
  // nanny events
  '雇主信任': 'environment', '雇主矛盾': 'environment', '带娃心得': 'self',
  // fisherman events
  '大丰收': 'environment', '风浪危险': 'environment', '鱼价低迷': 'environment', '禁渔政策': 'environment',
  // individual events
  '第一笔大单': 'self', '竞争对手': 'environment', '线上接单': 'self',
  // universal ordinary events
  '欠薪讨薪': 'environment', '租房涨价': 'environment', '亲友借钱': 'environment'
}
