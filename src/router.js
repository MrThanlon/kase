import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      component: () => import('./views2/login')
    },
    {
      path: '/student',
      children: [
        {
          path: '/'
        },
        {
          path: ':cid',
          redirect: ':cid/article'
        },
        {
          path: ':cid/article'
        },
        {
          path: ':cid/file'
        },
      ],
    },
    {
      path: 'judger',
      children:[
        {
          path:'/'
        },
        {
          path:':cid'
        }
      ]
    },
    {
      path: '/admin',
      component: () => import('./pages/adminlogin/adminlogin.vue'),
      children: [{
          path: '/',
          component: () => import('./componentadmin/mainshow.vue')
        },
        {
          path: 'examining',
          component: () => import('./componentadmin/examine.vue')
        },
        {
          path: 'examined',
          component: () => import('./componentadmin/examine.vue')
        },
        {
          path: 'evaluate',
          component: () => import('./componentadmin/evaluate.vue')
        },
        {
          path: 'scoretable',
          component: () => import('./componentadmin/scorebar.vue')
        },
        {
          path: 'contentmanager',
          component: () => import('./componentadmin/contentmanager.vue')
        },
        {
          path: 'usermanager',
          component: () => import('./componentadmin/usermanager.vue')
        },
        {
          path: 'adminmanager',
          component: () => import('./componentadmin/adminmanager.vue')
        }
      ]
    }
  ]
})

export default router
