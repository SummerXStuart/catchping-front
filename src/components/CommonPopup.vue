<template>
   <div class="popup-container">
    <div v-html="props.title"></div>
    <div>
        <div v-html="props.btn1"></div>
        <div v-html="props.btn2"></div>
    </div>
   </div>
</template>
<script setup lang="ts">
interface CommonPopup {
  title: string;
  btn1: string;
  btn2: string;
}

const props = withDefaults(defineProps<CommonPopup>(), {
  title: '',
  btn1: '',
  btn2: ''
});
</script>
<style>

</style>
