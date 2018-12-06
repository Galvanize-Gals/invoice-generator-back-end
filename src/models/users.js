const knex = require('../../db/index')
const bcrypt = require('bcrypt')

function getAll(){
    return knex('accounts')
}

function getUser(email){
  return (
    knex('accounts')
    .where({ 'email': email })
    .first()
  )
}

function create(email, password, first_name, last_name, company = null){

  return getUser(email)
  .then(function(data){
    if(data) throw { status: 400, message:'User already exists'}

    return bcrypt.hash(password, 10)
  })
  .then(function(password){

    return (
      knex('accounts')
      .insert({ email, hashword: password, first_name, last_name, company })
      .returning('*')
    )
  })
  .then(function([ data ]){
    delete data.hashword
    return data
  })
}

module.exports = {
  getAll,
  getUser,
  create
}
