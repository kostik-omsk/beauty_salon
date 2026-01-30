import { COOKIE_CONSENT_STORAGE_KEY } from '@/stores/cookieConsent'
import HomeView from '@/views/HomeView/HomeView.vue'
import NotFoundView from '@/views/NoFont/NotFoundView.vue'
import { createRouter, createWebHistory } from 'vue-router'

declare global {
  interface Window {
    ym?: (id: number, event: string, ...params: any[]) => void
  }
}

const isAnalyticsAllowed = (): boolean => {
  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY)
    if (!raw) return false
    const parsed = JSON.parse(raw) as { analytics?: boolean }
    return parsed.analytics === true
  } catch (error) {
    console.warn('Cookie consent read error:', error)
    return false
  }
}

const ServicesView = () => import('@/views/ServicesView/ServicesView.vue')
const ServiceView = () => import('@/views/ServiceView/ServiceView.vue')
const AppServiceInfo = () => import('@/components/ServiceInfo/AppServiceInfo.vue')
const CosmeticsView = () => import('@/views/CosmeticsView/CosmeticsView.vue')
const PriceView = () => import('@/views/PriceView/PriceView.vue')
const PrivacyPolicyView = () => import('@/views/PrivacyPolicyView/PrivacyPolicyView.vue')

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
        breadcrumb: 'Услуги',
        title: 'Услуги - Хлоя',
        description: 'Салон красоты Хлоя предлагает широкий спектр услуг для вашего ухода.',
        keywords: 'салон красоты, услуги, Хлоя, Кольцово',
        ogTitle: 'Услуги в Хлоя',
        ogDescription: 'Салон красоты Хлоя предлагает широкий спектр услуг для вашего ухода.',
        ogImage: 'https://chloe-dankina.ru/favicon/android-icon-192x192.png',
        ogUrl: 'https://chloe-dankina.ru/services'
      },
      children: [
        {
          path: 'cosmetology',
          name: 'cosmetology',
          component: ServiceView,
          meta: {
            breadcrumb: 'Косметология',
            title: 'Косметология - Хлоя',
            description: 'Услуги косметологии для лица и тела в студии Хлоя в Кольцово.',
            keywords: 'косметология, уход за лицом, уход за телом, Хлоя, салон красоты, Кольцово',
            ogTitle: 'Косметология в Хлоя',
            ogDescription: 'Косметологические услуги в студии красоты Хлоя. Запишитесь на консультацию!',
            ogImage: 'https://chloe-dankina.ru/assets/img/card/cosmetology.png',
            ogUrl: 'https://chloe-dankina.ru/services/cosmetology'
          },
          children: [
            {
              path: 'rejuvenation',
              name: 'rejuvenation',
              component: AppServiceInfo,
              meta: {
                breadcrumb: 'Омоложение',
                title: 'Омоложение кожи - Хлоя',
                description: 'Процедуры для омоложения кожи в студии Хлоя. Современные методики и уход.',
                keywords: 'омоложение, уход за кожей, Хлоя, салон красоты, Кольцово',
                ogTitle: 'Омоложение кожи в Хлоя',
                ogDescription: 'Делайте вашу кожу молодой и здоровой с помощью процедур Хлоя.',
                ogImage: 'https://chloe-dankina.ru/assets/img/card/rejuvenation.png',
                ogUrl: 'https://chloe-dankina.ru/services/cosmetology/rejuvenation'
              },
              props: true
            },
            {
              path: 'therapy',
              name: 'therapy',
              component: AppServiceInfo,
              meta: {
                breadcrumb: 'Проблемы кожи',
                title: 'Борьба с проблемами кожи - Хлоя',
                description: 'Решение проблем кожи с помощью профессиональных процедур в Хлоя.',
                keywords: 'проблемная кожа, уход, Хлоя, салон красоты, Кольцово',
                ogTitle: 'Борьба с проблемами кожи в Хлоя',
                ogDescription: 'Запишитесь на процедуры для восстановления кожи в студии Хлоя.',
                ogImage: 'https://chloe-dankina.ru/assets/img/card/therapy.png',
                ogUrl: 'https://chloe-dankina.ru/services/cosmetology/therapy'
              }
            },
            {
              path: 'cleaning',
              name: 'cleaning',
              component: AppServiceInfo,
              meta: {
                breadcrumb: 'Чистка лица',
                title: 'Чистка лица - Хлоя',
                description: 'Профессиональная чистка лица в студии красоты Хлоя в Кольцово.',
                keywords: 'чистка лица, уход за лицом, Хлоя, салон красоты, Кольцово',
                ogTitle: 'Чистка лица в Хлоя',
                ogDescription: 'Запишитесь на чистку лица в студии Хлоя. Здоровая кожа — залог красоты!',
                ogImage: 'https://chloe-dankina.ru/assets/img/card/cleaning.png',
                ogUrl: 'https://chloe-dankina.ru/services/cosmetology/cleaning'
              }
            }
          ]
        },
        {
          path: 'laserfive',
          name: 'laserfive',
          component: ServiceView,
          meta: {
            breadcrumb: 'Лазерная эпиляция',
            title: 'Лазерная эпиляция - Хлоя',
            description: 'Современная лазерная эпиляция в студии Хлоя. Гладкая кожа на долгое время.',
            keywords: 'лазерная эпиляция, эпиляция, уход за кожей, Хлоя, салон красоты, Кольцово',
            ogTitle: 'Лазерная эпиляция в Хлоя',
            ogDescription: 'Эффективная лазерная эпиляция в студии Хлоя. Запишитесь сейчас!',
            ogImage: 'https://chloe-dankina.ru/assets/img/card/laserfive.png',
            ogUrl: 'https://chloe-dankina.ru/services/laserfive'
          }
        },
        {
          path: 'makeup',
          name: 'makeup',
          component: ServiceView,
          meta: {
            breadcrumb: 'Перманентный макияж',
            title: 'Перманентный макияж - Хлоя',
            description: 'Эстетичный перманентный макияж в студии красоты Хлоя в Кольцово.',
            keywords: 'перманентный макияж, татуаж, удаление макияжа, удаление тату, Хлоя, салон красоты, Кольцово',
            ogTitle: 'Перманентный макияж в Хлоя',
            ogDescription: 'Сделайте свой макияж идеальным каждый день. Услуги Хлоя.',
            ogImage: 'https://chloe-dankina.ru/assets/img/card/makeup.png',
            ogUrl: 'https://chloe-dankina.ru/services/makeup'
          }
        },
        {
          path: 'eyelashes',
          name: 'eyelashes',
          component: ServiceView,
          meta: {
            breadcrumb: 'Наращивание ресниц',
            title: 'Наращивание ресниц - Хлоя',
            description:
              'Профессиональное наращивание ресниц, ламинирование и ботокс в студии красоты Хлоя в Кольцово.',
            keywords:
              'наращивание ресниц, уход за ресницами, Хлоя, салон красоты, Кольцово, ламинирование ресниц, ботокс ресниц',
            ogTitle: 'Наращивание ресниц в Хлоя',
            ogDescription: 'Запишитесь на профессиональное наращивание ресниц в студии красоты Хлоя.',
            ogImage: 'https://chloe-dankina.ru/assets/img/card/eyelashes.png',
            ogUrl: 'https://chloe-dankina.ru/services/eyelashes'
          }
        },
        {
          path: 'bodyshaping',
          name: 'bodyshaping',
          component: ServiceView,
          meta: {
            breadcrumb: 'Коррекция фигуры',
            title: 'Коррекция фигуры - Хлоя',
            description: 'Профессиональные услуги для коррекции фигуры в студии Хлоя.',
            keywords: 'коррекция фигуры, уход за телом, Хлоя, салон красоты, Кольцово',
            ogTitle: 'Коррекция фигуры в Хлоя',
            ogDescription: 'Идеальные формы с помощью современных процедур в Хлоя.',
            ogImage: 'https://chloe-dankina.ru/assets/img/card/body_shaping.png',
            ogUrl: 'https://chloe-dankina.ru/services/bodyshaping'
          }
        },
        {
          path: 'relax',
          name: 'relax',
          component: ServiceView,
          meta: {
            breadcrumb: 'Релакс',
            title: 'Релакс - Хлоя',
            description: 'Услуги для полного расслабления и снятия стресса в студии Хлоя.',
            keywords: 'релакс, массаж, уход, Хлоя, салон красоты, Кольцово',
            ogTitle: 'Релакс в Хлоя',
            ogDescription: 'Насладитесь процедурами для расслабления и восстановления в Хлоя.',
            ogImage: 'https://chloe-dankina.ru/assets/img/card/relax.png',
            ogUrl: 'https://chloe-dankina.ru/services/relax'
          }
        },
        {
          path: 'epilation',
          name: 'epilation',
          component: ServiceView,
          meta: {
            breadcrumb: 'Эпиляция',
            title: 'Эпиляция - Хлоя',
            description: 'Широкий выбор услуг эпиляции в студии красоты Хлоя в Кольцово.',
            keywords: 'эпиляция, лазерная эпиляция, восковая эпиляция, электроэпиляция, Хлоя, салон красоты, Кольцово',
            ogTitle: 'Эпиляция в Хлоя',
            ogDescription: 'Выберите подходящий метод эпиляции в студии красоты Хлоя. Удобство и качество.',
            ogImage: 'https://chloe-dankina.ru/assets/img/card/epilation.png',
            ogUrl: 'https://chloe-dankina.ru/services/epilation'
          },
          children: [
            {
              path: 'waxsugar',
              name: 'Wax/Sugar',
              component: AppServiceInfo,
              meta: {
                breadcrumb: 'Воск / Сахар',
                title: 'Восковая и сахарная эпиляция - Хлоя',
                description: 'Эпиляция воском и сахаром в студии Хлоя. Мягкое и эффективное удаление волос.',
                keywords: 'восковая эпиляция, сахарная эпиляция, Хлоя, салон красоты, Кольцово',
                ogTitle: 'Восковая и сахарная эпиляция в Хлоя',
                ogDescription: 'Попробуйте восковую или сахарную эпиляцию в студии Хлоя. Гладкая кожа надолго!',
                ogImage: 'https://chloe-dankina.ru/assets/img/card/wax.png',
                ogUrl: 'https://chloe-dankina.ru/services/epilation/waxsugar'
              },
              props: true
            },
            {
              path: 'laser',
              name: 'Laser',
              component: AppServiceInfo,
              meta: {
                breadcrumb: 'Лазер',
                title: 'Лазерная эпиляция - Хлоя',
                description: 'Современная и безболезненная лазерная эпиляция в студии Хлоя.',
                keywords: 'лазерная эпиляция, эпиляция, Хлоя, салон красоты, Кольцово',
                ogTitle: 'Лазерная эпиляция в Хлоя',
                ogDescription: 'Эффективное удаление волос с помощью лазера. Запишитесь на лазерную эпиляцию в Хлоя.',
                ogImage: 'https://chloe-dankina.ru/assets/img/card/laser.png',
                ogUrl: 'https://chloe-dankina.ru/services/epilation/laser'
              },
              props: true
            },
            {
              path: 'electro',
              name: 'Electro',
              component: AppServiceInfo,
              meta: {
                breadcrumb: 'Электроэпиляция',
                title: 'Электроэпиляция - Хлоя',
                description: 'Удаление волос с помощью электроэпиляции в студии Хлоя.',
                keywords: 'электроэпиляция, эпиляция, Хлоя, салон красоты, Кольцово',
                ogTitle: 'Электроэпиляция в Хлоя',
                ogDescription: 'Избавьтесь от нежелательных волос навсегда с помощью электроэпиляции в Хлоя.',
                ogImage: 'https://chloe-dankina.ru/assets/img/card/electra.png',
                ogUrl: 'https://chloe-dankina.ru/services/epilation/electra'
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
      component: CosmeticsView,
      meta: {
        title: 'Косметика - Хлоя',
        description: 'Профессиональная косметика и индивидуальные комплексы ухода.',
        keywords: 'косметика, комплексы ухода, Хлоя, салон красоты, Кольцово',
        ogTitle: 'Косметика в Хлоя',
        ogDescription: 'Профессиональная косметика и индивидуальные комплексы ухода.',
        ogImage: 'https://chloe-dankina.ru/assets/img/gallery/9.png',
        ogUrl: 'https://chloe-dankina.ru/cosmetics'
      }
    },
    {
      path: '/price',
      name: 'price',
      component: PriceView,
      meta: {
        title: 'Цены на услуги - Хлоя',
        description: 'Узнайте актуальные цены на услуги студии красоты Хлоя в Кольцово. Прозрачные и доступные цены.',
        keywords: 'цены на услуги, прайс-лист, Хлоя, салон красоты, Кольцово, услуги красоты',
        ogTitle: 'Цены на услуги студии Хлоя',
        ogDescription:
          'Посмотрите прайс-лист на услуги студии красоты Хлоя. Найдите подходящую услугу по доступной цене.',
        ogImage: 'https://chloe-dankina.ru/favicon/android-icon-192x192.png',
        ogUrl: 'https://chloe-dankina.ru/price'
      }
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicyView,
      meta: {
        title: 'Политика обработки данных - Хлоя',
        description: 'Политика обработки данных и cookie.',
        keywords: 'политика, данные, cookie, Хлоя',
        ogTitle: 'Политика обработки данных - Хлоя',
        ogDescription: 'Политика обработки данных и cookie.',
        ogImage: 'https://chloe-dankina.ru/favicon/android-icon-192x192.png',
        ogUrl: 'https://chloe-dankina.ru/privacy-policy'
      }
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFoundView,
      meta: {
        title: 'Страница не найдена - Хлоя',
        description: 'Страница не найдена',
        keywords: '404, Хлоя, салон красоты, Кольцово',
        ogTitle: 'Страница не найдена - Хлоя',
        ogDescription: 'Страница не найдена',
        ogImage: 'https://chloe-dankina.ru/favicon/android-icon-192x192.png',
        ogUrl: 'https://chloe-dankina.ru/not-found'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/not-found' //TODO 404
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

router.afterEach((to) => {
  const defaultTitle = 'Студия красоты Хлоя'
  const defaultDescription =
    'Косметология, лазерная эпиляция, перманентный макияж, коррекция фигуры, эпиляция и другие услуги в салоне Хлоя. Профессиональный уход и индивидуальные комплексы. Салон красаты в Кольцово'
  const defaultKeywords =
    'косметология, лазерная эпиляция, перманентный макияж, коррекция фигуры, Хлоя, Салон красаты в Кольцово, Косметология в Кольцово, наращивание ресниц, эпиляция в Кольцово, массаж'

  // Получение данных из meta маршрута
  const metaTitle = (to.meta.title as string) || defaultTitle
  const metaDescription = (to.meta.description as string) || defaultDescription
  const metaKeywords = (to.meta.keywords as string) || defaultKeywords

  // Обновление <title>
  document.title = metaTitle

  // Функция для обновления <meta> тегов
  const updateMetaTag = (name: string, content: string) => {
    let element = document.querySelector(`meta[name="${name}"]`)
    if (!element) {
      element = document.createElement('meta')
      element.setAttribute('name', name)
      document.head.appendChild(element)
    }
    element.setAttribute('content', content)
  }

  // Обновляем description и keywords
  updateMetaTag('description', metaDescription)
  updateMetaTag('keywords', metaKeywords)

  // Обновление Open Graph тегов
  const updateOgTag = (property: string, content: string) => {
    let element = document.querySelector(`meta[property="${property}"]`)
    if (!element) {
      element = document.createElement('meta')
      element.setAttribute('property', property)
      document.head.appendChild(element)
    }
    element.setAttribute('content', content)
  }

  updateOgTag('og:title', (to.meta.ogTitle as string) || metaTitle)
  updateOgTag('og:description', (to.meta.ogDescription as string) || metaDescription)
  updateOgTag('og:image', (to.meta.ogImage as string) || 'https://chloe-dankina.ru/favicon/android-icon-192x192.png')
  updateOgTag('og:url', (to.meta.ogUrl as string) || window.location.href)

  // Отслеживание маршрутов для Яндекс.Метрики
  if (window.ym && isAnalyticsAllowed()) {
    window.ym(99322589, 'hit', to.fullPath)
  }
})

export default router
