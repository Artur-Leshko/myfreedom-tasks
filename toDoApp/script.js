document.addEventListener("DOMContentLoaded", function() {

    function addCheckbox(li) {
      let inputCheckbox = document.createElement('input');
      inputCheckbox.className = 'checkbox';
      inputCheckbox.setAttribute('type', 'checkbox');
      inputCheckbox.style.marginLeft = '10px';
      li.appendChild(inputCheckbox);

      inputCheckbox.addEventListener('change', function(event) {
        // Добавить сохранение checked в localStorage
        if (inputCheckbox.checked) {
          li.style.textDecoration = 'line-through';
        } else {
          li.style.textDecoration = '';
        }
      })
    }

    function addDeleteButton(li) {
      let inputDelete = document.createElement('input');
      inputDelete.setAttribute('type', 'submit');
      inputDelete.className = 'delete__button';
      inputDelete.value = 'Удалить';
      inputDelete.style.marginLeft = '15px';
      inputDelete.style.fontSize = '16px';
      inputDelete.style.padding = '5px';
      inputDelete.style.backgroundColor = '#ff4564';
      inputDelete.style.border = 'none';
      inputDelete.style.borderRadius = '10px';
      inputDelete.style.outline = 'none';
      li.appendChild(inputDelete);

      inputDelete.addEventListener('click', function(event){
        li.remove();
        addData();
      })
    }

    function createLi(text) {
      let li = document.createElement('li');
      li.textContent = text;
      return li;
    }

    function addLi(text) {
      let ul = document.querySelector('ul');
      let li = createLi(text);
      ul.appendChild(li);

      addCheckbox(li);
      addDeleteButton(li);
    }

    function loadData() {
      if (localStorage.toDoList) {
        let li = [];

        li = JSON.parse(localStorage.toDoList);
        
        for (let element of li) {
          addLi(element.text);
          // Добавить извелечение checked 
        }
      }
    }

    function addData() {
      let li = document.querySelectorAll('li');
      let result = [];

      for (let element of li) {
        result.push({text: element.textContent, checked: element.querySelector('.checkbox').checked});
      }

      localStorage.toDoList = JSON.stringify(result);
    }

    function mark() {
      let ul = document.querySelector('ul');

      for(let element of ul.querySelectorAll('li')) {
        element.style.textDecoration = 'line-through';
      }

      for(let element of ul.querySelectorAll('li input')) {
        element.checked = true;
      }
    }

    loadData();

    let textInput = document.querySelector('.input__goal');
    let form = document.querySelector('form');
    let markAll = document.querySelector('.mark__all');

    form.addEventListener("submit", function(event) {
      event.preventDefault();
      addLi(textInput.value);
      addData();
      textInput.value = '';
    });

    markAll.addEventListener('click', mark);
  });
