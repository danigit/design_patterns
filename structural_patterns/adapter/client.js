"use strict";
exports.__esModule = true;
var adapter_1 = require("./adapter");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.run = function () {
        this.usbCharger = new adapter_1.UsbCharger();
        this.adapter = new adapter_1.ChargerAdapter(this.usbCharger);
        this.adapter.chargeMicroUsb();
    };
    return Client;
}());
new Client().run();
