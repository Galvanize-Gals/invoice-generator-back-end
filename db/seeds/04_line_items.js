
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('line_items').del()
    .then(function () {
      // Inserts seed entries
      return knex('line_items').insert([
        {id: 1, description: 'making wireframes', quantity: '4', rate: '50', invoice_id: "1"},
        {id: 2, description: 'building prototype', quantity: '58', rate: '75', invoice_id: "1"},
        {id: 3, description: 'consultation', quantity: '1', rate: '500', invoice_id: "2"},
        {id: 4, description: 'design', quantity: '6', rate: '150', invoice_id: "3"},
        {id: 5, description: 'research', quantity: '4', rate: '100', invoice_id: "3"},
        {id: 6, description: 'building app', quantity: '10', rate: '70', invoice_id: "4"},
        {id: 7, description: 'consultation', quantity: '1', rate: '60', invoice_id: "4"},
        {id: 8, description: 'design android app', quantity: '20', rate: '60', invoice_id: "5"},
        {id: 9, description: 'testing app', quantity: '3', rate: '85', invoice_id: "5"},
        {id: 10, description: 'initial meeting', quantity: '2', rate: '60', invoice_id: "5"},
        {id: 11, description: 'initial meeting', quantity: '2', rate: '85', invoice_id: "6"},
        {id: 12, description: 'designing website', quantity: '20', rate: '120', invoice_id: "6"},
        {id: 13, description: 'testing website', quantity: '3', rate: '110', invoice_id: "6"}
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(
        `SELECT setval('line_items_id_seq', (SELECT MAX(id) FROM line_items));`
        )
    })
};
