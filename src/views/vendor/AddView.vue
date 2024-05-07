<script setup lang="ts">
  import { useHospitalStore } from '@/stores/hospital';
  import { useVendorStore } from '@/stores/vendor';
  import { storeToRefs } from 'pinia';
  import { useField, useForm } from 'vee-validate';
  import { useRouter } from 'vue-router';
  import { reactive } from 'vue';
  import NotificationPopup from '@/components/NotificationPopup.vue';
  
  const hospitalStore = useHospitalStore();
  const vendorStore = useVendorStore();
  const { data } = storeToRefs(hospitalStore);
  const { addVendor } = vendorStore;
  const router = useRouter();

  const { handleSubmit, handleReset } = useForm({
    validationSchema: {
      name (value: string) {
        if (value?.length >= 2) return true
        return 'Name needs to be at least 2 characters.'
      },
      address (value: string) {
        if (value?.length >= 2) return true
        return 'Address needs to be at least 2 characters.'
      },
      select (value: any) {
        if (value?.length > 0) return true
        return 'Select minimum 1 hospital.'
      },
    },
  })
  const name = useField('name');
  const address = useField('address');
  const select = useField('select');
  const snackbar = reactive({
    show: false,
    text: '',
    color: '',
    timeout: 3000
  });

  const submit = handleSubmit( async (values) => {
    try {
      const input = {
        name: values.name,
        address: values.address,
        relatedHospital: values?.select.join(',')
      }
      const response: any = await addVendor(input);
      if (response.status === 'success') {
        handleReset();
        router.push({ path: '/vendor' });
      }
    } catch(error) {
      snackbar.text = "Error. Plase try again later.";
      snackbar.color = "danger";
      snackbar.show = true;
      console.log('[ERROR] submit', error);
    }
  });
  const closePopup = (val: boolean) => {
    snackbar.show = val;
  }
</script>

<template>
  <main>
    <section class="d-flex align-center py-3">
      <h1 class="font-weight-medium">
        Add New Vendor Form
      </h1>
    </section>
    <form @submit.prevent="submit">
      <v-text-field
        v-model="name.value.value"
        :error-messages="name.errorMessage.value"
        label="Name"
      ></v-text-field>

      <v-text-field
        v-model="address.value.value"
        :error-messages="address.errorMessage.value"
        label="Address"
      ></v-text-field>

      <v-select
        v-model="select.value.value as string[]"
        :error-messages="select.errorMessage.value"
        :items="data"
        item-value="id"
        item-title="name"
        label="Select"
        multiple
      ></v-select>

      <v-btn
        class="me-4"
        type="submit"
      >
        submit
      </v-btn>

      <v-btn @click="handleReset">
        clear
      </v-btn>
    </form>

    <NotificationPopup
      v-model="snackbar.show"
      :text="snackbar.text"
      :color="snackbar.color"
      :timeout="snackbar.timeout"
      @closeShow="closePopup"
    />
  </main>
</template>