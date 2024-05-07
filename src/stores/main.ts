import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { UserLogin, UserLoginResponse } from './types'
import server from '@/api';

export const useMainStore = defineStore('main', () => {
  const showNavBar = ref(false);
  const user = ref({
    username: '' as string
  });

  const loginUser = async (input: UserLogin) => {
    try {
      console.log('[REQ] loginUser', input);
      const response = await server.post<UserLoginResponse>('/users/login', input);
      console.log('[RES] loginUser', response.data);
      localStorage.setItem('user', JSON.stringify({ username: response.data.results.username }));
      showNavBar.value = false;
      return response.data;
    } catch (error) {
      console.error('[ERR] loginUser', error);
      throw error;
    }
  }

  return { showNavBar, user, loginUser };
}, {
  persist: {
    storage: sessionStorage,
    paths: ['showNavBar']
  }
})

// Example
// import { ref, computed } from 'vue'
// import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })
