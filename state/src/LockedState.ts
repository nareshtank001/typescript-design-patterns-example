import { SimpleTurnstileState } from './SimpleTurnstileState';
import { TurnstileFSM } from './TurnstileFSM';
import { TurnstileState } from './TurnstileState';
import { UnlockedState } from './UnlockedState';

export class LockedState extends SimpleTurnstileState implements TurnstileState {
    coin(turnstile: TurnstileFSM): void {
        turnstile.state = new UnlockedState();
        turnstile.unlock();
    }
    pass(turnstile: TurnstileFSM): void {
        turnstile.alarm();
    }
}