'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('art_share_reactions').del()
    .then(function () {
      // Inserts seed entries
      return knex('art_share_reactions').insert([
        {
          id: 1,
          user_author_id: 1,
          art_share_id: 1,
          reaction: 'thumbsUp',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('art_share_reactions_id_seq', (SELECT MAX(id) FROM art_share_reactions));");
    });
};
