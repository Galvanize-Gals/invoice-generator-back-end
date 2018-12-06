const knex = require('../../db/index')

function getAllVendorInvoices (userId){
    return knex('invoices')
    .select('invoices.id','invoice_number','due_date','notes','is_paid','invoices.created_at','invoices.updated_at','vendor_id','client_id','invoice_id','email','first_name', 'last_name', 'company')
    .join('accounts_invoices', 'invoice_id', 'invoices.id')
    .join('accounts', 'accounts.id', 'accounts_invoices.client_id')
    .where('accounts_invoices.vendor_id', userId)
    .then(invoices => {
        const line_items = invoices.map(i =>
            getInvoiceLineItems(i.id)
            .then(line_items => {
                i.line_items = line_items
                i.total = line_items.reduce((acc, ele) => acc + ele.subtotal, 0)
                return i
            })
        )
        return Promise.all(line_items)
    })
}

function getAllClientInvoices(userId){
    return knex('invoices')
    .select('invoices.id','invoice_number','due_date','notes','is_paid','invoices.created_at','invoices.updated_at','vendor_id','client_id','invoice_id','email','first_name', 'last_name', 'company')
    .join('accounts_invoices', 'invoice_id', 'invoices.id')
    .join('accounts', 'accounts.id', 'accounts_invoices.vendor_id')
    .where('accounts_invoices.client_id', userId)
    .then(invoices => {
        const line_items = invoices.map(i =>
            getInvoiceLineItems(i.id)
            .then(line_items => {
                i.line_items = line_items
                i.total = line_items.reduce((acc, ele) => acc + ele.subtotal, 0)
                return i
            })
        )
        return Promise.all(line_items)
    })
}


function getOneVendorInvoice (invoiceId){
    return knex('invoices')
    .where({'invoices.id': invoiceId})
}

function getInvoiceLineItems (invoiceId){
    return knex('line_items')
        .where({ 'invoice_id': invoiceId })
        .then(items => {
            return items.map(item => ({
                ...item,
                subtotal: item.quantity * item.rate
            }))
    })
}

function getOneClientInvoice (invoiceId){
    return knex('invoices')
    .where({'invoices.id': invoiceId})
}

function create(userId, clientId, number, due, notes) {
    return knex('invoices')
    .insert({ invoice_number: number, due_date: due, notes: notes })
    .returning('*')
    .then(([response]) => {
        return knex('accounts_invoices')
        .insert({ vendor_id: userId, client_id: clientId, invoice_id: response.id})
        .returning('*')
    })
}

function update(invoiceId) {
    return knex('invoices')
    .where({'invoices.id': invoiceId})
    .then( ([response]) => {
        if (!response) throw {status: 400, message: "invoice doesn't exist"}
        return knex('invoices')
        .update({ is_paid: !response.is_paid })
        .where({'invoices.id': invoiceId})
        .returning('*')
    })  
}

function remove(invoiceId) {
    return knex('invoices')
    .del()
    .where({'invoices.id': invoiceId})
    .returning('*')
}

function createLineItem(items) {
    return knex('line_items')
        .insert(items)
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
