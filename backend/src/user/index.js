const express = require('express');
const {Package, BookingInformation} = require('../../db')

const userRoute = express.Router()

userRoute.get("/packages", async (req,res)=>{
  try{
    const allPackages = await Package.find();

    res.status(200).json({
        Packages : allPackages
    })
  }catch(e){
    res.status(400).send("some error occured while fetching the data")
  }

})

userRoute.get('/packages/:id', async (req,res)=>{
  try{
    const id = req.params.id;
    const package = await Package.findOne({_id: id});
    if(package){
      return res.status(400).json({
        package
      })
    }else{
      return res.status(400).json({
        msg: "Package not found"
      })
    }
  }catch(e){
    res.status(400).send("some error occured while fetching the data")
  }
})

userRoute.post('/bookings', )

module.exports= {userRoute}