
import { EnableScroll } from '../utils/scroll.js'
import IMask from 'imask'

const initForm = (form) => {
    const required = form.querySelectorAll('.required')
    const phones = form.querySelectorAll('input[name="phone"]')

    phones && phones.length && phones.forEach(phone => {
        const phoneMask = IMask(phone, { mask: '{+38} (000) 000 00 00' })
    })

    required && required.length && required.forEach((field) => {
        field.addEventListener('focus', () => field.parentNode.classList.remove('error'))
    })

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let errors = 0

        required.forEach(field => {
            if (field.name == 'email') {
                if (!field.value.length || !validateEmail(field.value)) {
                    field.parentNode.classList.add('error')
                    errors++
                } else {
                    field.parentNode.classList.remove('error')
                }
            } else if (field.name == 'phone' || field.name == 'telephone') {
                if (field.value.length < 19) {
                    field.parentNode.classList.add('error')
                    errors++
                } else {
                    field.parentNode.classList.remove('error')
                }
            } else {
                if (!field.value.length) {
                    field.parentNode.classList.add('error')
                    errors++
                } else {
                    field.parentNode.classList.remove('error')
                }
            }
        })


        if (errors > 0) return false

        formAjaxSend(form)
    })
}

const formAjaxSend = (form) => {
    const fields =  form.querySelectorAll('input, textarea')

    let url = '/mail.php'
    let data = {}

    fields && fields.length && fields.forEach(field => {
        data[field.name] =  field.value.replace(/\n/g, '<br/>')
    })        

    data = Object.keys(data).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&')

    fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: data
    })
    .then(response => response.json())
    .then(response => {
        formSuccessSubmit(form)
    }).catch(() => formSuccessSubmit(form))
}

const formSuccessSubmit = (form) => {
    const popup = form.closest('.popup')
    const success = document.querySelector('.popup#success-popup')
	const fields = form.querySelectorAll('input, textarea')

    popup && popup.classList.remove('open')
    success && success.classList.add('open')
    
    EnableScroll()

	fields.forEach((field) => field.value = '')   

    setTimeout(() => success && success.classList.remove('open'), 5000)
}

const validateEmail = (email) => {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
}


export const initForms = () => {
    const forms = document.querySelectorAll('form.form')

    forms && forms.length && forms.forEach(form => initForm(form))
}
