'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('occasions_share_comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('occasions_share_comments').insert([
        {
          id: 1,
          user_id: 1,
          occasions_share: 1,
          comment: 'This is a solemn occasion indeed.',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('occasions_share_comments_id_seq', (SELECT MAX(id) FROM occasions_share_comments));");
    });
};
