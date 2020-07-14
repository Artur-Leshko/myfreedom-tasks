class StickerBuilder {
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

        sticker.addEventListener('mousedown', function(event) {
            let x = event.offsetX == undefined ? event.layerX : event.offsetX;
            let y = event.offsetY == undefined ? event.layerY : event.offsetY;
            sticker.addEventListener('mousemove', function(event) {
                sticker.style.top = `${(undefined ? event.layerY : event.offsetY) - y}px`;
                sticker.style.left = `${(undefined ? event.layerX : event.offsetX) - x}px`;
            });
        });

        sticker.addEventListener('mouseup', function(event) {
            sticker.removeEventListener('mousemove', function(event) {
                
            });
        });

        document.body.appendChild(sticker);
    }
}

let form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let newSticker = new StickerBuilder(document.querySelector('.inputTask').value);
    document.querySelector('.inputTask').value = '';
    newSticker.addSticker();
});