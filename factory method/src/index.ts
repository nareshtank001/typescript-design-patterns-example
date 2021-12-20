import os from "os";
import { Application } from "./Application";

const app = new Application(os.type());
app.init();