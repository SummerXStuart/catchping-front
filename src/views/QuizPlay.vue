<template>
  <div class="quiz-play-container">
    <!-- 현 문제 번호 / 문제 페이지 -->
    <div class="quiz-page-count">{{ gameStore.current_target_index+1 }}번 문제(총3개)</div>
    <!-- 타이틀 -->
    <div class="quiz-title">{{ currentSlide+1 }} 번째 힌트</div>
    <!-- 이미지 슬라이더 -->
    <div class="slider-container">
    <div
        class="slides"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <div v-for="(item,idx) in slides" class="slide" :key="idx">
        <img :src="'data:image/png;base64,' + item" alt="Slide Image"/>
      </div>
    </div>
    <button class="prev" @click="prevSlide">‹</button>
    <button class="next" @click="nextSlide">›</button>
  </div>      <!-- 정답 입력 칸 / 서밋 -->
    <div class="answer-enter-box">
      <input type="text" placeholder="정답을 입력해주세요" v-model="userAnswer">
      <img src="../../public/imgs/enter-icon.png" alt="" @click="sendUserAnswer">
    </div>
    <!-- 정답 및 오답 팝업 -->
    <common-popup v-if="popupForm.open" :title="popupForm.title" :btn1="popupForm.btn1" @click-btn1="popupForm.open=false"  @click-btn2="anotherHint"/>
  </div>
  <div class="bg"></div>

</template>
<script setup lang="ts">
import {onMounted, ref} from 'vue';
import { allGameStore } from '../store/allGameStore.ts';
import {setId} from '../store/setId.ts'
import axios from 'axios';
import CommonPopup from '../components/CommonPopup.vue';
import {rightAnswer,wrongAnswer,wrongNextHintAnswer,wrongEndAnswer,rightEndAnswer,wrongNextQuiz} from '../label/popupLabel.ts'
import router from '../router/router.ts';


const gameStore = allGameStore();
const setUid = setId();
const userAnswer =ref('')  
const slides = ref([
  "https://picsum.photos/200/300?grayscale",
  "https://picsum.photos/200/300",
  "https://picsum.photos/200/300",
])
const currentSlide = ref(0)
const popupForm:any = ref({open:false,title:'',btn1:'',btn2:''})

const nextSlide = () => {   
  console.log(currentSlide.value,gameStore.current_target_index);
   
  if(currentSlide.value===gameStore.current_hint_img_index)return
  currentSlide.value++
}
const prevSlide = () => {
  if(currentSlide.value===0)return
  currentSlide.value--
}
const sendUserAnswer = ()=>{
console.log({
    uid: setUid.userId,
    estimation:userAnswer.value
  });

  axios.post('http://localhost:5001/catchping_backend/single_mode_quiz',{
    uid: setUid.userId,
    estimation:userAnswer.value
  }).then((req)=>{
    console.log(req);
    whichPopup(req.data.result,req.data.trial,req.data.end,req.data.target)
    gameStore.$patch({
      current_target_index:req.data.current_target_index,
      current_hint_img_index:req.data.current_hint_img_index,
      end: req.data.end,
      result:req.data.result,
      trial:req.data.trial,
      target:req.data.target?req.data.target:'',
      score:req.data.score
  })
  currentSlide.value=gameStore.current_hint_img_index;
  slides.value = gameStore.quiz[gameStore.current_target_index]
  })
}

const whichPopup = (result:boolean, trial:number,end:boolean,target:any)=>{

  // 1 result 사실일때

  // 2 result 사실 아닐때
  // 사실이 아니면, 재시도 / 다음 문제 넘어가기
  // target null 완전히 끝난건 아니고 오답이고 답 틀리면 / target에 뭐가 들어있음 완전히 끝나고 답틀리면

  if(result){
    // 정답일때
    end ? popupForm.value = rightEndAnswer.value : popupForm.value = rightAnswer.value;
  }else{
    // 답이 틀렸을 때
    if(end){
      popupForm.value = wrongEndAnswer.value 
    }else{
      // trial 1,2 / 0 이면 시도 끝
      if(trial){
        popupForm.value = wrongNextHintAnswer.value
        popupForm.value.btn1 = '재시도('+trial+'/3)'
      }else{        
        popupForm.value = wrongAnswer.value;
        target ? popupForm.value.title = '정답 : ' + target :popupForm.value.title = '오답입니다ㅠㅠ  <br/>다음 힌트로 넘어갑니다'
      }
    }
  }
  popupForm.value.open = true;
  // 모든 로직 끝나고 end 이면 /end 페이지로 이동
  if(end) {
    setTimeout(()=>{
      router.push('/catchping/end')
    },1000)
  }
}

onMounted(()=>{
  slides.value = gameStore.quiz[gameStore.current_target_index]
})

</script>
<style scoped lang="scss">
.quiz-play-container{
.quiz-page-count{
  position: absolute;
  top: 1rem;
  right: 1rem;
}
.quiz-title{
  font-family: "Paperlogy-8ExtraBold";
  font-size: 2rem;
  text-align: center;
  padding: 3rem 0;
}

.answer-enter-box{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  input{
    border: none;
    font-size: 1rem;
    font-weight: bold;
    font-family: 'LotteMartDream';
  }
  img{
    width: 2rem;
  }
}

.slider-container {
  position: relative;
  width: 300px;
  height: 300px;
  overflow: hidden;
  margin: auto;
}

.slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  min-width: 100%;
  box-sizing: border-box;
}

img {
  width: 100%;
  height: auto;
}

button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  z-index: 1000;
}

button.prev {
  left: 10px;
}

button.next {
  right: 10px;
}

button:focus {
  outline: none;
}

}

.bg{
  background: url(/imgs/catchping-main-icon.png) center no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  opacity: 0.03;
}

</style>