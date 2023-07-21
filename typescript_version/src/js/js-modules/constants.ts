// Regexp for cards
export const AMERICAN__EXPRESS = /^3[47][0-9]{0,}$/; // /^3[47][0-9]{13}$/;
export const JCB = /^(?:2131|1800|35)[0-9]{0,}$/; // /^(?:2131|1800|35\d{3})\d{11}$/;
export const MAESTRO = /^(5[06789]|6)[0-9]{0,}$/;
export const MASTER_CARD = /^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)[0-9]{0,}$/; ///^5[1-5][0-9]{14}$/;
export const MIR = /^2[2][0-9]{0,}$/;
export const VISA = /^4[0-9]{0,}$/; // /^4[0-9]{12}(?:[0-9]{3})?$/;

// masks
/* for cardNumber */
export const CARD_NUMBER_MASK_OPTION = {
  mask: '0000 0000 0000 0000 000'
}

/* for month */
// 1 вариант с последующей коррекцией при вводе числа меньше 12
// export const MONTH_MASK_OPTION = {
//     mask: Number,
//     min: 1,
//     max: 12,
//     thousandsSeparator: ' '
// }

export const MONTH_MASK_OPTION = {
  mask: '00'
}

/* for year */
// 1 вариант с диапозоном
// export const YEAR_MASK_OPTION = {
//     mask: Number,
//     min: 23,
//     max: 99
// }

export const YEAR_MASK_OPTION = {
  mask: '00'
}

/* for CVV */
export const CVV_OPTION = {
  mask: '000',
}



// others
export const CURRENT_FULL_YEAR = new Date().getFullYear();
export const CURRENT_MONTH = new Date().getMonth() + 1;
export const CURRENT_YEAR = +('' + CURRENT_FULL_YEAR).split('').splice(2).join('');
export const VIEW_BTN = document.getElementById('view-button')
