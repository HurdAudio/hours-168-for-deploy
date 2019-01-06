'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('art_share_comment_reactions', function(table) {
    table.increments().primary();
    table.integer('user_author_id').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.integer('art_share_comment_id').notNullable().defaultTo(1).references('id').inTable('art_share_comments').onDelete('CASCADE').index();
    table.string('reaction').notNullable().defaultTo('thumbsUp');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('art_share_comment_reactions');
};
