import Vue from 'vue'
// 适配高度
var toVh = Vue.directive('toVh', {
    bind: function (el, binding, vnode) {
        el.style.height = +binding.expression / 1080 * 100 + 'vh'
    }
})

export default toVh
