import { ref } from 'vue';
import type { Ref } from 'vue';
import { defineStore } from 'pinia';
import type { Hospital as IHospital, HospitalFetchList } from './types';
import server from '../api/index';


export const useHospitalStore = defineStore('hospital', () => {
  const data = ref([]) as Ref<IHospital[]>;
  const selectedHospital = ref<number | null>(null);

  const fetchHospitalList = async () => {
    try {
      const response = await server.get<HospitalFetchList>('/hospitals');
      console.log('[RES] fetchHospitalList', response.data)
      if (response.data.result) {
        data.value = response.data.result;
      }
    } catch (error) {
      data.value = [];
      console.error('[ERR] fetchHospitalList', error);
    }
  };

  return { 
    data,
    selectedHospital,
    fetchHospitalList 
  };
});
