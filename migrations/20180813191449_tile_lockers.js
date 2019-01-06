'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tile_lockers', function(table) {
    table.increments().primary();
    table.integer('user_id').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.string('former_month').defaultTo(null);
    table.string('theme').notNullable().defaultTo('tile_locker_storage');
    table.string('type').notNullable().defaultTo('default');
    table.string('src_string').notNullable().defaultTo('');
    table.string('repeat_value').notNullable().defaultTo('no-repeat');
    table.string('size_value').notNullable().defaultTo('100%');
    table.string('color_dark').notNullable().defaultTo('#ffffff');
    table.string('color_medium').notNullable().defaultTo('#ffffff');
    table.string('color_light').notNullable().defaultTo('#ffffff');
    table.json('rule').defaultTo(null);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tile_lockers');
};
