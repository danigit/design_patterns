"use strict";
/**
 * IMPLEMENTATIO OF THE COMPONENT PATTERN AS EXPLAINED IN THE
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
exports.CompositeObject = exports.Leaf = void 0;
var ComponentObject = /** @class */ (function () {
    function ComponentObject() {
    }
    ComponentObject.prototype.setParent = function (parent) {
        this.parent = parent;
    };
    ComponentObject.prototype.getParent = function () {
        return this.parent;
    };
    ComponentObject.prototype.add = function (component) { };
    ComponentObject.prototype.remove = function (component) { };
    ComponentObject.prototype.isComposite = function () {
        return false;
    };
    return ComponentObject;
}());
var Leaf = /** @class */ (function (_super) {
    __extends(Leaf, _super);
    function Leaf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Leaf.prototype.operation = function () {
        return 'Leaf operation';
    };
    return Leaf;
}(ComponentObject));
exports.Leaf = Leaf;
var CompositeObject = /** @class */ (function (_super) {
    __extends(CompositeObject, _super);
    function CompositeObject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.childrens = [];
        return _this;
    }
    CompositeObject.prototype.add = function (component) {
        this.childrens.push(component);
        component.setParent(this);
    };
    CompositeObject.prototype.remove = function (component) {
        var componentIndex = this.childrens.indexOf(component);
        this.childrens.splice(componentIndex, 1);
        component.setParent(null);
    };
    CompositeObject.prototype.isComposite = function () {
        return this.childrens.length !== 0;
    };
    CompositeObject.prototype.operation = function () {
        var operations = [];
        for (var _i = 0, _a = this.childrens; _i < _a.length; _i++) {
            var child = _a[_i];
            operations.push(child.operation());
        }
        return "Branch( " + operations.join('+') + ")";
    };
    return CompositeObject;
}(ComponentObject));
exports.CompositeObject = CompositeObject;
