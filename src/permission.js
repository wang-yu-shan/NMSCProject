import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import util from './libs/util.js'
import store from './store/index'
// 路由拦截器
router.beforeEach((to, from, next) => {
    NProgress.start()
    const state = store.state.user
    if (!state.token || !util.cookies.get('token')) {
        console.log('state.token', state.token)
        // 如果需要登录却未登录，则跳转到登录页
        if (to.path === '/login') {
            next()
        } else {
            NProgress.done()
            next('/login')
        }
    } else {
        next()
    }
})

router.afterEach(to => {
    // 进度条
    NProgress.done()
    // 更改标题
    util.title(to.meta.title)
})
