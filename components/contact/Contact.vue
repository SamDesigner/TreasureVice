<template>
    <div class="bg-white py-[80px]" >
        <div class="max-w-[1440px] px-[80px] flex">
            <div class="">
                <div class="w-[576px] flex flex-col gap-[40px]">
                    <div>
                        <h1 class="text-darkGreen leading-[36px] md:leading-[48px] text-[20px] md:text-[32px] font-[600]">Let us give you a call</h1>
                        <p class="text-[16px] leading-[28px] font-[400]">
                            Send us your details in the form below and a member of our team will call you as soon as possible. If you’d like to speak to us straight away, call 01268418095. We’re available seven days a week.
                        </p>
                    </div>
                    <div class="flex gap-[32px]">
                        <img src="/svg/facebook.svg" />
                        <img src="/svg/linkedin.svg" />
                        <img src="/svg/twitter.svg" />
                    </div>
                </div>
                
            </div>
            <div>
                <div class="w-[576px]">
                    <div class="flex flex-col gap-[12px]">
                        <h1 class="text-darkGreen font-[600] text-[20px] md:text-[32px] leading-[36px] md:leading-[48px]">Get In Touch</h1>
                        <p class="text-[16px] font-[400] leading-[24px] text-darkGreen">Our friendly team would love to hear from you</p>
                    </div>
                    <div>
                        <div>
                            <div class="flex flex-col gap-[4px]">
                                <label class="text-[16px] font-[500] leading-[24px] text-darkGreen">First Name</label>
                                <input placeholder="John" class="border border-inputGray text-[16px] font-[400] rounded-[8px] py-[16px] px-[24px]" />
                            </div>
                            <div class="flex flex-col gap-[4px]">
                                <label class="text-[16px] font-[500] leading-[24px] text-darkGreen">Last Name</label>
                                <input placeholder="Doe" class="border border-inputGray text-[16px] font-[400] rounded-[8px] py-[16px] px-[24px]" />
                            </div>
                        </div>
                        <div>
                            <div class="flex flex-col gap-[4px]">
                                <label class="text-[16px] font-[500] leading-[24px] text-darkGreen">Company Name</label>
                                <input placeholder="john doe internationals" class="border border-inputGray text-[16px] font-[400] rounded-[8px] py-[16px] px-[24px]" />
                            </div>
                        </div>
                        <!-- <div>
                            <div class="flex flex-col gap-[4px]">
                                <label class="text-[16px] font-[500] leading-[24px] text-darkGreen">Company Name</label>
                                <div>
                                    <vue-country-region-select
                                    v-model="selectedCountry"
                                    class="w-full border rounded-l px-2 py-1"
                                    placeholder="Select Country"
                                    />
                                    <input placeholder="Doe" class="border border-inputGray text-[16px] font-[400] rounded-[8px] py-[16px] px-[24px]" />
                                </div>
                                
                            </div>
                        </div> -->
                        <div>
                            <div class="flex flex-col gap-[4px]">
                                <label class="text-[16px] font-[500] leading-[24px] text-darkGreen">Email Address</label>
                                <input placeholder="you@company.com" class="border border-inputGray text-[16px] font-[400] rounded-[8px] py-[16px] px-[24px]" />
                            </div>
                        </div>
                        <div>
                            <div class="flex flex-col gap-[4px]">
                                <label class="text-[16px] font-[500] leading-[24px] text-darkGreen">Subject</label>
                                <input placeholder="Subject" class="border border-inputGray text-[16px] font-[400] rounded-[8px] py-[16px] px-[24px]" />
                            </div>
                        </div>
                        <div>
                            <div class="flex flex-col gap-[4px]">
                                <label class="text-[16px] font-[500] leading-[24px] text-darkGreen">Message</label>
                                <text-area  placeholder="Leave us a message" class="border h-[134px] text-black border-inputGray text-[16px] font-[400] rounded-[8px] py-[16px] px-[24px]"></text-area> 
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>

        </div>
    </div>
    
</template>

<script>



</script>