'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages_reactions', function(table) {
    table.increments().primary();
    table.integer('user_author_id').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.integer('message_id').notNullable().defaultTo(1).references('id').inTable('messages').onDelete('CASCADE').index();
    table.string('reaction').notNullable().defaultTo('thumbsUp');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('messages_reactions');
};
