const knex = require('../../db/index')



function getAll(clientId){
    return knex('invoices')
    .join('accounts_invoices', 'invoice_id', 'invoices.id')
    .where('accounts_invoices.client_id', clientId)
}

module.exports = {
    getAll
}