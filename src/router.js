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
            path: '/',
            redirect: '/login',
            children: [
                {
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
                },
                {
                    path: 'admin'
                }
            ],
        },
    ]
})

export default router
