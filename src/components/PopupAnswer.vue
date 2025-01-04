<script setup lang="ts">
// 기본값 설정
const props = withDefaults(defineProps<{
  title?: string;
  leftLabel?:string;
  rightLabel?:string;
}>(), {
  title: 'Default Title',
  leftLabel:'leftLabel',
  rightLabel:'rtLabel'
});

</script>

<template>
    <div class="dim">
        <div class="popup-container">
            <h1>{{ props.title }}</h1>
            <div class="btns-container">
                <div>{{ props.leftLabel }}</div>
                <div>{{ props.rightLabel }}</div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.dim {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.85);
    mix-blend-mode: normal;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    font-family: 'LotteMartDream';

    .popup-container{
        background: #fff;
        padding: 3rem 2rem;
        text-align: center;
        border-radius: 8px;
        h1{
            margin-top: 0;
            margin-bottom: 3rem;
            font-weight: bold;
        }
        .btns-container{
            display: flex;
            justify-content: space-between;
            gap: 0.5rem;
            >div{
                background: #e57979;
                color: #fff;
                border-radius: 3px;
                padding: 0.7rem 0.5rem;
                width: 50%;
                font-size: 0.9rem;
                &:nth-child(2){
                    background: #cbc7c7;
                    color: #cb5c5c; 
                }
            }
        }
    }
  }
</style>
