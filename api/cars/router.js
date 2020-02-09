import express from 'express';
import CarsController from './controller';
import validations from './validations';
const router = express.Router();
const {
  findAllCars,
  findOneCar,
  addNewCar,
  updateCar,
  removeCar,
} = CarsController;

const {
  validateCarFields,
} = validations;


router.get('/', findAllCars);
router.get('/:id', findOneCar);
router.post('/', validateCarFields, addNewCar);
router.put('/:id', updateCar);
router.delete('/:id', removeCar);

export default router;
