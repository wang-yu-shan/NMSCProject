import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/board'
    },
    {
        path: '/login',
        component: () => import('../views/login/index.vue')
    },
    {
        path: '/board',
        name: 'Board',
        component: () => import('../views/board/index.vue')
    },
    {
        path: '/404',
        name: '404',
        Comment: () => import('../views/error/404.vue')
    },
    {
        path: '*', // 页面不存在的情况下会跳到404页面
        redirect: '/404',
        name: 'notFound'
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
