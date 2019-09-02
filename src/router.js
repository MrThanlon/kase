import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/login',
      component: () => import('./views2/login')
    },
    {
      path: '/',
      redirect: '/login',
      children: [{
          path: 'student/:cid'
        },
        {
          path: 'student/:cid/article'
        },
        {
          path: 'student/:cid/file'
        },
        {
          path: 'student',
          components: {
            default: () => import('./views2/index'),
            sub: () => import('./views2/index/sub')
          },
        },
        {
          path: 'judger'
        }

      ],
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