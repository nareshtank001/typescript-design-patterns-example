import { TurnstileFSM } from './TurnstileFSM';
export interface TurnstileState {
    coin(turnstile: TurnstileFSM):void;
    pass(turnstile: TurnstileFSM):void;
}