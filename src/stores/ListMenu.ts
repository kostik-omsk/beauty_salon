import { defineStore } from 'pinia'

export const useListMenuStore = defineStore('listMenu', {
  state: () => ({
    listMenu: [
      { title: 'Главная', name: 'home' },
      {
        title: 'Услуги',
        name: 'services',
        subMenu: [
          {
            title: 'Косметология',
            name: 'cosmetology',
            subMenuService: [
              { title: 'Омоложение', name: 'rejuvenation' },
              { title: 'Проблемы кожи', name: 'therapy' },
              { title: 'Чистка лица', name: 'cleaning' }
            ]
          },
          { title: 'Лазерная эпиляция', name: 'laserfive' },
          { title: 'Перманентный макияж', name: 'makeup' },
          { title: 'Наращивание ресниц', name: 'eyelashes' },
          { title: 'Коррекция фигуры', name: 'bodyshaping' },
          { title: 'Релакс', name: 'relax' },
          {
            title: 'Эпиляция',
            name: 'epilation',
            subMenuService: [
              { title: 'Воск / Сахар', name: 'Wax/Sugar' },
              { title: 'Лазер', name: 'Laser' },
              { title: 'Электроэпиляция', name: 'Electro' }
            ]
          }
        ]
      },
      { title: 'Косметика', name: 'cosmetics' },
      { title: 'Статьи и новости', name: 'home', hash: '#news' },
      { title: 'Прайс', name: 'price' }
    ],
    show: false,
    isOpen: false,
    menuAnimationComplete: true
  }),
  getters: {
    getShow(): boolean {
      return this.show
    },
    getMenuServices(): { title: string; name: string; subMenuService?: { title: string; name: string }[] }[] {
      const services = this.listMenu.find((item) => item.name === 'services')

      if (services && services.subMenu) {
        return services.subMenu
      }

      return []
    }
  },
  actions: {
    toggleMenu(): void {
      this.isOpen = !this.isOpen
    },
    closeMenu(): void {
      this.show = false
    },
    setMenuAnimationComplete(value: boolean): void {
      this.menuAnimationComplete = value // Обновление флага анимации
    }
  }
})
