<script setup lang="ts">
  import { ref, watch, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { useMainStore } from '../stores/main';
  import { useHospitalStore } from '@/stores/hospital';
  import { storeToRefs } from 'pinia';

  const route = useRoute();
  const mainStore = useMainStore();
  const hospitalStore = useHospitalStore();
  const { showNavBar } = storeToRefs(mainStore);
  const { data, selectedHospital } = storeToRefs(hospitalStore);
  const { fetchHospitalList } = hospitalStore;

  onMounted(async () => {
    await fetchHospitalList();
  });

  const currentPageName = ref(route.name);

  watch(() => route.name, (newValue) => {
    let title = newValue;
    if (newValue === 'dashboard') title = 'Dashboard';
    if (newValue === 'vendor') title = 'Vendor';
    if (newValue === 'vendor') title = 'Vendor';
    currentPageName.value = title;
  });
</script>

<template>
  <v-app-bar class="pr-2">
    <v-app-bar-nav-icon icon="mdi-view-headline" variant="text" @click.stop="showNavBar = !showNavBar"></v-app-bar-nav-icon>
    <v-toolbar-title>{{ currentPageName }}</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-select
        name="selectHospital"
        label="Select"
        :items="data"
        item-value="id"
        item-title="name"
        variant="outlined"
        density="compact"
        placeholder="Select Hospital"
        v-model="selectedHospital"
        clearable
        hide-details
      ></v-select>
  </v-app-bar>
</template>
