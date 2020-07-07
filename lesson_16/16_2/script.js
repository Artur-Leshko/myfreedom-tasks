// Task 1

let str_1 = String(prompt('Введите строку для первого задания!'));
let pattern_1 = /^a+$/;

console.log(str_1);
console.log(pattern_1.test(str_1));
console.log('Не знаю как полностью сделать первое задание :(');

// Task 3

let email = String(prompt('Введите email для проверки!'));
let pattern_2 = /\w+@\w+\.\w+/;

console.log(email);
console.log(pattern_2.test(email));

// Task 4
let text = document.querySelector('.text').textContent;

document.querySelector('.text').textContent = text.replace(/(функци.+?)/g, 'ФУНКЦИЯ');