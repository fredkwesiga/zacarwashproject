const mongoose = require('mongoose');

//creating the expenseschema
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

//registers our expenses with mongoose to be accessed anywhere by our in our application.
module.exports = mongoose.model('Expenses', expenseSchema);