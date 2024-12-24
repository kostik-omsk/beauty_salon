import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView/HomeView.vue'

const ServicesView = () => import('@/views/ServicesView/ServicesView.vue')
const ServiceView = () => import('@/views/ServiceView/ServiceView.vue')
const AppServiceInfo = () => import('@/components/ServiceInfo/AppServiceInfo.vue')
const CosmeticsView = () => import('@/views/CosmeticsView/CosmeticsView.vue')
const PriceView = () => import('@/views/PriceView/PriceView.vue')

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
        title: 'Услуги - Chloe',
        description: 'Салон красоты Chloe предлагает широкий спектр услуг для вашего ухода.',
        keywords: 'салон красоты, услуги, Chloe, Кольцово',
        ogTitle: 'Услуги в Chloe',
        ogDescription: 'Салон красоты Chloe предлагает широкий спектр услуг для вашего ухода.',
        ogImage: 'favicon/android-icon-192x192.png',
        ogUrl: 'https://chloe-dankina.ru/services'
      },
      children: [
        {
          path: 'cosmetology',
          name: 'cosmetology',
          component: ServiceView,
          meta: {
            breadcrumb: 'Косметология',
            title: 'Косметология - Chloe',
            description: 'Услуги косметологии для лица и тела в студии Chloe в Кольцово.',
            keywords: 'косметология, уход за лицом, уход за телом, Chloe, салон красоты, Кольцово',
            ogTitle: 'Косметология в Chloe',
            ogDescription: 'Косметологические услуги в студии красоты Chloe. Запишитесь на консультацию!',
            ogImage: '/assets/img/card/cosmetology.png',
            ogUrl: 'https://chloe-dankina.ru/services/cosmetology'
          },
          children: [
            {
              path: 'rejuvenation',
              name: 'rejuvenation',
              component: AppServiceInfo,
              meta: {
                breadcrumb: 'Омоложение',
                title: 'Омоложение кожи - Chloe',
                description: 'Процедуры для омоложения кожи в студии Chloe. Современные методики и уход.',
                keywords: 'омоложение, уход за кожей, Chloe, салон красоты, Кольцово',
                ogTitle: 'Омоложение кожи в Chloe',
                ogDescription: 'Делайте вашу кожу молодой и здоровой с помощью процедур Chloe.',
                ogImage: '/assets/img/card/rejuvenation.png',
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
                title: 'Борьба с проблемами кожи - Chloe',
                description: 'Решение проблем кожи с помощью профессиональных процедур в Chloe.',
                keywords: 'проблемная кожа, уход, Chloe, салон красоты, Кольцово',
                ogTitle: 'Борьба с проблемами кожи в Chloe',
                ogDescription: 'Запишитесь на процедуры для восстановления кожи в студии Chloe.',
                ogImage: '/assets/img/card/therapy.png',
                ogUrl: 'https://chloe-dankina.ru/services/cosmetology/therapy'
              }
            },
            {
              path: 'cleaning',
              name: 'cleaning',
              component: AppServiceInfo,
              meta: {
                breadcrumb: 'Чистка лица',
                title: 'Чистка лица - Chloe',
                description: 'Профессиональная чистка лица в студии красоты Chloe в Кольцово.',
                keywords: 'чистка лица, уход за лицом, Chloe, салон красоты, Кольцово',
                ogTitle: 'Чистка лица в Chloe',
                ogDescription: 'Запишитесь на чистку лица в студии Chloe. Здоровая кожа — залог красоты!',
                ogImage: '/assets/img/card/cleaning.png',
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
            title: 'Лазерная эпиляция - Chloe',
            description: 'Современная лазерная эпиляция в студии Chloe. Гладкая кожа на долгое время.',
            keywords: 'лазерная эпиляция, эпиляция, уход за кожей, Chloe, салон красоты, Кольцово',
            ogTitle: 'Лазерная эпиляция в Chloe',
            ogDescription: 'Эффективная лазерная эпиляция в студии Chloe. Запишитесь сейчас!',
            ogImage: '/assets/img/card/laserfive.png',
            ogUrl: 'https://chloe-dankina.ru/services/laserfive'
          }
        },
        {
          path: 'makeup',
          name: 'makeup',
          component: ServiceView,
          meta: {
            breadcrumb: 'Перманентный макияж',
            title: 'Перманентный макияж - Chloe',
            description: 'Эстетичный перманентный макияж в студии красоты Chloe в Кольцово.',
            keywords: 'перманентный макияж, татуаж, удаление макияжа, удаление тату, Chloe, салон красоты, Кольцово',
            ogTitle: 'Перманентный макияж в Chloe',
            ogDescription: 'Сделайте свой макияж идеальным каждый день. Услуги Chloe.',
            ogImage: '/assets/img/card/makeup.png',
            ogUrl: 'https://chloe-dankina.ru/services/makeup'
          }
        },
        {
          path: 'eyelashes',
          name: 'eyelashes',
          component: ServiceView,
          meta: {
            breadcrumb: 'Наращивание ресниц',
            title: 'Наращивание ресниц - Chloe',
            description:
              'Профессиональное наращивание ресниц, ламинирование и ботокс в студии красоты Chloe в Кольцово.',
            keywords:
              'наращивание ресниц, уход за ресницами, Chloe, салон красоты, Кольцово, ламинирование ресниц, ботокс ресниц',
            ogTitle: 'Наращивание ресниц в Chloe',
            ogDescription: 'Запишитесь на профессиональное наращивание ресниц в студии красоты Chloe.',
            ogImage: '/assets/img/card/eyelashes.png',
            ogUrl: 'https://chloe-dankina.ru/services/eyelashes'
          }
        },
        {
          path: 'bodyshaping',
          name: 'bodyshaping',
          component: ServiceView,
          meta: {
            breadcrumb: 'Коррекция фигуры',
            title: 'Коррекция фигуры - Chloe',
            description: 'Профессиональные услуги для коррекции фигуры в студии Chloe.',
            keywords: 'коррекция фигуры, уход за телом, Chloe, салон красоты, Кольцово',
            ogTitle: 'Коррекция фигуры в Chloe',
            ogDescription: 'Идеальные формы с помощью современных процедур в Chloe.',
            ogImage: '/assets/img/card/body_shaping.png',
            ogUrl: 'https://chloe-dankina.ru/services/bodyshaping'
          }
        },
        {
          path: 'relax',
          name: 'relax',
          component: ServiceView,
          meta: {
            breadcrumb: 'Релакс',
            title: 'Релакс - Chloe',
            description: 'Услуги для полного расслабления и снятия стресса в студии Chloe.',
            keywords: 'релакс, массаж, уход, Chloe, салон красоты, Кольцово',
            ogTitle: 'Релакс в Chloe',
            ogDescription: 'Насладитесь процедурами для расслабления и восстановления в Chloe.',
            ogImage: '/assets/img/card/relax.png',
            ogUrl: 'https://chloe-dankina.ru/services/relax'
          }
        },
        {
          path: 'epilation',
          name: 'epilation',
          component: ServiceView,
          meta: {
            breadcrumb: 'Эпиляция',
            title: 'Эпиляция - Chloe',
            description: 'Широкий выбор услуг эпиляции в студии красоты Chloe в Кольцово.',
            keywords: 'эпиляция, лазерная эпиляция, восковая эпиляция, электроэпиляция, Chloe, салон красоты, Кольцово',
            ogTitle: 'Эпиляция в Chloe',
            ogDescription: 'Выберите подходящий метод эпиляции в студии красоты Chloe. Удобство и качество.',
            ogImage: '/assets/img/card/epilation.png',
            ogUrl: 'https://chloe-dankina.ru/services/epilation'
          },
          children: [
            {
              path: 'waxsugar',
              name: 'Wax/Sugar',
              component: AppServiceInfo,
              meta: {
                breadcrumb: 'Воск / Сахар',
                title: 'Восковая и сахарная эпиляция - Chloe',
                description: 'Эпиляция воском и сахаром в студии Chloe. Мягкое и эффективное удаление волос.',
                keywords: 'восковая эпиляция, сахарная эпиляция, Chloe, салон красоты, Кольцово',
                ogTitle: 'Восковая и сахарная эпиляция в Chloe',
                ogDescription: 'Попробуйте восковую или сахарную эпиляцию в студии Chloe. Гладкая кожа надолго!',
                ogImage: '/assets/img/card/wax.png',
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
                title: 'Лазерная эпиляция - Chloe',
                description: 'Современная и безболезненная лазерная эпиляция в студии Chloe.',
                keywords: 'лазерная эпиляция, эпиляция, Chloe, салон красоты, Кольцово',
                ogTitle: 'Лазерная эпиляция в Chloe',
                ogDescription: 'Эффективное удаление волос с помощью лазера. Запишитесь на лазерную эпиляцию в Chloe.',
                ogImage: '/assets/img/card/laser.png',
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
                title: 'Электроэпиляция - Chloe',
                description: 'Удаление волос с помощью электроэпиляции в студии Chloe.',
                keywords: 'электроэпиляция, эпиляция, Chloe, салон красоты, Кольцово',
                ogTitle: 'Электроэпиляция в Chloe',
                ogDescription: 'Избавьтесь от нежелательных волос навсегда с помощью электроэпиляции в Chloe.',
                ogImage: '/assets/img/card/electra.png',
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
        title: 'Косметика - Chloe',
        description: 'Профессиональная косметика и индивидуальные комплексы ухода.',
        keywords: 'косметика, комплексы ухода, Chloe, салон красоты, Кольцово',
        ogTitle: 'Косметика в Chloe',
        ogDescription: 'Профессиональная косметика и индивидуальные комплексы ухода.',
        ogImage: '/assets/img/gallery/9.png',
        ogUrl: 'https://chloe-dankina.ru/cosmetics'
      }
    },
    {
      path: '/price',
      name: 'price',
      component: PriceView,
      meta: {
        title: 'Цены на услуги - Chloe',
        description: 'Узнайте актуальные цены на услуги студии красоты Chloe в Кольцово. Прозрачные и доступные цены.',
        keywords: 'цены на услуги, прайс-лист, Chloe, салон красоты, Кольцово, услуги красоты',
        ogTitle: 'Цены на услуги студии Chloe',
        ogDescription:
          'Посмотрите прайс-лист на услуги студии красоты Chloe. Найдите подходящую услугу по доступной цене.',
        ogImage: 'favicon/android-icon-192x192.png',
        ogUrl: 'https://chloe-dankina.ru/price'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/' //TODO 404
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
  const defaultTitle = 'Студия красоты Chloe'
  const defaultDescription =
    'Косметология, лазерная эпиляция, перманентный макияж, коррекция фигуры, эпиляция и другие услуги в салоне Chloe. Профессиональный уход и индивидуальные комплексы. Салон красаты в Кольцово'
  const defaultKeywords =
    'косметология, лазерная эпиляция, перманентный макияж, коррекция фигуры, Chloe, Салон красаты в Кольцово, Косметология в Кольцово, наращивание ресниц, эпиляция в Кольцово, массаж'

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
  updateOgTag('og:image', (to.meta.ogImage as string) || 'favicon/android-icon-192x192.png')
  updateOgTag('og:url', (to.meta.ogUrl as string) || window.location.href)
})

export default router
