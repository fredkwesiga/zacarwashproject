const express = require('express');
const mongoose = require('mongoose');
const Carwashtrack = require('../models/Carwashtrack') 
const router = express.Router();


router.get('/', async(req,res)=>{

   let washedVehicles = await Carwashtrack.aggregate(
    [ {$group: { _id: '$washer', count: { $sum: 1} } }, //totalPayout: { $sum: 'washerFee'}
      {$lookup: { from: 'registers', localField: '_id', foreignField:'_id', as:'details'} }
    ])

    console.log(washedVehicles)

   res.render("dashboard", {washers:washedVehicles, title:'List of Car Washers'}) 

})
 



module.exports = router;