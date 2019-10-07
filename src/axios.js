import Vue from 'vue'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://starstudio.uestc.edu.cn/kase/'

axios.defaults.withCredentials = true
axios.defaults.headers = {
  'Content-Type': 'multipart/form-data'
}
Vue.prototype.$axios = axios
