
exports.up = function (knex) {
  return knex.schema.createTable('cars', (table) => {
    table.increments();
    table.string('VIN', 128).notNullable().unique();
    table.string('make', 128).notNullable();
    table.string('model', 128).notNullable();
    table.integer('mileage').unsigned().notNullable();
    table.string('status', 128);
    table.enu('transmissionType', ['automatic', 'manual']);
    table.timestamps();
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars');
};
