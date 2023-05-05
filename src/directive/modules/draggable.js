import Vue from 'vue'
// 用法：v-draggable
var draggable = Vue.directive('draggable', {
    bind: function (el) {
        let x = 0
        let y = 0

        el.style.position = 'absolute'
        el.addEventListener('mousedown', startDragging)

        function startDragging (e) {
            x = e.clientX - el.offsetLeft
            y = e.clientY - el.offsetTop
            document.addEventListener('mousemove', doDragging)
            document.addEventListener('mouseup', stopDragging)
        }

        function doDragging (e) {
            el.style.left = e.clientX - x + 'px'
            el.style.top = e.clientY - y + 'px'
        }

        function stopDragging () {
            document.removeEventListener('mousemove', doDragging)
            document.removeEventListener('mouseup', stopDragging)
        }
    }
})

export default draggable
