<template>
    <div class="bg-darkGreen py-[40px] md:py-[80px] lg:px-[80px] px-[16px] flex flex-col items-center gap-[40px]">
        <div class=" lg:w-[1280px] flex md:items-center md:justify-center ">
            <div class="flex flex-col justify-center items-center md:w-[632px] gap-[40px] ">
                <div class="flex flex-col items-center  gap-[8px]">
                    <h3 class="text-white text-[28px] md:text-[40px] font-[600] leading-[44px]  md:leading-[56px]">About Us</h3>
                    
                    <div class="flex flex-col gap-[8px] items-center justify-center">
                        <p class="font-[16px] text-white text-center leading-[28px] flex md:self-stretch ">
                            At Treasure Vince Care, our vision is to treat all our service users with dignity and respect. With this in mind, we thrive to always provide the best quality care and support that is person centered to all your needs.


                        </p>
                      
                    </div>
         
                </div>
               <nuxt-link to="/contact" class="w-full md:w-fit flex justify-center">
                    <button class="text-white rounded-[1000px] bg-lightGreen px-[32px] py-[14px] w-full  flex justify-center items-center gap-[8px] border border-white">
                        
                        Book an appointment
                        <i class="pi pi-arrow-right text-xs"></i>
                    </button>
               </nuxt-link>
               
            </div>

          
        </div>
        <div 
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        class="w-full lg:w-[1280px]  rounded-[24px] lg:px-[0px] h-[280px] md:h-[480px] custom_bg "> 
            
        </div>
    </div>
</template>
<style scoped>
    .custom_bg{
        background: url("/img/smiling_age.jpeg");
        background-position: top;
        background-size: cover;
        
    }
</style>