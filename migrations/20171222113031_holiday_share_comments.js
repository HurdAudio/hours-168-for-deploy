'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('holiday_share_comments', function(table) {
    table.increments().primary();
    table.integer('user_id').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.integer('holiday_share').notNullable().defaultTo(1).references('id').inTable('holiday_shares').onDelete('CASCADE').index();
    table.text('comment').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('holiday_share_comments');
};
