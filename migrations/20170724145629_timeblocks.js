'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('timeblocks', function(table) {
    table.increments().primary();
    table.integer('user_id').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.integer('block_type').notNullable().defaultTo(18).references('id').inTable('blocktypes').onDelete('CASCADE').index();
    table.datetime('start_time').notNullable().defaultTo('1970-01-01T00:00:00');
    table.datetime('end_time').notNullable().defaultTo('1970-01-01T00:00:00');
    table.text('user_notes').defaultTo(null);
    table.string('location').notNullable().defaultTo('');
    table.json('block_data').defaultTo(null);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('timeblocks');
};
