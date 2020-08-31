"use strict";
/**
 * IMPLEMENTATIO OF THE ADAPTER PATTERN AS EXPLAINED IN THE
 * DESIGN PATTERNS: ELEMENTS OF REUSABLE OBJECT-ORIENTED SOFTWARE BOOK
 *
 * Follow the UML diagram in the README FILE to see how the elements interact
 * with eachother
 */
exports.__esModule = true;
exports.ChargerAdapter2 = exports.ChargerAdapter1 = exports.MicroUsbCharger = exports.UsbCharger = void 0;
// this is the Adaptee in the UML diagram
var UsbCharger = /** @class */ (function () {
    function UsbCharger() {
    }
    UsbCharger.prototype.chargeUsb = function () {
        console.log("charge USB...");
    };
    return UsbCharger;
}());
exports.UsbCharger = UsbCharger;
var MicroUsbCharger = /** @class */ (function () {
    function MicroUsbCharger() {
    }
    MicroUsbCharger.prototype.chargeMicroUsb = function () {
        console.log("charge microUSB...");
    };
    return MicroUsbCharger;
}());
exports.MicroUsbCharger = MicroUsbCharger;
// this is the Adapter in the UML diagram
var ChargerAdapter1 = /** @class */ (function () {
    function ChargerAdapter1(charger) {
        this.usbCharger = charger;
    }
    ChargerAdapter1.prototype.chargeMicroUsb = function () {
        console.log('Using an MicroUsbCharger Adapter to ');
        this.usbCharger.chargeUsb();
    };
    return ChargerAdapter1;
}());
exports.ChargerAdapter1 = ChargerAdapter1;
var ChargerAdapter2 = /** @class */ (function () {
    function ChargerAdapter2(charger) {
        this.microUsbCharger = charger;
    }
    ChargerAdapter2.prototype.chargeUsb = function () {
        console.log('Using an UsbCharger Adapter to');
        this.microUsbCharger.chargeMicroUsb();
    };
    return ChargerAdapter2;
}());
exports.ChargerAdapter2 = ChargerAdapter2;
