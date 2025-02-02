<template>
    <div class="end-container">
        <h1 class="main-title">축하합니다!</h1>
        <h2 class="sub-title">모든 문제가 끝났습니다</h2>
        <div class="des">당신의 스코어는 <span class="score" v-html="gameStore.score"/>점 입니다.</div>
        <div class="home-button" @click="router.push('/')">홈으로 이동</div>
    </div>
    <div class="bg"></div>
</template>
<script setup lang="ts">
import {onMounted, onUnmounted } from 'vue';
import { allGameStore } from '../store/allGameStore.ts';
import router from '../router/router.ts';

const gameStore = allGameStore();
const audio = new Audio('/sound/catchping-end.mp3')

onMounted(()=>{
    audio.play()
    audio.loop = true;
})

onUnmounted(()=>{
    audio.pause()
})
</script>
<style scope lang="scss">
.end-container{
    font-family: "Paperlogy-8ExtraBold";
    text-align: center;

.bg{
    background: url(/imgs/catchping-main-icon.png) center no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    opacity: 0.08;
}


.main-title{
    font-family: 'PyeongChangPeace-Bold';
    font-size:3.5rem;
    margin: 8rem 0 0 0;
}
.sub-title{
    font-size:2rem;

}
.des{
    font-size:1.8rem;

    .score{
    color: #ff4400;
}
}
.home-button{
    font-family: "Paperlogy-8ExtraBold";
    width: 100%;
    background: #ffb9b9;
    padding: 1.5rem 0;
    margin-top: 3rem;
    margin-bottom: 1rem;
    text-align: center;
    font-size: 1.5rem;
    color: #653b3b;
}
}
</style>