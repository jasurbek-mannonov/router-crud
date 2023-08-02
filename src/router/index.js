import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      component: () => import("@/layout/main.vue"),
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('@/views/dashboard.vue')
        },
        {
          path: '/users',
          name: 'users',
          component: () => import('@/views/users.vue')
        },
        {
          path: '/posts',
          name: 'posts',
          component: () => import('@/views/posts.vue')
        },
      ]
    }
  ]
})

export default router
