const knex = require('../../db/index')

function getAll(){
    return knex('invoices')
}

module.exports = {
    getAll
}