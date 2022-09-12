import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/AppLayout.vue'
import StudentsPage from '@/views/StudentsPage.vue'
import CourcesPage from '@/views/CourcesPage.vue'

const routes = [
  {
    path: '/',
    name: '',
    component: AppLayout,
    children: [
      {
        path: '/students',
        name: 'students',
        component: StudentsPage
      },
      {
        path: '/cources',
        name: 'cources',
        component: CourcesPage
      }
    ]
  },
  {
    path: '/students',
    name: '',
    component: StudentsPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
