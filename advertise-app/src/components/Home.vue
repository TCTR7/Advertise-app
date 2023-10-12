<template>
    <div class="container">
        <Slider />
        <Categories />
        <Categories />
        <Categories />
        <Categories />
        <Categories />
    </div>
</template>

<script>
import Slider from './Slider.vue';
import Categories from './Categories.vue';
export default {
    name: 'home-component',
    components: {
        Slider,
        Categories
    }
}
</script>

<style lang="scss" scoped>
.container {
    border-right: 1px solid #eaeaea;
    border-left: 1px solid #eaeaea;

}
</style>