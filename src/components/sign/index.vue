<template>
    <div class="colImage-group" :style="{...styles}">
        <div class="col opti-03" :style="{}"></div>
        <div class="col opti-06"></div>
        <div class="col opti-09"></div>
    </div>
</template>

<script>
export default {
    props: {
        float: {
            type: String,
            default: 'right'
        },
        styles: {
            type: Object,
            default: () => {
                return {}
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.colImage-group {
    float: right;
    display: flex;
    height: vh(30);
    align-items: center;
    .col {
        width: vw(26);
        height: vh(14);
        position: relative;
        animation: opacity_animation 2s cubic-bezier(0.56, 0.54, 1, 1) .1s infinite
    }
    .col:nth-child(2){
        animation: opacity_animation 2s cubic-bezier(0.56, 0.54, 1, 1) .3s infinite
    }
    .col:nth-child(3){
        animation: opacity_animation 2s cubic-bezier(0.56, 0.54, 1, 1) .5s infinite
    }
    .col::before {
        display: inline-block;
        position: absolute;
        content: '';
        width: vw(12);
        height: vh(14);
        left: vw(-40);
        background: #00ccff;
        transform: skewX(68deg);
    }

}
@keyframes opacity_animation {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
}

@keyframes glow {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }
  50% {
    box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.7);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }
}
</style>
