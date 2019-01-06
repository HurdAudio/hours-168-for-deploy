'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('music_module_comments', function(table) {
    table.increments().primary();
    table.integer('user_id').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.integer('music_module').notNullable().defaultTo(1).references('id').inTable('music_modules').onDelete('CASCADE').index();
    table.text('comment').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('music_module_comments');
};
