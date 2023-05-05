import Vue from 'vue'
// v-enter 点击回车键触发事件    接收一个回调
var enter = Vue.directive('enter', {
    bind: function (el, binding) {
        el.addEventListener('keyup', function (event) {
            if (event.keyCode === 13) {
                binding.value()
            }
        })
    }
})
export default enter
