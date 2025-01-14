class DeviceModel {
    constructor(id, deviceName, deviceType, location, position, serialNumber, technicalSpecs, status) {
      this.id = id;
      this.deviceName = deviceName;
      this.deviceType = deviceType;
      this.location = location;
      this.position = position;
      this.serialNumber = serialNumber;
      this.technicalSpecs = technicalSpecs;
      this.status = status;
    }
  }
  
  module.exports = DeviceModel;