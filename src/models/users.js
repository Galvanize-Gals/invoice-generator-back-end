const knex = require('../../db/index')
const bcrypt = require('bcrypt')

function getAll(){
    return knex('users')
}

function getOneByUserName(username){
  return (
    knex('users')
    .where({ username })
    .first()
  )
}

function create(username, password, first_name, last_name){

  return getOneByUserName(username)
  .then(function(data){
    if(data) throw { status: 400, message:'User already exists'}

    return bcrypt.hash(password, 10)
  })
  .then(function(hashedPassword){

    return (
      knex('users')
      .insert({ username, password: hashedPassword, first_name, last_name })
      .returning('*')
    )
  })
  .then(function([ data ]){
    delete data.password
    return data
  })
}

module.exports = {
  getAll,
  getOneByUserName,
  create
}
