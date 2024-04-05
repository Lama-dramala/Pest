
import { initLazyLoad } from './utils/lazyLoad.js'
import { initHeader } from './parts/header.js'
import { initPopups } from './utils/popup.js'
import { initForms } from './utils/form.js'
import { initSwiper } from './utils/swiper.js'
import { initHome } from './pages/home.js'

initLazyLoad()

document.addEventListener('DOMContentLoaded', () => {

	initHeader()

	initPopups()

	initForms()

	initSwiper()

    initHome()

})
