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

  form.addEventListener("submit", async (event) => {
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

    
    try {
      const response = await fetch('/api/saveDevice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), 
      });

      if (response.ok) {
        const result = await response.json();
        alert(result.message || 'Dane zostały zapisane!');
      } else {
        const error = await response.json();
        alert(error.error || 'Błąd podczas zapisywania danych.');
      }
    } catch (err) {
      console.error('Błąd przy wysyłaniu danych:', err);
      alert('Wystąpił błąd podczas wysyłania danych.');
    }
  });
});