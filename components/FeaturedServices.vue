
<template>
    <div class="bg-grayBg ">
    <div class="py-[40px] lg:py-[80px] max-w-[1440px] mx-auto flex flex-col gap-[40px]">
        <div class="flex justify-center">
            <div class="flex flex-col gap-[8px] items-center">
                <h3 class="text-lightGreen text-[14px] font-[400] leading-[24px] md:leading-[28px] md:text-[18px]">What we do</h3>
                <h1 class="text-darkGreen text-[20px] leading-[36px] md:text-[32px] md:leading-[48px] font-[600]">Our Services</h1>
            </div>
        </div>
        <div class="max-w-[1440px] px-[16px] lg:px-[80px]">
            <div class="">
                <Swiper
                    
                    :modules="[]"
                    :slides-per-view="1"
                    :loop="true"
                    :effect="'creative'"
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
                        <div class="grid grid-cols-1 md:grid-cols-3 justify-between items-center gap-[40px] px-[16px]">
                            <div class="text-darkGreen flex flex-col items-center order-1 md:order-1 ">
                                <h3 class="text-darkGreen text-[16px] font-[600] leading-[32px]">Personal Care</h3>
                                <p class=" text-[16px] font-[400] leading-[28px] text-center">We understand your individual needs and provide personalized care.</p>
                            </div>
                            <div class="flex justify-center items-center order-3 md:order-2 ">
                                    <div class="h-[480px] lg:min-w-[414px] rounded-tr-[24px] rounded-tl-[24px] ">
                                        <img class="carousel_img rounded-tr-[24px] h-[100%] rounded-tl-[24px]" src="/img/carousel_1.jpeg" />
                                    </div>
                            </div>
                            <div class="text-darkGreen flex flex-col items-center order-2 md:order-3">
                                    <h3 class="text-darkGreen text-[16px] font-[600] leading-[32px]">Personal Care</h3>
                                    <p class=" text-[16px] font-[400] leading-[28px] text-center">We work with you to create a personalized care plan that respects your preferences and priorities.</p>
                            </div>
                        </div>
                      
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="grid grid-cols-1  md:grid-cols-3 justify-between items-center gap-[40px] px-[16px]">
                            <div class="text-darkGreen flex flex-col items-center order-1 md:order-1 ">
                                <h3 class="text-darkGreen text-[16px] font-[600] leading-[32px]">Social Care</h3>
                                <p class=" text-[16px] font-[400] leading-[28px] text-center">We are committed to inclusive social care that meets everyone’s unique needs.</p>
                            </div>
                            <div class="flex justify-center items-center order-3 md:order-2">
                                    <div class="h-[480px] lg:min-w-[414px] rounded-tr-[24px] rounded-tl-[24px] ">
                                        <img class="carousel_img rounded-tr-[24px] h-[100%] rounded-tl-[24px]" src="/img/carousel_2.jpeg" />
                                    </div>
                            </div>
                            <div class="text-darkGreen flex flex-col items-center order-2 md:order-3">
                                    <h3 class="text-darkGreen text-[16px] font-[600] leading-[32px]">Social Care</h3>
                                    <p class=" text-[16px] font-[400] leading-[28px] text-center">We create a meaningful and enjoyable social care experiences that enhance each client's quality of life.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="grid grid-cols-1 space-y-6 md:grid-cols-3 justify-between items-center gap-[40px] px-[16px]">
                            <div class="text-darkGreen flex flex-col items-center order-1 md:order-1 ">
                                <h3 class="text-darkGreen text-[16px] font-[600] leading-[32px]">Domestic Care</h3>
                                <p class=" text-[16px] font-[400] leading-[28px] text-center">We offer a wide range of domestic care services to create a stress-free environment for our clients.</p>
                            </div>
                            <div class="flex justify-center items-center order-3 md:order-2">
                                    <div class="h-[480px] lg:min-w-[414px] rounded-tr-[24px] rounded-tl-[24px] ">
                                        <img class="carousel_img rounded-tr-[24px] h-[100%] rounded-tl-[24px]" src="/img/carousel_3.jpeg" />
                                    </div>
                            </div>
                            <div class="text-darkGreen flex flex-col items-center order-2 md:order-3">
                                    <h3 class="text-darkGreen text-[16px] font-[600] leading-[32px]">Domestic Care</h3>
                                    <p class=" text-[16px] font-[400] leading-[28px] text-center">We offer a wide range of domestic care services to create a stress-free environment for our clients.</p>
                            </div>
                        </div>
                    </SwiperSlide>
            </Swiper>        
                
            </div>
        </div>
        </div>
    </div>
</template>
<style scoped>
    .carousel_img{
        object-fit:cover ;
    }
 
   
</style>
<script>
</script>