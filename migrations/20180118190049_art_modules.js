'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('art_modules', function(table) {
    table.increments().primary();
    table.integer('user_author_id').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.string('theme').notNullable().defaultTo('');
    table.string('img_path').notNullable().defaultTo('');
    table.string('title').notNullable().defaultTo('');
    table.string('artist').notNullable().defaultTo('');
    table.string('year').notNullable().defaultTo('');
    table.boolean('public').notNullable().defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('art_modules');
};
