<template>
    <div class="bg-white py-[80px] px-[16px]" >
        <div class="max-w-[1440px]  lg:px-[80px] flex flex-col gap-[40px] lg:flex-row justify-between">
            <div class="">
                <div class="flex-1 lg:w-[576px] flex flex-col gap-[40px]">
                    <div>
                        <h1 class="text-darkGreen leading-[36px] md:leading-[48px] text-[20px] md:text-[32px] font-[600]">Let us give you a call</h1>
                        <p class="text-[16px] leading-[28px] font-[400] text-darkGreen">
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
                <div class="md:flex-1 lg:w-[576px] flex flex-col gap-[40px]">
                    <div class="flex flex-col gap-[12px]">
                        <h1 class="text-darkGreen font-[600] text-[20px] md:text-[32px] leading-[36px] md:leading-[48px]">Get In Touch</h1>
                        <p class="text-[16px] font-[400] leading-[24px] text-darkGreen">Our friendly team would love to hear from you</p>
                    </div>
                    <div class="flex flex-col gap-[20px]">
                        <div class="flex flex-col md:flex-row gap-[20px]">
                            <div class="flex flex-col gap-[4px] md:w-1/2">
                                <label class="text-[16px] font-[500] leading-[24px] text-darkGreen">First Name</label>
                                <input placeholder="John" class="border border-inputGray text-[16px] font-[400] rounded-[8px] py-[16px] px-[24px]" />
                            </div>
                            <div class="flex flex-col gap-[4px] md:w-1/2">
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
                        <div>
                            <div class="flex flex-col gap-[4px]">
                                <label class="text-[16px] font-[500] leading-[24px] text-darkGreen">Phone number</label>
                                <div class="border border-inputGray flex items-center gap-[4px] px-[24px] rounded-[8px]">
                                   <div>
                                    <select name="" id="" class="text-darkGreen">
                                        <option>US <i class="pi pi-chevron-down"></i></option>
                                    </select>
                                   </div>
                                    <input placeholder="+1 (555) 000-000" class="text-[16px] font-[400] w-full  py-[16px] " />
                                </div>
                                
                            </div>
                        </div>
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
                    <div class="flex justify-center">
                        <button class="w-[343px] bg-lightGreen text-white rounded-[1000px] py-[14px] px-[32px]">Send Message</button>
                    </div>
                 
                </div>
                
            </div>

        </div>
    </div>
    
</template>

<script>



</script>