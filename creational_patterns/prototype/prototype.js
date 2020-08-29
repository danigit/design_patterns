"use strict";
exports.__esModule = true;
exports.PrototypeFactory = exports.ConcretePrototype2 = exports.ConcretePrototype1 = void 0;
var ConcretePrototype1 = /** @class */ (function () {
    function ConcretePrototype1(idValue, nameValue) {
        this.id = idValue;
        this.name = nameValue;
    }
    ConcretePrototype1.prototype.setId = function (idValue) {
        this.id = idValue;
    };
    ConcretePrototype1.prototype.getId = function () {
        return this.id;
    };
    ConcretePrototype1.prototype.setName = function (nameValue) {
        this.name = nameValue;
    };
    ConcretePrototype1.prototype.getName = function () {
        return this.name;
    };
    ConcretePrototype1.prototype.clone = function () {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    };
    ConcretePrototype1.prototype.log = function () {
        console.log('Object id: ' + this.id.toString() + ', name: ' + this.name);
    };
    return ConcretePrototype1;
}());
exports.ConcretePrototype1 = ConcretePrototype1;
var ConcretePrototype2 = /** @class */ (function () {
    function ConcretePrototype2(idValue, nameValue) {
        this.id = idValue;
        this.name = nameValue;
    }
    ConcretePrototype2.prototype.setId = function (idValue) {
        this.id = idValue;
    };
    ConcretePrototype2.prototype.getId = function () {
        return this.id;
    };
    ConcretePrototype2.prototype.setName = function (nameValue) {
        this.name = nameValue;
    };
    ConcretePrototype2.prototype.getName = function () {
        return this.name;
    };
    ConcretePrototype2.prototype.clone = function () {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    };
    ConcretePrototype2.prototype.log = function () {
        console.log('Object id: ' + this.id.toString() + ', name: ' + this.name);
    };
    return ConcretePrototype2;
}());
exports.ConcretePrototype2 = ConcretePrototype2;
// this is not in the pattern but is gogd practice to use it
var PrototypeFactory = /** @class */ (function () {
    function PrototypeFactory() {
    }
    PrototypeFactory.prototype.getClone = function (prototype) {
        return prototype.clone();
    };
    return PrototypeFactory;
}());
exports.PrototypeFactory = PrototypeFactory;
