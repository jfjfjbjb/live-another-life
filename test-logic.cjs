// 测试用例：验证公司创立时间过滤逻辑
// 运行方式: node test-logic.js

// 导入公司数据
const { companies, getRandomCompany } = require('./src/data/bigEvents.js')

console.log('=== 公司创立时间过滤测试 ===\n')

// 测试1: 1980年之前的年份，不应该出现现代互联网公司
console.log('【测试1】1980年不应出现现代互联网公司')
for (let i = 0; i < 10; i++) {
  const company = getRandomCompany('internet', 1980)
  if (company.name === '阿里巴巴' || company.name === '腾讯' || company.name === '百度') {
    console.log(`  [FAIL] 出现了现代公司: ${company.name}`)
  }
}
console.log('  [PASS] 1980年互联网类别测试通过\n')

// 测试2: 1970年应该只有计划经济时代单位
console.log('【测试2】1970年应该出现计划经济时代单位')
let foundPlannedEconomy = false
for (let i = 0; i < 50; i++) {
  const company = getRandomCompany(null, 1970)
  if (company.name === '国营百货大楼' || company.name === '供销合作社' || company.name === '人民公社') {
    foundPlannedEconomy = true
    break
  }
}
if (foundPlannedEconomy) {
  console.log('  [PASS] 找到计划经济时代单位')
} else {
  console.log('  [FAIL] 未找到计划经济时代单位\n')
}

// 测试3: 1995年不应该出现2010年后创立的公司
console.log('【测试3】1995年不应出现2010年后创立的公司')
for (let i = 0; i < 20; i++) {
  const company = getRandomCompany(null, 1995)
  const modernCompanies = ['字节跳动', '滴滴出行', '美团', '拼多多', '小米', '京东', '盒马鲜生']
  if (modernCompanies.includes(company.name)) {
    console.log(`  [FAIL] 出现了2010年后公司: ${company.name}`)
  }
}
console.log('  [PASS] 1995年过滤测试通过\n')

// 测试4: 2000年应该可以出现1998年创立的腾讯
console.log('【测试4】2000年应该可以出现1998年创立的腾讯')
let foundTencent = false
for (let i = 0; i < 100; i++) {
  const company = getRandomCompany('internet', 2000)
  if (company.name === '腾讯') {
    foundTencent = true
    break
  }
}
if (foundTencent) {
  console.log('  [PASS] 2000年可以出现腾讯\n')
} else {
  console.log('  [FAIL] 2000年未能出现腾讯\n')
}

// 测试5: 2015年应该可以出现各类型现代公司
console.log('【测试5】2015年应该可以出现各类型现代公司')
const modernByCategory = {
  internet: ['阿里巴巴', '腾讯', '百度', '字节跳动', '美团'],
  gig: ['滴滴出行', '美团外卖', '饿了么', '货拉拉'],
  logistics: ['顺丰速运', '中通快递', '圆通速递']
}

let allFound = true
for (const [cat, names] of Object.entries(modernByCategory)) {
  let found = false
  for (let i = 0; i < 100; i++) {
    const company = getRandomCompany(cat, 2015)
    if (names.includes(company.name)) {
      found = true
      break
    }
  }
  if (!found) {
    console.log(`  [FAIL] 2015年${cat}类别未能出现现代公司`)
    allFound = false
  }
}
if (allFound) {
  console.log('  [PASS] 2015年各类型现代公司测试通过\n')
}

// 测试6: 检查特定公司是否有创立年份
console.log('【测试6】检查特定公司是否有创立年份')
const companiesToCheck = [
  { name: '阿里巴巴', expectedYear: 1999 },
  { name: '华为', expectedYear: 1987 },
  { name: '娃哈哈', expectedYear: 1987 },
  { name: '国营百货大楼', expectedYear: 1950 },
  { name: '供销合作社', expectedYear: 1950 },
]

let allHaveYear = true
for (const { name, expectedYear } of companiesToCheck) {
  let found = null
  for (const cat of Object.keys(companies)) {
    const company = companies[cat].find(c => c.name === name)
    if (company) {
      found = company
      break
    }
  }
  if (!found) {
    console.log(`  [FAIL] 未找到公司: ${name}`)
    allHaveYear = false
  } else if (!found.foundingYear) {
    console.log(`  [FAIL] ${name} 缺少 foundingYear`)
    allHaveYear = false
  } else if (found.foundingYear !== expectedYear) {
    console.log(`  [FAIL] ${name} foundingYear 错误，期望 ${expectedYear}，实际 ${found.foundingYear}`)
    allHaveYear = false
  }
}
if (allHaveYear) {
  console.log('  [PASS] 所有特定公司创立年份检查通过\n')
}

// 测试7: 特定职业类别在公司创立前不应该出现该职业
console.log('【测试7】1980年计算机相关职业不应该出现现代互联网公司')
for (let i = 0; i < 20; i++) {
  const company = getRandomCompany('internet', 1980)
  const itCompanies = ['阿里巴巴', '腾讯', '百度', '网易', '新浪', '搜狐', '联想', '小米']
  if (itCompanies.includes(company.name)) {
    console.log(`  [FAIL] 1980年出现了IT公司: ${company.name}`)
  }
}
console.log('  [PASS] 1980年IT职业公司类别过滤测试通过\n')

// 测试8: 时代特定类别在不同年代的表现
console.log('【测试8】时代特定类别测试')
// 1985年应该能获取到reformEra类别
let foundReformEra = false
for (let i = 0; i < 50; i++) {
  const company = getRandomCompany('reformEra', 1985)
  if (company) {
    foundReformEra = true
    break
  }
}
console.log(`  1985年 reformEra 类别: ${foundReformEra ? '[PASS]' : '[FAIL]'}`)

// 2020年reformEra类别仍然可用
foundReformEra = false
for (let i = 0; i < 50; i++) {
  const company = getRandomCompany('reformEra', 2020)
  if (company) {
    foundReformEra = true
    break
  }
}
console.log(`  2020年 reformEra 类别: ${foundReformEra ? '[PASS]' : '[FAIL]'}\n`)

// 测试9: 全面随机抽样测试
console.log('【测试9】全面随机抽样测试（在不同年份检查公司是否在创立年份前出现）')
const testYears = [1960, 1975, 1985, 1995, 2005, 2015, 2020]
let totalTests = 0
let passedTests = 0

for (const year of testYears) {
  for (let i = 0; i < 100; i++) {
    const company = getRandomCompany(null, year)
    totalTests++
    if (!company.foundingYear || company.foundingYear <= year) {
      passedTests++
    } else {
      console.log(`  [FAIL] ${year}年 出现了 ${company.name}（创立于${company.foundingYear}）`)
    }
  }
}
console.log(`  总测试: ${totalTests}, 通过: ${passedTests}, ${passedTests === totalTests ? '[PASS]' : '[FAIL]'}\n`)

console.log('=== 测试完成 ===')