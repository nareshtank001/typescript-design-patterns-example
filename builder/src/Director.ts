import { Builder } from "./Builder";

export class Director {
    constructor(public builder:Builder){}

    constructSportsCar():void {
        this.builder.setSeats(2);
        this.builder.setEngine(2500);
        this.builder.setGPS(false);
        this.builder.setTripComputer(false);
    }

    constructorSUV(): void {
        this.builder.setSeats(4);
        this.builder.setEngine(1500);
        this.builder.setGPS(true);
        this.builder.setTripComputer(true);
    }
}