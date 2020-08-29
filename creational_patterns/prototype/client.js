"use strict";
exports.__esModule = true;
var prototype_1 = require("./prototype");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.run = function () {
        this.prototypeFactory = new prototype_1.PrototypeFactory();
        var prototype1 = new prototype_1.ConcretePrototype1(1, 'proto1');
        var prototypeCopy1 = this.prototypeFactory.getClone(prototype1);
        var prototype2 = new prototype_1.ConcretePrototype2(2, 'proto2');
        var prototypeCopy2 = this.prototypeFactory.getClone(prototype2);
        prototype1.log();
        prototype2.log();
        prototypeCopy1.log();
        prototypeCopy2.log();
        prototypeCopy1.setName('protoCopy1');
        prototypeCopy2.setName('protoCopy2');
        prototype1.log();
        prototype2.log();
        prototypeCopy1.log();
        prototypeCopy2.log();
    };
    return Client;
}());
var client = new Client();
client.run();
