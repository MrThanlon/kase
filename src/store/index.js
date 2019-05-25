import Vue from 'vue'
import Vuex from 'vuex'

import api from '@/service/api'

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
    strict: process.env.NODE_ENV !== 'production'
})
