<template>
    <div class="waiting-room-container">
        <div class="main-title">캐치핑</div>
        <div class="entry-button" @click="clickSinglePlayButton">싱글 플레이</div>
        <div class="entry-button" @click="showPreparing">멀티 플레이</div>
    </div>
    <common-popup v-if="popupForm.open" :title="popupForm.title" :btn1="popupForm.btn1" @click="popupForm.open=false"/>
    <div class="bg"></div>
</template>
<script setup lang="ts">
import router from '../router/router';
import {ref} from 'vue';
import { allGameStore } from '../store/allGameStore.ts';
import {setId} from '../store/setId.ts'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import CommonPopup from '../components/CommonPopup.vue';
// import {preparingLabel} from '../label/popupLabel.ts'

const gameStore = allGameStore();
const setUid = setId();
const uid = uuidv4(); // 또는 직접 생성
const popupForm:any = ref({open:false,title:'',btn1:'',btn2:''})


// const callAPI = (url:string)=>{
//     // api 호출하는 버튼
//     // 클릭 하면 해당 api 를 호출해야한다.
//     // url 은 해당 api 호출에 관한 값을 전달 받아 호출할 때 이용
// }
const clickSinglePlayButton = ()=>{
    console.log(uid,'uid!!!!!!!!!')
    axios.post('http://localhost:5001/catchping_backend/init_single_mode',{
    uid: uid, // 전달하고 싶은 uid 값
    estimation: "single_mode"
  }).then((req)=>{
        console.log(req,'req!!!!!!!!!')
        setUid.$patch({
            userId:uid
        })
        gameStore.$patch({
        quiz:req.data.hint_b64_imgs,
        current_target_index:req.data.current_target_index,
        current_hint_img_index:req.data.current_hint_img_index
    })
    console.log(gameStore)
    router.push('/catchping/rules')

      })
      .catch(()=>{
        console.log('실패함')
      })

}

const showPreparing = ()=>{
    popupForm.value = {
        open:true,
        title:'준비중입니다!<br/>다음에 만나요!',
        btn1:'확인'
    }    
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