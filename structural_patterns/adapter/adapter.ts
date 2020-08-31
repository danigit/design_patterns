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
    console.log("charge USB...");
  }
}

// this is the targhet in the UML diagram
interface ChargerMicroUsb{
  chargeMicroUsb();
}

export class MicroUsbCharger implements ChargerMicroUsb{
  chargeMicroUsb(){
    console.log("charge microUSB...");
  }
}

// this is the Adapter in the UML diagram
export class ChargerAdapter1 implements ChargerMicroUsb{
  usbCharger: UsbCharger;

  constructor(charger: UsbCharger){
    this.usbCharger = charger;
  }

  chargeMicroUsb(){
    console.log('Using an MicroUsbCharger Adapter to ')
    this.usbCharger.chargeUsb();
  }
}

export class ChargerAdapter2 implements ChargerUsb{
  microUsbCharger: MicroUsbCharger;

  constructor(charger: MicroUsbCharger){
    this.microUsbCharger = charger;
  }

  chargeUsb() {
    console.log('Using an UsbCharger Adapter to')
    this.microUsbCharger.chargeMicroUsb();
  }
}