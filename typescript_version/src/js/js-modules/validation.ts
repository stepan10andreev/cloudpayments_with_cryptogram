import { AMERICAN__EXPRESS, MASTER_CARD, MAESTRO, JCB, VISA, MIR, CURRENT_YEAR, CURRENT_MONTH } from './constants'
import { VIEW_BTN_ICON, NO_VIEW_BTN_ICON, AMERICAN_EXPRESS_ICON, JCB_ICON, MIR_ICON, VISA_ICON, MASTER_CARD_ICON, MAESTRO_ICON } from './icons'

export function validateOnBlur(this: HTMLInputElement) {
  if (this.getAttribute('data-cp') === 'cardNumber') {
    const newValue = this.value.replaceAll(' ', '')
    newValue.length < 15 ?
      this.setAttribute('data-invalid', 'true') :
      this.removeAttribute('data-invalid')
  }

  if (this.getAttribute('data-cp') === 'expDateMonth') {
    if ((this.value.length === 1) && (+this.value != 0)) {
      (document.getElementById('month') as HTMLInputElement).value = (document.getElementById('month') as HTMLInputElement).value.padStart(2, '0');
    }


    (+this.value > 12) || (+this.value === 0) ?
      this.setAttribute('data-invalid', 'true') :
      this.removeAttribute('data-invalid')

    if ((+this.value < CURRENT_MONTH) && (+(document.getElementById('year') as HTMLInputElement).value === CURRENT_YEAR)) {
      (document.getElementById('month') as HTMLInputElement).setAttribute('data-invalid', 'true')
    }
  }

  if (this.getAttribute('data-cp') === 'expDateYear') {
    +this.value < CURRENT_YEAR ?
      this.setAttribute('data-invalid', 'true') :
      this.removeAttribute('data-invalid')

    if ((+this.value === CURRENT_YEAR) && (+(document.getElementById('month') as HTMLInputElement).value < CURRENT_MONTH)) {
      (document.getElementById('month') as HTMLInputElement).setAttribute('data-invalid', 'true')
    }
  }

  if (this.getAttribute('data-cp') === 'cvv') {
    this.value.length < 3 ?
      this.setAttribute('data-invalid', 'true') :
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

export function definePaySystem(input: HTMLInputElement) {
  const value = input.value.replaceAll(' ', '')
  const PAY_SYSTEM = document.getElementById('pay-system') as HTMLButtonElement

  AMERICAN__EXPRESS.test(value) ? PAY_SYSTEM.innerHTML = AMERICAN_EXPRESS_ICON :
  JCB.test(value) ? PAY_SYSTEM.innerHTML = JCB_ICON :
  MAESTRO.test(value) ? PAY_SYSTEM.innerHTML = MAESTRO_ICON :
  MASTER_CARD.test(value) ? PAY_SYSTEM.innerHTML = MASTER_CARD_ICON :
  MIR.test(value) ? PAY_SYSTEM.innerHTML = MIR_ICON :
  VISA.test(value) ? PAY_SYSTEM.innerHTML = VISA_ICON :
  PAY_SYSTEM.innerHTML = '';
}

export function validateOnInput(this: HTMLInputElement) {
  if (this.getAttribute('data-cp') === 'cardNumber') {
    const newValue = this.value.replaceAll(' ', '')
    newValue.length >= 15 && this.removeAttribute('data-invalid')

    definePaySystem(this)
  }

  if (this.getAttribute('data-cp') === 'expDateMonth') {
    +this.value > 12 ?
      this.setAttribute('data-invalid', 'true') :
      this.removeAttribute('data-invalid')
  }

  if (this.getAttribute('data-cp') === 'expDateYear') {
    +this.value < CURRENT_YEAR ?
      this.setAttribute('data-invalid', 'true') :
      this.removeAttribute('data-invalid')
  }

  if (this.getAttribute('data-cp') === 'cvv') {
    const VIEW_BTN = document.getElementById('view-button') as HTMLButtonElement
    this.value.length === 3 && this.removeAttribute('data-invalid')

    if (this.value.length > 0) {
      VIEW_BTN.classList.remove('visually-hidden')
      VIEW_BTN.innerHTML = VIEW_BTN_ICON

    } else {
      VIEW_BTN.classList.add('visually-hidden')
      VIEW_BTN.innerHTML = NO_VIEW_BTN_ICON
    }
  }
}
