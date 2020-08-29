"use strict";
exports.__esModule = true;
var factory_method_1 = require("./factory_method");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.run = function () {
        this.productFactory = new factory_method_1.ConcreteCreator();
        var product1 = this.productFactory.factoryMethod(factory_method_1.ProductType.PRODUCT1);
        product1.setId(1);
        product1.setName('product1');
        product1.log();
        var product2 = this.productFactory.factoryMethod(factory_method_1.ProductType.PRODUCT2);
        product2.setId(2);
        product2.setName('product2');
        product2.log();
    };
    return Client;
}());
var client = new Client();
client.run();
