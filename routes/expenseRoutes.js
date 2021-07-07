const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
  res.render('expense', {title:"Zawash Expenses"})
})

router.post('/', (req,res)=>{
  console.log(req.body)
  res.send("Inventory has been submitted")
})


module.exports = router;