<template>
    <div class="bg-white py-[56px] md:py-[80px] px-[16px] lg:px-[80px] flex justify-center items-center"> 
        
        <div class="max-w-[1440px] grid lg:grid-cols-2 gap-[32px] lg:gap-[50px] justify-center items-center">
            <div 
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            class="h-[280px]  md:h-[480px] lg:w-[592px] rounded-3xl custom_bg order-2 md:order-1">
                <img class="h-[100%] rounded-[24px]" src="/img/help.jpeg" />
            </div>
            <div 
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            class="flex flex-col gap-[40px] order-1 md:order-2">
                <div>
                    <h3 class="text-lightGreen text-[18px]">More About Us</h3>
                    <h1 class="text-darkGreen text-[20px] md:text-[32px] font-[600] leading-[36px] md:leading-[48px]">We Provide Quality Care Services</h1>
                    <div class="text-dark text-[16px] leading-[28px] flex flex-col gap-[8px]"> 
                        <p>
                            Treasure Vince Care Limited care is a registered Home Care Agency providing a range of care and support services to vulnerable adults in the comfort of their own homes and within the community. 
                        </p> 
                       
                    </div>
                </div>  
                <nuxt-link to="/contact">
                    <button class="bg-lightGreen flex items-center text-white gap-[8px] w-full flex justify-center md:w-fit border border-white rounded-[1000px] py-[14px] px-[32px]">
                        <span>Book an appointment</span>
                        <i class="pi pi-arrow-right text-xs">   </i>
                    </button>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .custom_bg{
        background-image: url();
        background-position: center;
        background-size: cover;
    }
</style>