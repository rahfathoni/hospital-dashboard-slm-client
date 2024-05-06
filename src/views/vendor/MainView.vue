<script setup lang="ts">
  import { watch, reactive } from 'vue';
  import { onMounted } from 'vue';
  import { useHospitalStore } from '@/stores/hospital';
  import { useVendorStore } from '@/stores/vendor';
  import { storeToRefs } from 'pinia';

  interface TableColumn {
    title: string;
    key: string;
    align?: 'start' | 'end' | 'center';
    sortable: boolean;
  }

  const hospitalStore = useHospitalStore();
  const { selectedHospital } = storeToRefs(hospitalStore);
  const vendorStore = useVendorStore();
  const { data } = storeToRefs(vendorStore);
  const { fetchAllVendorList, fetchVendorByHospital } = vendorStore;
  const tableProps = reactive({
    itemsPerPage: 2,
    headers: [
      { title: 'ID', key: 'id', align: 'start', sortable: true },
      { title: 'NAME', key: 'name', align: 'start', sortable: true },
      { title: 'ADDRESS', key: 'address', align: 'start', sortable: false }
    ] as TableColumn[],
  })
  
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
    <section class="d-flex align-center justify-space-between py-3">
      <h1 class="font-weight-medium">
        List Vendor
      </h1>
      <v-btn 
        variant="text" 
        to="/vendor/add" 
        color="primary"
      >
        <span class="font-weight-bold">New Vendor</span>
      </v-btn>
    </section>
    <section>
      <v-data-table
        id="vendorTable"
        :headers="tableProps.headers"
        :items="data"
        item-key="name"
        items-per-page="10"
        :header-props="{ class: 'font-weight-bold text-h6' }"
      ></v-data-table>
    </section>
  </main>
</template>

<style>
</style>