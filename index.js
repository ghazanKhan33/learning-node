const express = require('express')

const app = express()

app.use(function(req, res, next) {
   console.log("This is the middleware running")
    next()
})

app.get('/', function(req, res) {
 res.send("Hello helo")
})

app.get('/profile', function(req, res) {
    res.send("There are some changes")
})

app.listen(3000)
