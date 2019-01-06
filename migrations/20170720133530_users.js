'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments().primary();
    table.string('name').notNullable().defaultTo('');
    table.string('email').notNullable().defaultTo('');
    table.string('hashed_password').notNullable().defaultTo('');
    table.boolean('is_admin').notNullable().defaultTo(false);
    table.string('user_avatar_url').defaultTo(null);
    table.json('associates').defaultTo(null);
    table.json('security').defaultTo(null);
    table.json('email_reset').defaultTo(null);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
