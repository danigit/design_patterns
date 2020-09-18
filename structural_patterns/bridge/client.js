"use strict";
exports.__esModule = true;
var bridge_1 = require("./bridge");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.run = function () {
        var circle = new bridge_1.Circle(new bridge_1.Red());
        console.log(circle.getShape());
    };
    return Client;
}());
new Client().run();
