const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    dateofExpense:{
        type: Date,
    },
    item:{
        type: String,
        trim: true, //trim property given to a string
    },
    price:{
        type: Number,
    }
})

module.exports = mongoose.model('Expenses', expenseSchema);