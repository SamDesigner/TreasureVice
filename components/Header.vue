<template>
    <div class="w-full">
        <div class="flex justify-center items-center py-[20px] gap-[20px]">
            <img src="/img/phone.png" />

            <span class="text-primary">
                03300432599, 07459304221
            </span>

        </div>
        <div class="px-[16px] md:px-0  pb-[24px] w-auto mx-auto  " :class="{'fixed-navbar' : isFixed}">
          
            <nav class=" mx-auto max-w-[1440px] md:px-[20px] lg:px-[80px] flex justify-between items-center ">
                <nuxt-link to="/"  >
                    <img class='h-[70px]' src="/img/logo.png" />
                </nuxt-link>
                
                <div class="hidden md:flex items-center space-x-8">
                    <nuxt-link to="/">Home</nuxt-link>
                    <nuxt-link to="/about">About us</nuxt-link>
                    <nuxt-link to="/services">Services</nuxt-link>
                    <nuxt-link to="/candidates">Candidates</nuxt-link>
                    <nuxt-link to="/contact">Contact us</nuxt-link>
                </div>
                <div class="hidden lg:flex" >
                    <nuxt-link to="/contact">
                        <div class=" bg-lightGreen  text-white py-3 px-6 rounded-3xl flex items-center gap-3 ">
                            <span>Book an appointment</span>
                            <i class="pi pi-arrow-right text-xs"></i>
                        </div>
                    </nuxt-link>
                   
                </div>
                <div class="block md:hidden"  @click="handleIsOpen">
                        <span><i class="pi pi-bars text-xl text-primary"></i></span>
                </div>
            </nav>
            
        </div>
        <div v-if="isOpen" class="flex justify-center items-center index_high h-screen bg-white fixed w-full top-0">
                <div class="absolute top-6 right-4" @click="handleIsOpen">
                    <span><i class="pi pi-times text-2xl"></i></span>
                </div>
                <div class="flex flex-col items-center space-y-6" >
                    <nuxt-link to="/">Home</nuxt-link>
                    <nuxt-link to="/about">About us</nuxt-link>
                    <nuxt-link to="/services">Services</nuxt-link>
                    <nuxt-link to="/candidates">Candidates</nuxt-link>
                    <nuxt-link to="/contact">Contact us</nuxt-link>
                    <nuxt-link>
                        <div class=" bg-lightGreen text-white py-2 px-4 rounded-3xl flex items-center gap-3 ">
                            <span>Book an appointment</span>
                            <i class="pi pi-arrow-right text-xs"></i>
                        </div>
                    </nuxt-link>
                </div>
            </div>
        <div class=" hidden lg:flex w-full max-w-[1440px] px-[80px] mx-auto items-center  justify-between py-4  ">
            <div class="flex items-center gap-5 w-[264px] border-r border-primary ">
                <img src="/svg/cross-icon.svg" />
                <span class=" text-darkGreen">CQC Regulated</span>
            </div>
            <div class="flex items-center gap-5 w-[264px] border-r border-primary  ">
                <img src="/svg/cross-icon.svg" />
                <span  class=" text-darkGreen">24 hours Care</span>
            </div>
            <div class="flex items-center gap-5 w-[264px] border-r border-primary">
                <img src="/svg/cross-icon.svg" />
                <span  class=" text-darkGreen">Experienced Health Workers</span>
            </div>
            <div class="flex items-center justify-center w-[264px] gap-5  ">
                <img src="/svg/cross-icon.svg" />
                <span  class="text-darkGreen ">Recruitment</span>
            </div>
        </div>
        <div class="hidden md:flex lg:hidden py-4 px-[16px] justify-between items-center container mx-auto ">
            <div class="flex items-center gap-5 border-r border-primary w-[264px] ">
                <img src="/svg/cross-icon.svg" />
                <span class=" text-darkGreen">CQC Regulated</span>
            </div>
            <div class="flex items-center gap-5 justify-center  border-r border-primary w-[264px] ">
                <img src="/svg/cross-icon.svg" />
                <span  class=" text-darkGreen">24 hours Care</span>
            </div>
            <div class="flex items-center justify-end gap-5  border-primary w-[264px] ">
                <img src="/svg/cross-icon.svg" />
                <span  class=" text-darkGreen">Experienced Health Workers</span>
            </div>
        </div>
        <div class="md:hidden py-3 flex items-center justify-center ">
            <div class="flex items-center gap-5 border-primary  ">
                <img src="/svg/cross-icon.svg" />
                <span class=" text-darkGreen">CQC Regulated</span>
            </div>
        </div>  
    </div>
</template>

<script>
    export default{
        data(){
            return{
                isFixed:false,
                isOpen:false
            }
        },
        mounted(){
            const scrollThreshold = 40;

            window.addEventListener('scroll', this.handleScroll);

            this.isFixed = window.scrollY >= scrollThreshold;
        },
        beforeDestroy(){
            window.removeEventListener('scroll', this.handleScroll);
        },
        methods:{
            handleScroll(){
                const scrollY = window.scrollY || window.pageYOffset;
                const scrollThreshold = 240;
                this.isFixed = scrollY >= scrollThreshold;
                

                if (scrollY >= scrollThreshold) {
                    this.isFixed = true;
                } else {
                    this.isFixed = false;
                }
            },
            handleIsOpen(){
                this.isOpen = !this.isOpen
            }
        }
    }
</script>
<style scoped>
.index_high{
    z-index:1000
}
.fixed-navbar {
  
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
       padding: 5px;
        z-index:1000;
        background-color: white;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  /* Add a smooth transition effect for smooth appearance */
  transition: all 0.3s ease;
}
.router-link-exact-active{
    color:#04A44C
}

</style>