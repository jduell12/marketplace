exports.seed = function (knex) {
  return knex("owners").insert([
    { id: 1, location_id: 2 },
    { id: 2, location_id: 2 },
  ]);
};
