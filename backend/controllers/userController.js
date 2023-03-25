const { text } = require('express')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')


const getData =asyncHandler( async (req, res) => {
  try {
    const Users = await User.find();
    res.json(Users);
    console.log(Users)
  } catch (err) {
    res.json({ message: err });
  }
});






const AjouterData = asyncHandler(async(req,res)=>{


    const {Name, Type, detalle , Number} = req.body
  

    const user = await User.create({
      Name,
      Type,
      detalle, 
      Number
      
    })
    if(user){
             console.log( res),
              res.status(201)
       } else{
    res.status(400) 
    throw new Error('Invalid user data');
    }
   
    
})





module.exports = {AjouterData,getData}