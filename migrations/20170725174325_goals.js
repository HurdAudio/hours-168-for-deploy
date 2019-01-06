'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('goals', function(table) {
    table.increments().primary();
    table.integer('user_id').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.integer('block_type').notNullable().defaultTo(18).references('id').inTable('blocktypes').onDelete('CASCADE').index();
    table.decimal('weekly_goal', 3, 1).notNullable().defaultTo(0.0);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('goals');
};
