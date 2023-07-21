# Кастомная форма оплаты c подключением [CloudPayments](https://cloudpayments.ru/)

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" width='30'/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"  width='30'/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" width='30'/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" width='30'/> <img src="https://camo.githubusercontent.com/61e102d7c605ff91efedb9d7e47c1c4a07cef59d3e1da202fd74f4772122ca4e/68747470733a2f2f766974656a732e6465762f6c6f676f2e737667" width='30'/> 

Кастомная форма для ввода карточных данных, интегрированная с [CloudPayments](https://cloudpayments.ru/)

Реализована через [cкрипт Checkout](https://developers.cloudpayments.ru/#skript-checkout) c получением криптограммы для оплаты через [API CloudPayments](https://developers.cloudpayments.ru/#printsip-raboty)

## Описание
В корне репозитория 2 папки:
1) javascript_version: написано на чистом JS
2) typescript_version: аналог на TypeScript

Форма реализована с использованием:
- для масок полей ввода использована [imaskjs](https://github.com/uNmAnNeR/imaskjs)
- валидация полей ввода на чистом JS/TS
- рендеринг формы оплаты(DOM-дерева) происходит через JS/TS
- реализовано распознование типа платежной системы при введении номера карты (VISA, Mastercard, JCB, American Express, МИР, Maestro)

Валидация
- `Номер карты`: от 15 (для карт AMEX) до 19 цифр.
- `Месяц`: 2 цифры
  - значение не более 12 и не равно 0
  - при вводе 1 цифры (если это не 0) и потери фокуса с инпута - автоматически значение преобразуется в '0' + 'введенное значение'
  - если значение `года` равно текущему году, то значение `месяца` меньше текущего месяца - невалидно
- `Год`: последние 2 цифры года
  - значение не меньше текущего года
- `CVV`: 3 цифры
  - можно изменять видимость СVV-кода

При невалидных знаечниях границы инпута окрашиваются красным цветом.

## Установка
Перейти в одну из папок в корне репозитория (javascript_version или typescript_version)

### Установка зависимостей
Для установки зависимостей, выполните команду:
```sh
$ npm i
```

### Запуск Development сервера
Чтобы запустить сервер для разработки, выполните команду:
```sh
npm run dev
```

### Создание Production сборки
Чтобы выполнить Production сборку, выполните команду: 
```sh
npm run build
```

## Использование

Рендеринг DOM-дерева, подключение стилей, а также небходимых скриптов (для работы с `CloudPayments`) происходит полностью через JS/TS.

При Production сборки появится папка dist, содержащая единый js-bundle, который можно подключить к любой странице и сгенерировать форму оплаты в нужном месте:

- для этого на странице должен быть `HTMLElement` c `id`: `paymentContainer`, куда необходимо встроить форму оплаты.

[Как выглядит форма](https://stepan10andreev.github.io/cloudpayments_with_cryptogram/)
