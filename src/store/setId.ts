import { defineStore } from 'pinia'

export const setId = defineStore('setId', {
  state: () => {
    return { userId:'' }
  },
})