import { ref } from 'vue';
import type { Ref } from 'vue';
import { defineStore } from 'pinia';
import type { Vendor as IVendor, VendorFetchList, VendorAdd, VendorAddResponse } from './types';
import server from '../api/index';


export const useVendorStore = defineStore('vendor', () => {
  const data = ref([]) as Ref<IVendor[]>;

  const fetchAllVendorList = async () => {
    try {
      const response = await server.get<VendorFetchList>('/vendors');
      console.log('[RES] fetchAllVendorList', response.data)
      if (response.data.result) {
        data.value = response.data.result;
      }
    } catch (error) {
      data.value = [];
      console.error('[ERR] fetchAllVendorList', error);
    }
  };
  const fetchVendorByHospital = async (id: Number) => {
    try {
      console.log('[REQ] fetchVendorByHospital', { id });
      const response = await server.get<VendorAddResponse>(`/vendors/${id}`);
      console.log('[RES] fetchVendorByHospital', response.data)
      if (response.data.result) {
        data.value = response.data.result;
      }
    } catch (error) {
      data.value = [];
      console.error('[ERR] fetchVendorByHospital', error);
    }
  };
  const addVendor = async (input: VendorAdd) => {
    try {
      console.log('[REQ] addVendor', input);
      // return {
        
      // }
      const response = await server.post<VendorAdd>('/vendors', input);
      console.log('[RES] addVendor', response.data)
      return response.data;
    } catch (error) {
      console.error('[ERR] addVendor', error);
      throw error;
    }
  }

  return { 
    data,
    fetchAllVendorList,
    fetchVendorByHospital,
    addVendor
  };
});