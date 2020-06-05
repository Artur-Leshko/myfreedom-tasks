function evenPositive(array) {
    let new_array = [];
    let new_length = 0;

    for (let i = 0; i < array.length; i++) {
        if((array[i] > 0) && (array[i] % 2 == 0)) {
            new_array[new_length] = array[i];
            new_length++;
        }
    }

    return new_array;
}

let array = [];
let result = '';

for (let i = 0; i < 10; i++) {
    array[i] = Number(prompt(`Введите ${i+1} елемент массива!`));
}

array = evenPositive(array);
for (let element of array) {
    result += String(element) + ', ';
}
console.log(result);
