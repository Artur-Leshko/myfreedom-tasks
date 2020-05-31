document.addEventListener('DOMContentLoaded', function() {
    function calc(event) {
        event.preventDefault();

        let firstOperand = document.querySelector('.first__operand').value;
        let secondOperand = document.querySelector('.second__operand').value;
        let sign = document.querySelector('select').value;
        let findDiv = document.querySelector('div');
        let result = String(firstOperand) + String(sign) + String(secondOperand);

        result = eval(result);

        findDiv.textContent = result;
    }

    let findForm = document.querySelector('form');

    findForm.addEventListener('submit', calc);
});
