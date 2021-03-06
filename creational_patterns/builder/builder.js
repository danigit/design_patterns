"use strict";
/**
 * IMPLEMENTATIO OF THE BUILDER PATTERN AS EXPLAINED IN THE
 * DESIGN PATTERNS: ELEMENTS OF REUSABLE OBJECT-ORIENTED SOFTWARE BOOK
 *
 * Follow the UML diagram in the README FILE to see how the elements interact
 * with eachother
 */
exports.__esModule = true;
exports.Director = exports.ConcreteBuilder2 = exports.ConcreteBuilder1 = void 0;
var ConcreteBuilder1 = /** @class */ (function () {
    function ConcreteBuilder1(productId) {
        this.product = new Product1(productId);
    }
    ConcreteBuilder1.prototype.buildPart1 = function (part1Value) {
        this.product.setPart1(part1Value);
        return this;
    };
    ConcreteBuilder1.prototype.buildPart2 = function (part2Value) {
        this.product.setPart2(part2Value);
        return this;
    };
    ConcreteBuilder1.prototype.buildPart3 = function (part3Value) {
        this.product.setPart3(part3Value);
        return this;
    };
    ConcreteBuilder1.prototype.buildPart4 = function (part4Value) {
        this.product.setPart4(part4Value);
        return this;
    };
    ConcreteBuilder1.prototype.getProduct = function () {
        return this.product;
    };
    return ConcreteBuilder1;
}());
exports.ConcreteBuilder1 = ConcreteBuilder1;
var ConcreteBuilder2 = /** @class */ (function () {
    function ConcreteBuilder2(productId) {
        this.product = new Product1(productId);
    }
    ConcreteBuilder2.prototype.buildPart1 = function (part1Value) {
        this.product.setPart1(part1Value);
        return this;
    };
    ConcreteBuilder2.prototype.buildPart2 = function (part2Value) {
        this.product.setPart2(part2Value);
        return this;
    };
    ConcreteBuilder2.prototype.buildPart3 = function (part3Value) {
        return this;
    };
    ConcreteBuilder2.prototype.buildPart4 = function (part4Value) {
        return this;
    };
    ConcreteBuilder2.prototype.getProduct = function () {
        return this.product;
    };
    return ConcreteBuilder2;
}());
exports.ConcreteBuilder2 = ConcreteBuilder2;
var Product1 = /** @class */ (function () {
    function Product1(idValue) {
        this.product = {};
        this.product.id = idValue;
    }
    Product1.prototype.setPart1 = function (part1Value) {
        this.product.part1 = part1Value;
    };
    Product1.prototype.setPart2 = function (part2Value) {
        this.product.part2 = part2Value;
    };
    Product1.prototype.setPart3 = function (part3Value) {
        this.product.part3 = part3Value;
    };
    Product1.prototype.setPart4 = function (part4Value) {
        this.product.part4 = part4Value;
    };
    Product1.prototype.log = function () {
        console.log('The product is: ', this.product);
    };
    return Product1;
}());
var Director = /** @class */ (function () {
    function Director(builder) {
        this.builder = builder;
    }
    Director.prototype.construct = function () {
        this.builder
            .buildPart1('part1')
            .buildPart2('part2')
            .buildPart3('part3')
            .buildPart4('part4');
    };
    Director.prototype.getProduct = function () {
        return this.builder.getProduct();
    };
    return Director;
}());
exports.Director = Director;
