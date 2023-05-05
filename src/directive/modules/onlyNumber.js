import Vue from 'vue'

//  v-number-only 只允许输入数字
var number = Vue.directive('number-only', {
    bind: function (el, binding, vnode) {
        el.addEventListener('input', function () {
            var value = el.childNodes[1].value
            const regex = /[^0-9]/g
            el.childNodes[1].value = value.replace(regex, '')
        })
    }
})

export default number
