import { LockedState } from "./LockedState";
import { TurnstileFSM } from './TurnstileFSM';
import { TurnstileState } from "./TurnstileState";

export class SimpleTurnstileState extends TurnstileFSM {
   
    lock():void {
        console.log('lock');
    }
    
    unlock():void {
        console.log('unlock');
    }
    
    thankYou():void {
        console.log('thankYou');
    }
    
    alarm():void {
        console.log('alarm');
    }
      
}