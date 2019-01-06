'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('task_share_comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('task_share_comments').insert([
        {
          id: 1,
          user_id: 1,
          task_share: 1,
          comment: 'Don\'t forget to write them RESTful routes.',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('task_share_comments_id_seq', (SELECT MAX(id) FROM task_share_comments));");
    });
};
