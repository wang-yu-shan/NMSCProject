import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './mock/index.js'
import './permission.js'
import './utils/auto-tootip'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
