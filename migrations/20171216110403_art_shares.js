'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('art_shares', function(table) {
    table.increments().primary();
    table.integer('user_id').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.string('art_month').notNullable().defaultTo('january_arts');
    table.integer('art_id').nullable();
    table.integer('share_associate_id').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.boolean('accepted').notNullable().defaultTo(false);
    table.boolean('responded').notNullable().defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('art_shares');
};
