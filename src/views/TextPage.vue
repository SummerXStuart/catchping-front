<template>
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
    </div>
  </template>
  
  <script setup lang="ts">
  import {ref} from 'vue';
  
  const slides = [
    "/imgs/card/program/0.png",
    "/imgs/card/program/1.png",
    "/imgs/card/program/2.png",
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
  
  <style lang="scss" scoped>
  .slider-container {
    position: relative;
    width: 800px;
    height: 400px;
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
  </style>
  