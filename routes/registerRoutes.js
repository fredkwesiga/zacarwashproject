const express = require('express');
const router = express.Router();
const Register = require('../models/Register')

router.get('/',(req,res)=>{
  res.render('register', {title:"ZaCar Washer Registry"})
})

router.post('/', (req,res)=>{
  console.log(req.body)
  const register = new Register(req.body)
  register.save()
    .then(()=>{res.send("The data has been submitted")})
    .catch((err)=>{console.log(err);res.send("Data not submitted")})
})

module.exports = router;