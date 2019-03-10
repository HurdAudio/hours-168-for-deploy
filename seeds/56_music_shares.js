'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('music_shares').del()
    .then(function () {
      // Inserts seed entries
      return knex('music_shares').insert([
        {
          id: 1,
          user_id: 1,
          music_month: 'january_musics',
          music_id: 1,
          share_associate_id: 1,
          accepted: false,
          responded: false,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('music_shares_id_seq', (SELECT MAX(id) FROM music_shares));");
    });
};
