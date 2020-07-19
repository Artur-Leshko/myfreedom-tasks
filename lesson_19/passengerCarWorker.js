import Worker from './worker.js';

class PassengerCarWorker extends Worker {
    fillUp() {  
        console.log(`${this.workerType} заправляет легковой автомобиль бензином`);  
    }

    repair() {
        console.log(`${this.workerType} чинит легковой автомобиль`);
    }
}

export default PassengerCarWorker;