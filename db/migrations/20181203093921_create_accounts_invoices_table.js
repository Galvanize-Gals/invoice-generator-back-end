
exports.up = function(knex, Promise) {
  return knex.schema.createTable('accounts_invoices', (table) => {
    table.increments()
    table.integer('vendor_id').references('accounts.id').onDelete('CASCADE').notNullable()
    table.integer('client_id').references('accounts.id').onDelete('CASCADE').notNullable()
    table.integer('invoice_id').references('invoices.id').onDelete('CASCADE').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('account_invoices')
};
