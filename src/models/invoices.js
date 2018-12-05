const knex = require('../../db/index')

function getAllVendorInvoices (userId){
    return knex('invoices')
    .join('accounts_invoices', 'invoice_id', 'invoices.id')
    .where('accounts_invoices.vendor_id', userId)
}

function getAllClientInvoices(userId){
    return knex('invoices')
    .join('accounts_invoices', 'invoice_id', 'invoices.id')
    .where('accounts_invoices.client_id', userId)
}

function getOneVendorInvoice (invoiceId){
    return knex('invoices')
    .where({'invoices.id': invoiceId})
}

function getInvoiceLineItems (invoiceId){
    return knex('line_items')
    .where({'invoice_id': invoiceId})
}


function getOneClientInvoice (invoiceId){
    return knex('invoices')
    .where({'invoices.id': invoiceId})
}


function create(userId, clientId, number, due, notes) {
    return knex('invoices')
    .insert({invoice_number: number, due_date: due, notes: notes })
    .returning('*')
    .then(([response]) => {
        return knex('accounts_invoices')      
        .insert({ vendor_id: userId, client_id: clientId, invoice_id: response.id})
        .returning('*')
    })      
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

function createLineItem(inv_id, desc, quant, rate) {
    return knex('line_items')
        .insert({ description: desc, quantity: quant, rate: rate, invoice_id: inv_id })
        .returning('*')
}


module.exports = {
    getAllVendorInvoices,
    getAllClientInvoices,
    getInvoiceLineItems,
    getOneVendorInvoice,
    getOneClientInvoice,
    create,
    update,
    remove,
    createLineItem
}