// 用于搜索框，避免在用户输入过程中频繁触发搜索的指令
// 用法：v-debounce="search"

import Vue from 'vue'

var debounce = Vue.directive('debounce', {
    inserted: function (el, binding) {
        var timer
        el.addEventListener('keyup', function () {
            clearTimeout(timer)
            timer = setTimeout(function () {
                binding.value()
            }, 500)
        })
    }
})

export default debounce
