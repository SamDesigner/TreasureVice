<template>
    <div class="bg-darkGreen flex justify-center items-center lg:px-[80px] px-[16px] ">
    <div class=" py-[40px] md:py-[80px] w-[1280px]     ">
        <div class="w-full ">
                <div class="flex flex-col justify-center items-center gap-[40px]">
                    <div class="gap-[4px]">
                        <h3 class="text-[18px] font-[400] leading-[28px] text-lightGreen text-center">Contact us</h3>
                        <h1 class="text-white  font-[600] text-[28px] lg:text-[40px] text-center leading-[44px] lg:leading-[56px]">We're here for you</h1>
                        <p class="text-white text-[16px] font-[400] text-center leading-[28px]">Our friendly team is always ready to help you.</p>
                    </div>
                    <div class="hidden custom_bg w-full   h-[480px] rounded-[24px] md:flex justify-center items-center ">
                        <div class="lg:w-[848px] grid grid-cols-3  gap-[24px]">
                            <div class="px-[24px] h-[280px] lg:w-[280px] rounded-[8px] py-[16px] bg-white flex flex-col   gap-[40px]">
                                <div>
                                    <img src="/svg/chaticon.svg" />
                                </div>
                                <div class="">
                                    <h3 class="text-[16px] leading-[32px] font-[600] text-darkGreen">Email</h3>
                                    <p class="leading-[30px] text-[14px] text-darkGreen">Send them a private message</p>
                                    <span class="underline text-[400] leading-[30px]  ">admin@treasurevincehampshire .co.uk</span>
                                </div>
                             
                            </div>
                            <div class="px-[24px] h-[280px] lg:w-[280px] rounded-[8px] py-[16px] bg-white flex flex-col gap-[40px]">
                                <div>
                                    <img src="/svg/phone_icon.svg" />
                                </div>
                                <div>
                                    <h3 class="text-[16px] leading-[32px] font-[600] text-darkGreen">Telephone</h3>
                                    <p class="leading-[30px] text-[14px] text-darkGreen">Schedule a call with them</p>
                                    <p class="underline text-[400] leading-[30px]">03300432599, 07459304221</p>
                                </div>
                              
                            </div>
                            <div class="px-[24px] h-[280px] lg:w-[280px] rounded-[8px] py-[16px] bg-white flex flex-col gap-[40px]">
                                <div>
                                    <img src="/svg/location_icon.svg" />
                                </div>
                                <div>
                                    <h3 class="text-[16px] leading-[32px] font-[600] text-darkGreen">Address</h3>
                                    <p class="leading-[30px] text-[14px] text-darkGreen">Send them a private message</p>
                                    <p class="underline text-[400] leading-[30px]">Suite 3, 308-318 commercial road, Portsmouth PO1 4BL</p>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                    <div class="w-full grid grid-cols-1 md:hidden gap-[40px] ">
                            <div class="px-[24px] h-[280px]  rounded-[8px] py-[16px] bg-white flex flex-col gap-[40px]">
                                <div>
                                    <img src="/svg/chaticon.svg" />
                                </div>
                                <div>
                                    <h3 class="text-[16px] leading-[32px] font-[600] text-darkGreen">Email</h3>
                                    <p class="leading-[30px] text-[14px] text-darkGreen">Send us a private message</p>
                                    <p class="underline text-[400] leading-[30px] text-primary">admin@treasurevincehampshire. co.uk</p>
                                </div>
                             
                            </div>
                            <div class="px-[24px] h-[280px]  rounded-[8px] py-[16px] bg-white flex flex-col gap-[40px]">
                                <div>
                                    <img src="/svg/phone_icon.svg" />
                                </div>
                                <div>
                                    <h3 class="text-[16px] leading-[32px] font-[600] text-darkGreen">Telephone</h3>
                                    <p class="leading-[30px] text-[14px] text-darkGreen">Schedule a call with us</p>
                                    <p class="underline text-[400] leading-[30px] text-primary">03300432599, 07459304221</p>
                                </div>
                             
                            </div>
                            <div class="px-[24px] h-[280px]  rounded-[8px] py-[16px] bg-white flex flex-col gap-[40px]">
                                <div>
                                    <img src="/svg/location_icon.svg" />
                                </div>
                                <div>
                                    <h3 class="text-[16px] leading-[32px] font-[600] text-darkGreen">Address</h3>
                                    <p class="leading-[30px] text-[14px] text-darkGreen">Visit their office HQ</p>
                                    <p class="underline text-[400] leading-[30px] text-primary">Suite 3, 308-318 commercial road, Portsmouth PO1 4BL</p>
                                </div>
                              
                            </div>
                    </div>
                </div>
                

          
        </div>
        </div>
    </div>
</template>
<style scoped>
    .custom_bg{
        background-image: linear-gradient(rgba(26,28,27,0.70),rgba(26,28,27,0.70)),url('/img/hospital_doctor.jpeg');
        background-position: center;
        background-size: cover;
    }
    @media(max-width:800px){
        .custom_bg{
            background: none;
        }
    }
 
</style>