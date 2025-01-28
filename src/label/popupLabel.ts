import { ref } from "vue"

export const rightAnswer = ref({
    open:true,
    title:'정답입니다! <br/> 다음 문제로 넘어갑니다',
    btn1:'확인'
})

export const rightEndAnswer = ref({
    open:true,
    title:'정답입니다! <br/>완료 페이지로 이동합니다',
    btn1:'이동'
})

export const wrongAnswer = ref({
    open:true,
    title:'오답입니다ㅠㅠ  <br/>다음 힌트로 넘어갑니다',
    btn1:'확인'
})

export const wrongNextQuiz = ref({
    open:true,
    title:'오답!',
    btn1:'다음 문제'
})

export const wrongEndAnswer = ref({
    open:true,
    title:'오답입니다! <br/>완료 페이지로 넘어갑니다',
    btn1:'확인'
})


export const wrongNextHintAnswer = ref({
    open:true,
    title:'오답입니다',
    btn1:'재시도(2/3)',
    btn2:'다음 힌트 보기'
})

export const giveup = ref({
    open:true,
    title:'다음 차시로 이동합니다',
    btn1:'확인',
})