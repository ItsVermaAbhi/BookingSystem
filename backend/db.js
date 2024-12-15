const mn = require('mongoose')
require('dotenv').config();


mn.connect(process.env.MONGO_URL)