import Worker from './worker.js';

class TruckWorker extends Worker {
    fillUp() {  
        console.log(`${this.workerType} заправляет грузовик дизельным топливом`);  
    }

    repair() {
        console.log(`${this.workerType} чинит грузовой автомобиль`);
    }
}

export default TruckWorker;