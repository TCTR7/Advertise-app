<template>
    <section class="categories">
        <div class="row">
            <div class="header">
                <h2>CÔNG TRÌNH TIÊU BIỂU</h2>
            </div>
            <div class="content">
                <div class="candidate-content">
                    <article class="article">
                        <figure class="article-image">
                            <router-link>
                                <img src="../assets/categories/typical_works/category_1.jpg" alt="">
                            </router-link>
                        </figure>
                        <figcaption class="article-caption">
                            <header class="article-category-header">
                                <router-link>
                                    <h3>Thi công bảng hiệu Led Khách Sạn Ngân Hà</h3>
                                </router-link>
                            </header>
                            <div class="article-category-title" id="candidate-title">
                                <p>{{ getCandidateTitle() }}</p>
                            </div>
                        </figcaption>
                    </article>
                    <div class="item-info">
                        <div class="time">
                            <font-awesome-icon :icon="['fa', 'clock']" class="icon" />
                            <span>23/10/2022</span>
                        </div>
                        <div class="view">
                            <font-awesome-icon :icon="['fa', 'eye']" class="icon" />
                            114 Lượt xem
                        </div>
                    </div>
                    <button class="btn more-btn">Xem thêm</button>
                </div>
                <div class="expand-content">
                    <article class="expand-content-item">
                        <img src="../assets/categories/typical_works/expand_content_1.jpg" alt="">
                        <div class="expand-content-item-detail">
                            <router-link class="title link">
                                Hộp đèn giải phân cách Hộp đèn giải phân cách Hộp đèn giải phân cách
                            </router-link>
                            <div class="item-info">
                                <div class="time">
                                    <font-awesome-icon :icon="['fa', 'clock']" class="icon" />
                                    <span>23/10/2022</span>
                                </div>
                                <div class="view">
                                    <font-awesome-icon :icon="['fa', 'eye']" class="icon" />
                                    114 Lượt xem
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="expand-content-item">
                        <img src="../assets/categories/typical_works/expand_content_1.jpg" alt="">
                        <div class="expand-content-item-detail">
                            <router-link class="title link">
                                Hộp đèn giải phân cách Hộp đèn giải phân cách Hộp đèn giải phân cách
                            </router-link>
                            <div class="item-info">
                                <div class="time">
                                    <font-awesome-icon :icon="['fa', 'clock']" class="icon" />
                                    <span>23/10/2022</span>
                                </div>
                                <div class="view">
                                    <font-awesome-icon :icon="['fa', 'eye']" class="icon" />
                                    114 Lượt xem
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="expand-content-item">
                        <img src="../assets/categories/typical_works/expand_content_2.jpg" alt="">
                        <div class="expand-content-item-detail">
                            <router-link class="title link">
                                Hộp đèn giải phân cách Hộp đèn giải phân cách Hộp đèn giải phân cách
                            </router-link>
                            <div class="item-info">
                                <div class="time">
                                    <font-awesome-icon :icon="['fa', 'clock']" class="icon" />
                                    <span>23/10/2022</span>
                                </div>
                                <div class="view">
                                    <font-awesome-icon :icon="['fa', 'eye']" class="icon" />
                                    114 Lượt xem
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="expand-content-item">
                        <img src="../assets/categories/typical_works/expand_content_3.jpg" alt="">
                        <div class="expand-content-item-detail">
                            <router-link class="title link">
                                Hộp đèn giải phân cách Hộp đèn giải phân cách Hộp đèn giải phân cách
                            </router-link>
                            <div class="item-info">
                                <div class="time">
                                    <font-awesome-icon :icon="['fa', 'clock']" class="icon" />
                                    <span>23/10/2022</span>
                                </div>
                                <div class="view">
                                    <font-awesome-icon :icon="['fa', 'eye']" class="icon" />
                                    114 Lượt xem
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="expand-content-item">
                        <img src="../assets/categories/typical_works/expand_content_4.jpg" alt="">
                        <div class="expand-content-item-detail">
                            <router-link class="title link">
                                Hộp đèn giải phân cách Hộp đèn giải phân cách Hộp đèn giải phân cách
                            </router-link>
                            <div class="item-info">
                                <div class="time">
                                    <font-awesome-icon :icon="['fa', 'clock']" class="icon" />
                                    <span>23/10/2022</span>
                                </div>
                                <div class="view">
                                    <font-awesome-icon :icon="['fa', 'eye']" class="icon" />
                                    114 Lượt xem
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="expand-content-item">
                        <img src="../assets/categories/typical_works/expand_content_4.jpg" alt="">
                        <div class="expand-content-item-detail">
                            <router-link class="title link">
                                Hộp đèn giải phân cách Hộp đèn giải phân cách Hộp đèn giải phân cách
                            </router-link>
                            <div class="item-info">
                                <div class="time">
                                    <font-awesome-icon :icon="['fa', 'clock']" class="icon" />
                                    <span>23/10/2022</span>
                                </div>
                                <div class="view">
                                    <font-awesome-icon :icon="['fa', 'eye']" class="icon" />
                                    114 Lượt xem
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="expand-content-item">
                        <img src="../assets/categories/typical_works/expand_content_4.jpg" alt="">
                        <div class="expand-content-item-detail">
                            <router-link class="title link">
                                Hộp đèn giải phân cách Hộp đèn giải phân cách Hộp đèn giải phân cách
                            </router-link>
                            <div class="item-info">
                                <div class="time">
                                    <font-awesome-icon :icon="['fa', 'clock']" class="icon" />
                                    <span>23/10/2022</span>
                                </div>
                                <div class="view">
                                    <font-awesome-icon :icon="['fa', 'eye']" class="icon" />
                                    114 Lượt xem
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="expand-content-item">
                        <img src="../assets/categories/typical_works/expand_content_4.jpg" alt="">
                        <div class="expand-content-item-detail">
                            <router-link class="title link">
                                Hộp đèn giải phân cách Hộp đèn giải phân cách Hộp đèn giải phân cách
                            </router-link>
                            <div class="item-info">
                                <div class="time">
                                    <font-awesome-icon :icon="['fa', 'clock']" class="icon" />
                                    <span>23/10/2022</span>
                                </div>
                                <div class="view">
                                    <font-awesome-icon :icon="['fa', 'eye']" class="icon" />
                                    114 Lượt xem
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="expand-content-item">
                        <img src="../assets/categories/typical_works/expand_content_4.jpg" alt="">
                        <div class="expand-content-item-detail">
                            <router-link class="title link">
                                Hộp đèn giải phân cách Hộp đèn giải phân cách Hộp đèn giải phân cách
                            </router-link>
                            <div class="item-info">
                                <div class="time">
                                    <font-awesome-icon :icon="['fa', 'clock']" class="icon" />
                                    <span>23/10/2022</span>
                                </div>
                                <div class="view">
                                    <font-awesome-icon :icon="['fa', 'eye']" class="icon" />
                                    114 Lượt xem
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="expand-content-item">
                        <img src="../assets/categories/typical_works/expand_content_4.jpg" alt="">
                        <div class="expand-content-item-detail">
                            <router-link class="title link">
                                Hộp đèn giải phân cách Hộp đèn giải phân cách Hộp đèn giải phân cách
                            </router-link>
                            <div class="item-info">
                                <div class="time">
                                    <font-awesome-icon :icon="['fa', 'clock']" class="icon" />
                                    <span>23/10/2022</span>
                                </div>
                                <div class="view">
                                    <font-awesome-icon :icon="['fa', 'eye']" class="icon" />
                                    114 Lượt xem
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="expand-content-item">
                        <img src="../assets/categories/typical_works/expand_content_4.jpg" alt="">
                        <div class="expand-content-item-detail">
                            <router-link class="title link">
                                Hộp đèn giải phân cách Hộp đèn giải phân cách Hộp đèn giải phân cách
                            </router-link>
                            <div class="item-info">
                                <div class="time">
                                    <font-awesome-icon :icon="['fa', 'clock']" class="icon" />
                                    <span>23/10/2022</span>
                                </div>
                                <div class="view">
                                    <font-awesome-icon :icon="['fa', 'eye']" class="icon" />
                                    114 Lượt xem
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="expand-content-item">
                        <img src="../assets/categories/typical_works/expand_content_4.jpg" alt="">
                        <div class="expand-content-item-detail">
                            <router-link class="title link">
                                Hộp đèn giải phân cách Hộp đèn giải phân cách Hộp đèn giải phân cách
                            </router-link>
                            <div class="item-info">
                                <div class="time">
                                    <font-awesome-icon :icon="['fa', 'clock']" class="icon" />
                                    <span>23/10/2022</span>
                                </div>
                                <div class="view">
                                    <font-awesome-icon :icon="['fa', 'eye']" class="icon" />
                                    114 Lượt xem
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'categories-component',
    data () {
        return {
            candidate_title: "(Giải nhà nghề Mỹ MLS) Hàng thủ của Inter Miami mắc quá nhiều sai lầm ở hiệp đấu thứ hai trước Chicago Fire (Giải nhà nghề Mỹ MLS) Hàng thủ của Inter Miami mắc quá nhiều sai lầm ở hiệp đấu thứ hai trước Chicago Fire"
        }
    },
    methods: {
        getCandidateTitle() {
            const max_word = 30;
            const words = this.candidate_title.split(" ")

            if( words.length > max_word) {
                let truncatedText = words.slice(0, max_word).join(" ")
                truncatedText += "..."

                return truncatedText
            }

            return this.candidate_title
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../public/assets/scss/common.scss";

.categories {
    padding: 10px;

    .row {
        padding: 0 15px;

        .header {
            width: 100%;
            padding-bottom: 12px;
            border-bottom: 2px solid $main-color;
            margin-bottom: 20px !important;
            text-align: left;

            h2 {
                display: block;
                width: fit-content;
                color: $main-color;
            }
        }

        .content {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            height: 400px;

            .candidate-content {
                max-width: 400px;
                height: 100%;
                flex: 3;
                text-align: left;
                padding: 0 5px 5px;
                border-right: 1px solid $main-color;
                display: flex;
                flex-direction: column;

                .article {
                    display: block;
                    padding: 0 !important;

                    figure>router-link>img {
                        width: 100%;
                    }

                    .article-caption {
                        padding: 5px 0;

                        .article-category-header {
                            color: $main-color;
                            margin: 10px 0;

                            router-link>h3 {
                                cursor: pointer !important;
                            }
                        }

                        .article-category-title {
                            font-size: 14px;
                        }
                    }

                }

                .more-btn {
                    width: fit-content;
                    display: block;
                    padding: 5px;
                    margin-top: 10px;
                }
            }

            .expand-content {
                height: 100%;
                flex: 2;
                padding: 0 5px 5px;
                overflow-y: scroll;
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                flex-direction: column;

                .expand-content-item {
                    display: flex;
                    justify-content: flex-start;
                    align-items: flex-start;
                    border-bottom: 1px solid $main-color;
                    margin-bottom: 5px;

                    img {
                        width: 70px;
                        height: 70px;
                    }

                    .expand-content-item-detail {
                        flex: 1;
                        font-size: 13px;
                        margin-left: 5px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;

                        .title {
                            text-align: left;
                            margin-top: 2px;
                        }
                    }
                }
            }

            .item-info {
                display: flex;
                margin: 7px 0 0;
                font-size: 10px;
                bottom: 2px;

                .time {
                    margin-right: 5px;

                }
                .icon {
                    margin-right: 5px;
                }
            }
        }
    }
}
</style>