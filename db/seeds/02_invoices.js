
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('invoices').del()
    .then(function () {
      // Inserts seed entries
      return knex('invoices').insert([
        {id: 1, invoice_number: '200', due_date: '2019-05-15', notes: "please pay by carrier pigeon"},
        {id: 2, invoice_number: '406', due_date: '2018-12-07', notes: "don't eat yellow snow"},
        {id: 3, invoice_number: '6', due_date: '2019-03-01', notes: "Squirrel!", is_paid: true},
        {id: 4, invoice_number: '1', due_date: '2019-01-15', notes: "Please send 2 checks", is_paid: false},
        {id: 5, invoice_number: '2', due_date: '2019-02-01', notes: "Thank you for choosing our service.", is_paid: false},
        {id: 6, invoice_number: '3', due_date: '2018-12-09', notes: "open up and don't delay", is_paid: false},
        {id: 7, invoice_number: '11', due_date: '2018-12-30', notes: "please pay by carrier owl", is_paid: true},
        {id: 8, invoice_number: '12', due_date: '2018-11-30', notes: "please pay by carrier banjo", is_paid: true},
        {id: 9, invoice_number: '13', due_date: '2018-12-30', notes: "please pay by carrier charley", is_paid: true},
        {id: 10, invoice_number: '14', due_date: '2018-11-30', notes: "please pay by carrier ladybug", is_paid: true}
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(
        `SELECT setval('invoices_id_seq', (SELECT MAX(id) FROM invoices));`
        )
    })
};
