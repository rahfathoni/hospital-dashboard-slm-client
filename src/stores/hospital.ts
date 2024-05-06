import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Hospital as IHospital } from './types';

export const useHospitalStore = defineStore('hospital', () => {
  const data = ref<IHospital[]>([]);
  const testing = ref('test') 

  return { data, testing };
});
