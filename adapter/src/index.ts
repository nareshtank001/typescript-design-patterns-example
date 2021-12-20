import { RoundHole } from './RoundHole';
import { RoundPeg } from './RoundPeg';
import { SquarePeg } from './SquarePeg';
import { SquarePegAdapter } from './SquarePegAdapter';

const roundHole = new RoundHole(5);

const roundPeg = new RoundPeg(5);
console.log(roundHole.fits(roundPeg));

const smallSquPeg = new SquarePeg(5);
const smallSquPegAdapter = new SquarePegAdapter(smallSquPeg);
console.log(roundHole.fits(smallSquPegAdapter));

const largeSquPeg = new SquarePeg(10);
const largerSquPegAdapter = new SquarePegAdapter(largeSquPeg);
console.log(roundHole.fits(largerSquPegAdapter));