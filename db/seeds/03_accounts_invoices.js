
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('accounts_invoices').del()
    .then(function () {
      // Inserts seed entries
      return knex('accounts_invoices').insert([
        {id: 1, vendor_id: '2', client_id: "1", invoice_id: "3"},
        {id: 2, vendor_id: '2', client_id: "3", invoice_id: "2"},
        {id: 3, vendor_id: '3', client_id: "1", invoice_id: "1"}
      ]);
    });
};
