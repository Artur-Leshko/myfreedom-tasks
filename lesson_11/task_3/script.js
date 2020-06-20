document.addEventListener('DOMContentLoaded', function(event) {
    function timeout(time) {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                let li = document.createElement('li');
                li.textContent = `Я добавлен через ${time / 1000} секунд(-ы)`;
                document.querySelector('ul').appendChild(li);
            },time);
            reject();
        })
    }

    timeout(3000);
});
