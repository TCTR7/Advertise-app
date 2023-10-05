<template>
    <div class="slider-container">
        <div class="slider-content">
            <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
                <SplideSlide v-for="(slideInfo, index) in slideInfos" :key="index">
                    <div class="slider-item">
                        <img :src="slideInfo.image" alt="">
                        <div class="content">
                            <router-link :to="{}">{{ slideInfo.content }}</router-link>
                            <p>{{ slideInfo.image }}</p>
                        </div>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
export default {
    name: 'slider-component',
    components: {
        Splide,
        SplideSlide,
    },
    data() {
        return {
            slideInfos: [
                {
                    image: require("../assets/slides/slide_1.jpg"),
                    link: '#',
                    content: 'Thi công hoàn thiện hạng mục xây dựng 2 biển Pano Led outdoor, tại trung tâm thành phố Đồng Hới'
                },
                {
                    image: require("../assets/slides/slide_2.jpg"),
                    link: '#',
                    content: 'Thi công hoàn thiện hạng mục xây dựng 2 biển Pano Led outdoor, tại trung tâm thành phố Đồng Hới'
                },
                {
                    image: require("../assets/slides/slide_3.jpg"),
                    link: '#',
                    content: 'Thi công hoàn thiện hạng mục xây dựng 2 biển Pano Led outdoor, tại trung tâm thành phố Đồng Hới'
                },
                {
                    image: require("../assets/slides/slide_4.jpg"),
                    link: '#',
                    content: 'Thi công hoàn thiện hạng mục xây dựng 2 biển Pano Led outdoor, tại trung tâm thành phố Đồng Hới'
                },
                {
                    image: require("../assets/slides/slide_5.jpg"),
                    link: '#',
                    content: 'Thi công hoàn thiện hạng mục xây dựng 2 biển Pano Led outdoor, tại trung tâm thành phố Đồng Hới'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.slider-container {
    overflow: hidden;

    .slider-content {
        position: relative;

        .slider-item {
            margin: 5px;

            img {
                object-fit: cover;
                width: 100%;
                height: 100%;
                display: block;
            }

            .content {
                margin-top: 50px;
                position: absolute;
                left: 20px;
                right: 20px;
                bottom: 40px;
                text-align: justify;
                background-color: #009688;
                padding: 7px 7px 12px;
                color: white;
                cursor: pointer;
            }
        }

    }
}</style>