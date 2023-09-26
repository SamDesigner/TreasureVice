<template>
    <div class="bg-darkGreen py-[40px] md:py-[80px] lg:px-[80px] px-[16px] flex flex-col gap-[40px]">
        <div class="max-w-[1440px] lg:px-[80px] flex items-center justify-center">
            <div class="flex flex-col justify-center items-center w-[632px] gap-[40px] ">
                <div class="flex flex-col items-center flex flex-col gap-[8px]">
                    <h3 class="text-lightGreen">About Us</h3>
                    <h1 class="text-white text-[28px] md:text-[40px] font-[600] text-center">Who We Are At Treasure Vince</h1>
                    <p class="font-[16px] text-white text-center leading-[28px] flex self-stretch ">Treasure Vince is an independent, privately owned provider o Domiciliary/homecare support to clients in the community to live independently in their own homes.</p>
                </div>
               <nuxt-link class="w-full md:w-fit">
                    <button class="text-white rounded-[1000px] bg-lightGreen px-[32px] py-[14px] w-full md:w-fit flex justify-center items-center gap-[8px] border border-white">
                        
                        Book an appointment
                        <i class="pi pi-arrow-right text-xs"></i>
                    </button>
               </nuxt-link>
               
            </div>

          
        </div>
        <div class="max-w-[1440px] px-[16px] lg:px-[80px] h-[280px] md:h-[480px] custom_bg rounded-[24px]"> 

        </div>
    </div>
</template>
<style scoped>
    .custom_bg{
        background-image: url('/img/about_hero.jpeg');
        background-position: center;
        background-size: cover;
    }
</style>