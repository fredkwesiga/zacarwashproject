//Dependecies
const express = require('express');
const path = require('path')
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
//routing the register page
app.get('/register',(req,res)=>{
  res.render('register', {title:"ZaCar Washer Registry"})
})

app.post('/register', (req,res)=>{
  console.log(req.body)
  res.send("The data has been submitted")
})
//routing the login page
app.get('/',(req,res)=>{
  res.render('login', {title:"Login page"})
})
app.post('/login', (req,res)=>{
  console.log(req.body)
  res.send("Data has been submitted")
})


//handle non exisiting routes
app.get('*', (req, res) => { 
  res.send('404! This is an invalid URL.');
})

//server
app.listen(3000, function() {
  console.log('listening on 3000')
})