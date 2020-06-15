document.addEventListener('DOMContentLoaded', function() {
    let request = new XMLHttpRequest();
    
    request.onload = () => {
        let obj = JSON.parse(request.responseText);
        let body = document.querySelector('body');
        let ul = document.createElement('ul');

        for (let i = 0; i < 30; i++) {
            let li = document.createElement('li');
            li.textContent = `Name: ${obj[i].name}; Email: ${obj[i].email}; Body: ${obj[i].body};`;
            ul.appendChild(li);
        }

        body.appendChild(ul);
    }

    request.open('GET', 'https://jsonplaceholder.typicode.com/comments');
    request.send();
});
