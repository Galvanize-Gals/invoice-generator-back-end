
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('invoices').del()
    .then(function () {
      // Inserts seed entries
      return knex('invoices').insert([
        {id: 1, invoice_number: '200', due_date: '2019-05-15', notes: "please pay by carrier pigeon"},
        {id: 2, invoice_number: '406', due_date: '2018-12-07', notes: "don't eat yellow snow"},
        {id: 3, invoice_number: '6', due_date: '2019-03-01', notes: "Squirrel!", is_paid: true}
      ]);
    });
};
