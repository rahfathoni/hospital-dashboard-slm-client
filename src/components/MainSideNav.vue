<script setup lang="ts">
  import { ref } from 'vue';
  import { useMainStore } from '../stores/main';
  import { storeToRefs } from 'pinia';

  const { showNavBar } = storeToRefs(useMainStore())
  const navMenu = ref([
    {label: 'Dashboard', icon: 'mdi-view-dashboard', route: "/"},
    {label: 'Vendor', icon: 'mdi-account-box', route: "/vendor"},
  ])
</script>

<template>
  <v-navigation-drawer color="white" v-model="showNavBar">
    <v-list>
      <v-list-item v-for="(item, i) in navMenu" :key="i" :to="item.route">
        <v-list-item-title>
          <v-list-item-icon class="pr-5">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          {{ item.label }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <div class="pa-2">
        <v-btn 
          block
          color="primary"
          to="/login"
        >
          Logout
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>