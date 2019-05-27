import Vue from 'vue'
import Router from 'vue-router'

import Login from './views/login'
import Index from './views'
import Pannel from './views/pannel'
import Test from './views/test'

// pannel
import List from './components/pannel/left/list'
import Article from './components/pannel/left/article'
import File from './components/pannel/left/file'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                title: 'kase-登录'
            }
        },
        {
            path: '/',
            name: 'index',
            component: Index,
            meta: {
                title: 'kase'
            }
        },
        {
            path: '/pannel',
            redirect: '/pannel/list'
        },
        {
            path: '/pannel',
            name: 'pannel',
            component: Pannel,
            meta: {
                title: 'kase-课题'
            },
            children: [
                {
                    path: 'list',
                    component: List
                },
                {
                    path: 'article/:cid',
                    component: Article
                },
                {
                    path: 'file/:cid',
                    component: File
                }
            ]
        },
        {
            path: '/test',
            name: 'test',
            component: Test
        },
        {
            path: '*',
            name: 'not_found',
            component: Test
        },
    ]
})
