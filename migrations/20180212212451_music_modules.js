'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('music_modules', function(table) {
    table.increments().primary();
    table.integer('user_author_id').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.string('theme').notNullable().defaultTo('');
    table.string('source').notNullable().defaultTo('bandcamp');
    table.string('src_string').notNullable().defaultTo('');
    table.string('href_string').notNullable().defaultTo('');
    table.string('a_string').notNullable().defaultTo('');
    table.boolean('public').notNullable().defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('music_modules');
};
