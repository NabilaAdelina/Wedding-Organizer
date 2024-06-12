const mysql = require('mysql2/promise');
const dotenv = require("dotenv");
dotenv.config();

const dbPool = mysql.createPool({
    port: process.env.APP_PORT,
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

module.exports = dbPool