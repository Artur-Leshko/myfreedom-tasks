document.addEventListener('DOMContentLoaded', (event) => {
    let calcPlus = {
        value: 0,
        plus: (inputValue) => {
            calcPlus.value = Number(calcPlus.value) + Number(inputValue);
            return calcPlus.value + inputValue;
        },
        minus: (inputValue) => {
            calcPlus.value = Number(calcPlus.value) - Number(inputValue);
            return calcPlus.value + inputValue;
        },
        multiply: (inputValue) => {
            calcPlus.value = Number(calcPlus.value) * Number(inputValue);
            return calcPlus.value + inputValue;
        },
        divide: (inputValue) => {
            calcPlus.value = Number(calcPlus.value) / Number(inputValue);
            return calcPlus.value + inputValue;
        },
        sign: '',
        is: (inputValue) => {
            switch(calcPlus.sign) {
                case '+': calcPlus.plus(input.value);
                break;
                case '-': calcPlus.minus(input.value);
                break;
                case '*': calcPlus.multiply(input.value);
                break;
                case '/': calcPlus.divide(input.value);
            }
        }
    };

    let input = document.querySelector('input');
    let plus = document.querySelector('.plus');
    let minus = document.querySelector('.minus');
    let multiply = document.querySelector('.multiply');
    let divide = document.querySelector('.divide');
    let is = document.querySelector('.is');
    let clear = document.querySelector('.clear');
    input.focus();

    plus.addEventListener('click', (event) => {
        calcPlus.value = input.value;
        calcPlus.sign = '+';
        input.value = '';
        input.focus();
    })

    minus.addEventListener('click', (event) => {
        calcPlus.value = input.value;
        calcPlus.sign = '-';
        input.value = '';
        input.focus();
    })

    multiply.addEventListener('click', (event) => {
        calcPlus.value = input.value;
        calcPlus.sign = '*';
        input.value = '';
        input.focus();
    })

    divide.addEventListener('click', (event) => {
        calcPlus.value = input.value;
        if(calcPlus.value == 0) {
            input.value = 'Error';
        } else {
            calcPlus.sign = '/';
            input.value = '';
        }
        input.focus();
    })

    is.addEventListener('click', (event) => {
        calcPlus.is(input.value);
        input.value = calcPlus.value;
    })

    clear.addEventListener('click', (event) => {
        calcPlus.value = 0;
        input.value = 0;
        input.focus();
    })
});
