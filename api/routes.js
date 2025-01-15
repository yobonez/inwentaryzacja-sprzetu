const express = require('express');
const router = express.Router();

const UserModel = require('../db/models/UserModel');
const UserQuery = require('../db/queries/UserQuery');

const DeviceModel = require('../db/models/DeviceModel');
const DeviceQuery = require('../db/queries/DeviceQuery');

router.get('/users', async (req, res) => {
    try {
        const users = await UserQuery.getAllUsers();
        res.json({users});
    }
    catch(err) {
        console.error(err);
        res.status(500).json({
            error: 'Database error',
        })
    }
})

router.post('/getUser', async (req, res) => {
    try {
        const user = await UserQuery.getUserById(req.body.id);
        res.json(user);
    }
    catch(err) {
        console.error(err);
        res.status(500).json({
            error: 'Database error',
        })
    }
})

router.post('/createUser', async (req, res) => {
    try {
        const newUser = new UserModel(null
                                    , req.body.user_name
                                    , req.body.password
                                    , req.body.name
                                    , req.body.surname
                                    , req.body.email
                                    , req.body.phone
                                    , req.body.role);
        const createdUser = await UserQuery.createUser(newUser);
        res.json({user: createdUser});
    }
    catch(err) {
        console.error(err);
        res.status(500).json({error: 'Database error'});
    }
})

router.delete('/deleteUser', async (req, res) => {
    try {
        const { id } = req.body;  
        console.log("Received id to delete:", id); 

        if (!id) {
            return res.status(400).json({ error: 'User ID is required' });
        }

        const deletedUser = await UserQuery.deleteUserById(id); 

        if (deletedUser) {
            console.log("User deleted successfully:", deletedUser); 
            res.status(200).json({ message: 'User deleted successfully' }); 
        } else {
            console.log("User not found with id:", id); 
            res.status(404).json({ error: 'User not found' }); 
        }
    } catch (err) {
        console.error('Error during deletion:', err); 
        res.status(500).json({ error: `Database error: ${err.message}` }); 
    }
});

router.post('/saveDevice', async (req, res) => {
    try {
        
        const { deviceName, deviceType, location, position, serialNumber, technicalSpecs, status } = req.body;

        
        const newDevice = new DeviceModel(null, deviceName, deviceType, location, position, serialNumber, technicalSpecs, status);

        
        const createdDevice = await DeviceQuery.createDevice(newDevice);

        
        res.status(200).json({ message: 'Urządzenie zapisane pomyślnie!', device: createdDevice });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Błąd podczas zapisu urządzenia' });
    }
});


module.exports = router;