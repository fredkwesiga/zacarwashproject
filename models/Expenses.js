const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    dateofExpense:{
        type: String,
        trim: true,
    },
    item:{
        type: String,
        trim: true,
    },
    price:{
        type: String,
        trim: true,
    }
})

module.exports = mongoose.model('Expenses', expenseSchema);