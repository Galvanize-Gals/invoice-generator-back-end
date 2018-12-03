
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('line_items').del()
    .then(() => knex('accounts_invoices').del())
    .then(() => knex('invoices').del())
    .then(() => knex('accounts').del())
}
    
     