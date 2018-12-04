const knex = require('../../db/index')

function getAll(invoiceId) {
    return knex('line_items').where({ 'line_items.invoice_id': invoiceId })
}

function getOne(line_item_id) {
    return knex('line_items')
        .where({ 'line_items.id': line_item_id })
}

function create(desc, quant, rate, inv_id) {
    return knex('line_items')
        .insert({ description: desc, quantity: quant, rate: rate, invoice_id: inv_id })
        .returning('*')
}

function remove(id) {
    return knex('line_items')
        .del()
        .where({ 'line_items.id': id })
        .returning('*')
}



module.exports = {
    getAll,
    getOne,
    create,
    remove
}