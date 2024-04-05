import { EnableScroll, DisableScroll } from '../utils/scroll.js'

const initHeaderToggle = () => {
    const header = document.querySelector('.pest-header')
    const menu = document.querySelector('.pest-menu')
    const burger = document.querySelector('.pest-header .menu-btn')
   
    burger && burger.addEventListener('click', (e) => {
        header && header.classList.toggle('open')
        menu && menu.classList.toggle('open')

        header && header.classList.contains('open') ? DisableScroll() : EnableScroll()
    })
}

const initHeaderMenu = () => {
    const header = document.querySelector('.pest-header')
    const menu = document.querySelector('.pest-menu')
	const links = document.querySelectorAll('.pest-menu a')

	links && links.length && links.forEach(link => {
		const block = link.getAttribute('href')
		const el = block != '#' ? document.querySelector(block) : false

		link.addEventListener('click', (e) => {
			e.preventDefault()
			EnableScroll()
			header && header.classList.remove('open')
            menu && menu.classList.remove('open')

			if (el) {
				const offset = el.offsetTop - el.parentNode.offsetTop
				window.scroll({ top: offset, left: 0, behavior: 'smooth' });
			}
		})
	})
}

export const initHeader = () => {
    
    initHeaderToggle()

      initHeaderMenu()

}
