'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bills').del()
    .then(function () {
      // Inserts seed entries
      return knex('bills').insert([
        {
          id: 1,
          user_id: 1,
          name: 'Aspire Student Loan',
          pay_to: 'Aspire Loan Processing Center',
          address_line1: '1234 Main St.',
          address_line2: '#4',
          city: 'Springfield',
          state: 'Oklahoma',
          zip: '44044',
          balance: 29600.00,
          amount_due: 587.42,
          amount_paid: 0.00,
          due_date: new Date('2017-10-28T13:44:00.000Z'),
          is_paid: false,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('bills_id_seq', (SELECT MAX(id) FROM bills));");
    });
};
