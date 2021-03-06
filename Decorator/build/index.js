"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CompressionDecorator_1 = require("./CompressionDecorator");
var EncryptionDecorator_1 = require("./EncryptionDecorator");
var FileDataSource_1 = require("./FileDataSource");
var source = new FileDataSource_1.FileDataSource();
source.writeData('plain data');
source.readData();
console.log('===========');
var compressor = new CompressionDecorator_1.CompressionDecorator(source);
compressor.writeData('compress data');
compressor.readData();
console.log('===========');
var encrypt = new EncryptionDecorator_1.EncryptionDecorator(source);
encrypt.writeData('encrypt data');
encrypt.readData();
