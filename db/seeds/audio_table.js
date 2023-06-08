const audioJSON = require("./json/seed_audio.json");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("audio").del();
  await knex("audio").insert(audioJSON);
};
