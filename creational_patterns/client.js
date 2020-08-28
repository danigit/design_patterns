"use strict";
exports.__esModule = true;
var abstract_factory_1 = require("./abstract_factory");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.main = function () {
        var product1Factory = abstract_factory_1.FactoryProducer.getFactory('1');
        var product2Factory = abstract_factory_1.FactoryProducer.getFactory('2');
        var productA1 = product1Factory.createProductA();
        var productB1 = product1Factory.createProductB();
        var productA2 = product2Factory.createProductA();
        var productB2 = product2Factory.createProductB();
        productA1.log();
        productB1.log();
        productA2.log();
        productB2.log();
    };
    return Client;
}());
var client = new Client();
client.main();
