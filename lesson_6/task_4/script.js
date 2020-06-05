function getMiddle(myString) {
    let middleElements = [];
    if (myString.length % 2 == 0) {
        middleElements[0] = myString[myString.length / 2 - 1];
        middleElements[1] = myString[myString.length / 2];
        return middleElements;
    } else {
        middleElements[0] = myString[(myString.length - 1) / 2];
        return middleElements;
    }
}

let myString = prompt('Введит строку!');
let result = '';

myString = getMiddle(myString);
for (let element of myString) {
    result += element;
}
alert(`Центральные символы строки: ${result}`);
