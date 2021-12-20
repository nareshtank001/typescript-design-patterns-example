import { Application } from "./Application";
import os from 'os';

const app = new Application(os.type());
app.init();