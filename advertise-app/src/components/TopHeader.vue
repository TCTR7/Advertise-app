<template>
    <div class="header-top">
        <div class="header-left">
            <router-link :to="{ name: 'home' }">
                <img class="logo-image" src="../assets/logo.png" alt="logo">
            </router-link>
        </div>
        <div class="header-center">
            <p>CÔNG TY TNHH TOẢN QUỐC NGUYÊN</p>
            <p>UY TÍN VỚI KHÁCH HÀNG LÀ LỢI NHUẬN CỦA CHÚNG TÔI</p>
        </div>
        <div class="header-right"> đây là thông tin liên hệ </div>
    </div>
</template>

<script>
export default {
    name: 'top-header-component',
    components: {
    },
    compatConfig: { MODE: 3 }
}
</script>

<style lang="scss" scoped>
.header-top {
    width: 100%;
    height: auto;
    max-height: 100px;
    margin: 0 auto;
    display: flex;
    align-items: center;

    .header-left {
        height: 100%;
        flex: 1;
        padding: 0;

        .logo-image {
            width: 100%;
            height: auto;
            max-height: 100px;
            margin: 0;
        }
    }

    .header-center {
        display: block;

        @media (min-width: 1200px) {
            flex: 6;
        }

        @media (min-width: 992px) {
            flex: 5;
        }

        @media (min-width: 768px) {
            flex: 4;
        }

        @media (min-width: 600px) {
            flex: 3;
        }

        @media (max-width: 600px) {
            flex: 3;
            font-size: small;
        }
    }

    .header-right {
        flex: 1;
    }
}
</style>