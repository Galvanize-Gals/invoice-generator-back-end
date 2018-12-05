
exports.up = function(knex, Promise) {
  return knex.schema.createTable('line_items', (table) => {
    table.increments()
    table.text('description')
    table.float('quantity').defaultTo(0)
    table.float('rate').defaultTo(0)
    table.integer('invoice_id').references('invoices.id').onDelete('CASCADE').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('line_items')
};
