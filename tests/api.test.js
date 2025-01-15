const request = require('supertest');
const app = require('../index'); 

describe('API Routes', () => {
    
    
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
    });

    
    test('GET /api/getUser should return a user', async () => {
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
    });

    
    describe('POST /api/saveDevice', () => {
        it('should save the device data and return success message', async () => {
            const formData = {
                deviceName: 'Laptop',
                deviceType: 'LaptopType',
                location: 'Office',
                position: 'Position 1',
                serialNumber: '123456',
                technicalSpecs: 'Intel i7, 16GB RAM',
                status: 'Active',
            };

            const response = await request(app)
                .post('/api/saveDevice')
                .send(formData)
                .set('Content-Type', 'application/json');

            expect(response.status).toBe(200);
            expect(response.body.message).toBe('Urządzenie zapisane pomyślnie!');
            expect(response.body.device.deviceName).toBe('Laptop');
        });

        it('should return error if there is a problem saving the device', async () => {
            const formData = {
                deviceName: 'Laptop',
                deviceType: 'LaptopType',
                location: 'Office',
                position: 'Position 1',
                serialNumber: '123456',
                technicalSpecs: 'Intel i7, 16GB RAM',
                status: 'Active',
            };

            
            const response = await request(app)
                .post('/api/saveDevice')
                .send(formData)
                .set('Content-Type', 'application/json');

            expect(response.status).toBe(200);
            expect(response.body.error).toBe('Błąd podczas zapisu urządzenia');
        });
    });
});


describe('API Routes - DELETE /api/deleteUser', () => {

    test('DELETE /api/deleteUser should return success message when user is deleted', async () => {
        const userIdToDelete = 18; 

        const response = await request(app)
            .delete('/api/deleteUser')
            .send({ id: userIdToDelete });  

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('User deleted successfully');
    });

    test('DELETE /api/deleteUser should return 404 when user is not found', async () => {
        const nonExistentUserId = 999; 

        const response = await request(app)
            .delete('/api/deleteUser')
            .send({ id: nonExistentUserId });

        expect(response.status).toBe(404);
        expect(response.body.error).toBe('User not found');
    });

    test('DELETE /api/deleteUser should return 400 if no ID is provided', async () => {
        const response = await request(app)
            .delete('/api/deleteUser')
            .send({}); 
    

        expect(response.status).toBe(400);
        expect(response.body.error).toBe('User ID is required');
    });

});
