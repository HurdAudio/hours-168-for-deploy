'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('may_musics', function(table) {
    table.increments().primary();
    table.integer('user_id').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.string('theme').notNullable().defaultTo('avant garde/new music');
    table.string('source').notNullable().defaultTo('bandcamp');
    table.string('src_string').notNullable().defaultTo('');
    table.string('href_string').notNullable().defaultTo('');
    table.string('a_string').notNullable().defaultTo('');
    table.json('rule').defaultTo(null);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('may_musics');
};
