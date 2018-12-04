const knex = require('../../db/index')

function getAll(invoiceId){
    return knex('line_items').where({ 'line_items.invoice_id':invoiceId })
}

function getOne(lineItemId){
    return knex('line_items')
    .where({ 'line_items.id': lineItemId })
}

function create(items) {
    return knex('line_items')
    .insert(items)
    .returning('*')
}



module.exports = {
    getAll,
    getOne,
    create
}