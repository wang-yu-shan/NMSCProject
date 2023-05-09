<template>
    <header class="header-container">
        <div class="header-container_left">
            <Sign></Sign>
        </div>
        <div class="header-container-center">

        </div>
        <div class="header-container_right">
            <Sign :styles="styles"></Sign>
        </div>
    </header>
</template>

<script>
import Sign from '../../../components/sign/index.vue'
export default {
    name: 'Header',
    components: {
        Sign
    },
    data () {
        return {
            styles: {
                float: 'left',
                transform: 'rotateY(180deg)'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.header-container {
    width: 100vw;
    height: vh(75);
    display: flex;
    margin: vh(11) 0;
    padding: 0 vw(30);
    box-sizing: border-box;
}
.header-container_left {
    background-image: url('../../../assets/images/header-left-banner.png');
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.header-container_right {
    background-image: url('../../../assets/images/header-right-banner.png');
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-left: auto;
}
.header-container_left, .header-container_right {
    width: vw(404);
    height: vh(30);
    min-height: vh(20);
    border: 1px solid transparent;
}

.header-container-center {
    width: vw(1160);
    height: vh(75);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url('../../../assets/images/header-center-banner.png');
}
</style>
