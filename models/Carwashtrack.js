const mongoose = require('mongoose');

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
    datetimeArrival: {
        type: String,
        trim: true,
    },
    timeararrived:{
        type: String,
        trim: true,
    },
    washer:{
        type: String,
        trim: true,
    }
})

module.exports = mongoose.model('Carwashtrack', carwashtrackSchema);
