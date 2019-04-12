
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        {name: 'Mega Man X'},
        {name: 'Mega Man 2'},
        {name: 'Mega Man 11'}
      ]);
    });
};
