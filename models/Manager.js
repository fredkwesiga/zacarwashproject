const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


const managerSchema = new mongoose.Schema({
    emailAddress: {
        type: String,
        required: "Please provide user name",
        unique: true,
        trim: true,
      },
    password: {
        type: String
          },

  });

  managerSchema.plugin(passportLocalMongoose);
  //managerSchema.plugin(passportLocalMongoose, { usernameField: 'email' })
module.exports = mongoose.model('Manager', managerSchema);