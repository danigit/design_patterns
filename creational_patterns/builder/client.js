"use strict";
exports.__esModule = true;
var builder_1 = require("./builder");
var Client = /** @class */ (function () {
    function Client(director) {
        this.director = director;
    }
    Client.prototype.run = function () {
        this.director.construct();
        var robot = this.director.getProduct();
        robot.log();
    };
    return Client;
}());
var builder = new builder_1.ConcreteBuilder1(1);
var director = new builder_1.Director(builder);
var client = new Client(director);
client.run();
// we can use the builder without a director if needed
var product = new builder_1.ConcreteBuilder1(2)
    .buildPart1('part_1')
    .buildPart2('part_2')
    .buildPart3('part_3')
    .buildPart4('part_4')
    .getProduct();
product.log();
