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
            component: () => import('@/views/student/index'),
            children: [
                {
                    // 展示课题列表
                    path: '/',
                    components: {
                        default: () => import('@/views/student/main'),
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
                    components: {
                        default: () => import('@/views/student/articles'),
                        sub: () => import('@/views/student/subPannel')
                    },
                    props: {
                        default: true,
                        sub: false
                    }
                },
                {
                    // 展示附件
                    path: ':cid/file',
                    components: {
                        default: () => import('@/views/student/file'),
                        sub: () => import('@/views/student/subPannel')
                    },
                    props: {
                        default: true,
                        sub: false
                    }
                },
            ],
        },
        {
            path: 'judger',
            children: [
                {
                    path: '/'
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
        }
    ]
})

export default router
