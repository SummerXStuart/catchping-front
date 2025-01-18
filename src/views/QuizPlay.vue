<template>
    <div class="quiz-play-container">
      <!-- 현 문제 번호 / 문제 페이지 -->
      <div class="quiz-page-count">{{ gameStore.current_hint_img_index+1 }} / 3</div>
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
      <common-popup/>
      <!-- 정답 맞힐 기회는 3번 -->
      <popup-answer
      :title="answerLabels.title"
      :left-label="answerLabels.left"
      :right-label="answerLabels.right"/>
    </div>
    <div class="bg"></div>

</template>
<script setup lang="ts">
  import {onMounted, ref} from 'vue';
  import { allGameStore } from '../store/allGameStore.ts';
  import {setId} from '../store/setId.ts'
  import axios from 'axios';
  import CommonPopup from '../components/CommonPopup.vue';

  const gameStore = allGameStore();
  const setUid = setId();
  const userAnswer =ref('')  
  const slides = ref([
  import {ref} from 'vue';
  import PopupAnswer from '../components/PopupAnswer.vue'
  import answerLabels from '../constants/quizs.ts'
  
  const slides = [
    "https://picsum.photos/200/300?grayscale",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
  ])
  const currentSlide = ref(0)
  const answerLabels = ref({
    title:'땡! 오답입니다',
    left:'재시도 (1/3)',
    right:'다음 힌트'
  })
  const isOpenAnswerPopup=ref(false)
  const countPopup = ref({
    hintNum:0,
    retryCount:0
  })
  const rightAnswer = ref('테스트')
  const nextSlide = () => {
    currentSlide.value =
        (currentSlide.value + 1) % slides.length;
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
      gameStore.$patch({
        current_target_index:req.data.current_target_index,
        current_hint_img_index:req.data.current_hint_img_index,
        end: req.data.end,
        result:req.data.result,
        trial:req.data.trial
    })
    })
    
  }

  onMounted(()=>{
    slides.value = gameStore.quiz[gameStore.current_target_index]
  })

  const sendAnswer=(userAnswer:string)=>{
    // 정답과 답변을 비교하기 위한 함수
    // 해당 답변이 일치하면 다음 문제 / 해당 답변 오답이면 계속 힌트 1,2,3 진행 및 팝업

    if(rightAnswer.value==userAnswer){

    }else{
      countPopup.value.hintNum++
      countPopup.value.retryCount++
    }
  }


  const pluseCount = ()=>{
    // 팝업 증가시키고
    // 힌트랑 리트라이 카운트가 3이상이 넘지 못하게 만약에 넘으면 완료 / 실패 팝업이 떠야함
    // 근데 여기서 의존해서 뜨면 안됨
  }

  const sendAnswer=(userAnswer:string)=>{
    // 정답과 답변을 비교하기 위한 함수
    // 해당 답변이 일치하면 다음 문제 / 해당 답변 오답이면 계속 힌트 1,2,3 진행 및 팝업

    if(rightAnswer.value==userAnswer){

    }else{
      countPopup.value.hintNum++
      countPopup.value.retryCount++
    }
  }


  const pluseCount = ()=>{
    // 팝업 증가시키고
    // 힌트랑 리트라이 카운트가 3이상이 넘지 못하게 만약에 넘으면 완료 / 실패 팝업이 떠야함
    // 근데 여기서 의존해서 뜨면 안됨
  }

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


/* 작은 모바일 (최대 576px) */
@media (max-width: 576px) {
  /* 스타일 적용 */
}

/* 일반적인 스마트폰 (최대 768px) */
@media (max-width: 768px) {
  /* 스타일 적용 */
}

/* 태블릿 (최대 992px) */
@media (max-width: 992px) {
  /* 스타일 적용 */
}

/* 데스크톱 (최대 1200px) */
@media (max-width: 1200px) {
  /* 스타일 적용 */
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