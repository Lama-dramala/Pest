
const html = document.querySelector('html')
const body = document.querySelector('body')


export const DisableScroll = () => {
    if (window.innerWidth > 1080) {
        body.style = 'overflow: hidden; margin-right: 5px;'
    } else {
        const is_ios = /iP(ad|od|hone)/i.test(window.navigator.userAgent)
        const is_safari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)

        if (is_ios && is_safari ) {
            html.style = 'overflow: hidden;'
        } else {
            html.style = 'overflow: hidden;'
            body.style = 'overflow: hidden;'
        }        
    }
}

export const EnableScroll = () => {
    html.style = ''
    body.style = ''
}
