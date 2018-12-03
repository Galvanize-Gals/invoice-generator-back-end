const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

if(process.env.NODE_ENV !== 'production'){
  require('dotenv').load()
}

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())


// Routes
app.use('/invoices', require('./routes/invoices'));
app.use('/auth', require('./routes/auth'))
app.use('/users', require('./routes/users'))

//authorization & authentication
const authController = require('./controllers/auth')

app.get('/protected',
        authController.isAuthenticated,
        function(req, res, next){ res.send({ id: req.claim.id, message: "For authenticated eyes only" }) })

app.get('/protected/:userId',
        authController.isAuthenticated,
        authController.isSelf,
        function(req, res, next){ res.send({ id: req.claim.id, message: "For your eyes only"}) })


// Default Route
app.use(function(req, res, next){
  next({status: 404, message: 'Route not found' })
})


// Error Handler
app.use(function(err, req, res, next){
  const errorMessage = {}

  if(process.env.NODE_ENV !== 'production' && err.stack)
    errorMessage.stack = err.stack

  errorMessage.status = err.status || 500
  errorMessage.message = err.message || 'Internal Server Error'

  res.status(errorMessage.status).send(errorMessage)
})


// Start Server
const port = process.env.PORT || 3000

app.listen(port, function(){
  console.log(`Invoice Creator listening on port ${port}`)
})