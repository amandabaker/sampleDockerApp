// server.js

'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

// Configuration

const db = require('./config/db')
const PORT = 80

// connect to our mongoDB database
mongoose.connect(db.url)

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json())

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'))

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'))

// routes ==================================================
require('./app/routes')(app) // configure our routes

app.listen(PORT)
console.log('Running on http://localhost:' + PORT)

exports = module.exports = app
