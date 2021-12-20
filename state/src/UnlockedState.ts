import { LockedState } from './LockedState';
import { SimpleTurnstileState } from './SimpleTurnstileState';
import { TurnstileFSM } from './TurnstileFSM';
import { TurnstileState } from './TurnstileState';

export class UnlockedState extends SimpleTurnstileState implements TurnstileState {
    coin(turnstile: TurnstileFSM): void {
        turnstile.thankYou();
    }
    pass(turnstile: TurnstileFSM): void {
        turnstile.state = new LockedState();
        turnstile.lock();
    }       
}