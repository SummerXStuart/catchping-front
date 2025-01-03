<template>
    <div class="quiz-play-container">
      <!-- 현 문제 번호 / 문제 페이지 -->
      <div class="quiz-page-count">1 / 3</div>
      <!-- 타이틀 -->
      <div class="quiz-title">첫 번째 힌트</div>
      <!-- 이미지 슬라이더 -->
      <div class="slider-container">
      <div
          class="slides"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <div v-for="(item,idx) in slides" class="slide" :key="idx">
          <img :src="item" alt="Slide Image"/>
        </div>
      </div>
      <button class="prev" @click="prevSlide">‹</button>
      <button class="next" @click="nextSlide">›</button>
    </div>      <!-- 정답 입력 칸 / 서밋 -->
      <div class="answer-enter-box">
        <input type="text" placeholder="정답을 입력해주세요">
        <img src="../../public/imgs/enter-icon.png" alt="">
      </div>
      <!-- 정답 및 오답 팝업 -->
      <div></div>
    </div>
    <div class="bg"></div>

</template>
<script setup lang="ts">
  import {ref} from 'vue';
  
  const slides = [
    "https://picsum.photos/200/300?grayscale",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
  ]
  const currentSlide = ref(0)
  
  const nextSlide = () => {
    currentSlide.value =
        (currentSlide.value + 1) % slides.length;
  }
  const prevSlide = () => {
    currentSlide.value =
        (currentSlide.value - 1 + slides.length) %
        slides.length;
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