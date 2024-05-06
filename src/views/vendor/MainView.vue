<script setup lang="ts">
  import { watch } from 'vue';
  import { onMounted } from 'vue';
  import { useHospitalStore } from '@/stores/hospital';
  import { useVendorStore } from '@/stores/vendor';
  import { storeToRefs } from 'pinia';

  const hospitalStore = useHospitalStore();
  const { selectedHospital } = storeToRefs(hospitalStore);
  const vendorStore = useVendorStore();
  const { data } = storeToRefs(vendorStore);
  const { fetchAllVendorList, fetchVendorByHospital } = vendorStore;
  
  onMounted(async () => {
    if (selectedHospital) {
      hospitalStore.$patch({ selectedHospital: null });
    }
    await fetchAllVendorList();
  });
  watch(selectedHospital, async (newValue) => {
    if (newValue) {
      await fetchVendorByHospital(newValue);
      return;
    }
    await fetchAllVendorList();
  });
</script>

<template>
  <main>
    <h1>
      Vendor / main page on development {{ selectedHospital }}
      {{ data }}
    </h1>
  </main>
</template>
