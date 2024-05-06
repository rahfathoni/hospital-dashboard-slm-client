<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainHeader from './components/MainHeader.vue';
import MainSideNav from './components/MainSideNav.vue';

</script>


<template>
  <v-layout class="rounded rounded-md">
    <MainSideNav />
    <MainHeader />
    <v-main class="h-screen" style="background-color: blue">
      <RouterView style="background-color: green;"/>
    </v-main>
  </v-layout>
</template>

<style scoped>
</style>
