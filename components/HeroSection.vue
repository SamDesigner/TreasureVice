<template>
    <div data-aos="fade-up" 
    data-aos-delay="300" 
    data-aos-easing="ease-in-out-cubic"
    class="bg-grayBg w-full reveal_hero lg:px-[80px] ">
        <div  class="flex flex-col w-auto lg:max-w-[1280px] px-[16px]  gap-[32px]  justify-center items-center  pt-[56px]  md:gap-6" >
            <div class=" md:p-3 lg-0 flex flex-col gap-[40px]">
                <div class="flex flex-col gap-[40px] lg:flex-row  justify-between  items-start lg:items-end">
                    <h1 class=" text-[32px] lg:text-[56px] leading-[48px] lg:leading-[72px] lg:w-[960px] gap-[40px] text-darkGreen font-bold">
                        Treasure Vince- Home Care Agency, Supported Living & Recruitment.
                    </h1>
                    <Nuxt-link to="/contact">
                        <button class="bg-lightGreen text-white py-[14px] px-[32px] rounded-3xl w-fit inline-block whitespace-nowrap">Book an appointment <span><i class="pi pi-arrow-right text-xs"></i></span></button>
                
                    </Nuxt-link>
                </div>    
               
             
            </div>
            <div class="">
                <ServicesVideo />
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