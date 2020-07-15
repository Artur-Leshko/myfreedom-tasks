class StickerCreator {
    constructor(value) {
        this.value = value;
    }

    _newCoords() {
        let coords;
        let clientWidth = document.documentElement.clientWidth;
        let clientHeight = document.documentElement.clientHeight;
        let stickerWidth = 300;
        let stickerHeight = 150;

        coords = { newWidth: Math.random() * (clientWidth - stickerWidth), newHeight: Math.random() * (clientHeight - stickerHeight)};

        return coords;
    }

    _createSticker() {
        let sticker = document.createElement('div');
        let paragraph = document.createElement('p');
        let coords = this._newCoords();

        sticker.style.display = 'flex';
        sticker.style.alignItems = 'center';
        sticker.style.justifyContent = 'center';
        sticker.style.width = `300px`;
        sticker.style.height = `150px`;
        sticker.style.border = '2px solid #c70af2'
        sticker.style.borderRadius = '30px';
        sticker.style.backgroundColor = '#e987ff';
        sticker.style.position = 'absolute';
        sticker.style.top = `${coords.newHeight}px`;
        sticker.style.left = `${coords.newWidth}px`;
        sticker.style.color = 'black';
        sticker.style.fontSize = '20px';

        paragraph.textContent = this.value;
        sticker.appendChild(paragraph);

        return sticker;
    }

    addSticker() {
        let sticker = this._createSticker();
        var deltaX;
        var deltaY;

        let mousemove = function(event) {
            sticker.style.top = `${event.clientY - deltaY}px`;
            sticker.style.left = `${event.clientX - deltaX}px`;
        }

        sticker.addEventListener('mousedown', function(event) {
            deltaY = event.clientY - sticker.offsetTop;
            deltaX = event.clientX - sticker.offsetLeft;
            window.addEventListener('mousemove', mousemove)
        });

        sticker.addEventListener('mouseup', function(event) {
            window.removeEventListener('mousemove', mousemove)
        });

        document.body.appendChild(sticker);
    }
}

let form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let newSticker = new StickerCreator(document.querySelector('.inputTask').value);
    document.querySelector('.inputTask').value = '';
    newSticker.addSticker();
});
