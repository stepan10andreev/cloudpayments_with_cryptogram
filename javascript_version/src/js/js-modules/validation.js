import { AMERICAN__EXPRESS, MASTER_CARD, MAESTRO, JCB, VISA, MIR, CURRENT_YEAR, CURRENT_MONTH } from './constants'
import styles from '../paymentForm.module.scss'

export function validateOnBlur() {
  if (this.getAttribute('data-cp') === 'cardNumber') {
    const newValue = this.value.replaceAll(' ', '')
    newValue.length < 15 ?
      this.setAttribute('data-invalid', true) :
      this.removeAttribute('data-invalid', true)
  }

  if (this.getAttribute('data-cp') === 'expDateMonth') {
    if ((this.value.length === 1) && (+this.value != 0)) {
      document.getElementById('month').value = document.getElementById('month').value.padStart(2, '0');
    }

    (+this.value > 12) || (+this.value === 0) ?
      this.setAttribute('data-invalid', true) :
      this.removeAttribute('data-invalid', true)

    if ((+this.value < CURRENT_MONTH) && (+document.getElementById('year').value === CURRENT_YEAR)) {
      document.getElementById('month').setAttribute('data-invalid', 'true')
    }
  }

  if (this.getAttribute('data-cp') === 'expDateYear') {
    +this.value < CURRENT_YEAR ?
      this.setAttribute('data-invalid', true) :
      this.removeAttribute('data-invalid')

    if ((+this.value === CURRENT_YEAR) && (+(document.getElementById('month')).value < CURRENT_MONTH)) {
      document.getElementById('month').setAttribute('data-invalid', 'true')
    }
  }

  if (this.getAttribute('data-cp') === 'cvv') {
    this.value.length < 3 ?
      this.setAttribute('data-invalid', true) :
      this.removeAttribute('data-invalid')
  }
}

// function validateInputsOnFocus() {
//     if (this.getAttribute('data-cp') === 'cvv') {
//         if (this.value.length > 0) {
//             const VIEW_BTN = document.getElementById('view-button')
//             VIEW_BTN.classList.remove('visually-hidden')
//         }
//     }
// }

export function definePaySystem(input) {
  const value = input.value.replaceAll(' ', '')

  AMERICAN__EXPRESS.test(value) ? input.classList.add(`${styles.ae}`) : input.classList.remove(`${styles.ae}`)
  JCB.test(value) ? input.classList.add(`${styles.jcb}`) : input.classList.remove(`${styles.jcb}`)
  MAESTRO.test(value) ? input.classList.add(`${styles.maestro}`) : input.classList.remove(`${styles.maestro}`)
  MASTER_CARD.test(value) ? input.classList.add(`${styles.mc}`) : input.classList.remove(`${styles.mc}`)
  MIR.test(value) ? input.classList.add(`${styles.mir}`) : input.classList.remove(`${styles.mir}`)
  VISA.test(value) ? input.classList.add(`${styles.visa}`) : input.classList.remove(`${styles.visa}`)
}

export function validateOnInput() {
  if (this.getAttribute('data-cp') === 'cardNumber') {
    const newValue = this.value.replaceAll(' ', '')
    newValue.length >= 15 && this.removeAttribute('data-invalid', true)

    definePaySystem(this)
  }

  if (this.getAttribute('data-cp') === 'expDateMonth') {
    (+this.value > 12) ?
      this.setAttribute('data-invalid', true) :
      this.removeAttribute('data-invalid', true)
  }

  if (this.getAttribute('data-cp') === 'expDateYear') {
    +this.value < CURRENT_YEAR ?
      this.setAttribute('data-invalid', true) :
      this.removeAttribute('data-invalid')
  }

  if (this.getAttribute('data-cp') === 'cvv') {
    // валидация если символов меньше 3 - можно убрать, так как при вводе первого символа будет сразу показывать ошибку
    // this.value.length < 3 ?
    //     this.setAttribute('data-invalid', true) :
    //     this.removeAttribute('data-invalid')
    this.value.length === 3 && this.removeAttribute('data-invalid')

    if (this.value.length > 0) {
      document.getElementById('view-button').classList.remove('visually-hidden')
    } else {
      document.getElementById('view-button').classList.add('visually-hidden')
    }
  }
}
