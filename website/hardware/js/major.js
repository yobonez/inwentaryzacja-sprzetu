import { LaptopStrategy, PrinterStrategy, MonitorStrategy } from "./DeviceStrategy.js";
import { DeviceContext } from "./DeviceContext.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("new-hardware-form");
  const deviceNameSelect = document.getElementById("deviceName");

  const context = new DeviceContext();

  
  const strategies = {
    Laptop: new LaptopStrategy(),
    Printer: new PrinterStrategy(),
    Monitor: new MonitorStrategy(),
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    
    const formData = {
      deviceName: deviceNameSelect.value,
      deviceType: document.getElementById("deviceType").value,
      location: document.getElementById("location").value,
      position: document.getElementById("position").value,
      serialNumber: document.getElementById("serialNumber").value,
      technicalSpecs: document.getElementById("technicalSpecs").value,
      status: document.getElementById("status").value,
    };

    
    const selectedDevice = formData.deviceName;
    if (strategies[selectedDevice]) {
      context.setStrategy(strategies[selectedDevice]);
      context.processFormData(formData);
    } else {
      alert("Nie wybrano poprawnej strategii dla urządzenia.");
    }
  });
});