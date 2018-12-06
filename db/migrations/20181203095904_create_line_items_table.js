
exports.up = function(knex, Promise) {
  return knex.schema.createTable('line_items', (table) => {
    table.increments()
    table.text('description').notNullable()
    table.float('quantity').defaultTo(0).notNullable()
    table.float('rate').defaultTo(0).notNullable()
    table.integer('invoice_id').references('invoices.id').onDelete('CASCADE').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('line_items')
};
