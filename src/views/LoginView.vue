<script setup lang="ts">
  import { onBeforeMount, ref } from 'vue';
  import { useField, useForm } from 'vee-validate';
  import { useMainStore } from '@/stores/main';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const mainStore = useMainStore();
  const { loginUser } = mainStore;
  onBeforeMount(() => {
    mainStore.$patch({ user:  {
        username: ''
      }
    })
    localStorage.removeItem('user')
  });
  
  const isPasswordShow = ref(false);
    
  const { handleSubmit } = useForm({
    validationSchema: {
      username (value: string) {
        if (value) return true;
        return 'Username must be filled'
      },
      password (value: string) {
        if (value) return true;
        return 'Password must be filled'
      }
    }
  })
  const username = useField('username');
  const password = useField('password');

  const login = handleSubmit(async (value) => {
    try {
      const input = {
        username: value.username,
        password: value.password
      }
      const response: any = await loginUser(input);
      if (response.status === 'success') {
        router.push({ path: '/vendor' });
        // TODO: add success notification/snackbar
      }
    } catch(error) {
      // TODO: add error notification
      console.error('[ERROR] login', error);
    }
  })

</script>

<template>
  <main class="d-flex flex-column flex-nowrap justify-center h-screen bg-ghost-white">
    <section class="d-flex align-center justify-center">
      <h1 class="text-h2 font-weight-bold px-5">
        Hospital Dashboard
      </h1>
    </section>
    <v-card class="mx-auto mt-7" min-width="500">
      <v-card-title class="mb-3 text-h4">Login</v-card-title>
      <v-card-text>
        <form @submit.prevent="login">
          <v-text-field
            v-model="username.value.value"
            :error-messages="username.errorMessage.value"
            label="Username"
            variant="outlined"
            hint="example: admin"
            persistent-hint
            class="mb-4"
            ></v-text-field>

          <v-text-field
            v-model="password.value.value"
            :error-messages="password.errorMessage.value"
            label="Password"
            :append-icon="isPasswordShow ? 'mdi-eye' : 'mdi-eye-off'"
            :type="isPasswordShow ? 'text' : 'password'"
            @click:append="isPasswordShow = !isPasswordShow"
            variant="outlined"
            hint="example: admin"
            persistent-hint
            class="mb-4"
          ></v-text-field>

          <v-btn
            type="submit"
            block
            color="primary"
          >
            Submit
          </v-btn>
        </form>
      </v-card-text>
    </v-card>
  </main>
</template>
