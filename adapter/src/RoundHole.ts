import { RoundPeg } from "./RoundPeg";

export class RoundHole {
    constructor(private radius: number) {}

    getRadius():number {
        return this.radius;
    }

    fits(peg: RoundPeg): boolean {
        return this.radius >= peg.getRadius();
    }
}