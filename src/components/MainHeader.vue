<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { useRoute } from 'vue-router'
  import { useMainStore } from '../stores/main'
  import { storeToRefs } from 'pinia';

  const route = useRoute();

  const { showNavBar } = storeToRefs(useMainStore())
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
  <v-app-bar>
    <v-app-bar-nav-icon icon="mdi-view-headline" variant="text" @click.stop="showNavBar = !showNavBar"></v-app-bar-nav-icon>
    <v-toolbar-title>{{ currentPageName }}</v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- <template v-if="$vuetify.display.mdAndUp">
        <v-btn icon="mdi-magnify" variant="text"></v-btn>

        <v-btn icon="mdi-filter" variant="text"></v-btn>
      </template>

      <v-btn icon="mdi-dots-vertical" variant="text"></v-btn> -->
  </v-app-bar>
</template>
