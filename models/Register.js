const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
    },
    gender:{
        type: String,
        trim: true,
    },
    dob:{
        type: Date,
        trim: true,
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