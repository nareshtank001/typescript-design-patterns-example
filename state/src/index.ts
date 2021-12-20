import { TurnstileFSM } from './TurnstileFSM';

const turnstile = new TurnstileFSM();

turnstile.coin();
turnstile.pass();
turnstile.coin();
