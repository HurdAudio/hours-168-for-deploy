'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('timeblock_shares', function(table) {
    table.increments().primary();
    table.integer('user_id').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.integer('timeblock_id').nullable().references('id').inTable('timeblocks').onDelete('CASCADE').index();
    table.integer('share_associate_id').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.boolean('accepted').notNullable().defaultTo(false);
    table.boolean('responded').notNullable().defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('timeblock_shares');
};
