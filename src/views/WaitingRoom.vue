<template>
    <div class="waiting-room-container">
        <div class="main-title">캐치핑</div>
        <div class="entry-button" @click="clickSinglePlayButton">싱글 플레이</div>
        <div class="entry-button">멀티 플레이</div>
    </div>
    <div class="bg"></div>
</template>
<script setup lang="ts">
import router from '../router/router';

const callAPI = (url:string)=>{
    // api 호출하는 버튼
    // 클릭 하면 해당 api 를 호출해야한다.
    // url 은 해당 api 호출에 관한 값을 전달 받아 호출할 때 이용
}
const clickSinglePlayButton = ()=>{
    router.push('/quiz-play')

}
</script>
<style scope lang="scss">
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
.waiting-room-container{

    .main-title{
        font-family: 'PyeongChangPeace-Bold';
        font-size:6rem;
        text-align: center;
        margin: 8rem 0;
    }
    .entry-button{
    font-family: "Paperlogy-8ExtraBold";
    width: 100%;
    background: #ffb9b9;
    padding: 1.5rem 0;
    margin-bottom: 1rem;
    text-align: center;
    font-size: 1.5rem;
    color: #653b3b;
 }
}

</style>