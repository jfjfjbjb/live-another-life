// 天气数据
export const weathers = [
  { type: 'sunny', icon: '☀️', name: '晴' },
  { type: 'cloudy', icon: '☁️', name: '多云' },
  { type: 'rain', icon: '🌧️', name: '雨' },
  { type: 'snow', icon: '❄️', name: '雪' },
  { type: 'fog', icon: '🌫️', name: '雾' }
]

// 地区天气映射
export const locationWeatherMap = {
  '江苏省 · 苏州市 · 平江区': {
    spring: ['sunny', 'cloudy', 'rain'],
    summer: ['sunny', 'rain'],
    autumn: ['sunny', 'cloudy'],
    winter: ['cloudy', 'rain', 'fog']
  },
  default: {
    spring: ['sunny', 'cloudy', 'rain'],
    summer: ['sunny', 'rain'],
    autumn: ['sunny', 'cloudy'],
    winter: ['cloudy', 'rain', 'snow', 'fog']
  }
}