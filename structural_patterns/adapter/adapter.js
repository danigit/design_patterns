"use strict";
exports.__esModule = true;
exports.ChargerAdapter = exports.UsbCharger = void 0;
// this is the Adaptee in the UML diagram
var UsbCharger = /** @class */ (function () {
    function UsbCharger() {
    }
    UsbCharger.prototype.chargeUsb = function () {
        console.log("Charging with USB...");
    };
    return UsbCharger;
}());
exports.UsbCharger = UsbCharger;
var MicroUsbCharger = /** @class */ (function () {
    function MicroUsbCharger() {
    }
    MicroUsbCharger.prototype.chargeMicroUsb = function () {
        console.log("Charging with microUSB...");
    };
    return MicroUsbCharger;
}());
// this is the Adapter in the UML diagram
var ChargerAdapter = /** @class */ (function () {
    function ChargerAdapter(charger) {
        this.usbCharger = charger;
    }
    ChargerAdapter.prototype.chargeMicroUsb = function () {
        this.usbCharger.chargeUsb();
    };
    return ChargerAdapter;
}());
exports.ChargerAdapter = ChargerAdapter;
