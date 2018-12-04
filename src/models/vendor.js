const knex = require('../../db/index')



function getAll(vendorId){
    return knex('invoices')
    .join('accounts_invoices', 'invoice_id', 'invoices.id')
    .where('accounts_invoices.vendor_id', vendorId)
}

module.exports = {
    getAll
}