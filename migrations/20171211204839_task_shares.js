'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('task_shares', function(table) {
    table.increments().primary();
    table.integer('user_id').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.integer('task_id').nullable().references('id').inTable('tasks').onDelete('CASCADE').index();
    table.integer('share_associate_id').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.boolean('responded').notNullable().defaultTo(false);
    table.boolean('accepted').notNullable().defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('task_shares');
};
