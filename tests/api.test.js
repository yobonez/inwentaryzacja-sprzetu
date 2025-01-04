const request = require('supertest');
const app = require('../index'); // całe api


describe('API Routes', () => {
    
    test('GET /api/hello should return a JSON response', async () => {
        const response = await request(app).get('/api/hello');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message', 'Hello from API!');
    });

    // test('GET /api/data should return an array of users', async () => {
    //     const response = await request(app).get('/api/data');
    //     expect(response.status).toBe(200);
    //     expect(response.body).toHaveProperty('users');
    //     expect(Array.isArray(response.body.users)).toBe(true);
    // });

});
