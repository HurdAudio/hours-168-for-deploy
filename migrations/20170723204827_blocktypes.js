'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('blocktypes', function(table) {
    table.increments().primary();
    table.integer('user_id').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.string('type').defaultTo(null);
    table.json('keys').defaultTo(null);
    table.string('color').notNullable().defaultTo('#ffffff');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('blocktypes');
};
