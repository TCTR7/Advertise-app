<template>
    <div class="header">
        <TopHeader />
        <Navigation />
    </div>
</template>

<script>
import TopHeader from './TopHeader.vue';
import Navigation from './Navigation.vue'
export default {
    name: 'main-component',
    components: {
        TopHeader,
        Navigation
    }
}
</script>

<style lang="scss" scoped>

</style>