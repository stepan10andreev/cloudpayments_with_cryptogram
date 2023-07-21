import styles from './paymentForm.module.scss'
import paySystemsImg from '../image/pay-systems.svg'

export const renderPaymentForm = () => {
  document.querySelector('#paymentContainer').innerHTML = `
  <form id="payment-form" class=${styles.paymentForm} autocomplete="off">
    <label class="${styles.label}">
        <input id="card-number" type="tel" class="${styles.input} ${styles.cardNumberInput} visa" placeholder="Номер карты" data-cp="cardNumber">
    </label>
    <div class="${styles.CVVsection}">
        <label class="${styles.label} ${styles.monthLabel}">
            <input id="month" type="tel" class="${styles.input} ${styles.monthInput}" placeholder="ММ" data-cp="expDateMonth">
        </label>
        <div class="${styles.separator}">/</div>
        <label class="${styles.label} ${styles.yearLabel}">
            <input id="year" type="tel" class="${styles.input} ${styles.yearInput}" placeholder="ГГ" data-cp="expDateYear">
        </label>
        <label class="${styles.label} ${styles.CVVLabel}">
            <input id="cvv" type="password" class="${styles.input} ${styles.CVVInput}" placeholder="CVC / CVV2" data-cp="cvv">
            <button type="button" id="view-button" class="${styles.viewButton} visually-hidden"></button>
        </label>
    </div>
    <!-- Необязательное поле - валидируется только если указано в форме или передано в объекте CardData. -->
    <!-- <label class="${styles.label}">
        <input type="text" class="${styles.input} ${styles.input}--name" data-cp="name">
    </label> -->
    <button id="payment-button" class="${styles.button}" type="submit">Оплатить</button>
    </form>
    <picture class="${styles.paySystems}">
    <img src="${paySystemsImg}" alt="Платежные системы">
    </picture>
`
  return  document.getElementById("payment-form")
}

