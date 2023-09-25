<template>
    <div>
        <div class="bg-lightGreen py-[80px]">
            <div class="w-full mx-auto max-w-[1440px] px-[16px] lg:px-[80px]">
                    <div class="flex flex-col  items-center space-y-5   ">
                        <h1 class="text-[20px] md:text-[32px] text-white font-[600]">Still Have Questions?</h1>
                        <nuxt-link class=" w-full md:w-auto px-[16px]">
                            <button class="bg-lightGray flex gap-[8px] rounded-[1000px] py-[14px] px-[32px] w-full  md:w-[230px] justify-center items-center">
                                <span class="">Get in touch</span>
                                <i class="pi pi-arrow-right text-xs"></i>
                            </button>
                        </nuxt-link>
                    </div>
            </div>
        </div>
        <div class="bg-darkGreen py-[40px]">
            <div class="w-full mx-auto px-[16px] lg:px-[80px]  max-w-[1440px]">
                <div class="flex flex-col gap-[40px] md:flex-row items-center justify-between px-[20px] lg:px-[0px]"> 
                    <div>
                        <img src="/svg/footer_logo.svg" />
                    </div>
                    <div class=" flex flex-col md:flex-row items-center justify-center text-white  md:space-y-0 gap-[24px] text-[14px]">
                        <nuxt-link>About</nuxt-link>
                        <nuxt-link>Services</nuxt-link>
                        <nuxt-link>Contact</nuxt-link>
                        <nuxt-link>Useful Information</nuxt-link>
                            
                    </div>
                </div>
                <div class="pt-[40px] pb-[8px] text-[14px]">
                    <div class="flex justify-center items-center   text-white  text w-auto">
                        <div class="flex flex-col justify-center md:inline-block items-center pt-[20px] border-t border-borderGreen space-x-5 gap-[20px] text-center">
                            <span>Designed by TGPC Media</span>
                            <span>© 2018-2023 by Treasure Vince registered with companies house registration number: 09538000</span>
                        </div>
                        
                    </div>
                </div>
            </div>  
        </div>
    </div>
</template>