import Vue from 'vue'
import Vuex from 'vuex'

import api from '@/service/api'

import pannel from './modules/pannel'

Vue.use(Vuex)

// 初始化数据

export default new Vuex.Store({
  state: {
    /**
     * 是否登录
     */
    logined: false,
    /**
     * 是否尝试初始化
     */
    inited: false,
    /**
     * 用户类型
     * 0.未确定
     * 1.申请人
     * 2.审核人
     * 3.管理员
     */
    type: 0,
    typeText: 'student',
    username: null,
    /**
     * 登录面板的提示
     */
    loginMsg: '',
    list: [{
      cid: 1,
      applicant: '王小虎',
      name: '九九九',
      uid: '上海市普陀区金沙江路 1518 弄',
      status: '已通过'
    },
    {
      cid: 1,
      applicant: '王小虎',
      name: '九九九',
      uid: '上海市普陀区金沙江路 1518 弄',
      status: '未通过'
    },
    {
      cid: 1,
      applicant: '王小虎',
      name: '九九九',
      uid: '上海市普陀区金沙江路 1518 弄',
      status: '待审核'
    },
    {
      cid: 1,
      applicant: '王小虎',
      name: '九九九',
      uid: '上海市普陀区金沙江路 1518 弄',
      status: '已通过'
    },
    {
      cid: 1,
      applicant: '王小虎',
      name: '九九九',
      uid: '上海市普陀区金沙江路 1518 弄',
      status: '未通过'
    },
    {
      cid: 1,
      applicant: '王小虎',
      name: '九九九',
      uid: '上海市普陀区金沙江路 1518 弄',
      status: '待审核'
    }
    ]
  },
  getters: {
    getlist (state) {
      return state.list
    }
  },
  mutations: {
    /**
     * 万金油使用法
     * @param state
     * @param payload
     */
    change_state (state, payload) {
      for (const key in payload) {
        state[key] = payload[key]
      }
    },
    changelist (state, thelist) {
      const templist = thelist
      for (let i = 0; i < templist.length; i++) {
        if (templist[i].status === 0) {
          templist[i].status = '待审核'
        } else if (templist[i].status === 1) {
          templist[i].status = '已通过'
        } else if (templist[i].status === -1) {
          templist[i].status = '未通过'
        }
      }
      state.list = thelist
    }
  },
  actions: {
    async init ({
      commit,
      state
    }) {
      // 从后端拉取数据，初始化
      if (state.logined) {
        return
      }

      const res = await api.user.id()
      if (!res) {
        // 没有得到数据，未登录
        commit('change_state', {
          logined: false,
          type: 0
        })
      } else {
        commit('change_state', {
          logined: true,
          type: res.type,
          uid: res.uid,
          tel: res.tel
        })

        console.debug('[Init] User:', {
          logined: true,
          type: res.type,
          uid: res.uid,
          tel: res.tel
        })

        if (res.type === 1) {
          const contentList = (await api.data.app.list()).data
          const projectList = (await api.data.app.list_prj()).data
          commit('change_state', {
            contentList: contentList,
            projectList: projectList
          })
        } else if (res.type === 2) {
          const contentList = (await api.data.jug.list()).data
          commit('change_state', {
            contentList
          })
        } else if (res.type === 3) {
          const projectList = (await api.data.adm.list()).data
          commit('change_state', {
            projectList
          })
        }
      }
    }
  },
  strict: process.env.NODE_ENV !== 'production'
})
