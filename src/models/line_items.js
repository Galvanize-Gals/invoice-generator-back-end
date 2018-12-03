const knex = require('../../db/index')

function getAll(invoiceId){
    return knex('line_items').where({ 'line_items.invoice_id':invoiceId })
}

function getOne(line_item_id){
    return knex('line_items')
    .where({ 'line_items.id': line_item_id })
}


module.exports = {
    getAll,
    getOne
}