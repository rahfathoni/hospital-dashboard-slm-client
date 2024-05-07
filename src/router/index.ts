import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'
import VendorMainView from '@/views/vendor/MainView.vue'
import VendorAddView from '@/views/vendor/AddView.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
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

interface User {
  username: string;
}

router.beforeEach((to, from, next) => {
  const loggedin = JSON.parse(localStorage.getItem('user') || '{}') as User;
  if (to.path !== '/login' && !loggedin.username) {
    next('/login');
  } else {
    next();
  }
});

export default router
