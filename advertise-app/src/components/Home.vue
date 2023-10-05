<template>
    <div class="container">
        <div class="flex-slider">
            <div class="flex-viewport">
                <Slider />
            </div>
            <div class="flex-control-nav"></div>
            <div class="flex-direction-nav"></div>
        </div>
    </div>
</template>

<script>
import Slider from './Slider.vue';
export default {
    name: 'home-component',
    components: {
        Slider
    }
}
</script>

<style lang="scss" scoped>
.container {
    border-right: 1px solid #eaeaea;
    border-left: 1px solid #eaeaea;

    .flex-slider {
        margin: 20px;
        position: relative;
        zoom: 1;

        .flex-viewport {
            max-height: 2000px;
            transition: all 1s ease;
            overflow: hidden;
            position: relative;
        }
    }
}
</style>