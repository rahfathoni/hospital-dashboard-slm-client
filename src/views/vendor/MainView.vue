<script setup lang="ts">
  import { watch } from 'vue';
  import { onMounted } from 'vue';
  import { useHospitalStore } from '@/stores/hospital';
  import { storeToRefs } from 'pinia';

  const hospitalStore = useHospitalStore();
  const { selectedHospital } = storeToRefs(hospitalStore);

  onMounted(async () => {
    // await fetchHospitalList();
  });
  watch(selectedHospital, async (newValue) => {
    console.log('newvalue', newValue)
    if (newValue) {
      // await fetchHospitalData(newValue);
      console.log('masuk nilai baru')
      return;
    }
    console.log('lolos kosong')
  });
</script>

<template>
  <main>
    <h1>
      Vendor / main page on development {{ selectedHospital }}
    </h1>
  </main>
</template>
