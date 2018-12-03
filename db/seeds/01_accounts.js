
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('accounts').del()
    .then(function () {
      // Inserts seed entries
      return knex('accounts').insert([
        { id: 1, email: 'polly@realmail.com', hashword: 'flower', first_name: "Polly", last_name: "Ramirez" },
        { id: 2, email: 'frida@realmail.com', hashword: 'tree', first_name: "Frida", last_name: "Goldberg", business: "DevCo"},
        { id: 3, email: 'ramona@realmail.com', hashword: 'road', first_name: "Ramona", last_name: "Jones", business: "GodzillaTek"}
      ]);
    });
};
