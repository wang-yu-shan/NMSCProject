<template>
    <div class="login-wrapper">
        <div class="login-wrapper_form">
            <canvas id="myCanvas"></canvas>
        </div>
    </div>
</template>

<script>
import { fabric } from 'fabric'
export default {
    data () {
        return {
            form: {},
            rules: {}
        }
    },
    components: {
    },
    mounted () {
        console.log(fabric, 'fabric')
        const img = require('../../assets/onepiace.webp')
        const img1 = require('../../assets/微信图片_20221121152344.jpg')
        this.$nextTick(() => {
            const canvas = new fabric.Canvas('myCanvas')
            console.log('canvas', canvas)
            // 添加背景图片
            fabric.Image.fromURL(img, function (img) {
                canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas))
            })
            var imgInstance = new fabric.Image(img1, {
                width: 20,
                height: 20,
                left: 0,
                top: 0,
                angle: 30,
                opacity: 0.85
            })
            canvas.add(imgInstance)
        })
    },
    methods: {
        login () {
            this.$router.push('/home')
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
</style>
