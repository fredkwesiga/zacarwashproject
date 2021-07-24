const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    fullname:{
        type: String,
        trim: true,
    },
    gender:{
        type: String,
        trim: true,  //trim property given to a string
    },
    dob:{
        type: Date,
    },
    nin:{
        type: String,
        trim: true,
    },
    placeofresidence:{
        type: String,
        trim: true,
    },
    zacarids:{
        type: String,
        trim: true,
    }
})

module.exports = mongoose.model('Register', registerSchema);