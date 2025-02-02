<template>
    <div class="rules-container">
        <h2>게임 방법</h2>
        <div class="rules-inner-box">
            <div>1) 본 게임은 생성 AI 를 활용한 캐치마인드 게임으로, 생성 AI가 만든 3개의 힌트 이미지를 보고 정답을 맞추면 점수를 획득할 수 있습니다.</div>
            <div>2) 문제에서 주어진 이미지를 보고 생각나는 정답을 텍스트 입력칸에 입력해주세요. 3개의 문제가 주어지며, 각 문제마다 주어진 힌트를 보고 정답을 맞출 기회는 3회, 다시말해 총 9회의 정답을 제출할 기회가 주어집니다. 각 문제마다 해당 문제를 포기하거나 주어진 힌트를 넘어가고 다음 힌트를 볼 기회가 있습니다.</div>
            <div>3)첫 번째 힌트에서 맞추면 3점, 두 번째 힌트에서 맞추면 2점, 세 번째 힌트에서 맞추면 1점입니다.</div>
            <button @click="router.push('/quiz-play')">START</button>
        </div>
    </div>
    <div class="bg"></div>
</template>
<style scoped lang="scss">
.rules-container{
    font-family: 'DungGeunMo';
    h2{
        padding: 0 1rem;
        font-size: 2.5rem;
        text-align: center;
        color: #924d4d;
    }
    .rules-inner-box{
        padding: 0 1rem;
        font-size: 1.3rem;
        max-width: 500px;
        margin: auto;

        >div{
            padding: 0.5rem 0;
        }
        button{
            font-family: "Paperlogy-8ExtraBold";
            border: none;
            float: right;
            margin: 0.5rem;
            background: #ffb9b9;
            padding: 0.5rem 1rem;
            border-radius: 10px;
            font-weight: 800;
            font-size: 1rem;
            letter-spacing: 0.2rem;
        }
    }   
}
</style>
<script setup lang="ts">
import router from '../router/router';

</script>