const knex = require('../../db/index')

function getAll(){
    return knex('invoices')
}

function getOne(invoiceId){
    return knex('invoices').where({ id: invoiceId })
}


module.exports = {
    getAll,
    getOne
}