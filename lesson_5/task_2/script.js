document.addEventListener('DOMContentLoaded', function() {
    function inputAction(event) {
        let inputValue = document.querySelector('input').value;
        let findDiv = document.querySelector('div');
        let addP = document.createElement('p');

        console.log(inputValue);

        addP.textContent = `Клиент набирает: ${inputValue}`;
        findDiv.appendChild(addP);
    }

    let input = document.querySelector('input');

    input.addEventListener('keyup', inputAction);
});
