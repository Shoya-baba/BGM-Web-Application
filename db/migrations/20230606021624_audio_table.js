/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("audio", function (table) {
    table.increments("id").primary();
    table.string("title", 255);
    table.string("path", 255);
    table.string("tag1", 16);
    table.string("tag2", 16);
    table.string("tag3", 16);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("audio");
};
