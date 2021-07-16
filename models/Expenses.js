const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    dateofExpense:{
        type: Date,
    },
    item:{
        type: String,
        trim: true,
    },
    price:{
        type: Number,
    }
})

module.exports = mongoose.model('Expenses', expenseSchema);