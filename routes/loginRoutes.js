const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
  res.render('login', {title:"Login page"})
})
router.post('/', (req,res)=>{
  console.log(req.body)
  res.send("Data has been submitted")
})

module.exports = router;
