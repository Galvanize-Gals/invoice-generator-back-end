const knex = require('../../db/index')

// function getAll(){
//     return knex('invoices')
// }

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

function getAllVendorInvoices (vendorId){
    return knex('invoices')
    .join('accounts_invoices', 'invoice_id', 'invoices.id')
    .where('accounts_invoices.vendor_id', vendorId)
}

function getAllClientInvoices(clientId){
    return knex('invoices')
    .join('accounts_invoices', 'invoice_id', 'invoices.id')
    .where('accounts_invoices.client_id', clientId)
}


module.exports = {
    getOne,
    create,
    update,
    remove,
    getAllVendorInvoices,
    getAllClientInvoices
}