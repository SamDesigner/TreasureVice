<template>
    <div>
        <div class="max-w-[1440px] lg:px-[80px]  px-[16px] pt-[40px] md:pt-[80px] space-y-7">
            <div class=" lg:w-[956px]">
                <h1 class="text-lightGreen">Welcome</h1>
                <p class="text-darkGreen text-[24px] w-full lg:text-[40px]  font-bold">
                    We provide personalized home care to adults under and above 65 years to enable them to maintain a comfortable and independent living with dignity.
                </p>
            </div>
            <div class="w-full h-[240px] md:h-[600px] custom_bg">

            </div>
            
            
        </div>
        <div class="max-w-[1440px] mx-auto lg:px-[80px] py-[80px] px-[16px] flex flex-col gap-[64px]">
            <div class="flex justify-center items-center">
                <div class="text-center flex flex-col justify-center items-center">
                    <p class="text-primary">What we do</p>
                    <h1 class="text-darkGreen text-[20px] md:text-[32px] font-[600] leading-[48px]">Personalized In-Home Care</h1>
                    <p class=" lg:text-[16px] md:w-[740px] text-center leading-[28px] text-darkGreen">
                        We provide customized care plans tailored to your unique needs, ensuring you receive the specific support required to maintain your independence and well-being.
                    </p>
                </div>
            </div>
            <div class=" flex flex-col gap-[40px] md:flex-row md:justify-between gap-4">
                <div class="lg:w-[404px] space-y-3">
                    <div>
                        <img src='/svg/clock.svg' />
                    </div>
                    <p class="text-darkGreen leading-[32px] font-bold">Carers 24*7</p>
                    <p class="text-darkGreen text-[16px] leading-[28px]">
                        We provide carers to stay with you 24/7 to give you complete peace of mind.
                    </p>
                </div>
                <div class="lg:w-[404px] space-y-3">
                    <div>
                        <img src='/svg/user-star.svg' />
                    </div>
                    <p class="text-darkGreen leading-[32px] font-bold">Trained Professionals</p>
                    <p class="text-darkGreen text-[16px] leading-[28px]">
                        We have a professional, friendly, well trained, competent care teams who are passionate about what they do.
                    </p>
                </div>
                <div class="lg:w-[404px]  space-y-3">
                    <div>
                        <img src='/svg/verified.svg' />
                    </div>
                    <p class="text-darkGreen leading-[32px] font-bold">Background Checked</p>
                    <p class="text-darkGreen text-[16px] leading-[28px]">
                        They are fully insured, have been reference checked, and police checked via the Disclosure and Barring Service.
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