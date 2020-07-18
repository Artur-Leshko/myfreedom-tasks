import Car from './Car.js';
import PassengerCar from './PassengerCar.js';
import Truck from './Truck.js';
//import Worker from './Worker.js';      Это твоё задание :))
//незабудь что нужно запускать всю эту штуку через консоль командой: "npx serve"

export default class AutoRepairShop {
    carDrivesIn(type) {
        if(type === 'грузовой') {
            var newCar = new Truck(type);
        } else {
            var newCar = new PassengerCar(type);
        }

        return newCar;
    }
}
