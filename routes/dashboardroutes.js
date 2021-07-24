const express = require('express');
const mongoose = require('mongoose');
const moment = require('moment');
const Carwashtrack = require('../models/Carwashtrack') 
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        // use moment to get selected date and default date
        let selectedDate = moment().format('YYYY-MM-DD')
        if (req.query.searchdate)
            selectedDate = moment(req.query.searchdate).format('YYYY-MM-DD')

        // based on selected date , query to get the count of vehicles per washer,
        //  &  payout per washer.
        let washedVehicles = await Carwashtrack.aggregate(
            [ {$match: { dateArrived: new Date(selectedDate) }},
            { $group: { _id: '$washer', count: { $sum: 1 }, totalPayout: { $sum: '$washerFee' } } }, //group all this data per washer and count or add each car
            { $lookup: { from: 'registers', localField: '_id', foreignField: '_id', as: "details" } }
            ])
        // get the total payout for all the washers based on the selected date
        let totalPayoutPerDay = await Carwashtrack.aggregate([
                { $match: { dateArrived: new Date(selectedDate) } },
                { $group: { _id: '$dateArrived', totalPayoutPerDay: { $sum: '$washerFee' } } }
            ])
        // pass the all the relevant data as you render the payout report
        res.render("dashboard", { washers: washedVehicles, 
            title: "List of Car Washers", defaultDate: selectedDate ,
            sumPayout:totalPayoutPerDay[0]})
    }
    catch (err) {
        console.log(err)
        res.send('Failed to retrive payout details');
    }
})        


// router.get('/', async(req,res)=>{

//    let washedVehicles = await Carwashtrack.aggregate(
//     [ {$group: { _id: '$washer', count: { $sum: 1}, totalPayout: { $sum: 'washerFee'} } }, 
//       {$lookup: { from: 'registers', localField: '_id', foreignField:'_id', as:'details'} }
//     ])

//     console.log(washedVehicles)

//    res.render("dashboard", {washers:washedVehicles, title:'List of Car Washers'}) 

// })
 
module.exports = router;

