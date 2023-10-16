<template>
    <div class="flex flex-col items-center justify-center">
        <div class="max-w-[1440px] lg:px-[80px]  px-[16px] pt-[40px] md:pt-[80px] space-y-7">
            <div 
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            class=" lg:w-[956px]">
                <h1 class="text-lightGreen">Welcome</h1>
                <p class="text-darkGreen text-[24px] w-full lg:text-[40px]  font-bold">
                    We provide personalized home care services to vulnerable adults to enable them to live comfortably and independently in their own homes.
                </p>
            </div>
            <div data-aos="fade-up" 
                data-aos-easing="linear"
                data-aos-duration="1500"
                    class="w-full h-[240px] md:h-[600px]">
                        <img src="/img/no_stethoscope.jpeg" />
            </div>
            
            
        </div>
        <div class="lg:max-w-[1440px] mx-auto lg:px-[80px] py-[80px] px-[16px] flex flex-col gap-[64px]">
            <div
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-duration="1500"
            class="flex justify-center items-center">
                <div class="text-center flex flex-col justify-center items-center">
                   
                    <h1 class="text-darkGreen text-[20px] md:text-[32px] font-[600] leading-[48px]">What we do</h1>
                    <p class=" lg:text-[16px] md:w-[740px] text-center leading-[28px] text-darkGreen">
                        We provide customized care plans and support to vulnerable adults to help them maintain their independence and well-being.
                    </p>
                </div>
            </div>
            <div class=" flex flex-col gap-[20px] md:flex-row md:justify-between gap-4">
                <div 
                data-aos="fade-down"
                data-aos-offset="300"
                data-aos-duration="300"
                data-aos-easing="ease-in-sine"
                class="lg:w-[404px] space-y-3">
                    <div>
                        <img src='/svg/clock.svg' />
                    </div>
                    <p class="text-darkGreen leading-[32px] font-bold">Carers 24*7</p>
                    <p class="text-darkGreen text-[16px] leading-[28px]">
                        We provide 24/7 care to give you complete peace of mind.
                    </p>
                </div>
                <div 
                data-aos="fade-down"
                data-aos-offset="300"
                data-aos-duration="500"
                data-aos-easing="ease-in-sine"
                class="lg:w-[404px] space-y-3">
                    <div>
                        <img src='/svg/user-star.svg' />
                    </div>
                    <p class="text-darkGreen leading-[32px] font-bold">Experienced Health Care Workers</p>
                    <p class="text-darkGreen text-[16px] leading-[28px]">
                        We have a team of experienced, friendly, competent, and compliant healthcare workers who can deliver high-quality care.
                    </p>
                </div>
                <div 
                data-aos="fade-down"
                data-aos-offset="300"
                data-aos-duration="700"
                data-aos-easing="ease-in-sine"
                class="lg:w-[404px]  space-y-3">
                    <div>
                        <img src='/svg/verified.svg' />
                    </div>
                    <p class="text-darkGreen leading-[32px] font-bold">Recruitment</p>
                    <p class="text-darkGreen text-[16px] leading-[28px]">
                        We supply experienced and fully vetted healthcare workers to different care establishments.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .custom_bg{
        background:url('/img/welcome_bg.jpeg'), lightgray 0px -5px / 100% 120% no-repeat;
        border-radius: 24px;
        
        background-size:cover ;
    }
</style>