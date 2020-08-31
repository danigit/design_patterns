import { ChargerAdapter1, UsbCharger, MicroUsbCharger, ChargerAdapter2 } from "./adapter";

class Client{

  usbCharger: UsbCharger;
  usbAdapter1: ChargerAdapter1;

  microUsbCharger: MicroUsbCharger;
  usbAdapter2: ChargerAdapter2;

  run(){

    this.usbCharger = new UsbCharger();
    this.usbAdapter1 = new ChargerAdapter1(this.usbCharger);

    // here we charge with an UsbCharger using a MicroUsbCharger interface
    this.usbAdapter1.chargeMicroUsb();

    this.microUsbCharger = new MicroUsbCharger();
    this.usbAdapter2 = new ChargerAdapter2(this.microUsbCharger);
    
    // here we charging with an MicroUsbCharger using a UsbCharger interface
    this.usbAdapter2.chargeUsb();
  }
}

new Client().run();