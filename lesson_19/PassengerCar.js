import Car from './Car.js';

class PassengerCar extends Car {
    carRepairing() {
        console.log(`${this.type} автомобиль требует работника первого разряда!`);
    }

    carFillingUp() {
        console.log(`${this.type} автомобиль для заправки требует бензин высшего класса(не разбираюсь в машинах:))!`);
    }
}

export default PassengerCar;
