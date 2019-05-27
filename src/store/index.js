import Vue from 'vue'
import Vuex from 'vuex'

import api from '@/service/api'

import pannel from './modules/pannel'

Vue.use(Vuex)

// 初始化数据

const common_store = {
    state: {
        logined: false,
        type: 0,
        username: null,
        password: null,
        uid: 0,
        tel: 0,
        jumped_url: ''
    },
    mutations: {
        change_state(state, payload) {
            for (let key in payload) {
                state[key] = payload[key]
            }
        }
    },
    actions: {
        async init({commit, state}) {
            if (state.logined)
                return
            if (document.cookie) {
                const res = await api.user.id()
                if (!res)
                    commit('change_state', {logined: false, type: 0})
                else {
                    commit('change_state', {
                        logined: true,
                        type: res.type,
                        uid: res.uid,
                        tel: res.tel
                    })
                    console.debug(`[Init]`, {
                        logined: true,
                        type: res.type,
                        uid: res.uid,
                        tel: res.tel
                    })
                }
            }
        }
    }
}

export default new Vuex.Store({
    state: {
        logined: false,
        type: 0,
        username: null,
        password: null,
        uid: 0,
        tel: 0,
        jumped_url: ''
    },
    mutations: {
        /**
         * 存储用于跳转的URL
         * @param state
         */
        store_url(state) {
            state.jumped_url = this.$route.fullPath
        },
        /**
         * 万金油使用法
         * @param state
         * @param payload
         */
        change_state(state, payload) {
            for (let key in payload) {
                state[key] = payload[key]
            }
        }
    },
    actions: {
        async init({commit, state}) {
            if (state.logined)
                return
            if (document.cookie) {
                const res = await api.user.id()
                if (!res)
                    commit('change_state', {logined: false, type: 0})
                else {
                    commit('change_state', {
                        logined: true,
                        type: res.type,
                        uid: res.uid,
                        tel: res.tel
                    })
                    console.debug(`[Init]`, {
                        logined: true,
                        type: res.type,
                        uid: res.uid,
                        tel: res.tel
                    })
                }
            }
        }
    },
    modules: {
        pannel
    },
    strict: process.env.NODE_ENV !== 'production'
})
