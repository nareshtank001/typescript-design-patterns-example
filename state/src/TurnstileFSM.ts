import { LockedState } from "./LockedState";
import { TurnstileState } from "./TurnstileState";

export abstract class TurnstileFSM {
    public state: TurnstileState;
    constructor() {
        this.state = new LockedState();
    }
    
    setState()
    coin(): void {
        this.state.coin(this);
    }

    pass(): void {
        this.state.pass(this);
    }
    abstract lock(): void;
    abstract unlock(): void;
    abstract thankYou(): void;
    abstract alarm(): void;
}