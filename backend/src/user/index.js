const express = require('express');

const userRoute = express()

userRoute.get("/packages", (req,res)=>{

})

userRoute.get('/packages/:id', (req,res)=>{
    
})

module.exports= {userRoute}