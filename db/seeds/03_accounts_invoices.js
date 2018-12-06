
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('accounts_invoices').del()
    .then(function () {
      // Inserts seed entries
      return knex('accounts_invoices').insert([
        {id: 1, vendor_id: '2', client_id: "1", invoice_id: "3"},
        {id: 2, vendor_id: '2', client_id: "3", invoice_id: "2"},
        {id: 3, vendor_id: '4', client_id: "1", invoice_id: "1"},
        {id: 4, vendor_id: '3', client_id: "4", invoice_id: "4"},
        {id: 5, vendor_id: '4', client_id: "1", invoice_id: "5"},
        {id: 6, vendor_id: '1', client_id: "4", invoice_id: "6"},
        {id: 7, vendor_id: '3', client_id: "4", invoice_id: "7"},
        {id: 8, vendor_id: '1', client_id: "4", invoice_id: "8"},
        {id: 9, vendor_id: '4', client_id: "2", invoice_id: "9"},
        {id: 10, vendor_id: '4', client_id: "1", invoice_id: "10"}
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(
        `SELECT setval('accounts_invoices_id_seq', (SELECT MAX(id) FROM accounts_invoices));`
        )
    })
};
