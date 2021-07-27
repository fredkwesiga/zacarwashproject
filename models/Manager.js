//importing mongoose.
const mongoose = require('mongoose');
//import passport into the file
const passportLocalMongoose = require('passport-local-mongoose');

//creating manager's schema
const managerSchema = new mongoose.Schema({
    emailAddress: {
        type: String,
        required: "Please provide user name",
        unique: true,
        trim: true, //trim property given to a string
      },
    // password: {
    //     type: String
    //       },

  });

//plugin aids us to read and access manager's email that will be used for loggin into the system.
//it will also add a hashed passport value and salt value
managerSchema.plugin(passportLocalMongoose, { usernameField: 'emailAddress' })
module.exports = mongoose.model('Manager', managerSchema);