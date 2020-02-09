import knex from 'knex';
import knexConfig from '../../knexfile';

const db = knex(knexConfig.development);


const find = () => db('cars');
const findById = (id) => db('cars').where({ id }).first();
const add = (newCar) => db('cars').insert(newCar, 'id');
const update = (id, changes) => db('cars').where({ id }).update(changes);
const remove = (id) => db('cars').where({ id }).del();


const Car = {
  find,
  findById,
  add,
  update,
  remove,
};

export default Car;