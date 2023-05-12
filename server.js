const db = require('./config/db')
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;



const reactViewsEngine = require('jsx-view-engine').createEngine();
app.engine('jsx', reactViewsEngine);
// This line tells the render method the default file extension to look for.
app.set('view engine', 'jsx');
// This line sets the render method's default location to look for a jsx file to render. Without this line of code we would have to specific the views directory everytime we use the render method
app.set('views', './views');
//middleware
app.use(express.urlencoded({ extended: false}))



//INDUCES
//NEW
app.get('/new', (req,res) => {
  res.render('NEW')
})









app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})