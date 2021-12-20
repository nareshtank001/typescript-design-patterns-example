import { Database } from "./Database";

const db = Database.getInstance();
db.query('select * from ab');

const db1 = Database.getInstance();
db1.query('select * from ab1');
