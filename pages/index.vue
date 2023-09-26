<template>
  <div class="">
    <Header />
    <HeroSection />
    <WelcomeSection 
                 data-aos="flip-up"  
                 data-aos-duration="1000"
                data-aos-delay="0"
                data-aos-easing="ease-in-out"/>
    <Companionship />
    <Partners />
    <FeaturedServices />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default{
  name: 'IndexPage'
}
</script>
