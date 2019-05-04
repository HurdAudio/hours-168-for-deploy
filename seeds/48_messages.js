'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {
          id: 1,
          user_id: 1,
          to_user_id: 1,
          message: '168h - We are all time travellers at present.',
          public: true,
          created_at: new Date('2019-04-27T13:44:00.000Z'),
          updated_at: new Date('2019-04-27T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('messages_id_seq', (SELECT MAX(id) FROM messages));");
    });
};
