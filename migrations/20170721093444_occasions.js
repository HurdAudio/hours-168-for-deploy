'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('occasions', function(table) {
    table.increments().primary();
    table.integer('user_id').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.string('name').defaultTo(null);
    table.date('day_of').notNullable().defaultTo('1970-01-01T13:44:00.000Z');
    table.boolean('is_annual').notNullable().defaultTo(true);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('occasions');
};
