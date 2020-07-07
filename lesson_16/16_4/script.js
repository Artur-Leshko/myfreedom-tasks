function addLi(ul, element) {
    let li = document.createElement('li');
    let firstDiv = document.createElement('div');
    let secondDiv = document.createElement('div');

    firstDiv.textContent = element.title;
    secondDiv.textContent = element.done;

    li.appendChild(firstDiv);
    li.appendChild(secondDiv);

    li.style.display = 'inline-block';
    li.style.borderTop = '1px solid black';
    li.style.margin = '10px 10px';

    ul.appendChild(li);
}

class ListFilter {
    constructor() {

    }

    filter(value, arrayOfTitles) {
        let newArrayOfTitles = [];
        let pattern = new RegExp(value);
        
        for(let element of arrayOfTitles) {
            if(pattern.test(element.title)) {
               newArrayOfTitles[newArrayOfTitles.length] = element; 
            }
        }
        console.log(newArrayOfTitles);
        return newArrayOfTitles;
    }
}

class elementUpdate {
    constructor() {

    }

    update(filteredArray) {
        document.querySelector('ul').remove();
        let ul = document.createElement('ul');

        for(let element of filteredArray) {
            addLi(ul, element);
        }

        document.body.appendChild(ul);
    }
}

class elementCreater {
    constructor() {

    }

    async addElements(ul) {
        let request = await fetch('https://todoappexamplejs.herokuapp.com/items', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
        let arrayOfTitles = [];

        request = await request.json();
        console.log(request);
        for(let element of request) {
            addLi(ul, element);
            arrayOfTitles[arrayOfTitles.length] = {title: element.title, done: element.done};
        }

        let input = document.querySelector('.input__text');
        let searchButton = document.querySelector('.search');

        searchButton.addEventListener('click', function(event) {
            let sort = new ListFilter();
            let update = new elementUpdate();
            update.update(sort.filter(input.value, arrayOfTitles));
        });
    }
}

let ul = document.querySelector('ul');
let resetButton = document.querySelector('.reset');
let request = new elementCreater();

request.addElements(ul);

resetButton.addEventListener('click', function(event) {
    location.reload();
});

