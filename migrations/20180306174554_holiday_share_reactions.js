'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('holiday_share_reactions', function(table) {
    table.increments().primary();
    table.integer('user_author_id').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.integer('holiday_share_id').notNullable().defaultTo(1).references('id').inTable('holiday_shares').onDelete('CASCADE').index();
    table.string('reaction').notNullable().defaultTo('thumbsUp');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('holiday_share_reactions');
};
