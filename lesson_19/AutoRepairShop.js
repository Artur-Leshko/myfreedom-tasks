import Car from './Car.js';
import PassengerCar from './PassengerCar.js';
import Truck from './Truck.js';
import Worker from './Worker.js';   
import PassengerCarWorker from './passengerCarWorker.js';
import TruckWorker from './truckWorker.js';
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

    workerInRepairShop(type) {
        if(type === 'грузовой') {
            var worker = new TruckWorker('работник 1 разряда');
        } else {
            var worker = new PassengerCarWorker('работник 2 разряда');
        }

        return worker;
    }
}