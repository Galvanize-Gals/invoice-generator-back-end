const knex = require('../../db/index')

function getAll(){
    return knex('invoices')
}

function getOne(invoiceId){
    return knex('invoices')
    .where({ 'invoices.id': invoiceId })
}

function create(number, due, notes) {
    return knex('invoices')
    .insert({invoice_number: number, due_date: due, notes: notes })
    .returning('*')
}

function update(invoiceId, number, due, notes) {
    return knex('invoices')
    .update({invoice_number: number, due_date: due, notes: notes })
    .where({'invoices.id': invoiceId})
    .returning('*')
}

function remove(invoiceId) {
    return knex('invoices')
    .del()
    .where({'invoices.id': invoiceId})
    .returning('*')
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove
}