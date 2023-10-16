<template>
    <div class="bg-grayBg pt-[80px]  ">
        <!-- <div class="bg-darkGreen  px-[16px] py-[40px] md:p-[56px] w-auto max-w-[1440px] lg:gap-[50px] mx-auto grid grid-cols-1 gap-y-[40px]  md:grid-cols-2 justify-center items-center">
            <div
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-duration="1200"
            class="custom_bg h-[280px]  md:h-[480px]   rounded-3xl">
                <img class="h-[100%] rounded-3xl" src="/img/no_stethoscop2.jpeg" />
            </div>
            <div
                 data-aos="fade-right"
                data-aos-offset="200"
                data-aos-duration="1000"
            >
                <div class="text-white space-y-4 text-center md:text-left">
                    <h1 class="text-lightGreen">Who We Are</h1>
                    <h1 class="text-[20px] md:text-[32px] font-[600]">Provider of Good Quality of Care</h1>
                    <p class="text-[16px] leading-[28px]">Our team consists of compassionate and experienced caregivers who are dedicated to your comfort, safety, and emotional well-being.</p>
                </div>
            </div>
           
        </div> -->
        
        <div class=" px-[16px]  md:px-[80px] bg-darkGreen">
            <div class=" gap-y-[40px] md:space-y-0    py-[40px] w-auto max-w-[1440px] mx-auto grid grid-cols-1 gap-[40px] md:grid-cols-2 justify-between items-center">
                <div 
                data-aos="fade-up"
                data-aos-duration="3000"
                class="custom_bg2 h-[280px] md:h-[480px] w-[592px] order-2  md:order-1 rounded-3xl">
                    <img class="h-[100%] w-full rounded-[24px]  " src="/img/old_woman.png" />
                </div>
                <div 
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-duration="1200"
                class="flex flex-col gap-10 order-1 md:order-2  ">
                    <div class="text-white">
                        <h1 class=" text-[26px] font-[400] leading-[36px]">Quality care for people you love</h1>
                        <h1 class="text-[28px] lg:text-[40px] font-[600] leading-[56px]">Companionship and Engagement</h1>
                        <p class="text-[16px]  md:text-[18px] leading-[30px] font-[400]">We go beyond caregiving by providing companionship and engaging activities to combat isolation and enhance your quality of life.</p>
                    </div>
                  
                    <nuxt-link to="/contact">
                        <button class=" bg-lightGreen text-white w-full md:w-auto py-[14px] px-[32px] w-auto rounded-3xl flex items-center justify-center gap-[8px] ">
                            <span>Book an appointment</span>
                            <i class="pi pi-arrow-right text-xs"></i>
                        </button>
                    </nuxt-link>
                    
                </div>
               
                
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .custom_bg img{
        object-fit:cover ;
    }
    .custom_bg2 img{
        object-fit: cover;
    }
</style>