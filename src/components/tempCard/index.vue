<template>
    <div class="template-container" :style="{height: height}">
        <img class="star" src="../../assets/images/icon-star.png" alt="">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        height: {
            type: String,
            default: '100vh'
        }
    }
}
</script>

<style lang="scss" scoped>
.template-container {
    box-shadow: inset 1px 0px 9px 0px #1e7abf;
    border-radius: 4px;
    padding: vh(15) vw(15);
    position: relative;
    background: rgba(19,43,82,0.3);
}
img {
    width: vw(449);
    height: vh(253);
    pointer-events: none;
}
.star {
    position: absolute;
    top: vh(20);
    transform: translateY(-50%);
}

</style>
