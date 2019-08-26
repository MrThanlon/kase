import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'
import store from '@/store'

import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
