import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'
import VendorMainView from '@/views/vendor/MainView.vue'
import VendorAddView from '@/views/vendor/AddView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/vendor',
      name: 'vendor',
      component: VendorMainView // temporary
    },
    {
      path: '/vendor/add',
      name: 'addVendor',
      component: VendorAddView // temporary
    },

    // {
    //   path: '/vendor',
    //   name: 'vendor',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
