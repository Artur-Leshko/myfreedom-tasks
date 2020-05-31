document.addEventListener('DOMContentLoaded', function(){
    function mouseEnter(event) {
        let button = document.querySelector('button');
        button.style.backgroundColor = geneateColor();
    }

    function mouseLeave(event) {
        let button = document.querySelector('button');
        button.style.rotate(generateAngle(-180, 180));
    }

    function geneateColor() {                                           // метод .floor округляет дробное число до наименьшего целого
        return '#' + Math.floor(Math.random() * 16777215).toString(16); // метод .random генерирует случайное дробное число от 0 д 1
    }                                                                   // метод .toString(16) возвращает строку в 16-ичной ситеме исчисления

    function generateAngle(min, max) {
        return Math.floor(min + Math.random() * (max + 1 - min));
    }
    
    let button = document.querySelector('button');

    button.addEventListener('mouseenter', mouseEnter);
    button.addEventListener('mouseleave', mouseLeave);
});
