const express = require('express')

const router = express.Router()

const dbPool = require('../database/db')

router.get('/', async (req, res) => {
    try {
        const [data] = await dbPool.execute('SELECT * FROM user');
        res.json({
            data
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
});

module.exports = router