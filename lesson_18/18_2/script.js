let duck = document.querySelector('.duck');
let start = document.querySelector('.start');
let trigger = false;
let counter = 0;

start.addEventListener('click', function(event) {
    trigger = true;
    event.target.remove();
});

duck.addEventListener('mousedown', function(event) {
    if(trigger) {
        counter++;
        document.querySelector('.counter').textContent = counter;

        if(counter === 5) {

        }
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
        
        duck.style.top = `${newHeightCoord}px`;
        duck.style.left = `${newWidthCoord}px`;
    }
});
