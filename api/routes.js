const express = require('express');
const router = express.Router();

const UserModel = require('../db/models/UserModel');
const UserQuery = require('../db/queries/UserQuery');

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




module.exports = router;