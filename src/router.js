import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      component: () => import('./views2/login')
    },
    {
      path: '/student',
      component: () => import('@/views/student/index'),
      children: [
        {
          // 展示课题列表
          path: '/',
          components: {
            default: () => import('@/views/student/main'),
            sub: () => import('@/views/student/subPannel')
          },
          meta: {
            title: '课题列表', subTitle: '导航'
          }
        },
        {
          // 新建课题
          path: 'new',
          meta: {
            title: '新建课题', subTitle: '导航'
          },
          components: {
            default: () => import('@/views/student/newSubject'),
            sub: () => import('@/views/student/subPannel')
          }
        },
        {
          // 查看通知
          path: 'notice',
          meta: {
            title: '通知', subTitle: '导航'
          },
          components: {
            default: () => import('@/views/student/notice'),
            sub: () => import('@/views/student/subPannel')
          }
        },
        {
          // 修改密码
          path: 'password',
          meta: {
            title: '修改密码', subTitle: '导航'
          },
          components: {
            default: () => import('@/views/student/password'),
            sub: () => import('@/views/student/subPannel')
          }
        },
        {
          path: ':cid',
          redirect: ':cid/article'
        },
        {
          // 展示文章
          path: ':cid/article',
          meta: {
            title: '文章', subTitle: '导航'
          },
          components: {
            default: () => import('@/views/student/articles'),
            sub: () => import('@/views/student/subPannel')
          },
          props: {
            default: true,
            sub: true
          }
        },
        {
          // 展示附件
          path: ':cid/file',
          meta: {
            title: '附件', subTitle: '导航'
          },
          components: {
            default: () => import('@/views/student/file'),
            sub: () => import('@/views/student/subPannel')
          },
          props: {
            default: true,
            sub: true
          }
        }
      ]
    },
    // TODO: judger router
    {
      path: 'judger',
      component: () => import('@/views/judger/index'),
      children: [
        {
          path: '/',
          meta: {
            title: '课题列表', subTitle: '导航'
          }
        },
        {
          path: ':cid'
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
        component: () => import('./componentadmin/mainshow.vue')
      },
      {
        path: 'examined',
        component: () => import('./componentadmin/mainshow.vue')
      },
      {
        path: 'evaluate',
        component: () => import('./componentadmin/evaluate.vue'),
        children: [{
          path: '/',
          component: () => import('./componentadmin/mainshow.vue')
        }, {
          path: 'divide',
          component: () => import('./componentadmin/divide.vue')
        }]
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
    },
    {
      // TODO:404
      path: '*'
    }
  ]
})

export default router
