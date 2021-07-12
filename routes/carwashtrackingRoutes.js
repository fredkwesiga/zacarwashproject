
const express = require('express');
const router = express.Router();
const Carwashtrack = require('../models/Carwashtrack')
const Register = require('../models/Register')


router.get('/', async(req,res)=>{
   let washers = await Register.find(); //mongodb function finds members/objects in register collection
  res.render('carwashtracking', {title:"CarWash Tracking System", washers: washers})
})

// router.post('/', async(req,res)=>{
//   console.log(req.body)
//   const carwashtrack = new Carwashtrack(req.body)
//   carwashtrack.save()
//       .then(()=>{res.send('Car monitor tracks submitted')})
//       .catch((err)=>{console.log(err);res.send('No tracking has been submiited')})
// })

router.post("/", async(req, res) => {
    try {
        const carwashmonitor = new Carwashtrack(req.body);
        await carwashmonitor.save()
        res.redirect('carwashtracking?alert=success')
    }
    catch (err) {
        res.status(400).render('carwashtracking', { title: "CarWash Tracking System", alert: 'error' })
        console.log(err)
    }
})


module.exports = router;


