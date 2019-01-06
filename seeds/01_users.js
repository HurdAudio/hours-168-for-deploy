'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          name: 'Devin Hurd',
          email: 'devin@devinhurd.com',
          hashed_password: '$2a$12$zlJZuGFGcqgLQyy/nVtoQeafv47g8dNTGTJL/x7EmSbPSiFLi.aMS',
          is_admin: true,
          user_avatar_url: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-1/p160x160/37583709_10217288463910608_4577623758084243456_n.jpg?_nc_cat=0&oh=1780bf0c5ef8aca5ae27899246ccfc47&oe=5C30436A',
          associates: {
            "friends": [ 2, 3 ]
          },
          security: {
            "key": "nYeYs~_OHOXrL_XZ8IK3i8",
            "value": "PFIQefgqVYZPdaJcy09nVT"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          name: 'Ginger DeRusha',
          email: 'mayacat505@gmail.com',
          hashed_password: '$2a$12$zlJZuGFGcqgLQyy/nVtoQeafv47g8dNTGTJL/x7EmSbPSiFLi.aMS',
          is_admin: false,
          user_avatar_url: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/44939494_312991242621095_235389956149739520_n.jpg?_nc_cat=105&_nc_ht=scontent-dfw5-1.xx&oh=8c120ad07acbf5688539bd7596ffdf4d&oe=5CA02993',
          associates: {
            "friends": [ 1, 3 ]
          },
          security: {
            "key": "nYeYs~_OHOXrL_XZ8IK3i8",
            "value": "PFIQefgqVYZPdaJcy09nVT"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          name: 'Lucifer Sam',
          email: 'cia_pope@yahoo.com',
          hashed_password: '$2a$12$zlJZuGFGcqgLQyy/nVtoQeafv47g8dNTGTJL/x7EmSbPSiFLi.aMS',
          is_admin: false,
          user_avatar_url: 'https://vignette.wikia.nocookie.net/southpark/images/d/db/Satan_2.png',
          associates: {
            "friends": [ 1, 2 ]
          },
          security: {
            "key": "nYeYs~_OHOXrL_XZ8IK3i8",
            "value": "PFIQefgqVYZPdaJcy09nVT"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));");
    });
};
