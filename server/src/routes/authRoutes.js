const express = require('express')
const { login, register, logout } = require('../controller/authController')
const dbPool = require('../database/db')

const router = express.Router()

router.post("/login", login)
router.post("/register", register)
router.get('/login', async (req, res) => {
    const [data] = await dbPool.execute('SELECT * FROM user')
    res.json({
        data
    })
})
router.post("/logout", logout)


module.exports = router