'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('sunday_musics', function(table) {
    table.increments().primary();
    table.integer('user_id').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.string('source').notNullable().defaultTo('bandcamp');
    table.string('src_string').notNullable().defaultTo('');
    table.string('href_string').notNullable().defaultTo('');
    table.string('a_string').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('sunday_musics');
};
