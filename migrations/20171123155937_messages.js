'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', function(table) {
    table.increments().primary();
    table.integer('user_id').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.integer('to_user_id').nullable().references('id').inTable('users').onDelete('CASCADE').index();
    table.text('message').notNullable().defaultTo('');
    table.boolean('public').notNullable().defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('messages');
};
