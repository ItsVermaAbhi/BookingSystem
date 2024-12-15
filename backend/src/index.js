const express = require('express');
const userRoute = require('./user/index')
require('dotenv').config();


const app = express()
const PORT = 3000


app.route('/user', userRoute)


app.listen(PORT)