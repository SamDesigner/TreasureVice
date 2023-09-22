<template>
    <div class="py-[80px] bg-grayBg">
        <div class="w-full mx-auto max-w-[1240px]">
        
                <!-- <Swiper
                   
                    :slides-per-view="1"
                    :loop="true"
                    :autoplay="{
                        delay: 1000,
                        disableOnInteraction: true,
                    }"
                    :creative-effect="{
                        prev: {
                            shadow: false,
                            translate: ['-20%', 0, -1],
                        },
                        next: {
                            translate: ['100%', 0, 0],
                        },
                    }"
                >
                        <SwiperSlide >
                            Hey I'm 1
                        </SwiperSlide>
                        <SwiperSlide >
                            Hey I'm 2
                        </SwiperSlide>
                        <SwiperSlide >
                            Hey I'm 3
                        </SwiperSlide>
                </Swiper> -->
        </div>
    </div>
</template>
<script>
    import Swiper from 'swiper'
    export default{
        mounted() {
            // Initialize Swiper
            new Swiper('.swiper-container', this.swiperOptions);
        }
    }
</script>