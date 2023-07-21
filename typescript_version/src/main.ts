import '../global.css'
import { renderPaymentForm } from './js/renderPaymentForm'
import IMask from 'imask'
import { CARD_NUMBER_MASK_OPTION, CVV_OPTION, MONTH_MASK_OPTION, YEAR_MASK_OPTION } from './js/js-modules/constants'
import { validateOnBlur, validateOnInput } from './js/js-modules/validation'
import { viewCVV } from './js/js-modules/viewCVV'
import { getCryptogram } from './js/js-modules/checkout'
import { loadCloudpaymentsScript } from './js/js-modules/loadCloudpaymentsScript'

const PAYMENT_FORM = renderPaymentForm() as HTMLInputElement;

const CARDNUMBER_INPUT = document.getElementById('card-number') as HTMLInputElement;
IMask(CARDNUMBER_INPUT, CARD_NUMBER_MASK_OPTION);

const MONTH_INPUT = document.getElementById('month') as HTMLInputElement;
IMask(MONTH_INPUT, MONTH_MASK_OPTION);

const YEAR_INPUT = document.getElementById('year') as HTMLInputElement;
IMask(YEAR_INPUT, YEAR_MASK_OPTION);

const CVV_INPUT = document.getElementById('cvv') as HTMLInputElement;
IMask(CVV_INPUT, CVV_OPTION);

MONTH_INPUT.addEventListener('blur', validateOnBlur);
YEAR_INPUT.addEventListener('blur', validateOnBlur);
YEAR_INPUT.addEventListener('input', validateOnInput);
CARDNUMBER_INPUT.addEventListener('blur', validateOnBlur);
CARDNUMBER_INPUT.addEventListener('input', validateOnInput);
CVV_INPUT.addEventListener('blur', validateOnBlur);
CVV_INPUT.addEventListener('input', validateOnInput);


const VIEW_BTN = document.getElementById('view-button') as HTMLInputElement;
VIEW_BTN.addEventListener('click', viewCVV);

PAYMENT_FORM.addEventListener('submit', async function (event) {
  event.preventDefault();

  await loadCloudpaymentsScript('https://checkout.cloudpayments.ru/checkout.js');

  const CRYPTOGRAMM = await getCryptogram(event.currentTarget as HTMLFormElement);

  console.log(CRYPTOGRAMM)
})





