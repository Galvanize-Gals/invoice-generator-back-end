const userModel = require('../models/users')

// This function is not used
// any code that is not triggered by a user
// activity should not be in your code.
function getAll(req, res, next){
    userModel.getAll()
    .then(function(data){
      res.send({ data })
    })
    .catch(next)
}


// make sure to check that req.query.email
// has an actual value before sending it off to the database,
// otherwise, you'll get a 500 error, instead of a 400
function getUserByEmail(req, res, next){
  userModel.getUserByEmail(req.query.email)
  .then(function(data){
    res.send({ data })
  })
  .catch(next)
}

function getOne(req, res, next){
  userModel.getOne(req.params.userId)
  .then(function(data){
    res.send({ data })
  })
  .catch(next)
}

function create(req, res, next){
  if(!req.body.email && !req.body.password && !req.body.first_name && !req.body.last_name){
    return next({ status: 400, message: 'Bad username'})
  }
  userModel.create(req.body.email, req.body.password, req.body.first_name, req.body.last_name, req.body.company)
  .then(function(data){
    return res.status(201).send({ data })
  })
  .catch(next)
}


module.exports = {
  getAll,
  getUserByEmail,
  getOne,
  create
}
