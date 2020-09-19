"use strict";
exports.__esModule = true;
var composite_1 = require("./composite");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.run = function () {
        // simple Leaf component
        var leaf = new composite_1.Leaf();
        console.log(leaf.operation());
        // complex composite component
        var tree = new composite_1.CompositeObject();
        var left = new composite_1.CompositeObject();
        leaf.add(new composite_1.Leaf());
        left.add(new composite_1.Leaf());
        var right = new composite_1.CompositeObject();
        right.add(new composite_1.Leaf());
        tree.add(left);
        tree.add(right);
        console.log(tree.operation());
        var tree1 = new composite_1.CompositeObject();
        tree1.add(left);
        tree.add(tree1);
        console.log(tree.operation());
    };
    return Client;
}());
new Client().run();
