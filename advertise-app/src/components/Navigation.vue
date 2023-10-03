<template>
    <div class="navigation">
        <div class="container">
            <div class="menu-content">
                <ul class="menu">
                    <li class="item">
                        <router-link class="link" :to="{ name: 'home' }">TRANG CHỦ</router-link>
                    </li>
                    <li class="item">
                        <router-link class="link" :to="{ name: 'introduction' }">GIỚI THIỆU</router-link>
                    </li>
                    <li class="item drop-down">
                        <router-link class="link" :to="{ name: 'product' }">
                            SẢN PHẨM & DỊCH VỤ
                            <span class="sub-indicator"></span>
                        </router-link>
                        <ul class="drop-down-content">
                            <li class="drop-down-item">
                                <router-link class="drop-down-link" :to="{ name: 'home' }">BIỂN QUẢNG CÁO CÁC
                                    HÃNG</router-link>
                            </li>
                            <li class="drop-down-item">
                                <router-link class="drop-down-link" :to="{ name: 'home' }">CẮT KHẮC LASER &
                                    CNC</router-link>
                            </li>
                            <li class="drop-down-item">
                                <router-link class="drop-down-link" :to="{ name: 'home' }">CHỮ MICA, INOX, ALU, LED
                                    COLOR</router-link>
                            </li>
                            <li class="drop-down-item">
                                <router-link class="drop-down-link" :to="{ name: 'home' }">IN PHUN HIFLEX, PP,
                                    DECAL</router-link>
                            </li>
                            <li class="drop-down-item">
                                <router-link class="drop-down-link" :to="{ name: 'home' }">MÀN HÌNH LED - LED
                                    MATRIX</router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="item">
                        <router-link class="link" :to="{ name: 'events' }">TỔ CHỨC SỰ KIỆN</router-link>
                    </li>
                    <li class="item drop-down">
                        <router-link class="link" :to="{ name: 'locationpfpano' }">
                            VỊ TRÍ PANO CHO THUÊ
                            <span class="sub-indicator"></span>
                        </router-link>
                        <ul class="drop-down-content">
                            <li class="drop-down-item">
                                <router-link class="drop-down-link" :to="{ name: 'home' }">PANO TẤM LỚN </router-link>
                            </li>
                            <li class="drop-down-item">
                                <router-link class="drop-down-link" :to="{ name: 'home' }">QUẢNG CÁO TRỰC QUAN - NHÀ CHO XE
                                    BUÝT</router-link>
                            </li>
                            <li class="drop-down-item">
                                <router-link class="drop-down-link" :to="{ name: 'home' }">HỘP ĐÈN DẢI PHÂN
                                    CÁCH</router-link>
                            </li>
                            <li class="drop-down-item">
                                <router-link class="drop-down-link" :to="{ name: 'home' }">VỊ TRÍ TREO BĂNG RÔN TP.ĐỒNG
                                    HỚI</router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="item">
                        <router-link class="link" :to="{ name: 'construction' }">THI CÔNG CÔNG TRÌNH</router-link>
                    </li>
                    <li class="item">
                        <router-link class="link" :to="{ name: 'recruitment' }">TUYỂN DỤNG</router-link>
                    </li>
                    <li class="item">
                        <router-link class="link" :to="{ name: 'contact' }">LIÊN HỆ</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="mobile-menu"></div>
        <div class="search">
            <div class="module_search">
                <input type="text" placeholder="Nhập từ khóa..." alt="Tìm kiếm">
                <button type="button" class="search-button">
                    <font-awesome-icon :icon="['fas', 'magnifying-glass']" style="height: 50%;" />
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'navigation-component',

}
</script>

<style lang="scss" scoped>
.navigation {
    background: #2c2c2c;
    background: #009688;
    color: #fcfcfc !important;
    margin: 0 auto;
    height: 60px;
    border-bottom: 5px solid #606060;
    z-index: 12;
    display: flex;
    align-items: center;
    justify-content: center;

    .container {
        flex: 10;

        .menu-content {
            display: block;

            .menu {
                box-sizing: border-box;

                .item {
                    text-transform: uppercase;
                    font-family: Oswald, arial, Georgia, serif;
                    font-size: 14px;
                    position: relative;
                    display: inline-block;
                    float: left;
                    border-width: 0 0 0 1px;
                    height: 50px;
                    cursor: pointer;

                    .link {
                        display: inline-block;
                        height: 50px;
                        line-height: 50px;
                        padding: 0 14px;
                        text-shadow: 0 1px 1px #000;
                        position: relative;

                        &:hover {
                            color: gold;
                        }
                    }

                    .sub-indicator {
                        right: -1px;
                        top: 50%;
                        margin-top: -2px;
                        margin-left: 5px;
                        position: absolute;
                        display: inline-block;
                        content: '';
                        width: 0;
                        height: 0;
                        border: 4px solid transparent;
                        border-top: 4px solid #ddd;
                    }

                    .drop-down-content {
                        display: none;
                        overflow: hidden;
                        position: absolute;
                        top: 50px;
                        z-index: 99999;
                        float: left;
                        background: #2d2d2d !important;
                        box-shadow: 0 3px 4px 1px rgba(0, 0, 0, 0.2);
                        border-bottom-right-radius: 3px;
                        border-bottom-left-radius: 3px;
                        white-space: nowrap;
                        transition: display 1s;

                        .drop-down-item {
                            display: block;
                            text-align: left;
                            font-size: 12px;
                            padding: 7px;
                            border-bottom: 1px solid #222;
                            border-top: 1px solid #9a9898;
                            font-family: Oswald, arial, Georgia, serif;
                            color: hsl(0, 1%, 60%);
                            transition: color 3s, transform 1s;

                            .drop-down-link {
                                margin: 7px 0;
                                display: inline-block;

                                &:hover {
                                    transform: translateX(5px);
                                    color: white;
                                }
                            }
                        }
                    }
                }

                .drop-down:hover .drop-down-content {
                    display: block;
                }
            }
        }
    }



    .search {
        flex: 2;
        line-height: 50px;
        padding: 7px 7px 7px 0;
        height: 100%;
        margin-right: 5px;

        .module_search {
            background: white;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            overflow: hidden;

            input {
                width: 100%;
                height: 100%;
                border: none;
                font-size: 15px;
                flex: 4;
                margin: 10px 0 10px 10px;

                &:focus {
                    outline: none;
                }
            }

            .search-button {
                color: #000;
                flex: 1;
                height: 100%;
                background: white;
                border: none;
                cursor: pointer;
                opacity: 0.5;
                transition: opacity .4s ease;

                &:hover {
                    opacity: 1;
                    background: #f5f2f2;
                }
            }
        }

    }
}
</style>