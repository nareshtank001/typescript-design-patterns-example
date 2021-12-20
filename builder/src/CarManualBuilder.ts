import { Builder } from "./Builder";
import { Manual } from './Manual';


export class CarManualBuilder implements Builder {
    manual: Manual;
    constructor() {
        this.manual = new Manual();
    }
    reset(): void {
        this.manual = new Manual();
    }
    setSeats(seatCount: Number): void {
        this.manual.seatingCapacity = `this car has ${seatCount} seats`;
    }
    setEngine(engineCapacity: Number): void {
        this.manual.engineSize = `this car has engine with ${engineCapacity} cc`;
    }
    setTripComputer(hasTripComputer: Boolean): void {
        this.manual.hasTripComputer = `this car has${hasTripComputer ? '' : 'no'} trip computer`;
    }
    setGPS(hasGPS: Boolean): void {
        this.manual.hasGPS = `this car has trip ${hasGPS ? '' : 'no'} GPS`;
    }

    getProduct(): Manual {
        return this.manual;
    }
}