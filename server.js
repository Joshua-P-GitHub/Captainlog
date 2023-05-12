const db = require('./config/db')
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Log = require('./models/logs')


const reactViewsEngine = require('jsx-view-engine').createEngine();
app.engine('jsx', reactViewsEngine);
// This line tells the render method the default file extension to look for.
app.set('view engine', 'jsx');
// This line sets the render method's default location to look for a jsx file to render. Without this line of code we would have to specific the views directory everytime we use the render method
app.set('views', './views');
//middleware
app.use(express.urlencoded({ extended: false}))



//INDUCES
//INDEX
app.get('/logs', async (req,res) => {
  try {
    const logsFound = await Log.find({})
    res.render('Index', {logs: logsFound})
  } catch (error) {
    res.status(400).send(error) 
  }
})
//NEW
app.get('/new', async (req,res) => {
  res.render('NEW')
})
//CREATE
app.post('/logs', async (req,res) => {
  if (req.body.shipIsBroken === 'on'){
    req.body.shipIsBroken = true
  } else {
    req.body.shipIsBroken = false
  }
  try {
    const newLog = await Log.create(req.body)
  } catch (error) {
    res.status(400).send(error) 
  }
})

//SHOW
app.get('/log/:id', async (req,res) => {
  try {
    const logFound = await Log.findById(req.params.id)
    res.render('Show', {log: logFound})
  } catch (error) {
    res.status(400).send(error) 
  }
})









app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})