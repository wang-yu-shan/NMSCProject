<template>
    <div class="template-title">
        <div class="title">{{ title }}</div>
        <!-- 标题右侧自定义内容 -->
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '标题'
        }
    }
}
</script>

<style lang="scss" scoped>
.template-title {
    height: vh(35);
    width: 100%;
    line-height: vh(35);
    background: linear-gradient(90deg, #0C1B31, #050C16);
    position: relative;
}
.template-title::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: vw(3);
    height: vh(35);
    background-color: #02E8F6;
}

.title {
    font-size: vw(20);
    font-family: SourceHanSansCN;
    font-weight: 400;
    color: #28C0E6;
    margin-left: vw(15);
}
</style>
