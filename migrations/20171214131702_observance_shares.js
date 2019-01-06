'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('observance_shares', function(table) {
    table.increments().primary();
    table.integer('user_id').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.integer('observance_id').nullable().references('id').inTable('observances').onDelete('CASCADE').index();
    table.integer('share_associate_id').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.boolean('accepted').notNullable().defaultTo(false);
    table.boolean('responded').notNullable().defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('observance_shares');
};
