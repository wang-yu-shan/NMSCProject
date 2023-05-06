<template>
    <div class="login-wrapper">
        <!-- <div class="login-wrapper_form">
            <canvas id="myCanvas" width="500" height="500"></canvas>
        </div> -->
        <VueSeamlessScroll
            :data="listData"
            class="warp"
        >
            <ul class="item">
                <li v-for="(item, index) in listData" :key="index">
                    <span class="title" v-text="item.id"></span>
                    <span class="date" v-text="item.title"></span>
                </li>
            </ul>
        </VueSeamlessScroll>
    </div>
</template>

<script>
import { fabric } from 'fabric'
import { list } from '../../api/notice'
import VueSeamlessScroll from 'vue-seamless-scroll'
export default {
    props: {
        visible: {
            type: Boolean,
            default: false
        }
    },
    components: {
        VueSeamlessScroll
    },
    data () {
        return {
            form: {},
            rules: {},
            imgSrc: '',
            canvas: null,
            listData: []
        }
    },
    mounted () {
        this.initList()
    },
    methods: {
        initFabric () {
            const img = require('../../assets/onepiace.webp')
            const img1 = require('../../assets/微信图片_20221121152344.jpg')
            this.canvas = new fabric.Canvas('myCanvas', {
                allowScale: false
            })
            // 添加背景图片
            const that = this
            fabric.Image.fromURL(img, function (img) {
                that.canvas.setBackgroundImage(img, that.canvas.renderAll.bind(that.canvas), {
                    scaleX: that.canvas.width / img.width,
                    scaleY: that.canvas.height / img.height,
                    strech: true
                })
            })

            this.canvas.on('mouse:dblclick', function (options) {
            // 获取点击的坐标
                var pointer = that.canvas.getPointer(options.e)
                var posX = pointer.x
                var posY = pointer.y
                fabric.Image.fromURL(img1, function (ele) {
                    ele.id = 'ddddd'
                    ele.scale(0.1).set('left', posX).set('top', posY)
                    that.canvas.add(ele)
                    console.log('ele', 'width', ele)

                    ele.on('mousedown', function (options) {
                        console.log('我被点击了啊啊啊啊啊啊', options)
                    })
                    ele.on('mousemove', function (options) {
                        console.log('我被移动了啊啊啊啊啊啊', options)
                    })
                })
                // 在控制台输出点击的坐标
                console.log('X:' + posX + ', Y:' + posY)
            })
        },
        async initList () {
            const res = await list()
            this.listData = res.data
            console.log(res, 'res')
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
