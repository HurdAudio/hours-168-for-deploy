'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tasks', function(table) {
    table.increments().primary();
    table.integer('user_id').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.string('name').notNullable().defaultTo('');
    table.text('user_notes').notNullable().defaultTo('');
    table.date('due_date').notNullable().defaultTo('1970-01-01');
    table.date('completed_date').defaultTo(null);
    table.boolean('is_completed').notNullable().defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tasks');
};
