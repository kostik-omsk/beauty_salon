import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView/HomeView.vue'
import ProductsView from '@/views/ProductsView/ProductsView.vue'

const CosmetologyView = () => import('@/views/CosmetologyView/CosmetologyView.vue')
const MakeupView = () => import('@/views/MakeupView/MakeupView.vue')
const BodyshapingView = () => import('@/views/BodyshapingView/BodyshapingView.vue')
const EyelashesView = () => import('@/views/EyelashesView/EyelashesView.vue')
const EpilationView = () => import('@/views/EpilationView/EpilationView.vue')
const ServicesView = () => import('@/views/ServicesView/ServicesView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView,
      meta: {
        breadcrumb: 'Услуги'
      },
      children: [
        {
          path: 'cosmetology',
          name: 'cosmetology',
          component: CosmetologyView,
          meta: {
            breadcrumb: 'Косметология'
          }
        },
        {
          path: 'makeup',
          name: 'makeup',
          component: MakeupView,
          meta: {
            breadcrumb: 'Перманентный макияж'
          }
        },
        {
          path: 'bodyshaping',
          name: 'bodyshaping',
          component: BodyshapingView,
          meta: {
            breadcrumb: 'Коррекция фигуры'
          }
        },
        {
          path: 'eyelashes',
          name: 'eyelashes',
          component: EyelashesView,
          meta: {
            breadcrumb: 'Наращивание ресниц'
          }
        },
        {
          path: 'epilation',
          name: 'epilation',
          component: EpilationView,
          meta: {
            breadcrumb: 'Эпиляция'
          },
          children: [
            {
              path: 'waxsugar',
              name: 'Wax/Sugar',
              component: EpilationView,
              meta: {
                breadcrumb: 'Воск / Сахар'
              }
            },
            {
              path: 'laser',
              name: 'Laser',
              component: EpilationView,
              meta: {
                breadcrumb: 'Лазер'
              }
            }
          ]
        }
      ]
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView
    }
  ]
})

router.beforeEach(() => {
  window.scrollTo(0, 0)
})

export default router
