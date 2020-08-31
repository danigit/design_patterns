"use strict";
exports.__esModule = true;
var adapter_1 = require("./adapter");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.run = function () {
        this.usbCharger = new adapter_1.UsbCharger();
        this.usbAdapter1 = new adapter_1.ChargerAdapter1(this.usbCharger);
        // here we charge with an UsbCharger using a MicroUsbCharger interface
        this.usbAdapter1.chargeMicroUsb();
        this.microUsbCharger = new adapter_1.MicroUsbCharger();
        this.usbAdapter2 = new adapter_1.ChargerAdapter2(this.microUsbCharger);
        // here we charging with an MicroUsbCharger using a UsbCharger interface
        this.usbAdapter2.chargeUsb();
    };
    return Client;
}());
new Client().run();
