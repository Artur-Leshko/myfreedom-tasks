document.addEventListener('DOMContentLoaded', function(event) {
    class Logo {
        constructor(url) {
            this.top = 0;
            this.left = 0;
            this.width = 200;
            this.imgUrl = url;
            this.html = null;
        }
        
        init() {
            // метод должен создать тег img
            // вложить в него src картинки (this.imgUrl)
            // и записать в this.html
            // + дергаем render
        
            // + странице должен залится фон черным
            let img = document.createElement('img');
            img.setAttribute('src', this.imgUrl);
            img.className = 'image';

            this.html = img;
            this.render();
            document.body.style.backgroundColor = 'black';
        }
        
        render() {
            // метод должен отрисовать изображение (this.html) на странице
            // применить фиксированное позиционирование
            // использовать this.top и this.left для указания позиции
            // использовать this.width для указания ширины
            this.html.style.position = 'fixed';
            this.html.style.top = `${this.top}px`;
            this.html.style.left = `${this.left}px`;
            this.html.style.width = `${this.width}px`;

            document.body.appendChild(this.html);
            
        }
        
        moveUp() {
            // метод должен изменять top нашего объекта так
            // чтобы элемент передвинулся ВЫШЕ
            // на 20px
            // + дергаем render
            this.top -= 20;
            this.render();
        }
        moveDown() {
            // метод должен изменять top нашего объекта так
            // чтобы элемент передвинулся НИЖЕ
            // на 20px
            // + дергаем render
            this.top += 20;
            this.render();
        }
        moveLeft() {
            // метод должен изменять left нашего объекта так
            // чтобы элемент передвинулся ЛЕВЕЕ
            // на 20px
            // + дергаем render
            this.left -= 20;
            this.render();
        }
        moveRight() {
            // метод должен изменять left нашего объекта так
            // чтобы элемент передвинулся ПРАВЕЕ
            // на 20px
            // + дергаем render
            this.left += 20;
            this.render();
        }
    }

    function addButtons() {
        let wordsArray = ['Move Top', 'Move Down', 'Move Right', 'Move Left'];
        wordsArray.reverse();
        let right = 10;

        for (let element of wordsArray) {
            let button = document.createElement('button');

            button.setAttribute('type', 'button');
            button.textContent = element;
            button.style.position = 'fixed';
            button.style.top = '10px';
            button.style.right = `${right}px`; 

            button.addEventListener('click', (event) => {
                if (button.textContent.includes('Top')) {
                    mfLogotip.moveUp();
                } else if (button.textContent.includes('Down')) {
                    mfLogotip.moveDown();
                } else if (button.textContent.includes('Right')) {
                    mfLogotip.moveRight();
                } else {
                    mfLogotip.moveLeft();
                }
            });

            document.body.appendChild(button);
            right += 90;
        }
    }
      
    const imgUrl = 'https://bit.ly/2tcDito';
    let mfLogotip = new Logo(imgUrl);
    console.log(mfLogotip);
    
    // запускаем наше микро-приложение
    mfLogotip.init();
    addButtons();
});
