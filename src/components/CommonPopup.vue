<template>
    <div class="popup-container">
     <div class="box">
        <div class="label" v-html="props.title"></div>
        <div class="btns">
            <div v-html="props.btn1" @click="emits('clickBtn1');"></div>
            <div v-if="props.btn2" v-html="props.btn2" @click="emits('clickBtn2');"></div>
        </div>
   </div>    
</div>
</template>
<script setup lang="ts">
interface CommonPopup {
  title: string;
  btn1: string;
  btn2?: string;
}

const props = withDefaults(defineProps<CommonPopup>(), {
  title: 'dalskdask;',
  btn1: '',
  btn2: ''
});

const emits = defineEmits(['clickBtn1','clickBtn2']);
</script>
<style scoped lang="scss">
.popup-container{
    position: absolute;
  background-color: rgba(0, 0, 0, 0.85);
  mix-blend-mode: normal;
  z-index: 1001;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .box{
    .label{
      font-size: 1.5rem;
      text-align: center;
    }
  min-width: 200px;
  background-color: #fafafa;
  color: #333333;
  padding: 37px 60px;
  position: relative;
  border-radius: 24px;  
  .btns {
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    width: 100%;
    height: 46px;
    font-size: 1.2rem;
    border-radius: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ee7070;
    color: #fff;
  }
}}
}
</style>
