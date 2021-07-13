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
        type: Date,
        trim: true,
    },
    washer:{
        type: mongoose.Schema.Types.ObjectId,
        trim: 'Washer',
    }
})

module.exports = mongoose.model('Carwashtrack', carwashtrackSchema);
