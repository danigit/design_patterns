import { ChargerAdapter, UsbCharger } from "./adapter";

class Client{

  usbCharger: UsbCharger;
  usbAdapter: ChargerAdapter;

  run(){

    this.usbCharger = new UsbCharger();
    this.usbAdapter = new ChargerAdapter(this.usbCharger);

    // here we charge an UsbCharger using a MicroUsbCharger interface
    this.usbAdapter.chargeMicroUsb();
  }
}

new Client().run();