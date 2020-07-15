let duck = document.querySelector('.duck');
let time = document.querySelector('.time');
let start = document.querySelector('.start');
let end_game = document.querySelector('.end_game');
let restart = document.querySelector('.restart');
let scaleX = -1;
let trigger = false;
let counter = 0;
let seconds = 60;

timer = setInterval(function() {

    if(seconds <= 0) {
        trigger = false;
        time.textContent = '0';
        document.querySelector('.end_game__status').textContent = 'Поражение!';
        document.querySelector('.end_game').style.display = 'flex';
    } else {
        if(counter === 5) {
            trigger = false;
            time.textContent = '0';
            document.querySelector('.end_game__status').textContent = 'Победа!';
            document.querySelector('.end_game').style.display = 'flex';
            return 0;
        }

        time.textContent = `${seconds}`;
    }

    seconds--;
}, 1000);

start.addEventListener('click', function(event) {
    trigger = true;
    timer;
    event.target.remove();
});

duck.addEventListener('mousedown', function(event) {
    if(trigger) {
        counter++;
        document.querySelector('.counter').textContent = counter;
    }
});

duck.addEventListener('mousemove', function(event) {
    if(trigger) {
        let clientWidth = document.documentElement.clientWidth;
        let clientHeight = document.documentElement.clientHeight;
        let duckWidth = duck.clientWidth;
        let duckHeight = duck.clientHeight;

        let newWidthCoord = Math.random() * (clientWidth - duckWidth);
        let newHeightCoord = Math.random() * (clientHeight - duckHeight);
        
        scaleX = -scaleX;
        duck.style.top = `${newHeightCoord}px`;
        duck.style.left = `${newWidthCoord}px`;
        duck.style.transform = `scaleX(${scaleX})`;
    }
});

restart.addEventListener('click', function(event) {
    trigger = true;
    seconds = 60;
    timer;
    document.querySelector('.end_game').style.display = 'none';
    counter = 0;
    document.querySelector('.counter').textContent = counter;
});