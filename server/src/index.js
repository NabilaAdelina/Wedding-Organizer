const express = require('express')
const app = express()

const userRouter = require('./routes/user.route')

app.use('/user', userRouter)


app.listen('3000', (req, res) => {
    console.log('server is running')
})



