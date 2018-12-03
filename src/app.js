const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(bodyParser.json())
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))
if(process.env.NODE_ENV !== 'production'){ require('dotenv').load() }


// Routes
app.use('/', require('./routes/auth'))
app.use('/', require('./routes/users'))
app.use('/invoices', require('./routes/invoices'));
app.use('/invoices', require('./routes/line_items'));

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

