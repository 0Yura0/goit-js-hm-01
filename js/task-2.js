'use strict';
/*Задание 2
Напиши скрипт проверки количества товаров на складе. Есть переменные `total`
(количество товаров на складе) и `ordered` (единиц товара в заказе).
Сравни эти значения и по результатам выведи:
- Если в заказе указано число, превышающее количество товаров на складе, то
  выведи сообщение `"На складе недостаточно твоаров!"`.
- В другом случае выводи сообщение `"Заказ оформлен, с вами свяжется менеджер"`.
Проверь работоспособность кода с разными значениями переменной `ordered`,
например `20`, `80` и `130`.*/
const total = 90;
let ordered = 40;
console.log (ordered > total`"На складе недостаточно твоаров!"`)
console.log(ordered<total`"Заказ оформлен, с вами свяжется менеджер"`)
ordered=20;
console.log (ordered > total`"На складе недостаточно твоаров!"`)
console.log(ordered<total`"Заказ оформлен, с вами свяжется менеджер"`)
ordered=80;
console.log (ordered > total`"На складе недостаточно твоаров!"`)
console.log(ordered<total`"Заказ оформлен, с вами свяжется менеджер"`)
ordered=130;
console.log (ordered > total`"На складе недостаточно твоаров!"`)
console.log(ordered<total`"Заказ оформлен, с вами свяжется менеджер"`);