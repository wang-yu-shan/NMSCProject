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
