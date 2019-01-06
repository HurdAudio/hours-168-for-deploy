'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('occasions_share_comments', function(table) {
    table.increments().primary();
    table.integer('user_id').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.integer('occasions_share').notNullable().defaultTo(1).references('id').inTable('occasions_shares').onDelete('CASCADE').index();
    table.text('comment').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('occasions_share_comments');
};
