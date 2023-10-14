<template>
    <div class="bg-grayBg py-[40px] lg:px-[80px] ">
       
        
        <div class="  px-[16px]  ">
            <div class=" gap-y-[40px] md:space-y-0   lg:px[80px]  w-auto lg:max-w-[1280px] mx-auto grid grid-cols-1 gap-[40px] md:grid-cols-2 justify-between items-center">
             


                <div 
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-duration="1200"
                class="flex flex-col gap-10 ">
                    <div>
              
                        <h1 class="text-darkGreen text-[32px] font-[600] leading-[48px]">Treasure Vince- Home Care Agency, Supported Living & Recruitment.</h1>
                        <p class="text-darkGreen text-[16px] leading-[28px]">With our personalized care plans, you can stay in your own home and maintain your independence. We provide assistance with activities of daily living, companionship, and transportation. We also offer support groups and other resources to help you stay connected to your community.</p>
                    </div>
                  
                    <nuxt-link to="/contact">
                        <button class=" bg-lightGreen text-white w-full md:w-auto py-[14px] px-[32px] w-auto rounded-3xl flex items-center justify-center gap-[8px] ">
                            <span>Book an appointment</span>
                            <i class="pi pi-arrow-right text-xs"></i>
                        </button>
                    </nuxt-link>
                    
                </div>
                <div 
                data-aos="fade-left"
                data-aos-duration="1000"
                class="custom_bg2 h-[280px] md:h-[480px]  rounded-3xl">
                    <img class="h-[100%] rounded-3xl " src="/img/Hero-bg.png" />
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