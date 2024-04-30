import { defineStore } from 'pinia'

export const useListMenuStore = defineStore('listMenu', {
  state: () => ({
    listMenu: [
      { title: 'Главная', name: 'home' },
      {
        title: 'Услуги',
        name: 'services',
        subMenu: [
          { title: 'Косметология', name: 'cosmetology' },
          { title: 'Перманентный макияж', name: 'makeup' },
          { title: 'Коррекция фигуры', name: 'bodyshaping' },
          { title: 'Наращивание ресниц', name: 'eyelashes' },
          {
            title: 'Эпиляция',
            name: 'epilation',
            subMenuService: [
              { title: 'Воск / Сахар', name: 'Wax/Sugar' },
              { title: 'Лазер / Элос', name: 'Laser' },
              { title: 'Электроэпиляция', name: 'Electra' }
            ]
          }
        ]
      },
      { title: 'Товары', name: 'products' }
    ],
    show: false,
    isOpen: false
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
    }
  }
})
