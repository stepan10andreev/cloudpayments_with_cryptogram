import { VIEW_BTN_ICON, NO_VIEW_BTN_ICON } from './icons'

export function viewCVV(event: MouseEvent) {
  const CURRENT_TARGET = event.currentTarget as HTMLButtonElement;
  const CVV_INPUT = document.getElementById('cvv') as HTMLInputElement;
  if (CVV_INPUT.getAttribute('type') == 'password') {
    CURRENT_TARGET.innerHTML = NO_VIEW_BTN_ICON
    CVV_INPUT.setAttribute('type', 'text');
  } else {
    CURRENT_TARGET.innerHTML = VIEW_BTN_ICON
    CVV_INPUT.setAttribute('type', 'password');
  }
}
