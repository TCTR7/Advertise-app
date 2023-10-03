<template>
    <div class="header-top">
        <div class="header-left">
            <router-link :to="{ name: 'home' }">
                <img class="logo-image" src="../assets/logo.png" alt="logo">
            </router-link>
        </div>
        <div class="header-center">
            <h2>CÔNG TY TNHH TOẢN QUỐC NGUYÊN</h2>
            <p>UY TÍN VỚI KHÁCH HÀNG LÀ LỢI NHUẬN CỦA CHÚNG TÔI</p>
        </div>
        <div class="header-right">
            <div class="social">
                <font-awesome-icon :icon="['fab', 'facebook']" class="facebook social-item" />
                <div class="google social-item"><font-awesome-icon :icon="['fab', 'google']" /></div>
            </div>
            <div class="contact">
                <div class="address contact-item border-bottom">
                    <font-awesome-icon :icon="['fas', 'house']" class="contact-icon" />
                    <span>81 Nguyễn Hữu Cảnh, TP Đồng Hới, Quảng Bình</span>
                </div>
                <div class="phone contact-item border-bottom">
                    <div class="phone-1">
                        <font-awesome-icon :icon="['fas', 'phone']" class="contact-icon" />
                        <span>0905 822 822</span>
                    </div>
                    <div class="phone-2">
                        <font-awesome-icon :icon="['fas', 'phone']" class="contact-icon" />
                        <span>02323 68 69 69</span>
                    </div>
                </div>
                <div class="zalo contact-item">
                    <div class="zalo-icon contact-icon"><img src="../assets/zalo-48.png" alt="Zalo"
                            style="width: 90%; height: 90%;"></div>
                    <span class="zalo-info">0905 822 822</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'top-header-component'
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
        display: flex;

        .social {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex: 1;

            .social-item {
                margin: 2px;
            }


        }

        .contact {
            display: flex;
            flex-direction: column;
            align-items: start;
            flex: 10;
            font-size: 14px;
            border-left: 1px solid #585656;

            .phone {
                margin-right: 15px;
                display: flex;

                .phone-1, .phone-2 {
                    margin-left: 10px;
                }
            }

            .contact-item {
                margin: 2px 0 2px 5px;
                text-align: center;

                .contact-icon {
                    margin: 0 2px;
                }
            }

            .zalo {
                display: flex;
                justify-content: center !important;
                align-items: center !important;

                .zalo-icon {
                    width: 24px;
                    height: 24px;
                    float: left;
                    margin-left: 10px;
                }

                .zalo-info {
                    height: 100%;
                    text-align: center !important;
                    margin-top: 5px;
                }
            }
        }
    }
}
</style>