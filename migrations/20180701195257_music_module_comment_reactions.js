'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('music_module_comment_reactions', function(table) {
    table.increments().primary();
    table.integer('user_author_id').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.integer('music_module_comment_id').notNullable().defaultTo(1).references('id').inTable('music_module_comments').onDelete('CASCADE').index();
    table.string('reaction').notNullable().defaultTo('thumbsUp');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('music_module_comment_reactions');
};
