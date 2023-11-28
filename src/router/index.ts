import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView/HomeView.vue'
import ProductsView from '@/views/ProductsView/ProductsView.vue'

const CosmetologyView = () => import('@/views/CosmetologyView/CosmetologyView.vue')
const MakeupView = () => import('@/views/MakeupView/MakeupView.vue')
const BodyshapingView = () => import('@/views/BodyshapingView/BodyshapingView.vue')
const EyelashesView = () => import('@/views/EyelashesView/EyelashesView.vue')
const EpilationView = () => import('@/views/EpilationView/EpilationView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cosmetology',
      name: 'cosmetology',
      component: CosmetologyView
    },
    {
      path: '/makeup',
      name: 'makeup',
      component: MakeupView
    },
    {
      path: '/bodyshaping',
      name: 'bodyshaping',
      component: BodyshapingView
    },
    {
      path: '/eyelashes',
      name: 'eyelashes',
      component: EyelashesView
    },
    {
      path: '/epilation',
      name: 'epilation',
      component: EpilationView
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView
    }
  ]
})

export default router
