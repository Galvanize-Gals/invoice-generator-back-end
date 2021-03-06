
exports.up = function(knex, Promise) {
  return knex.schema.createTable('accounts', (table) => {
    table.increments()
    table.string('email').notNullable().unique()
    table.text('hashword').notNullable()
    table.string('first_name')
    table.string('last_name')
    table.string('company')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('accounts')
};
