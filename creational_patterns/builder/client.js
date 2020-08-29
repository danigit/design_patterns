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
var builder1 = new builder_1.ConcreteBuilder1(1);
var director1 = new builder_1.Director(builder1);
var builder2 = new builder_1.ConcreteBuilder2(2);
var director2 = new builder_1.Director(builder2);
var client1 = new Client(director1);
client1.run();
var client2 = new Client(director2);
client2.run();
// we can use the builder without a director if needed
var product1 = new builder_1.ConcreteBuilder1(3)
    .buildPart1('part_1')
    .buildPart2('part_2')
    .buildPart3('part_3')
    .buildPart4('part_4')
    .getProduct();
product1.log();
var product2 = new builder_1.ConcreteBuilder1(4)
    .buildPart1('part-1')
    .buildPart2('part-2')
    .getProduct();
product2.log();
