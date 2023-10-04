<template>
    <div class="flex items-center justify-center bg-grayBg">
    <div class=" pt-[40px] md:pt-[80px] px-[16px] lg:px-[0px] flex flex-col gap-[32px] lg:gap-[64px]">
        <div class="max-w-[1440px] lg:px-[80px] flex flex-col gap-[40px] md:flex-row md:gap-[64px]">
            <div 
            data-aos="fade-right"
            class="md:flex-1 flex flex-col gap-[4px]">
                <h4 class="text-lightGreen text-[14px] md:text-[18px] font-[400] leading-[24px] md:leading-[28px]">CQC Regulation</h4>
                <h1 class="text-darkGreen text-[20px] leading-[36px] md:text-[32px] md:leading-[48px]">What is CQC Regulation?</h1>
                <p class="text-darkGreen leading-[28px] text-[16px]">
                    The CQC is an independent organization that makes sure that health and social care services in England are safe, caring, effective, responsive, and well-led. They do this by monitoring, inspecting, and regulating these services. They also publish their findings and give each provider a performance rating.
                </p>
            </div>
            <div 
            data-aos="zoom-out"
            class="lg:w-[540px] md:flex-1 h-[280px] md:h-[332px] bg-darkGray">

            </div>
        </div>
        <div 
        data-aos="zoom-in"
        class="max-w-[1440px] lg:px-[80px] ">
            <div class=" h-[280px] md:h-[552px]  custom_bg  ">

            </div>
        </div>
        <div class="  lg:px-[80px] pt-[64px] md:pt-[80px] pb-[24px] md:pb-[40px] flex flex-col gap-[40px] md:gap-[64px]">
            <div 
            data-aos="fade-right"   
            class="flex flex-col gap-[8px] w-full items-center justify-center">
                <div class="text-darkGreen md:w-[612px]">
                    <h1 class="text-[20px] md:text-[32px] font-[600] leading-[36px] md:leading-[48px] text-center">Our Brochure</h1>

                </div>
            </div>

            <div 
            data-aos="zoom-in"
            class="flex  justify-center items-center bg-black">
                <div class="h-[280px] md:h-[552px]   ">
                    <img class="custom_brochure" src="/img/brochure.png" />
                </div>
                
            </div>
            <div @click="downloadBrochure" class="flex justify-center">
                <button class="py-[14px] px-[32px] bg-lightGreen text-white rounded-[1000px] flex items-center gap-[8px]">
                    <span>
                    Download our Brochure
                    </span>
                    <img src="/svg/download.svg" />
                
                </button>
            </div>
        </div>
       
    </div>
    </div>
</template>
<style  scoped>
    .custom_bg{
        background-image: url('/img/smiling_age.jpeg');
        background-position: center;
        background-size: cover;
    }
    .custom_brochure{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
<script>
        export default{
            methods: {
                downloadBrochure(){
                    const filePath = '/pdf/brochure.pdf'

                    const link = document.createElement('a');
                    link.href = filePath;
                    link.download = 'brochure.pdf'

                    link.click()
                }
            }
        }
</script>