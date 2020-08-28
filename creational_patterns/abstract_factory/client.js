"use strict";
exports.__esModule = true;
var abstract_factory_1 = require("./abstract_factory");
/**
 * So the programmer can use all the objects provided by the factory without
 * concerning about the implementatio (the logic of how the objects are created).
 *
 * Another advantages is that if we add new object types we have to change only
 * the elements inside the pattern, this code will still work.
 */
var Client = /** @class */ (function () {
    function Client(productFactory) {
        this.productA = productFactory.createProductA();
        this.productB = productFactory.createProductB();
    }
    Client.prototype.run = function () {
        this.productA.log();
        this.productB.log();
    };
    return Client;
}());
var procuct1Factory = abstract_factory_1.FactoryProducer.getFactory('1');
var procuct2Factory = abstract_factory_1.FactoryProducer.getFactory('2');
new Client(procuct1Factory).run();
new Client(procuct2Factory).run();
