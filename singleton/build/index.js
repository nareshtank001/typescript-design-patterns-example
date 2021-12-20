"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Database_1 = require("./Database");
var db = Database_1.Database.getInstance();
db.query('select * from ab');
var db1 = Database_1.Database.getInstance();
db1.query('select * from ab1');
