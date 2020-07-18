export default class Car {
    constructor(type){
        this.type = type;
    }

    getTypeOfCar() {
        console.log(`${this.type} автомобиль заехал в мастерскую`);
    }
}
