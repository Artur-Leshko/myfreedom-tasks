document.addEventListener('DOMContentLoaded', function(event) {
    let calc = {
        value: 0,
        plus: (value) => value + 1,
        minus: (value) => value -1,
        read: () => console.log(calc.value)
    }

    let plus = document.querySelector('.plus');
    let minus = document.querySelector('.minus');
    let read = document.querySelector('.read');

    plus.addEventListener('click', (event) => {
        calc.value = calc.plus(calc.value);
    });

    minus.addEventListener('click', (event) => {
        calc.value = calc.minus(calc.value);
    });

    read.addEventListener('click', (event) => {
        calc.read();
    });
});
