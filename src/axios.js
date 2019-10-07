import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://starstudio.uestc.edu.cn/kase/'

axios.defaults.transformRequest = [function (data) {
  // 对 data 进行任意转换处理
  return qs.stringify(data)
}]
axios.defaults.withCredentials = true
axios.defaults.headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
}
Vue.prototype.$axios = axios
