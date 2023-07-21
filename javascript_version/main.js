import './global.css'
import { renderPaymentForm } from './src/js/renderPaymentForm'
import IMask from 'imask'
import { CARD_NUMBER_MASK_OPTION, CVV_OPTION, MONTH_MASK_OPTION, YEAR_MASK_OPTION } from './src/js/js-modules/constants'
import { validateOnBlur, validateOnInput } from './src/js/js-modules/validation'
import { viewCVV } from './src/js/js-modules/viewCVV'
import { getCryptogram } from './src/js/js-modules/checkout'
import { loadCloudpaymentsScript } from './src/js/js-modules/loadCloudpaymentsScript'

const PAYMENT_FORM = renderPaymentForm();

const CARDNUMBER_INPUT = document.getElementById('card-number');
IMask(CARDNUMBER_INPUT, CARD_NUMBER_MASK_OPTION);

const MONTH_INPUT = document.getElementById('month');
IMask(MONTH_INPUT, MONTH_MASK_OPTION);

const YEAR_INPUT = document.getElementById('year');
IMask(YEAR_INPUT, YEAR_MASK_OPTION);

const CVV_INPUT = document.getElementById('cvv');
IMask(CVV_INPUT, CVV_OPTION);

MONTH_INPUT.addEventListener('blur', validateOnBlur);
YEAR_INPUT.addEventListener('blur', validateOnBlur);
YEAR_INPUT.addEventListener('input', validateOnInput);
CARDNUMBER_INPUT.addEventListener('blur', validateOnBlur);
CARDNUMBER_INPUT.addEventListener('input', validateOnInput);
CVV_INPUT.addEventListener('blur', validateOnBlur);
CVV_INPUT.addEventListener('input', validateOnInput);


const VIEW_BTN = document.getElementById('view-button');
VIEW_BTN.addEventListener('click', viewCVV);

PAYMENT_FORM.addEventListener('submit', async function (event) {
  event.preventDefault();

  await loadCloudpaymentsScript('https://checkout.cloudpayments.ru/checkout.js');

  const CRYPTOGRAMM = await getCryptogram(event.currentTarget)

  console.log(CRYPTOGRAMM)
})





