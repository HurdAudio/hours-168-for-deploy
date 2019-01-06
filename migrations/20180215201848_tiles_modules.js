'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tiles_modules', function(table) {
    table.increments().primary();
    table.integer('user_author_id').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.string('theme').notNullable().defaultTo('');
    table.string('type').notNullable().defaultTo('bandcamp');
    table.string('src_string').notNullable().defaultTo('');
    table.string('repeat_value').notNullable().defaultTo('');
    table.string('size_value').notNullable().defaultTo('');
    table.string('color_dark').notNullable().defaultTo('#ffffff');
    table.string('color_medium').notNullable().defaultTo('#ffffff');
    table.string('color_light').notNullable().defaultTo('#ffffff');
    table.boolean('public').notNullable().defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tiles_modules');
};
