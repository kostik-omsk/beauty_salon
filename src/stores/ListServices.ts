import { defineStore } from 'pinia'

interface Service {
  id: string
  title: string
  urlName: string
  description: string
  subMenuService?: Service[]
}

export const useServicesStore = defineStore('Services', {
  state: () => ({
    listServices: [
      {
        id: 'cosmetology',
        title: 'Косметология',
        urlName: 'cosmetology',
        description:
          'В салоне Chloe предоставлен широкий спектр косметологических услуг для лица и тела, из самых современных, эффективных и безопасных способов решить целый комплекс проблем. Это, в первую очередь, возрастные изменения кожи, гиперпигментация, акне и пост-акне.'
      },
      {
        id: 'makeup',
        title: 'Перманентный макияж',
        urlName: 'makeup',
        description:
          'Мы поможем быть привлекательной в любое время года и в любое время дня и ночи. Подчёркнем ваши достоинства и корректируем недостатки, плюс индивидуальный подход придаст лицу большую выразительность.'
      },
      {
        id: 'bodyshaping',
        title: 'Коррекция фигуры',
        urlName: 'body_shaping',
        description:
          'Самые эффективные аппаратные процедуры для коррекции фигуры. Комплексное решение проблем. Видимые проявления целлюлита и жировых отложений, потеря тонуса и дряблость кожи и мышц, потеря четких контуров тела – это все поддается коррекции.'
      },
      {
        id: 'eyelashes',
        title: 'Наращивание ресниц',
        urlName: 'eyelashes',
        description: `Благодаря многолетнему опыту мы знаем как правильно выбрать ресницы по форме глаз и как подобрать нужный эффект, добиваясь завораживающего взгляда.  Так же у нас доступно ЛАМИНИРОВАНИЕ своих ресниц для создания повседневного макияжа и БОТОКС для укрепления, ускорение роста и защиты от внешних воздействий.`
      },
      {
        id: 'epilation',
        title: 'Эпиляция',
        urlName: 'epilation',
        description:
          'У нас доступны самые распространённые методы эпиляции Воск / Сахар / Лазер / Электра, какой из перечисленных методов эпиляции выбрать — решать вам, а мы качественно выполним свою работу по любому из перечисленных видов данной услуги.',
        subMenuService: [
          {
            id: 'Wax/Sugar',
            title: 'Воск / Сахар',
            urlName: 'wax',
            description: 'описание востк то се туда сюда'
          },
          {
            id: 'Laser',
            title: 'Лазер',
            urlName: 'laser',
            description: 'описание востк то се туда сюда'
          },
          {
            id: 'Electra',
            title: 'Электра',
            urlName: 'electra',
            description: 'описание востк то се туда сюда'
          }
        ]
      }
    ]
  }),

  getters: {
    getServiceById: (state) => (id: string) => {
      const findServiceRecursive = (services: Service[], id: string): Service | null => {
        for (const service of services) {
          if (service.id === id) {
            return service
          }
          if (service.subMenuService) {
            const foundService = findServiceRecursive(service.subMenuService, id)
            if (foundService) {
              return foundService
            }
          }
        }
        return null
      }

      return findServiceRecursive(state.listServices, id)
    }
  }
})
