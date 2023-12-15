import { defineStore } from 'pinia'

export const useListMenu = defineStore('listMenuStore', {
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
          { title: 'Эпиляция', name: 'epilation' }
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
    getMenuServices(): { title: string; name: string }[] {
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
