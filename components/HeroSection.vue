<template>
    <div data-aos="fade-up" 
    data-aos-delay="300" 
    data-aos-easing="ease-in-out-cubic"
    class="bg-grayBg w-full reveal_hero ">
        <div  class="grid md:grid-cols-1 lg:flex w-auto max-w-[1440px] px-[16px] gap-[32px] lg:px-[80px] mx-auto justify-center items-center  pt-[56px]  md:gap-6" >
            <div class=" md:p-3 lg-0 flex flex-col gap-[40px]">
                <div>
                    <h1 class=" text-[32px] lg:text-[56px] leading-[48px] lg:leading-[72px] text-darkGreen font-bold">
                    Treasure Vince- Home Care Agency, Supported Accommodation & Recruitment.
                    </h1>
                    <p class="text-[16px] leading-[28px] text-darkGreen"> 
                        With our personalized care plans, you can stay in your own home and maintain your independence. We provide assistance with activities of daily living, companionship, 
                        and transportation. We also offer support groups and other resources to help you stay connected to your community.
                    </p>  
                </div>
               
                <button class="bg-lightGreen text-white py-[14px] px-[32px] rounded-3xl w-fit">Book an appointment <span><i class="pi pi-arrow-right text-xs"></i></span></button>
            </div>
            <div>
                <div 
              
                class="custom_bg bg-cover h-[240px] md:h-[760px] w-full lg:w-[592px] rounded-tr-2xl rounded-tl-2xl">
                    <img class="rounded-tr-2xl rounded-tl-2xl" src="/img/Hero-bg.png" />
                </div>
            </div>
        </div>  
    </div>
</template>
<script>
   
  
</script>
<style scoped>
    .custom_bg{
        /* background: url('/img/Hero-bg.png');
        background-position: center;
        background-size: cover; */
    }
    .custom_bg img{
        height: 100%;
        object-fit: cover;
        width:100%
    }
</style>