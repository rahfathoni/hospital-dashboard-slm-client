import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Vuetify
import { createVuetify } from 'vuetify' 
import { aliases, mdi } from "vuetify/iconsets/mdi"
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

const icons = {
  defaultSet: 'mdi',
  aliases,
  sets: {
    mdi,
  }
}
const app = createApp(App)
const vuetify = createVuetify({
  components,
  directives,
  icons
})
const pinia = createPinia()

import { useMainStore } from './stores/main'


app.use(router)
app.use(vuetify)
app.use(pinia)
pinia.use(piniaPluginPersistedstate)

app.mount('#app')

const mainStore = useMainStore();
const loggedInUser = localStorage.getItem('user');
if (loggedInUser) {
  const userObject = JSON.parse(loggedInUser);
  if (userObject && userObject.username) {
    mainStore.$patch({ user: userObject });
  }
}