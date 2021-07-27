const mongoose = require('mongoose');
//creating registers schema
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
//registers the washer with mongoose to be accessed anywhere by our in our application.
module.exports = mongoose.model('Register', registerSchema);