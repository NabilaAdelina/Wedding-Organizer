const express = require('express')
const app = express()
const cors = require('cors')

const authenticateToken = require('./middleware/validateMiddleware');

app.use(cors())

app.use(express.json())

const authRoutes = require('./routes/authRoutes')

app.use('/auth', authRoutes);


app.listen('3000', (req, res) => {
    console.log('server is running')
})



