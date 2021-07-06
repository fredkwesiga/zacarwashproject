
const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
  res.render('carwashtracking', {title:"CarWash Tracking System"})
})
router.post('/', (req,res)=>{
  console.log(req.body)
  res.send("Welcome to the Tracking system")
})

module.exports = router;