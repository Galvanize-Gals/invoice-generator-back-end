const knex = require('../../db/index')

function getAll(){
    return knex('invoices')
}

function getOne(invoiceId){
    return knex('invoices').where({ id: invoiceId })
}

function create(number, due, notes) {
    return knex('invoices')
    .insert({invoice_number: number, due_date: due, notes: notes })
    .returning('*')

}

module.exports = {
    getAll,
    getOne,
    create
}