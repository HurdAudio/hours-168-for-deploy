'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {
          id: 1,
          user_id: 1,
          message_id: 1,
          comment: 'First comment.',
          created_at: new Date('2019-08-01T13:44:00.000Z'),
          updated_at: new Date('2019-08-01T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('comments_id_seq', (SELECT MAX(id) FROM comments));");
    });
};
