import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

import Login from './views2/login'
import Index from './views2/index/index'
import IndexSub from './views2/index/sub'
import Pannel from './views/pannel'
import Test from './views/test'

import Subject from '@/views/subject'
import Detail from '@/views/detail'
import Paper from '@/views/paper'
import File from '@/views/file'
import Right from '@/views/right'


// pannel
import List from './components/pannel/left/list'
//import Article from './components/pannel/left/article'
//import File from './components/pannel/left/file'


Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/login',
            component: () => import('./views2/login')
        },
        {
            path: '/',
            components: {
                default: () => import('./views2/index/index'),
                sub: IndexSub
            },
            children: [
                {
                    path:''
                }
            ],
        },
    ]
})

export default router
