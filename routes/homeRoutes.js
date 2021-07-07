const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
  res.render('home', {title:"ZaCar Washing Bay"})
})

module.exports = router;