import { RoundPeg } from './RoundPeg';
import { SquarePeg } from './SquarePeg';

export class SquarePegAdapter extends RoundPeg {
    constructor(private peg: SquarePeg) {
        super(peg.getWidth());
    }

    getRadius(): number {
        return this.peg.getWidth() * Math.sqrt(2)/2;
    }
}