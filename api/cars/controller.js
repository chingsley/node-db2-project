import Car from './model';

const pluralize = count => count > 1 ? `${count} records` : `${count} record`;
const notFound = res => res.status(404).json({ message: `Car not found.` });

const findAllCars = async (req, res, next) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (err) {
    console.log(err);
    next("internal server error");
  }
};

const findOneCar = async (req, res, next) => {
  try {
    const car = await Car.findById(req.params.id);
    if (car) {
      return res.status(200).json(car);
    } else {
      return notFound(res);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const addNewCar = async (req, res, next) => {
  try {
    const ids = await Car.add(req.body);
    res.status(201).json({ ids });
  } catch (err) {
    console.log('err = ', err);
    next(err);
  }
};

const updateCar = async (req, res, next) => {
  const changes = req.body;
  const { id } = req.params;
  try {
    const count = await Car.update(id, changes);
    if (count > 0) {
      return res.status(200).json({ message: `${pluralize(count)} updated successfully` });
    } else {
      return notFound(res);
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const removeCar = async (req, res, next) => {
  const { id } = req.params;
  try {
    const count = await Car.remove(id);
    if (count > 0) {
      return res.status(200).json({ message: `${pluralize(count)} deleted successfully` });
    } else {
      return notFound(res);
    }
  } catch (err) {
    next(err);
  }
};


const CarController = {
  findAllCars,
  findOneCar,
  addNewCar,
  updateCar,
  removeCar,
};

export default CarController;
