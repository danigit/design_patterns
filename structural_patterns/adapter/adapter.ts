/**
 * IMPLEMENTATIO OF THE ADAPTER PATTERN AS EXPLAINED IN THE 
 * DESIGN PATTERNS: ELEMENTS OF REUSABLE OBJECT-ORIENTED SOFTWARE BOOK
 * 
 * Follow the UML diagram in the README FILE to see how the elements interact
 * with eachother
 */

interface ChargerUsb{
  chargeUsb();
}

// this is the Adaptee in the UML diagram
export class UsbCharger implements ChargerUsb{
  chargeUsb(){
    console.log("Charging with USB...");
  }
}

// this is the targhet in the UML diagram
interface ChargerMicroUsb{
  chargeMicroUsb();
}

class MicroUsbCharger implements ChargerMicroUsb{
  chargeMicroUsb(){
    console.log("Charging with microUSB...");
  }
}

// this is the Adapter in the UML diagram
export class ChargerAdapter implements ChargerMicroUsb{
  usbCharger: UsbCharger;

  constructor(charger: UsbCharger){
    this.usbCharger = charger;
  }

  chargeMicroUsb(){
    this.usbCharger.chargeUsb();
  }
}