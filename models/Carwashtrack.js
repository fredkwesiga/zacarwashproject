const mongoose = require('mongoose');

//creating carwash track schema
const carwashtrackSchema = new mongoose.Schema({
    carmodel: {
        type: String,
        trim: true,
    },
    carnumberplate: {
        type: String,
        trim: true,
    },
    carcolour: {
        type: String,
        trim: true,
    },
    costmonitorpackages: {
        type: String,
        trim: true,
    },
    dateArrived:{
        type: Date
    },
    datetimeArrival: {
        type: Date,
        trim: true,
    },
    packagePrice: {
        type: Number,
    },
    washerFee:{
        type: Number,
    },
    washer:{
        type: mongoose.Schema.Types.ObjectId,
        trim: 'Washer',
    }
})

//registers the car wash tracking  with mongoose to be accessed anywhere by our in our application.
module.exports = mongoose.model('Carwashtrack', carwashtrackSchema);
