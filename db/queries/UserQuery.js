const db = require('../connection');
const UserModel = require('../models/UserModel');

const UserQuery = {
    async createUser(user) {
        const query = `INSERT INTO system_users (
                                        , username
                                        , password
                                        , first_name
                                        , last_name
                                        , email
                                        , phone
                                        , role) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
        const values = [user.username
                      , user.password
                      , user.first_name
                      , user.last_name
                      , user.email
                      , user.phone
                      , user.role];
        const result = await db.query(query, values);
        return UserModel.fromRow(result.rows[0]);
    },

    async getAllUsers() {
        const query = `SELECT * FROM system_users`;
        const result = await db.query(query);
        return result.rows.map(row => UserModel.fromRow(row));
    },

    async getUserById(id) {
        const query = `SELECT * FROM system_users WHERE id = $1`;
        const result = await db.query(query, [id]);
        if (result.rows.length === 0) return null;
        return UserModel.fromRow(result.rows[0]);
    }
};

module.exports = UserQuery;