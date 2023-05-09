<template>
    <div class="main-container">
        <div class="main-container-left">
            <TemplateCard class="main-container-left_top" v-toVh="320">
                <TemplateTitle title="最新动态"></TemplateTitle>
            </TemplateCard>
            <TemplateCard class="main-container-left_bottom" v-toVh="571">
                <TemplateTitle title="最新动态"></TemplateTitle>
            </TemplateCard>
        </div>
        <div class="main-container-center"></div>
        <div class="main-container-right"></div>
    </div>
</template>

<script>
import TemplateCard from '../../../components/tempCard/index.vue'
import TemplateTitle from '../../../components/tempTitle/index.vue'
export default {
    components: {
        TemplateCard,
        TemplateTitle
    }
}
</script>

<style lang="scss" scoped>
.main-container {
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    background-color: #010101;
    padding: vh(30) vw(30);
}
.main-container-left {
    width: vw(508);
    .main-container-left_bottom {
        margin-top: vh(15);
    }
}
</style>
