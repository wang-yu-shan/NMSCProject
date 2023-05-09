<template>
    <div class="board-container">
        <Header></Header>
        <Main></Main>
    </div>
</template>

<script>
import Header from './components/header.vue'
import Main from './components/main.vue'
export default {
    name: 'Board',
    components: {
        Header,
        Main
    },
    data () {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.board-container {
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    overflow: hidden;
    background-color: #010101;
}
</style>
