"use strict";
/**
 * IMPLEMENTATIO OF THE BRIDGE PATTERN AS EXPLAINED IN THE
 * DESIGN PATTERNS: ELEMENTS OF REUSABLE OBJECT-ORIENTED SOFTWARE BOOK
 *
 * Follow the UML diagram in the README FILE to see how the elements interact
 * with eachother
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
exports.Circle = exports.Green = exports.Red = void 0;
// this is the Abstraction in the UML
var Shape = /** @class */ (function () {
    function Shape(color) {
        this.color = color;
    }
    Shape.prototype.getShape = function () {
        return "The color is " + this.color.getName();
    };
    return Shape;
}());
// this is the concrete Implementor A in the UML
var Red = /** @class */ (function () {
    function Red() {
    }
    Red.prototype.getName = function () {
        return "red";
    };
    return Red;
}());
exports.Red = Red;
// this is the concrete Implementor B in the UML
var Green = /** @class */ (function () {
    function Green() {
    }
    Green.prototype.getName = function () {
        return "The color is Green";
    };
    return Green;
}());
exports.Green = Green;
// this is the redefined Abstraction in the UML
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(color) {
        return _super.call(this, color) || this;
    }
    return Circle;
}(Shape));
exports.Circle = Circle;
