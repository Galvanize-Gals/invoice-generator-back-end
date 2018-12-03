
exports.up = function(knex, Promise) {
  return knex.schema.createTable('invoices', (table) => {
    table.increments()
    table.integer('invoice_number')
    table.date('due_date')
    table.text('notes')
    table.boolean('is_paid')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('invoices')
};
