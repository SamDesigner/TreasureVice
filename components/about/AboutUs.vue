<template>
    <div class="bg-white py-[56px] md:py-[80px] px-[16px]">
        
        <div class="mx-auto max-w-[1240px] grid grid-cols-1 gap-y-8 md:gap-y-0 md:grid-cols-2 items-center md:gap-4 lg:gap-2">
            <div class="h-[280px]  md:h-[480px] lg:w-[592px] rounded-3xl custom_bg order-2 md:order-1">

            </div>
            <div class="flex flex-col gap-[40px] order-1 md:order-2">
                <div>
                    <h3 class="text-lightGreen text-[18px]">More About Us</h3>
                    <h1 class="text-darkGreen text-[20px] md:text-[32px] font-[600] leading-[36px] md:leading-[48px]">We Provide Quality Nursing Care Services</h1>
                    <div class="text-dark text-[16px] leading-[28px] flex flex-col gap-[8px]"> 
                        <p>
                            Treasure Vince care is a registered Home Care Agency providing a range of care and support services to adults in their own homes and in the community. Treasure Vince provides high-quality care and support in the client’s home. We provide personal care and person-centred services tailored to individual service users.
                        </p> 
                        <p>
                            We also provide supported accommodation to young adults to live a happy and rewarding life. Supporting them to develop their independent living skills and build and maintain their family and social network.
                        </p>
                    </div>
                </div>  
                <nuxt-link>
                    <button class="bg-lightGreen flex items-center text-white gap-[8px] border border-white rounded-[1000px] py-[14px] px-[32px]">
                        <span>Book an appointment</span>
                        <i class="pi pi-arrow-right">   </i>
                    </button>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .custom_bg{
        background-image: url('/img/help.jpeg');
        background-position: center;
        background-size: cover;
    }
</style>