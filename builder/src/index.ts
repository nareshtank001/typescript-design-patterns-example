import { CarBuilder } from "./CarBuilder";
import { CarManualBuilder } from "./CarManualBuilder";
import { Director } from "./Director";

const carBuilder = new CarBuilder();
let director = new Director(carBuilder);

director.constructSportsCar();
console.log(carBuilder.getProduct());

const carManualBuilder = new CarManualBuilder();
director = new Director(carManualBuilder);

director.constructSportsCar();
console.log(carManualBuilder.getProduct());
