'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('april_arts', function(table) {
    table.increments().primary();
    table.integer('user_id').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.string('theme').notNullable().defaultTo('baseball');
    table.text('img_path').notNullable().defaultTo('');
    table.string('title').notNullable().defaultTo('');
    table.string('artist').notNullable().defaultTo('');
    table.string('year').notNullable().defaultTo('');
    table.json('rule').defaultTo(null);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('april_arts');
};
