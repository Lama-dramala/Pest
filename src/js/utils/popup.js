
import { DisableScroll, EnableScroll } from '../utils/scroll.js'

export const initPopups = () => {
    const buttons = document.querySelectorAll('.callpopup')
    const popups = document.querySelectorAll('.popup')
    const header = document.querySelector('.pest-header')
    const menu = document.querySelector('.pest-menu')

    buttons && buttons.length && buttons.forEach(button => {
        const popup = document.getElementById(button.dataset.popup)

        popup && button.addEventListener('click', () => {
            popup.classList.add('open')

            header && header.classList.remove('open')
            menu && menu.classList.remove('open')
            
            DisableScroll()
        })
    })

    popups && popups.length && popups.forEach(popup => {
        const close = popup.querySelector('.popup-close')
        const bg = popup.querySelector('.popup-bg')
        const closeButton = popup.querySelector('.popup-button-close')

        close && close.addEventListener('click', () => {
            EnableScroll()
            popup.classList.remove('open')
        })
        
        bg && bg.addEventListener('click', () => {
            EnableScroll()
            popup.classList.remove('open')            
        })

        closeButton && closeButton.addEventListener('click', () => {
            EnableScroll()
            popup.classList.remove('open')            
        })
    })
}