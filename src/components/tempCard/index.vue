<template>
    <div class="template-container">
        <img class="star" src="../../assets/images/icon-star.png" alt="">
        <!-- 自定义内容 -->
        <slot></slot>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.template-container {
    box-shadow: inset 1px 0px 9px 0px #1e7abf;
    border-radius: 4px;
    padding: vh(15) vw(15);
    position: relative;
    background: rgba(19,43,82,0.3);
    z-index: 2;
}
img {
    width: vw(449);
    height: vh(35);
    pointer-events: none;
    z-index: 1;
}
.star {
    position: absolute;
    top: vh(20);
    transform: translateY(-50%);
}

</style>
