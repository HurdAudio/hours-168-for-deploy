'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('task_share_reactions', function(table) {
    table.increments().primary();
    table.integer('user_author_id').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.integer('task_share_id').notNullable().defaultTo(1).references('id').inTable('task_shares').onDelete('CASCADE').index();
    table.string('reaction').notNullable().defaultTo('thumbsUp');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('task_share_reactions');
};
