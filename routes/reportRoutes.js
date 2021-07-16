const express = require('express');
const mongoose = require('mongoose');
const Expenses = require('../models/Expenses')
const Carwashtrack = require('../models/Carwashtrack')
const Register = require('../models/Register')
const moment = require('moment');
const router = express.Router();



router.get('/expense', async (req, res) => {
       try {
        let selectedDate = moment().format('YYYY-MM-DD')
        if (req.query.searchdate)
            selectedDate = moment(req.query.searchdate).format('YYYY-MM-DD')
        console.log(selectedDate)    

        // query for returning all expenses on a day
        let expenseDetails = await Expenses.find({ dateofExpense: selectedDate })
        console.log(expenseDetails)

        // query for total expense on a day
        let totalExpense = await Expenses.aggregate([
            
            { $match: { dateofExpense: new Date(selectedDate) } },
            { $group: { _id: '$dateofExpense', totalExpense: { $sum: '$price' } } }
        ])
        console.log(totalExpense)

        res.render("expense_report", {
            expenses: expenseDetails, total: totalExpense[0],
            title: "Expenses", defaultDate: selectedDate
        })
    } catch (err) {
        console.log(err)
        res.send('Failed to retrive Expense details');
    }
})

router.get('/carwashtracking', async (req, res) => {
    try {
        let selectedDate = moment().format('YYYY-MM-DD')
        if (req.query.searchdate)
            selectedDate = moment(req.query.searchdate).format('YYYY-MM-DD')

        // query for returning all expenses on a day

        let collectionDetails = await Carwashtrack.find({ dateArrived: selectedDate })

        // query for total expense on a day
        let totalCollection = await Carwashtrack.aggregate([
            { $match: { dateArrived: new Date(selectedDate) } },
            { $group: { _id: '$dateArrived', totalCollection: { $sum: '$packagePrice' } } }
        ])
        console.log(totalCollection)

        res.render("carwashtracking_report", {
            collections: collectionDetails, total: totalCollection[0],
            title: "Collections", defaultDate: selectedDate
        })

    } catch (err) {
        console.log(err)
        res.send('Failed to retrive collections details');
    }
})


router.get('/washer-details', async (req, res) => {
    try {
        // find all the data in the Washers collection
        let washerDetails = await Register.find();
        res.render('washer_details', { users: washerDetails, title: 'Washer Details' })
    } catch (err) {
        console.log(err)
        res.send('Failed to retrive washer details');
    }
})



module.exports = router;