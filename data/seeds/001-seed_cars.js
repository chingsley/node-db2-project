
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: 'WBSWD93549PY43903', make: 'BMW', model: '3-Series', mileage: 1200, status: 'clean', transmissionType: 'automatic' },
        { VIN: 'TYSWD93549PY43925', make: 'Honda', model: 'Civic', mileage: 1503, transmissionType: 'automatic' },
        { VIN: 'HJSWD93769PY49807', make: 'Volkswagen', model: 'Golf', mileage: 1112 },
      ]);
    });
};
