"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TurnstileFSM_1 = require("./TurnstileFSM");
var turnstile = new TurnstileFSM_1.TurnstileFSM();
turnstile.coin();
turnstile.pass();
turnstile.coin();
