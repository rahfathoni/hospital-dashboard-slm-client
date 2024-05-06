import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  const showNavBar = ref(true)

  return { showNavBar }
}, {
  persist: {
    storage: sessionStorage,
    paths: ['showNavBar']
  }
})
