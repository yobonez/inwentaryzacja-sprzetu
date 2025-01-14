const { Client } = require('pg'); // PostgreSQL Client

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

client.connect();

module.exports = {
  // Funkcja do zapisania urządzenia w bazie danych
  createDevice: async (device) => {
    const query = `
      INSERT INTO devices (device_name, device_type, location, position, serial_number, technical_specs, status)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
    `;

    const values = [
      device.deviceName,
      device.deviceType,
      device.location,
      device.position,
      device.serialNumber,
      device.technicalSpecs,
      device.status,
    ];

    try {
      const res = await client.query(query, values);
      return res.rows[0]; // Zwraca zapisane urządzenie
    } catch (err) {
      console.error('Błąd przy zapisie urządzenia:', err);
      throw new Error('Błąd przy zapisie urządzenia');
    }
  },
};