// app/routes.js

// grab the nerd model we just created
var Nerd = require('./models/nerd')
var nerd = 0

module.exports = function (app) {
  // server routes ===========================================================

  // sample api route
  app.get('/api/nerds', function (req, res) {
    // use mongoose to get all nerds in the database
    Nerd.find(function (err, nerds) {
      // if there is an error retrieving, send the error.
      // nothing after res.send(err) will execute
      if (err) {
        res.send(err)
        return
      }
      console.log(nerds)
      res.json(nerds) // return all nerds in JSON format
      return
    })
  })

  app.get('/api/nerds/:id', function (req, res) {
    // use mongoose to get all nerds in the database
    console.log(req.params.id)
    console.log('now im going to enter the possibly forever while loop')
    var interval = setInterval(function () {
      getOneNerd(req.params.id)
      setTimeout(function () {
        if (nerd && nerd !== '' && nerd !== 1) {
          console.log(nerd)
          res.json(nerd)
          clearInterval(interval)
          nerd = 0
        }
      }, 10)
    }, 15
    )
  })

  // route to handle creating goes here (app.post)
  app.post('/api/nerds', function (req, res) {
    var thing = {
      name: req.body.data
    }
    console.log(thing)
    Nerd.create(thing, function (err, thingObject) {
      if (err) {
        console.log('Things went awry during object creation')
      }
      console.log(thingObject)
      res.json(thingObject)
    })
  })

  // frontend routes =========================================================
  // route to handle all angular requests
  app.get('*', function (req, res) {
    res.sendFile('/usr/src/app/public/views/index.html') // load our public/index.html file
  })

  function getOneNerd (nerdID) {
    Nerd.find(function (err, nerds) {
      if (err) {
        console.log('wut')
        return err
      }
      console.log(nerds)
      nerds = nerds.filter(filterByID)
      if (nerds.length > 0) {
        // Return the first one so you dont return an array
        console.log(nerds[0])
        nerd = nerds[0]
      }
      console.log('theres nothing here')
      return 1
    })

    function filterByID (obj) {
      var objID = obj._id
      console.log(objID)
      // Triple equals does not work here
      if (nerdID == objID) {
        return true
      } else {
        return false
      }
    }
  }
}
