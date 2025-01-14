export class DeviceContext {
    constructor() {
      this.strategy = null; 
    }
  
    setStrategy(strategy) {
      this.strategy = strategy;
    }
  
    processFormData(data) {
      if (!this.strategy) {
        throw new Error("Strategia nie została ustawiona.");
      }
      this.strategy.handleFormData(data);
    }
  }