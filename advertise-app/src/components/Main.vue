<template>
    <div class="main-container">
        <div class="navigation-history" v-show="hasNavHistory">
            <div>
                <span class="pathway">
                    <router-link class="pathway">Trang chủ</router-link>
                    <span>>></span>
                    <strong style="color: orangered;">{{ this.nav_history }}</strong>
                </span>
            </div>
        </div>
        <div class="main-content">
            <div class="left-content">
                <div class="recent-activity">
                    <div class="top">
                        <h5>HOẠT ĐỘNG GẦN ĐÂY</h5>
                    </div>
                    <div class="container">
                        <ul>
                            <li>
                                <router-link class="link">KỲ SƠN Pano Led trung tâm thành phố (<span
                                        class="post-date">30/05/2023</span>)</router-link>
                            </li>
                            <li>
                                <router-link class="link">KỲ SƠN Pano Led trung tâm thành phố (<span
                                        class="post-date">30/05/2023</span>)</router-link>
                            </li>
                            <li>
                                <router-link class="link">KỲ SƠN Pano Led trung tâm thành phố (<span
                                        class="post-date">30/05/2023</span>)</router-link>
                            </li>
                            <li>
                                <router-link class="link">KỲ SƠN Pano Led trung tâm thành phố (<span
                                        class="post-date">30/05/2023</span>)</router-link>
                            </li>
                            <li>
                                <router-link class="link">Tuyển dụng Lái xe, Thợ quảng cáo và Học việc (<span
                                        class="post-date">30/05/2023</span>)</router-link>
                            </li>
                            <li>
                                <router-link class="link">Tuyển dụng Lái xe, Thợ quảng cáo và Học việc (<span
                                        class="post-date">30/05/2023</span>)</router-link>
                            </li>
                            <li>
                                <router-link class="link">Tuyển dụng Lái xe, Thợ quảng cáo và Học việc (<span
                                        class="post-date">30/05/2023</span>)</router-link>
                            </li>
                            <li>
                                <router-link class="link">Tuyển dụng Lái xe, Thợ quảng cáo và Học việc (<span
                                        class="post-date">30/05/2023</span>)</router-link>
                            </li>
                            <li>
                                <router-link class="link">Tuyển dụng Lái xe, Thợ quảng cáo và Học việc (<span
                                        class="post-date">30/05/2023</span>)</router-link>
                            </li>
                            <li>
                                <router-link class="link">Tuyển dụng Lái xe, Thợ quảng cáo và Học việc (<span
                                        class="post-date">30/05/2023</span>)</router-link>
                            </li>
                            <li>
                                <router-link class="link">Tuyển dụng Lái xe, Thợ quảng cáo và Học việc (<span
                                        class="post-date">30/05/2023</span>)</router-link>
                            </li>
                            <li>
                                <router-link class="link">Tuyển dụng Lái xe, Thợ quảng cáo và Học việc (<span
                                        class="post-date">30/05/2023</span>)</router-link>
                            </li>
                            <li>
                                <router-link class="link">Tuyển dụng Lái xe, Thợ quảng cáo và Học việc (<span
                                        class="post-date">30/05/2023</span>)</router-link>
                            </li>
                            <li>
                                <router-link class="link">Tuyển dụng Lái xe, Thợ quảng cáo và Học việc (<span
                                        class="post-date">30/05/2023</span>)</router-link>
                            </li>
                            <li>
                                <router-link class="link">Tuyển dụng Lái xe, Thợ quảng cáo và Học việc (<span
                                        class="post-date">30/05/2023</span>)</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="banner">
                        <div class="adv">
                            <img :src="imageUrl" alt="Quảng cáo">
                        </div>
                    </div>
                    <div class="tag"></div>
                </div>
            </div>
            <div class="center-content">
                <Home />
                <router-view />
            </div>
            <div class="right-content">right-content</div>
        </div>
    </div>
</template>

<script>
import Home from './Home.vue'
export default {
    name: 'main-view',
    components: {
        Home
    },
    data() {
        return {
            nav_history: ''
        }
    },
    computed: {
        hasNavHistory() {
            return this.nav_history.length != ''
        },
        imageUrl() {
            return require('../assets/banner.png')
        }
    }

}
</script>

<style lang="scss" scoped>
.main-container {
    display: block;
    font-family: Tahoma, Arial, Verdana, sans-serif;
    width: 100%;

    .navigation-history {
        background: #eee;
        padding: 8px 0;
        text-align: left;

        .pathway {
            margin: 5px;
        }
    }

    .main-content {
        margin: 20px auto 25px;
        position: relative;
        z-index: 0;
        display: flex;

        .left-content {
            flex: 1;
            float: left;
            width: 160px;
            margin: 0 23px;
            padding: 0 14px;

            .recent-activity {
                display: block;
                width: 100%;

                .top {
                    padding-bottom: 5px;
                    border-bottom: 4px solid #333;
                    color: #4b4a4a;
                }

                .container {
                    padding: 10px 0;
                    margin-bottom: 5px;
                    clear: both;
                    border-bottom: 4px solid #333;
                    max-height: 350px;
                    overflow-y: scroll;

                    ul {
                        box-sizing: border-box;
                        text-align: left;
                        font-size: 12px;

                        li {
                            padding: 0 0 5px 10px;
                            line-height: 18px;
                            overflow: hidden;
                            color: #444;
                            text-decoration: none;
                            transition: all ease-in-out 0.2s;
                            cursor: pointer;

                            &::before {
                                content: "\00b7";
                                /* Thêm dấu chấm (•) trước mỗi mục */
                                margin-right: 8px;
                            }
                        }
                    }
                }

                .banner {
                    padding: 10px 0;
                    clear: both;
                    width: 100%;

                    .adv {
                        width: 100%;
                        height: 600px;
                        display: block;
                        margin: 0 auto;
                    }
                }
            }
        }

        .center-content {
            flex: 4;
        }

        .right-content {
            flex: 2;
        }
    }
}</style>