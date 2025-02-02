<template>
    <div @click="clickGoHome"><img src="/public/imgs/go-home-icon.png" alt=""></div>
    <router-view></router-view>
</template>
<script setup lang="ts">
import router from '../../router/router';



const clickGoHome=()=>{    
    router.push('/');    
}


</script>
<style>
img{
 width :2rem;
}
</style>
