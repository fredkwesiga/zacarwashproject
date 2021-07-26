//Dependecies
const express = require('express'); //aids us with routing and creating the server
const moment = require('moment');
const path = require('path')
const mongoose = require('mongoose');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
require('dotenv').config();

const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});

const loginRoutes = require('./routes/loginRoutes')
const registerRoutes = require('./routes/registerRoutes');
const carwashtrackingRoutes = require('./routes/carwashtrackingRoutes')
const expenseRoutes = require('./routes/expenseRoutes')
const homeRoutes = require('./routes/homeRoutes')
const dashboardRoutes = require('./routes/dashboardRoutes')
const reportRoutes = require('./routes/reportRoutes')
const managerRoutes = require('./routes/managerRoutes')
const Manager = require('./models/Manager')

//instantitions
const app = express();

// mongodb connection
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});


mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });


//configurations or settings
// Express.js application to look in the views folder for template files and to use Pug as the template engine.
app.set('views', './views'); //all pug files that we have set in view will be in views folder
app.set('view engine', 'pug');
app.locals.moment = moment

//Middlware
//adding body parser middleware that handles reading data from the <form> element.
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "public")));
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

passport.use(Manager.createStrategy());
passport.serializeUser(Manager.serializeUser());
passport.deserializeUser(Manager.deserializeUser());

var loginChecker = function (req, res, next) {
  if (req.path != '/login' && !req.session.user) {
    res.redirect('/login')
  }
  next()
}
app.use(loginChecker)



//routes to display the pug files
app.use('/', homeRoutes)
app.use('/manager', managerRoutes);
app.use('/', loginRoutes)
app.use('/register', registerRoutes);
app.use('/carwashtracking', carwashtrackingRoutes);
app.use('/expense', expenseRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/', reportRoutes);



//handle non exisiting routes
app.get('*', (req, res) => { 
  res.send('404! This is an invalid URL.');
})

//server...creating server
app.listen(3000, function() {
  console.log('listening on 3000')
})
