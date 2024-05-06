<script setup lang="ts">
import { ref } from 'vue';
import { useHospitalStore } from '../stores/hospital';
import { storeToRefs } from 'pinia';

const storeHospital = useHospitalStore();
const { data: hospitalData } = storeToRefs(storeHospital);
const count = ref(0)
</script>

<template>
  <div>
    HALOO
    {{ hospitalData }}
    <button @click="count++">You clicked me {{ count }} times.</button>
  </div>
</template>
