import { defineStore } from 'pinia'
import cosmetology from '@/assets/img/card/cosmetology.webp'
import makeup from '@/assets/img/card/makeup.webp'
import body_shaping from '@/assets/img/card/body_shaping.webp'
import eyelashes from '@/assets/img/card/eyelashes.webp'
import epilation from '@/assets/img/card/epilation.webp'

export const useServicesStore = defineStore('listServicesStore', {
  state: () => ({
    listServices: [
      {
        id: 'cosmetology',
        title: 'Косметология',
        description:
          'В салоне Chloe предоставлен широкий спектр косметологических услуг для лица и тела, из самых современных, эффективных и безопасных способов решить целый комплекс проблем. Это, в первую очередь, возрастные изменения кожи, гиперпигментация, акне и пост-акне.',
        urlName: cosmetology
      },
      {
        id: 'makeup',
        title: 'Перманентный макияж',
        description:
          'Мы поможем быть привлекательной в любое время года и в любое время дня и ночи. Подчёркнем ваши достоинства и корректируем недостатки, плюс индивидуальный подход придаст лицу большую выразительность.',
        urlName: makeup
      },
      {
        id: 'bodyshaping',
        title: 'Коррекция фигуры',
        description:
          'Самые эффективные аппаратные процедуры для коррекции фигуры. Комплексное решение проблем. Видимые проявления целлюлита и жировых отложений, потеря тонуса и дряблость кожи и мышц, потеря четких контуров тела – это все поддается коррекции.',
        urlName: body_shaping
      },
      {
        id: 'eyelashes',
        title: 'Наращивание ресниц',
        description: `Благодаря многолетнему опыту мы знаем как правильно выбрать ресницы по форме глаз и как подобрать нужный эффект, добиваясь завораживающего взгляда.  Так же у нас доступно ЛАМИНИРОВАНИЕ своих ресниц для создания повседневного макияжа и БОТОКС для укрепления, ускорение роста и защиты от внешних воздействий.`,
        urlName: eyelashes
      },
      {
        id: 'epilation',
        title: 'Эпиляция',
        description:
          'У нас доступны самые распространённые методы эпиляции Воск / Сахар / Лазер / Электра, какой из перечисленных методов эпиляции выбрать — решать вам, а мы качественно выполним свою работу по любому из перечисленных видов данной услуги.',
        urlName: epilation
      }
    ]
  })
})
