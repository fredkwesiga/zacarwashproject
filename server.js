//Dependecies
const express = require('express');
const path = require('path')
const loginRoutes = require('./routes/loginRoutes')
const registerRoutes = require('./routes/registerRoutes');
//instantitions
const app = express();

//configurations or settings
// Express.js application to look in the views folder for template files and to use Pug as the template engine.
app.set('views', './views');
app.set('view engine', 'pug');

//Middlware
//adding body parser middleware that handles reading data from the <form> element.
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "public")));



//routes
app.use('/', loginRoutes)
app.use('/register', registerRoutes);

//routing the login page


//handle non exisiting routes
app.get('*', (req, res) => { 
  res.send('404! This is an invalid URL.');
})

//server
app.listen(3000, function() {
  console.log('listening on 3000')
})