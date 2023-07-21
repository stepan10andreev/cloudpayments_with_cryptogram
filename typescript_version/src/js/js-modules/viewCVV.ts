import styles from '../paymentForm.module.scss'

export function viewCVV(event: MouseEvent) {
  const CURRENT_TARGET = event.currentTarget as HTMLButtonElement;
  const CVV_INPUT = document.getElementById('cvv') as HTMLInputElement;
  if (CVV_INPUT.getAttribute('type') == 'password') {
    CURRENT_TARGET.classList.add(`${styles.viewCVV}`);
    CVV_INPUT.setAttribute('type', 'text');
  } else {
    CURRENT_TARGET.classList.remove(`${styles.viewCVV}`);
    CVV_INPUT.setAttribute('type', 'password');
  }
}
