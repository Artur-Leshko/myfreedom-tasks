function contrariwise(enterString) {
    let newString = [];

    for (let i = enterString.length - 1, j = 0; j < enterString.length; i--, j++) {
        newString[j] = enterString[i];
    }

    return newString;
}

let myString = prompt('Введите строку!');
let result = '';

myString = contrariwise(myString);
for (let element of myString) {
    result += element;
}
alert(`Конечная строка: ${result}`);
