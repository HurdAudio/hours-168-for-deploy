'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('task_shares').del()
    .then(function () {
      // Inserts seed entries
      return knex('task_shares').insert([
        {
          id: 1,
          user_id: 2,
          task_id: 1,
          share_associate_id: 1,
          responded: false,
          accepted: false,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('task_shares_id_seq', (SELECT MAX(id) FROM task_shares));");
    });
};
