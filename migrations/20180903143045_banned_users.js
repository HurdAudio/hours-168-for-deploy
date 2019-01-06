'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('banned_users', function(table) {
    table.increments().primary();
    table.integer('banned_user_id').notNullable().defaultTo(3).references('id').inTable('users').onDelete('CASCADE').index();
    table.date('expiration').defaultTo(null);
    table.string('reason').defaultTo(null);
    table.boolean('appeal').notNullable().defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('banned_users');
};
