import { Dot } from "./Dot";

export class Circle extends Dot {
    constructor( x: number, y: number, private radius: number) {
        super(x,y);
    }

    draw():void {
        console.log(`O at position ${this.x} X ${this.y} with radius ${this.radius}`);
    }
}