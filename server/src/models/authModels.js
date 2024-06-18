const dbPool = require('../database/db');
const bcrypt = require('bcrypt');

const registerUser = async (body) => {
    const { name, email, password, role } = body;

    try {
        const SQLQuery = `INSERT INTO user (name, email, password, role) VALUES (?, ?, ?, ?)`;
        const [result] = await dbPool.execute(SQLQuery, [name, email, password, role]);

        return result;
    } catch (error) {
        console.error('Error in registerUser:', error);
        throw error; // Rethrow the error to be caught in the calling function
    }
};

const getUserByEmail = (email) => {
    const SQLQuery = `SELECT * FROM user WHERE email = ?`;
    return dbPool.execute(SQLQuery, [email]);
};

module.exports = {
    registerUser,
    getUserByEmail
};
