//importing all reqired dependecies
const express = require('express');
const router = express.Router();
const Carwashtrack = require('../models/Carwashtrack')
const Register = require('../models/Register')

//const moment = require('moment');

//In-memory database that attaches different fees for packages, helps us save fee to the database
washPackages = {
    smallcars: { washerFee: 3000, packagePrice: 10000 },
    mediumcars: { washerFee: 4000, packagePrice: 15000 },
    fullwash: { washerFee: 5000, packagePrice: 20000 },
    bodaboda: { washerFee: 1500, packagePrice: 5000 },
    engine: { washerFee: 2000, packagePrice: 10000 }
}

//async in front of the whole call back function
router.get('/', async(req,res)=>{
    //This is a mongodb function that finds members/objects in register collection
   let washerlist = await Register.find(); //use await because its a data base operation that returns a promise
   console.log(washerlist)
   res.render('carwashtracking', {title:"CarWash Tracking System", washers:washerlist})
})



router.post("/", async(req, res) => {
    try {
        //combining date and time
        let data = req.body //req.body is the data coming from the body. Has all data coming from the carwash track
        let datetimeArrival = Date.parse(data.dateArrived + 'T' + data.timeArrived)
        data.datetimeArrival = datetimeArrival

        
        //using washPackages one is able to derive the particular details of that package
        let packageDetails = washPackages[data.costmonitorpackages]
           
       //derive package price and washer Fee
        data.packagePrice = packageDetails['packagePrice']
        data.washerFee = packageDetails['washerFee']

        
        console.log(data)
        //using the await method to aid as save details in the carwashtrack page as we post
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


