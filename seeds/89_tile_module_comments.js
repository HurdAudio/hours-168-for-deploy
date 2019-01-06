'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tile_module_comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('tile_module_comments').insert([
        {
          id: 1,
          user_id: 1,
          tile_module: 1,
          comment: 'I never knew I liked music before.',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('tile_module_comments_id_seq', (SELECT MAX(id) FROM tile_module_comments));");
    });
};
