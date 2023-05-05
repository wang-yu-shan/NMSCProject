<!--
 * @Author: your name
 * @Date: 2022-03-23 16:56:42
 * @LastEditTime: 2022-03-23 18:00:26
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \lspcp-web\src\components\page\401.vue
-->
<template>
    <div class="container">
        <img src="../../assets/images/401.png" alt="" />
        <el-button @click="layout"> 退出系统</el-button>
    </div>
</template>

<script>
export default {
    methods: {
        async layout () {
            await this.$store.dispatch('user/logout').then(() => {
                sessionStorage.clear()
                localStorage.removeItem('homeCode')
                this.$router.push('/login')
                this.$message.success('退出成功')
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    height: 100%;
    position: relative;
    img {
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .el-button {
        position: absolute;
        top: 70%;
        left: 50%;
        transform: translateX(-50%);
        width: 300px;
        height: 50px;
        background: linear-gradient(172deg, rgba(4, 26, 56, 0.99) 0%, rgba(4, 26, 56, 0) 100%);
        box-shadow: inset 0px 0px 10px 0px #2fe1ff;
        border-radius: 8px;
        border: 1px solid rgba(47, 225, 255, 0.54);
        ::v-deep {
            span {
                font-size: 20px;
                font-family: PingFangSC-Semibold, PingFang SC;
                font-weight: 600;
                color: #ffffff;
            }
        }
    }
}
</style>
