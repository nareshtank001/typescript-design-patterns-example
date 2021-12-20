import { Shape } from "./Shape";

export class Circle extends Shape {
    radius: Number;
    constructor(source: Circle) {
        super();
        this.cloneShape(source);
        this.radius = source.radius;
    }

    clone(source: Circle): Shape {
        return new Circle(source);
    }
}