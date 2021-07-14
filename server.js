//Dependecies
const express = require('express');
const path = require('path')
const mongoose = require('mongoose');
require('dotenv').config();

const loginRoutes = require('./routes/loginRoutes')
const registerRoutes = require('./routes/registerRoutes');
const carwashtrackingRoutes = require('./routes/carwashtrackingRoutes')
const expenseRoutes = require('./routes/expenseRoutes')
const homeRoutes = require('./routes/homeRoutes')
const dashboardRoutes = require('./routes/dashboardRoutes')
//instantitions
const app = express();

// mongodb connection
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
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
app.set('views', './views');
app.set('view engine', 'pug');

//Middlware
//adding body parser middleware that handles reading data from the <form> element.
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "public")));



//routes
app.use('/', homeRoutes)
app.use('/login', loginRoutes)
app.use('/register', registerRoutes);
app.use('/carwashtracking', carwashtrackingRoutes);
app.use('/expense', expenseRoutes);
app.use('/dashboard', dashboardRoutes);



//handle non exisiting routes
app.get('*', (req, res) => { 
  res.send('404! This is an invalid URL.');
})

//server
app.listen(3000, function() {
  console.log('listening on 3000')
})