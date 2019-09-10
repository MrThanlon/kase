import Vue from 'vue'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL = '/api'

axios.defaults.withCredentials = true
axios.defaults.headers = {
  'Content-Type': 'application/json'
}
