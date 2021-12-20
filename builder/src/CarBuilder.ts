import { Builder } from "./Builder";
import { Car } from "./Car";

export class CarBuilder implements Builder {
    car: Car;
    constructor(){
        this.car = new Car();
    }
    reset(): void {
        this.car = new Car();
    }
    setSeats(seatCount: Number): void {
        this.car.seatingCapacity = seatCount;
    }
    setEngine(engineCapacity: Number): void {
        this.car.engineSize = engineCapacity;
    }
    setTripComputer(hasTripComputer: Boolean): void {
        this.car.hasTripComputer = hasTripComputer;
    }
    setGPS(hasGPS: Boolean): void {
        this.car.hasGPS = hasGPS;
    }
    
    getProduct(): Car {
        return this.car;
    }
}