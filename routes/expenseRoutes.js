const express = require('express');
const router = express.Router();
const Expenses = require('../models/Expenses')

router.get('/',(req,res)=>{
  res.render('expense', {title:"Zawash Expenses", alert: req.query.alert})
})


router.post('/', async(req,res)=>{
  try{
    console.log(req.body)
    const expense = new Expenses(req.body)
    await expense.save()
    res.redirect('expense?alert=success')
  }
  catch (err) {
    res.status(400).render('expense', {title: "Zawash Expenses", alert: 'error'})
    console.log(err)
  }
})



module.exports = router;