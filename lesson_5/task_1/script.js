document.addEventListener('DOMContentLoaded', function() {
    function addLi(event) {
        let key = event.key;
        let ul = document.querySelector('ul');
        let li = document.createElement('li');

        li.textContent = key;
        ul.appendChild(li);
    }

    let input = document.querySelector('input');

    input.addEventListener('keyup', addLi);
});
