<template>
    <div @click="clickGoHome"><img src="/public/imgs/go-home-icon.png" alt=""></div>
    <router-view></router-view>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import router from '../../router/router';


const audio = new Audio('/sound/catchping-waiting-room.mp3')

const clickGoHome=()=>{    
    router.push('/catchping');    
}

onMounted(()=>{
    audio.play()
    audio.loop = true;
})

onUnmounted(()=>{
    audio.pause()
})
</script>
<style>
img{
 width :2rem;
}
</style>
