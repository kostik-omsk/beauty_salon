const METRIKA_ID = 99322589
const DIKIDI_WIDGET_URL = 'https://dikidi.ru/assets/js/widget_record/widget2.min.js'
const METRIKA_URL = 'https://mc.yandex.ru/metrika/tag.js'

let metrikaLoaded = false
let dikidiLoaded = false

const appendScript = (src: string) => {
  const existing = document.querySelector(`script[src="${src}"]`)
  if (existing) return

  const script = document.createElement('script')
  script.async = true
  script.src = src
  document.head.appendChild(script)
}

export const loadYandexMetrika = () => {
  if (metrikaLoaded) return
  metrikaLoaded = true

  ;(function (m, e, t, r, i, k, a) {
    m[i] =
      m[i] ||
      function () {
        ;(m[i].a = m[i].a || []).push(arguments)
      }
    m[i].l = 1 * new Date()
    for (let j = 0; j < document.scripts.length; j++) {
      if (document.scripts[j].src === r) {
        return
      }
    }
    k = e.createElement(t)
    a = e.getElementsByTagName(t)[0]
    k.async = 1
    k.src = r
    a.parentNode.insertBefore(k, a)
  })(window, document, 'script', METRIKA_URL, 'ym')

  if (window.ym) {
    window.ym(METRIKA_ID, 'init', {
      defer: true,
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true
    })
  }
}

export const loadDikidiWidget = () => {
  if (dikidiLoaded) return
  dikidiLoaded = true
  appendScript(DIKIDI_WIDGET_URL)
}

export const getMetrikaId = () => METRIKA_ID
