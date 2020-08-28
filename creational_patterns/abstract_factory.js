"use strict";
/**
 * IMPLEMENTATIO OF THE ABSTRACT FACTORY PATTERN AS EXPLAINED IN THE
 * DESIGN PATTERNS: ELEMENTS OF REUSABLE OBJECT-ORIENTED SOFTWARE
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.FactoryProducer = void 0;
var ProductA1 = /** @class */ (function () {
    function ProductA1() {
    }
    ProductA1.prototype.log = function () {
        console.log('Product A1...');
    };
    return ProductA1;
}());
var ProductA2 = /** @class */ (function () {
    function ProductA2() {
    }
    ProductA2.prototype.log = function () {
        console.log('Product A2...');
    };
    return ProductA2;
}());
var ProductB1 = /** @class */ (function () {
    function ProductB1() {
    }
    ProductB1.prototype.log = function () {
        console.log('Product B1...');
    };
    return ProductB1;
}());
var ProductB2 = /** @class */ (function () {
    function ProductB2() {
    }
    ProductB2.prototype.log = function () {
        console.log('Product B2...');
    };
    return ProductB2;
}());
var AbstractFactory = /** @class */ (function () {
    function AbstractFactory() {
    }
    return AbstractFactory;
}());
var ConcreteFactroy1 = /** @class */ (function (_super) {
    __extends(ConcreteFactroy1, _super);
    function ConcreteFactroy1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteFactroy1.prototype.createProductA = function () {
        return new ProductA1();
    };
    ConcreteFactroy1.prototype.createProductB = function () {
        return new ProductB1();
    };
    return ConcreteFactroy1;
}(AbstractFactory));
var ConcreteFactory2 = /** @class */ (function (_super) {
    __extends(ConcreteFactory2, _super);
    function ConcreteFactory2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteFactory2.prototype.createProductA = function () {
        return new ProductA2();
    };
    ConcreteFactory2.prototype.createProductB = function () {
        return new ProductB2();
    };
    return ConcreteFactory2;
}(AbstractFactory));
var FactoryProducer = /** @class */ (function () {
    function FactoryProducer() {
    }
    FactoryProducer.getFactory = function (factoryType) {
        switch (factoryType.toLowerCase()) {
            case '1':
                return new ConcreteFactroy1();
            case '2':
                return new ConcreteFactory2();
            default:
                return null;
        }
    };
    return FactoryProducer;
}());
exports.FactoryProducer = FactoryProducer;
