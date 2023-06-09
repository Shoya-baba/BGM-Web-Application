const imageJSON = require("./json/seed_image.json");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("image").del();
  await knex("image").insert(imageJSON);
};
