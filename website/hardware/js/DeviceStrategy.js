class DeviceStrategy {
    handleFormData(data) {
      throw new Error("Metoda handleFormData musi być zaimplementowana.");
    }
  }
  
  
  export class LaptopStrategy extends DeviceStrategy {
    handleFormData(data) {
      console.log("Przetwarzanie danych dla Laptopa...");
      console.log(data);
      alert(`Dodano nowy Laptop o numerze seryjnym: ${data.serialNumber}`);
    }
  }
  
  
  export class PrinterStrategy extends DeviceStrategy {
    handleFormData(data) {
      console.log("Przetwarzanie danych dla Drukarki...");
      console.log(data);
      alert(`Dodano nową Drukarkę do lokalizacji: ${data.location}`);
    }
  }
  
 
  export class MonitorStrategy extends DeviceStrategy {
    handleFormData(data) {
      console.log("Przetwarzanie danych dla Monitora...");
      console.log(data);
      alert(`Dodano nowy Monitor o statusie: ${data.status}`);
    }
  }