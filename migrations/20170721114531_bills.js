'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bills', function(table) {
    table.increments().primary();
    table.integer('user_id').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.string('name').notNullable().defaultTo('');
    table.string('pay_to').notNullable().defaultTo('');
    table.string('address_line1').notNullable().defaultTo('');
    table.string('address_line2').notNullable().defaultTo('');
    table.string('city').notNullable().defaultTo('');
    table.string('state').notNullable().defaultTo('');
    table.string('zip').defaultTo('');
    table.decimal('balance').defaultTo(null);
    table.decimal('amount_due').defaultTo(null);
    table.decimal('amount_paid').defaultTo(0.00);
    table.date('due_date').notNullable().defaultTo('1970-01-01T13:44:00.000Z');
    table.date('date_paid').defaultTo(null);
    table.boolean('is_paid').notNullable().defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('bills');
};
