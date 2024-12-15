const express = require('express');
// import userRoute from './user/index'
const userRoute = require('./user/index')
require('dotenv').config();


const app = express()
const PORT = 3000

app.get('/', (req,res)=>{
    return res.json({
        msg: "heloo",
        name: "abhi",
        url: process.env.MONGO_URL
    })
})

app.route('/user', userRoute)


app.listen(PORT)