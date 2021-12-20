import { Graphic } from "./Graphic";

export class Dot implements Graphic {
    constructor(protected x: number, protected y: number) { }

    move(x: number, y: number): void {
        this.x += x;
        this.y += y;
    }

    draw(): void {
        console.log(`. at position ${this.x} X ${this.y}`);
    }
}