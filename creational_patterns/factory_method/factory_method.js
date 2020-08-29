"use strict";
/**
 * IMPLEMENTATIO OF THE FACTORY METHOD PATTERN AS EXPLAINED IN THE
 * DESIGN PATTERNS: ELEMENTS OF REUSABLE OBJECT-ORIENTED SOFTWARE BOOK
 *
 * Follow the UML diagram in the README FILE to see how the elements interact
 * with eachother
 */
exports.__esModule = true;
exports.ConcreteCreator = exports.ProductType = void 0;
var ConcreteProduct1 = /** @class */ (function () {
    function ConcreteProduct1() {
    }
    ConcreteProduct1.prototype.getId = function () {
        return this.id;
    };
    ConcreteProduct1.prototype.getName = function () {
        return this.name;
    };
    ConcreteProduct1.prototype.setId = function (idValue) {
        this.id = idValue;
    };
    ConcreteProduct1.prototype.setName = function (nameValue) {
        this.name = nameValue;
    };
    ConcreteProduct1.prototype.log = function () {
        console.log('ConcreteProduct1 id: ' + this.id.toString() + ', product name: ' + this.name);
    };
    return ConcreteProduct1;
}());
var ConcreteProduct2 = /** @class */ (function () {
    function ConcreteProduct2() {
    }
    ConcreteProduct2.prototype.getId = function () {
        return this.id;
    };
    ConcreteProduct2.prototype.getName = function () {
        return this.name;
    };
    ConcreteProduct2.prototype.setId = function (idValue) {
        this.id = idValue;
    };
    ConcreteProduct2.prototype.setName = function (nameValue) {
        this.name = nameValue;
    };
    ConcreteProduct2.prototype.log = function () {
        console.log('ConcreteProduct2 id: ' + this.id.toString() + ', product name: ' + this.name);
    };
    return ConcreteProduct2;
}());
var ProductType;
(function (ProductType) {
    ProductType[ProductType["PRODUCT1"] = 1] = "PRODUCT1";
    ProductType[ProductType["PRODUCT2"] = 2] = "PRODUCT2";
})(ProductType = exports.ProductType || (exports.ProductType = {}));
var ConcreteCreator = /** @class */ (function () {
    function ConcreteCreator() {
    }
    ConcreteCreator.prototype.factoryMethod = function (productType) {
        switch (productType) {
            case ProductType.PRODUCT1:
                return new ConcreteProduct1();
            case ProductType.PRODUCT2:
                return new ConcreteProduct2();
            default:
                return null;
        }
    };
    return ConcreteCreator;
}());
exports.ConcreteCreator = ConcreteCreator;
