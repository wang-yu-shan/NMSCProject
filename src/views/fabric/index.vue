<template>
    <div class="login-wrapper">
        <div class="login-wrapper_form">
            <canvas id="myCanvas" :width="width" :height="500"></canvas>
        </div>
    </div>
</template>

<script>
import { fabric } from 'fabric'
export default {
    props: {
        width: {
            type: Number,
            default: 500
        },
        height: {
            type: Number,
            default: 500
        }
    },
    data () {
        return {
            form: {},
            rules: {},
            imgSrc: '',
            canvas: null,
            listData: [],
            pointers: JSON.parse(localStorage.getItem('pointers')) || []
        }
    },
    mounted () {
        const bgImage = require('../../assets/images/onepiace.webp')
        const icon = require('../../assets/images/logo.png')
        this.initFabric(bgImage, icon)
        window.addEventListener('resize', this.handleResize)
    },
    methods: {
        // 监听resize事件 重新绘制图形
        handleResize () {
            const canvas = document.querySelector('canvas')
            if (!canvas) return false
            const rect = this.canvas.getBoundingClientRect()
            const context = canvas.getContext('2d')
            const canvasWidth = rect.width
            const canvasHeight = rect.height
            const scale = window.devicePixelRatio
            this.canvas.width = canvasWidth * scale
            this.canvas.height = canvasHeight * scale
            context.scale(scale, scale)
            // 在此重新绘制图形
        },
        // initFabric 初始化画布 bgImage 背景图片  icon 图片
        initFabric (bgImage, icon) {
            this.canvas = new fabric.Canvas('myCanvas')
            this.canvas.selection = false
            // 添加背景图片
            const that = this
            fabric.Image.fromURL(bgImage, function (img) {
                that.canvas.setBackgroundImage(img, that.canvas.renderAll.bind(that.canvas), {
                    scaleX: that.canvas.width / img.width,
                    scaleY: that.canvas.height / img.height,
                    strech: true
                })
            })
            // 画布上的标注节点初始化
            this.pointers.forEach((item) => {
                fabric.Image.fromURL(icon, function (ele) {
                    ele.set({
                        scaleX: 60 / ele.width,
                        scaleY: 60 / ele.height,
                        left: item.x,
                        top: item.y
                    })
                    ele.hasControls = false
                    that.addlistenerEvent(ele, {
                        x: item.x,
                        y: item.y
                    })
                    ele._element.id = item.id
                    that.canvas.add(ele)
                })
            })
            // 添加双击事件
            this.canvas.on('mouse:dblclick', function (options) {
                options.e.stopPropagation()
                // 获取点击的坐标
                var pointer = that.canvas.getPointer(options.e)
                // 获取画布上的所有对象
                var objects = that.canvas.getObjects()
                // 判断是否点击在图形上
                var isClickOnObject = false
                for (var i = 0; i < objects.length; i++) {
                    if (objects[i].containsPoint(pointer)) {
                        isClickOnObject = true
                        break
                    }
                }
                // 如果不是点击在图形上，再创建
                if (!isClickOnObject) {
                    that.createImage(icon, pointer)
                }
            })
        },
        // 创建图片
        createImage (imgUrl, pointer) {
            var { x, y } = pointer
            const that = this
            fabric.Image.fromURL(imgUrl, function (ele) {
                ele.set({
                    scaleX: 60 / ele.width,
                    scaleY: 60 / ele.height,
                    left: x - 30,
                    top: y - 30
                })
                ele.hasControls = false
                // 设置节点id,用于识别
                ele._element.id = Math.random()
                // 给图片注册事件
                that.addlistenerEvent(ele, pointer)
                that.canvas.add(ele)
                that.pointers.push({
                    x,
                    y,
                    id: ele._element.id
                })
                // 保存节点信息，后替换为接口请求
                localStorage.setItem('pointers', JSON.stringify(that.pointers))
            })
        },
        // 节点添加事件
        addlistenerEvent (ele, pointer) {
            const { x, y } = pointer
            const that = this
            ele.on('mousedown', function (e) {
                // 禁止事件冒泡
                e.e.stopPropagation()
                ele.set({
                    stroke: '#f6416c', // 边框颜色：粉色
                    strokeWidth: 10 // 边框粗细：5p
                })
            })
            // 添加双击事件, 删除当前图片
            ele.on('mousedblclick', function (e) {
                // 禁止事件冒泡
                e.e.stopPropagation()
                console.log('点击了图片', e)

                that.canvas.remove(ele)
                that.pointers = that.pointers.filter((item) => {
                    return item.x !== x && item.y !== y
                })
                localStorage.setItem('pointers', JSON.stringify(that.pointers))
            })
            // 限制超出边界
            ele.on('mousemove', function (e) {
                if (e.pointer.x < 0 || e.pointer.y < 0 || e.pointer.x > 500 || e.pointer.y > 500) {
                    ele.set({
                        scaleX: 60 / ele.width,
                        scaleY: 60 / ele.height,
                        left: e.pointer.x < 0 ? 0 : e.pointer.x > 500 ? 500 - 60 : e.pointer.x - 30,
                        top: e.pointer.y < 0 ? 0 : e.pointer.y > 500 ? 500 - 60 : e.pointer.y - 30
                    })
                }
            })
            ele.on('mouseup', function (e) {
                console.log('e', e)
                // 获取设置的节点Id
                var currentId = e.target._element.id
                // 找到当前节点, 重新设置x,y
                var currentEle = that.pointers.find((item) => {
                    return item.id === currentId
                })
                ele.set({
                    stroke: '#f6416c', // 边框颜色：粉色
                    strokeWidth: 0 // 边框粗细：5p
                })
                currentEle.x = e.pointer.x < 0 ? 0 : e.pointer.x > 500 ? 500 - 60 : e.pointer.x - 30
                currentEle.y = e.pointer.y < 0 ? 0 : e.pointer.y > 500 ? 500 - 60 : e.pointer.y - 30
                localStorage.setItem('pointers', JSON.stringify(that.pointers))
            })
        }

    }
}
</script>

<style lang="scss" scoped>
.login-wrapper {
    width: 100vw;
    height: 100vh;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    padding: 0;
    margin: 0;
}

.login-wrapper_form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.warp {
    height: 270px;
    width: 360px;
    margin: 0 auto;
    overflow: hidden;
    ul {
      list-style: none;
      padding: 0;
      margin: 0 auto;
      li,
      a {
        display: block;
        height: 30px;
        line-height: 30px;
        display: flex;
        justify-content: space-between;
        font-size: 15px;
      }
    }
  }
</style>
