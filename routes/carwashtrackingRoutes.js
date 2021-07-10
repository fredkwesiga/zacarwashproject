
const express = require('express');
const router = express.Router();
const Carwashtrack = require('../models/Carwashtrack')


router.get('/',(req,res)=>{
  res.render('carwashtracking', {title:"CarWash Tracking System"})
})
router.post('/', (req,res)=>{
  console.log(req.body)
  const carwashtrack = new Carwashtrack(req.body)
  carwashtrack.save()
      .then(()=>{res.send('Car monitor tracks submitted')})
      .catch((err)=>{console.log(err);res.send('No tracking has been submiited')})
})

module.exports = router;