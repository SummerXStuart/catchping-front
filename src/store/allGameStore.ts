import { defineStore } from 'pinia'

export const allGameStore = defineStore('allGameStore', {
  state: () => {
    return { quiz:{hints_b64_imgs:[]},
    current_target_index:0,  //타겟 문제
    current_hint_img_index:0, //보여줘도 될 이미지
    end: false, //문제 끝났는지
    result:true, //문제 결과(맞췄나 틀렸나)
    score:3, // 점수
    target:"가수", //대답한 말
    trial:0 //시도 횟 수
  }
  },
  actions: {
    increment() {
      this.current_target_index++
    }
  }
})
