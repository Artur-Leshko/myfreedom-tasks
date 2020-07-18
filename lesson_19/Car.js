import AutoRepairShop from './AutoRepairShop.js';

export default class Car extends AutoRepairShop {
    constructor(type){
        this.type = type;
    }

    getTypeOfCar() {
        console.log(`${this.type} автомобиль заехал в мастерскую`);
    }
}
