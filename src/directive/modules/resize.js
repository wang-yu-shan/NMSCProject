import Vue from 'vue'
// v-resize 窗口大小改变触发事件    接收一个回调
var resize = Vue.directive('resize', {
    bind: function (el, binding) {
        const callbacks = binding.value
        let oldWidth = el.offsetWidth || 0
        let oldHeight = el.offsetHeight || 0

        // 监听尺寸变化
        const observer = new ResizeObserver(entries => {
            const { width, height } = entries[0].contentRect
            if (width !== oldWidth || height !== oldHeight) {
                callbacks({ width, height, oldWidth, oldHeight })
                oldWidth = width
                oldHeight = height
            }
        })
        observer.observe(el)

        // 在元素销毁时停止监听
        el._resizeObserver_ = observer
    },
    unbind: function (el) {
        el._resizeObserver_.disconnect()
    }
})
export default resize
