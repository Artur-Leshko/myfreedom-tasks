import Car from './Car.js';

class Truck extends Car {
    carRepairing() {
        console.log(`${this.type} автомобиль требует работника второго разряда!`);
    }

    carFillingUp() {
        console.log(`${this.type} автомобиль для заправки требует бензин среднего класса(всё так же не разбираюсь в машинах:)))))!`);
    }
}

export default Truck;