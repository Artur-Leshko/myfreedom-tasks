function makeExchange(money) {
    let obj = {};
    let arrayOfWords = ['H', 'Q', 'D', 'N', 'P'];
    let arrayOfNumbers = [50, 25, 10, 5, 1];
    
    for (let i = 0; i < arrayOfWords.length; i++) {
        if (Math.floor(money / arrayOfNumbers[i]) > 0) {
            obj[arrayOfWords[i]] =  Math.floor(money / arrayOfNumbers[i]);
            money -= Math.floor(money / arrayOfNumbers[i]) * arrayOfNumbers[i];
        }
    }

    return obj;
}

let money = Number(prompt("Введите количетсво денег!"));
let devidedMoney = {};

devidedMoney = makeExchange(money);

console.log(`Для ${money}: `);
for (let element in devidedMoney) {
    console.log(`${element}: ${devidedMoney[element]}`);
}
