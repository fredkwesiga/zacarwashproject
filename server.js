//Dependecies
const express = require('express');
//instantitions
const app = express();

//configurations or settings
app.set('view engine', 'pug');
app.set('views', './views');

//Middlware
//adding body parser middleware that handles reading data from the <form> element.
app.use(express.urlencoded({extended: true}))
app

//routes
app.get('/register',(req,res)=>{
  res.render('register', {title:"ZaCar Washer Registry"})
})

app.post('/register', (req,res)=>{
  console.log(req.body)
  res.send("The data has been submitted")
})



//handle non exisiting routes
app.get('*', (req, res) => { 
  res.send('404! This is an invalid URL.');
})

//server
app.listen(3000, function() {
  console.log('listening on 3000')
})