const knex = require('../../db/index')

function getAll(){
    return knex('invoices')
}

function getOne(invoiceId){
    return knex('invoices')
    .where({ 'invoices.id': invoiceId })
}


module.exports = {
    getAll,
    getOne
}