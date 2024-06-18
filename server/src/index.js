const express = require('express')
const app = express()
const cors = require('cors')

const authenticateToken = require('./middleware/validateMiddleware');

const allowedOrigins = ['http://localhost:5173']; // Replace with your client's origin

app.use(cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true // Allow credentials (cookies, authorization headers, etc.)
}));


app.use(express.json())

const authRoutes = require('./routes/authRoutes')

app.use('/auth', authRoutes);


app.listen('3000', (req, res) => {
    console.log('server is running')
})



