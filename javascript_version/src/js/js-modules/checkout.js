// вариант -  функция получения криптограммы с передачей в аргументе самой форму и возвращение либо криптграммы либо ошибки либо обьекта с обоими полями
export const getCryptogram = async (form) => {
  // eslint-disable-next-line no-undef
  const checkout = new cp.Checkout({
    publicId: 'test_api_000000000000000002',
    container: form
  });


  // можно вернуть обьект с полями cryptogram и error в зависимости от ответа
  try {
    const result = await checkout.createPaymentCryptogram()
    // console.log(result)
    return result
  } catch (error) {
    console.log(error)
    // return error
  }
};






// 2 вариант - полноценная функция - загружает скрипт, затем обработчик события на форму и генерация криптограммы или ошибки
// export async function getCryptogram(form) {
//   await loadCloudpaymentsScript('https://checkout.cloudpayments.ru/checkout.js');
//   let result

//   // eslint-disable-next-line no-undef
//   const checkout = new cp.Checkout({
//     publicId: 'test_api_000000000000000002',
//     container: form
//   });

//   // console.log(PAYMENT_FORM.querySelectorAll('.payment-form__input'))

//   // form.addEventListener('submit', function (event) {
//   //   event.preventDefault();
//   //   const ALL_INPUTS = this.querySelectorAll('.payment-form__input');
//   //   for (const input of ALL_INPUTS) {
//   //     if (input.hasAttribute('data-invalid')) return;
//   //   }

//     checkout.createPaymentCryptogram()
//       .then((cryptogram) => {
//         console.log(cryptogram);
//         result = cryptogram
//         // логика при получении криптограммы
//         // отправка запроса на cloudpayments
//       }).catch((errors) => {
//         console.log(errors)
//         result = errors
//         // логика при получении ошибки
//         // обьект с полями и значениями ошибок, можно выводить под кнопкой Оплатить / под формой
//       });
//   // })

//   return result

// }

