const express = require('express');
const router = express.Router();
const Register = require('../models/Register')

router.get('/',(req,res)=>{
  res.render('register', {title:"ZaCar Washer Registry", alert: req.query.alert})
})

// router.post('/', (req,res)=>{
//   console.log(req.body)
//   const register = new Register(req.body)
//   register.save()
//     .then(()=>{res.send("The data has been submitted")})
//     .catch((err)=>{console.log(err);res.send("Data not submitted")})
// })

//
router.post("/", async(req, res) => {
    try {
        const register = new Register(req.body);
        console.log(register)
        await register.save()
        res.redirect('register?alert=success')
    }
    catch (err) {
        res.status(400).render('register', { title: "register", alert: 'error' })
        console.log(err)
    }
})

router.post('/delete-washer', async (req, res) => {
    try {
        await Register.deleteOne({ _id: req.body.id })
        res.redirect('back')
    } catch (err) {
        res.status(400).send("Unable to delete item in the database");
    }
})


module.exports = router;