'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          id: 1,
          user_id: 1,
          name: 'Write migration and seed files',
          user_notes: 'This app needs a database. A database needs data. Back end programming is sexy.',
          due_date: new Date('2017-10-31T13:44:00.000Z'),
          is_completed: false,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('tasks_id_seq', (SELECT MAX(id) FROM tasks));");
    });
};
