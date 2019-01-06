'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('observances', function(table) {
    table.increments().primary();
    table.integer('user_id').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.text('name').defaultTo(null);
    table.string('color').notNullable().defaultTo('#ffffff');
    table.string('picture').defaultTo(null);
    table.date('day_of').notNullable().defaultTo('1970-01-01');
    table.boolean('is_annual').notNullable().defaultTo(true);
    table.boolean('art_override').notNullable().defaultTo(false);
    table.boolean('music_override').notNullable().defaultTo(false);
    table.json('override_content').defaultTo(null);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('observances');
};
