document.addEventListener('DOMContentLoaded', function() {
    function addLi(event) {
        event.preventDefault();
        
        let inputValue = document.querySelector('.text').value;
        let li = document.createElement('li');
        let ul = document.querySelector('ul');

        li.textContent = inputValue;

        ul.appendChild(li);
        document.querySelector('.text').value = "";
    }

    let form = document.querySelector('form');

    form.addEventListener('submit', addLi);
});
