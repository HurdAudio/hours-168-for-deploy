'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('banned_users').del()
    .then(function () {
      // Inserts seed entries
      return knex('banned_users').insert([
        {
          id: 1,
          banned_user_id: 3,
          expiration: null,
          reason: 'Abusive behavior',
          appeal: false,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('banned_users_id_seq', (SELECT MAX(id) FROM banned_users));");
    });
};
