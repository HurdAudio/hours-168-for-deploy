'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('occasions').del()
    .then(function () {
      // Inserts seed entries
      return knex('occasions').insert([
        {
          id: 1,
          user_id: 1,
          name: 'Ginger DeRusha\'s birthday',
          day_of: new Date('2018-01-30T13:44:00.000Z'),
          is_annual: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          name: 'Nathan Grigg\'s birthday',
          day_of: new Date('2018-01-17T13:44:00.000Z'),
          is_annual: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          name: 'Birthday',
          day_of: new Date('2018-03-08T13:44:00.000Z'),
          is_annual: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          name: 'Jerrie Hurd\'s birthday',
          day_of: new Date('2018-04-03T13:44:00.000Z'),
          is_annual: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          name: 'Shannon\'s birthday',
          day_of: new Date('2018-05-28T13:44:00.000Z'),
          is_annual: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          name: 'Mason\'s birthday',
          day_of: new Date('2018-03-13T13:44:00.000Z'),
          is_annual: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          name: 'Day of unbearable loss',
          day_of: new Date('2006-06-03T13:44:00.000Z'),
          is_annual: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          name: 'Jon & Jerrie Anniversary',
          day_of: new Date('1967-06-30T13:44:00.000Z'),
          is_annual: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          name: 'Devin & Ginger Anniversary',
          day_of: new Date('2018-01-28T13:44:00.000Z'),
          is_annual: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          name: 'Ethan\'s Birthday',
          day_of: new Date('2017-08-15T13:44:00.000Z'),
          is_annual: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          name: 'Alex\'s Birthday',
          day_of: new Date('2004-10-19T13:44:00.000Z'),
          is_annual: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          name: 'Rene\'s Birthday',
          day_of: new Date('2017-08-21T13:44:00.000Z'),
          is_annual: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          name: 'Ryan\'s Birthday',
          day_of: new Date('2017-12-01T13:44:00.000Z'),
          is_annual: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          name: 'Jon\'s Birthday',
          day_of: new Date('2017-07-28T13:44:00.000Z'),
          is_annual: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('occasions_id_seq', (SELECT MAX(id) FROM occasions));");
    });
};
