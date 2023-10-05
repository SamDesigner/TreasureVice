<template>
    <div class=" flex items-center justify-center px-[16px] rounded-[24px]   lg:w-[1280px] mx-auto ">
        <div class="  w-full relative rounded-[24px]">
            <video controls ref="videoPlayer" class="rounded-[24px] w-full "  @mouseover="showControls" @mouseout="hideControls">
                <source class="w-full" :src="videoSource" type="video/mp4">
            </video>
            <div class="custom-controls" :class="{ 'visible': showControlButtons }">
                <div class="play-button" @click="tooglePlayPause" v-if="!videoPlaying">
                    <img src="/svg/PlayIcon.svg" />
                </div>
                <div class="pause-button" @click="tooglePlayPause" v-if="videoPlaying">
                    <img src="/svg/pause.svg" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                videoSource: 'https://s3.eu-west-2.amazonaws.com/treasurevincehampshire.co.uk/Treasure+Vince+Audio.mp4',
                showControlButtons: false,
                videoPlaying: false,
            }
        },
        methods:{
            tooglePlayPause(){
                const video = this.$refs.videoPlayer
                if(video.paused){
                    video.play()
                }else{
                    video.pause()
                }
            },
            showControls(){
                this.showControlButtons = true;
                setTimeout(() =>{
                    this.showControlButtons = false;
                },3000)
            },
            hideControls(){
                this.showControlButtons = false
            }
        }   ,
        mounted() {
            const video = this.$refs.videoPlayer;
            video.addEventListener('play', () => {
            this.videoPlaying = true;
            });
            video.addEventListener('pause', () => {
            this.videoPlaying = false;
            });
        },
    }
  
</script>

<style scoped>
    .play-button{
    
    }
    .pause-button{
      
    }
    .custom-controls {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
    opacity: 0; /* Initially hide the control buttons */
    transition: opacity 0.3s ease-in-out;
    }

    .custom-controls.visible,
.custom-controls:hover {
  opacity: 1;
}
</style>