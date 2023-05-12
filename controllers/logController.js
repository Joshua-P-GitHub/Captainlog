const express = require('express')
const router = express.Router()
const Log = require('../models/logs')


//INDUCES
//INDEX
router.get('/', async (req,res) => {
  try {
    const logsFound = await Log.find({})
    res.render('Index', {logs: logsFound})
  } catch (error) {
    res.status(400).send(error) 
  }
})
//NEW
router.get('/new', async (req,res) => {
  res.render('NEW')
})
//Delete
router.delete('/:id', async (req,res) => {
  try {
  const deleteLog = await Log.findByIdAndDelete(req.params.id)
  res.redirect('/logs')    
  } catch (error) {
    res.status(400).send(error)
  }
})
//Update
router.get('/:id/edit', async (req,res) => {
  try {
    const logFound = await Log.findById(req.params.id)
    res.render('Edit', {log: logFound})
  } catch (error) {
    res.status(400).send(error) 
  }
})
//CREATE
router.post('/', async (req,res) => {
  if (req.body.shipIsBroken === 'on'){
    req.body.shipIsBroken = true
  } else {
    req.body.shipIsBroken = false
  }
  try {
    const newLog = await Log.create(req.body)
    res.redirect('/logs')
  } catch (error) {
    res.status(400).send(error) 
  }
})
//EDIT
router.put('/:id', async (req,res) => {
  if (req.body.shipIsBroken === 'on'){
    req.body.shipIsBroken = true
  } else {
    req.body.shipIsBroken = false
  }
  try {
    const logFoundtoUdate = await Log.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/logs')
  } catch (error) {
    res.status(400).send(error) 
  }
})
//SHOW
router.get('/:id', async (req,res) => {
  try {
    const logFound = await Log.findById(req.params.id)
    res.render('Show', {log: logFound})
  } catch (error) {
    res.status(400).send(error) 
  }
})


module.exports = router