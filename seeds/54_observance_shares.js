'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('observance_shares').del()
    .then(function () {
      // Inserts seed entries
      return knex('observance_shares').insert([
        {
          id: 1,
          user_id: 1,
          observance_id: 3,
          share_associate_id: 1,
          accepted: false,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('observance_shares_id_seq', (SELECT MAX(id) FROM observance_shares));");
    });
};
