const request = require('supertest');
const app = require('../index'); // całe api


describe('API Routes', () => {
    
    // test('GET /api/hello should return a JSON response', async () => {
    //     const response = await request(app).get('/api/hello');
    //     expect(response.status).toBe(200);
    //     expect(response.body).toHaveProperty('message', 'Hello from API!');
    // });

    test('GET /api/users should return all users in json', async () => {
        const response = await request(app).get('/api/users');
        expect(response.status).toBe(200);

        response.body.users.forEach(user => {
            expect(user).toHaveProperty('id');
            expect(user).toHaveProperty('username');
            expect(user).toHaveProperty('password');
            expect(user).toHaveProperty('first_name');
            expect(user).toHaveProperty('last_name');
            expect(user).toHaveProperty('email');
            expect(user).toHaveProperty('phone');
            expect(user).toHaveProperty('role'); 
        });
    })
    test('GET /api/getUser should return a user', async() => {
        const response = await request(app).post('/api/getUser').send({id: 1});
        expect(response.status).toBe(200);

        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveProperty('username');
        expect(response.body).toHaveProperty('password');
        expect(response.body).toHaveProperty('first_name');
        expect(response.body).toHaveProperty('last_name');
        expect(response.body).toHaveProperty('email');
        expect(response.body).toHaveProperty('phone');
        expect(response.body).toHaveProperty('role'); 
    })
    // test('POST /api/createUser ', async() => {
    //     const response = await request(app).post('/api/createUser');
        
    // })
});
