import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './components/login'
import Index from './components/index'
import Pannel from './views/pannel'
import Test from './views/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta:{
        title:'kase-登录'
      }
    },
    {
      path: '/',
      name: 'index',
      component: Index,
      meta:{
        title:'kase'
      }
    },
    {
      path: '/pannel',
      name: 'pannel',
      component: Pannel,
      meta:{
        title:'kase-面板'
      }
    },
    {
      path: '/pannel/:type/:page',
      name: 'inner-pannel',
      component: Pannel,
      meta:{
        title:'kase-面板'
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})
