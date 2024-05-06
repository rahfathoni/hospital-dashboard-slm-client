<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainHeader from './components/MainHeader.vue';
import MainSideNav from './components/MainSideNav.vue';

</script>


<template>
  <v-layout class="rounded rounded-md">
    <MainSideNav />
    <MainHeader class="pt-3" />
    <v-main class=" h-screen" style="background-color: blue">
      <RouterView class="px-2 pt-5" style="background-color: green;"/>
    </v-main>
  </v-layout>
</template>

<style scoped>
</style>
