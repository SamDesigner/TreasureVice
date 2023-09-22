<template>
    <div class="bg-grayBg pt-[80px] ">
        <div class="bg-darkGreen lg:rounded-[24px] px-[16px] py-[40px] md:p-[56px] w-auto max-w-[1240px] mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 justify-center items-center">
            <div>
                <div class="text-white space-y-4 text-center md:text-left">
                    <h1 class="text-lightGreen">Who We Are</h1>
                    <h1 class="text-[20px] md:text-[32px] font-[600]">Provider of Good Quality of Care</h1>
                    <p class="text-[16px] leading-[28px]">Our team consists of compassionate and experienced caregivers who are dedicated to your comfort, safety, and emotional well-being.</p>
                </div>
            </div>
            <div class="custom_bg h-[280px] md:h-[480px]  rounded-3xl">

            </div>
        </div>
        
        <div class="pt-[40px] md:pt-[80px] px-[16px] ">
            <div class=" gap-y-[40px] md:space-y-0   lg:px[0] py-[40px] w-auto max-w-[1240px] mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 justify-center items-center">
                <div class="custom_bg2 h-[280px] md:h-[480px] order-2  md:order-1 rounded-3xl">

                </div>
                <div class="flex flex-col gap-10 order-1 md:order-2 ">
                    <div>
                        <h1 class="text-lightGreen text-[18px] font-[400] leading-[28px]">Quality care for people you love</h1>
                        <h1 class="text-darkGreen text-[32px] font-[600] leading-[48px]">Companionship and Engagement</h1>
                        <p class="text-darkGreen text-[16px] leading-[28px]">We go beyond caregiving by providing companionship and engaging activities to combat isolation and enhance your quality of life.</p>
                    </div>
                  
                    <nuxt-link>
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
    .custom_bg{
        background: url('/img/old_man.png');
        background-position: center;
        background-size: cover;
    }
    .custom_bg2{
        background:url('/img/old_woman.png');
        background-position: center;
        background-size: cover;
    }
</style>