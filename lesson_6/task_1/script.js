function zeroEnd(array) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] == '0') {
            for(let j = i; j < array.length; j++) {
                array[j] = array[j+1];
            }
            array[array.length - 1] = 0;
        }
    }
    return array;
}

let array = [];
let result = '';

for(let i = 0; i < 10; i++) {
    array[i] = prompt(`Введите ${i+1} элемент массива!`);
}

array = zeroEnd(array);
for (let element of array) {
    result += String(element) + ', ';
}
console.log(result);
