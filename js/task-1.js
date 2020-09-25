"use strict";

const invoice = 150;
const stock = 100;

// Write code under this line
let message =
  invoice <= stock
    ? "Заказ оформлен, с вами свяжется менеджер"
    : "На складе недостаточно товаров!";

console.log(message);
