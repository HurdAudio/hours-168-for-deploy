'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('music_lockers', function(table) {
    table.increments().primary();
    table.integer('user_id').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.string('former_month').defaultTo(null);
    table.string('theme').notNullable().defaultTo('music_locker_storage');
    table.string('source').notNullable().defaultTo('bandcamp');
    table.string('src_string').notNullable().defaultTo('');
    table.string('href_string').notNullable().defaultTo('');
    table.string('a_string').notNullable().defaultTo('');
    table.json('rule').defaultTo(null);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('music_lockers');
};
