'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comment_reactions', function(table) {
    table.increments().primary();
    table.integer('user_author_id').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.integer('comment_id').notNullable().defaultTo(1).references('id').inTable('comments').onDelete('CASCADE').index();
    table.string('reaction').notNullable().defaultTo('thumbsUp');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comment_reactions');
};
