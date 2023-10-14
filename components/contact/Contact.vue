<template>
    <div class="relative">
        <div v-if="successAlert" @click="toggleSuccess()" class="gradient_bg fixed top-0 h-full w-full flex justify-center  items-center custom_index" >
            <div class="bg-white h-[400px] flex flex-col justify-center w-full md:w-1/2 rounded-xl px-[20px] space-y-6">
                <div class="flex justify-center">
                    <img class="h-[100px] " src="/img/checked.png" />
                </div>
                <div class="flex flex-col justify-center items-center custom_greenText ">
                    <h1 class="text-[30px] font-[600] text-center">Thanks for contacting us</h1>
                    <p>We'll keep in touch shortly</p>
                </div>
                <div class="flex justify-center">
                    <button @click="toggleSuccess()" class="customGreen  p-[12px] rounded-2xl w-[200px]  text-white ">Continue</button>
                </div>
                
            </div>
        </div>
        <div v-if="errorAlert"  @click="toggleError()" class="gradient_bg fixed top-0 h-full w-full flex justify-center  items-center custom_index">
            <div class="bg-white h-[400px] flex flex-col justify-center w-full md:w-1/2 rounded-xl px-[20px] space-y-6">
                <div class="flex justify-center">
                    <img class="h-[100px] " src="/img/cross.png" />
                </div>
                <div class="flex flex-col justify-center items-center custom_text">
                    <h1 class="text-[30px] font-[600] text-center">Ooops something went wrong</h1>
                    <p>Verify the information provided</p>
                </div>
                <div class="flex justify-center">
                    <button @click="toggleError()" class="custom_btn  p-[12px] rounded-2xl w-[200px]  text-white ">Try Again</button>
                </div>
                
            </div>
        </div>
        
    
        <div class="bg-white py-[80px] px-[16px] flex items-center justify-center" >
            
            <div class="lg:max-w-[1440px]  lg:px-[80px] flex flex-col gap-[40px] lg:flex-row justify-between">
                <div
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                class="">
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
                <div
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                >
                    <div class=" md:flex-1 lg:w-[576px] flex flex-col gap-[40px]">
                        <div class="flex flex-col gap-[12px]">
                            <h1 class="text-darkGreen font-[600] text-[20px] md:text-[32px] leading-[36px] md:leading-[48px]">Get In Touch</h1>
                            <p class="text-[16px] font-[400] leading-[24px] text-darkGreen">Our friendly team would love to hear from you</p>
                        </div>
                        <div 
                        
                        class="flex flex-col gap-[20px]">
                            <div class="flex flex-col md:flex-row gap-[20px]">
                                <div class="flex flex-col gap-[4px] md:w-1/2">
                                    <label class="text-[16px] font-[500] leading-[24px] text-darkGreen">First Name</label>
                                    <input placeholder="John" v-model="formData.firstName" class="border border-inputGray text-[16px] font-[400] rounded-[8px] py-[16px] px-[24px]" />
                                </div>
                                <div class="flex flex-col gap-[4px] md:w-1/2">
                                    <label class="text-[16px] font-[500] leading-[24px] text-darkGreen">Last Name</label>
                                    <input placeholder="Doe" v-model="formData.lastName" class="border border-inputGray text-[16px] font-[400] rounded-[8px] py-[16px] px-[24px]" />
                                </div>
                            </div>
                            <div>
                                <div class="flex flex-col gap-[4px]">
                                    <label class="text-[16px] font-[500] leading-[24px] text-darkGreen">Company Name</label>
                                    <input placeholder="john doe internationals" v-model="formData.companyName" class="border border-inputGray text-[16px] font-[400] rounded-[8px] py-[16px] px-[24px]" />
                                </div>
                            </div>
                            <div>
                                <div class="flex flex-col gap-[4px]">
                                    <label class="text-[16px] font-[500] leading-[24px] text-darkGreen">Phone number</label>
                                    <div class="border border-inputGray flex items-center gap-[4px] px-[24px] rounded-[8px]">
                                        <div>
                                                <select v-model="formData.phoneNumber.code" class="text-darkGreen" >
                                                    <option v-for="(code, index) in countryCodes" :key="index" :value="code">{{ code }} <i class="pi pi-chevron-down"></i></option>
                                                </select>
                                        </div>
                                        <input v-model="formData.phoneNumber.number" placeholder="+1 (555) 000-000" class="outline-none text-[16px]   font-[400] w-full  py-[16px] " />
                                    </div>
                                    
                                </div>
                            </div>
                            <div>
                                <div class="flex flex-col gap-[4px]">
                                    <label class="text-[16px] font-[500] leading-[24px] text-darkGreen">Email Address</label>
                                    <input placeholder="you@company.com" v-model="formData.email" class="border border-inputGray text-[16px] font-[400] rounded-[8px] py-[16px] px-[24px]" />
                                </div>
                            </div>
                            <div>
                                <div class="flex flex-col gap-[4px]">
                                    <label class="text-[16px] font-[500] leading-[24px] text-darkGreen">Subject</label>
                                    <input placeholder="Subject" v-model="formData.subject" class="border border-inputGray text-[16px] font-[400] rounded-[8px] py-[16px] px-[24px]" />
                                </div>
                            </div>
                            <div>
                                <div class="flex flex-col gap-[4px] ">
                                    <label class="text-[16px] font-[500] leading-[24px] text-darkGreen">Message</label>

                                    <textarea v-model="formData.message" id="w3review" name="w3review" rows="4"  placeholder="Leave us a message" class="h-[134px] text-black border border-inputGray text-[16px] rounded-[8px] py-[16px] px-[24px] ">
                                    
                                    </textarea>

                                </div>
                            </div>

                        
                            
                        </div>
                        <div class="flex justify-center">
                            <button @click="submitForm" class="w-full md:w-[343px] bg-lightGreen text-white rounded-[1000px] py-[14px] px-[32px]">Send Message</button>
                        </div>
                    
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
  import axios from 'axios' 
  
  export default{
    data(){
        return {
            countryCodes: [],
            formData: {
                "companyName": "",
                "subject": "",
                "message": "",
                "email": "",
                "firstName": "",
                "lastName": "",
                "phoneNumber": {
                    "code": "+234",
                    "number": ""
                },
                "account": "Treasure Vice"
            },
            successAlert:false,
            errorAlert:false,
        }
    },
    async created() {
        const url = 'https://dev.tgpcmedia.com/generic-apis/all-enums';
        try {
            const response = await axios.get(url);
            console.log(response.data)
            this.countryCodes = response.data.phoneCountryCodeEnum;
        }
        catch(error) {
            console.log(error)

        }
    },
    methods: {
        async submitForm(){
            const url = 'https://dev.tgpcmedia.com/contact/create';
            try {
                const response = await axios.post(url, this.formData);
                console.log(response.data)
                
        // Success: Show a success SweetAlert
                  
                this.successAlert = true;

                this.formData = {
                "companyName": "",
                "subject": "",
                "message": "",
                "email": "",
                "firstName": "",
                "lastName": "",
                "phoneNumber": {
                    "code": "+234",
                    "number": ""
                },
                "account": "Treasure Vice"
            }
            }
            catch(error) {
                console.log(error)
                this.errorAlert = true

            }
        },
        toggleSuccess(){
            this.successAlert = false
        },
        toggleError(){
            this.errorAlert = false
        }
       
    }
  }


</script>
<style scoped>
    .custom_index{
        z-index:2000
    }
    .custom_text{
        color:rgb(220, 8, 8) !important
        
    }
    .custom_btn{
        background: rgb(220, 8, 8) !important;;
    }
    .gradient_bg{
        background:rgba(0,0,0,0.8)
    }
    .custom_greenText{
        color: rgb(10, 192, 125);;
    }
    .customGreen{
        background: rgb(10, 192, 125);
    }
</style>