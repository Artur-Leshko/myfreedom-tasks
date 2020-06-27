class Calc {
    constructor(initNumber) {
        this.value = initNumber;
    }

    plus(addendum) {
        this.value = this.value + addendum;
        document.querySelector('.result').value = this.value;
    }

    minus(addendum) {
        this.value = this.value - addendum;
        document.querySelector('.result').value = this.value;
    }

    multiply(addendum) {
        this.value = this.value * addendum;
        document.querySelector('.result').value = this.value;
    }

    divide(addendum) {
        this.value = this.value / addendum;
        document.querySelector('.result').value = this.value;
    }
}

const calc = new Calc(10);
let enter = document.querySelector('.enter');
document.querySelector('.result').value = 10;

document.querySelector('.plus').addEventListener('click', function(event) {
    calc.plus(Number(enter.value));
    enter.value = '';
})

document.querySelector('.minus').addEventListener('click', function(event) {
    calc.minus(Number(enter.value));
    enter.value = '';
})

document.querySelector('.multiply').addEventListener('click', function(event) {
    calc.multiply(Number(enter.value));
    enter.value = '';
})

document.querySelector('.divide').addEventListener('click', function(event) {
    calc.divide(Number(enter.value));
    enter.value = '';
})
