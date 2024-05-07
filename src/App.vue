<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import MainHeader from './components/MainHeader.vue';
import MainSideNav from './components/MainSideNav.vue';

const route = useRoute();
</script>

<template>
  <v-layout class="rounded rounded-md">
    <MainSideNav v-if="route.name !== 'login'" />
    <MainHeader v-if="route.name !== 'login'" class="pt-3" />
    <v-main class="h-screen bg-ghost-white">
      <RouterView class="px-2 pt-5 bg-ghost-white"/>
    </v-main>
  </v-layout>
</template>

<style scoped>
</style>
