import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView/HomeView.vue'

const ServicesView = () => import('@/views/ServicesView/ServicesView.vue')
const ServiceView = () => import('@/views/ServiceView/ServiceView.vue')
const AppServiceInfo = () => import('@/components/ServiceInfo/AppServiceInfo.vue')
const CosmeticsView = () => import('@/views/CosmeticsView/CosmeticsView.vue')

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
          component: ServiceView,
          meta: {
            breadcrumb: 'Косметология'
          },
          children: [
            {
              path: 'rejuvenation',
              name: 'rejuvenation',
              component: AppServiceInfo,
              meta: {
                breadcrumb: 'Омоложение'
              },
              props: true
            },
            {
              path: 'therapy',
              name: 'therapy',
              component: AppServiceInfo,
              meta: {
                breadcrumb: 'Проблемы кожи'
              }
            },
            {
              path: 'cleaning',
              name: 'cleaning',
              component: AppServiceInfo,
              meta: {
                breadcrumb: 'Чистка лица'
              }
            }
          ]
        },
        {
          path: 'laserfive',
          name: 'laserfive',
          component: ServiceView,
          meta: {
            breadcrumb: 'Лазерная эпиляция'
          }
        },
        {
          path: 'makeup',
          name: 'makeup',
          component: ServiceView,
          meta: {
            breadcrumb: 'Перманентный макияж'
          }
        },
        {
          path: 'bodyshaping',
          name: 'bodyshaping',
          component: ServiceView,
          meta: {
            breadcrumb: 'Коррекция фигуры'
          }
        },
        {
          path: 'eyelashes',
          name: 'eyelashes',
          component: ServiceView,
          meta: {
            breadcrumb: 'Наращивание ресниц'
          }
        },
        {
          path: 'epilation',
          name: 'epilation',
          component: ServiceView,
          meta: {
            breadcrumb: 'Эпиляция'
          },
          children: [
            {
              path: 'waxsugar',
              name: 'Wax/Sugar',
              component: AppServiceInfo,
              meta: {
                breadcrumb: 'Воск / Сахар'
              },
              props: true
            },
            {
              path: 'laser',
              name: 'Laser',
              component: AppServiceInfo,
              meta: {
                breadcrumb: 'Лазер'
              },
              props: true
            },
            {
              path: 'electra',
              name: 'Electra',
              component: AppServiceInfo,
              meta: {
                breadcrumb: 'Электроэпиляция'
              },
              props: true
            }
          ]
        }
      ]
    },
    {
      path: '/cosmetics',
      name: 'cosmetics',
      component: CosmeticsView
    }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
  }
})

router.beforeEach(() => {
  window.scrollTo(0, 0)
})

export default router
