// Task 1

let str_1 = 'ahb acb aeb aeeb adcb axeb';
console.log('Task 1');
console.log(str_1);
console.log(str_1.match(/a\wb/g));

// Task 2

let str_2 = 'aba aca aea abba adca abea';

console.log('Task 2');
console.log(str_2);
console.log(str_2.match(/a\w{2}a/g));

// Task 3

let str_3 = 'aba aca aea abba adca abea';

console.log('Task 3');
console.log(str_3);
console.log(str_3.match(/ab.a/g));

// Task 4

let str_4 = 'aa aba abba abbba abca abea';

console.log('Task 4');
console.log(str_4);
console.log(str_4.match(/ab+a/g));

// Task 5

let str_5 = 'aa aba abba abbba abca abea';

console.log('Task 5');
console.log(str_5);
console.log(str_5.match(/ab*a/g));

// Task 6

let str_6 = 'aa aba abba abbba abca abea';

console.log('Task 6');
console.log(str_6);
console.log(str_6.match(/ab?a/g));

// Task 7

let str_7 = 'aa aba abba abbba abca abea';

console.log('Task 7');
console.log(str_7);
console.log(str_7.match(/ab*a/g));

// Task 8

let str_8 = 'aa aba abba abbba abca abea';

console.log('Task 8');
console.log(str_8);
console.log(str_8.match(/(ab){1,}/g));

// Task 9

let str_9 = 'a.a aba aea';

console.log('Task 9');
console.log(str_9);
console.log(str_9.match(/a\.a/g));

// Task 10

let str_10 = '2+3 223 2223';

console.log('Task 10');
console.log(str_10);
console.log(str_10.match(/2\+3/g));

// Task 11

let str_11 = '23 2+3 2++3 2+++3 345 567';

console.log('Task 11');
console.log(str_11);
console.log(str_11.match(/2\++3/g));

// Task 12

let str_12 = '23 2+3 2++3 2+++3 445 677';

console.log('Task 12');
console.log(str_12);
console.log(str_12.match(/2\+*3/g));

// Task 13

let str_13 = '*+ *q+ *qq+ *qqq+ *qqq qqq+';

console.log('Task 13');
console.log(str_13);
console.log(str_13.match(/\*q+\+/g));

// Task 14

let str_14 = 'aba accca azzza wwwwa';

console.log('Task 14');
console.log(str_14);
console.log(str_14.replace(/a.+?a/g, '!'));