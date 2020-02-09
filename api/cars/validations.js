const badRequest = (res, error) => res.status(400).json({ error });

const validateCarFields = (req, res, next) => {
  const {
    VIN,
    mileage,
    transmissionType
  } = req.body;

  const requiredFields = ['VIN', 'make', 'model', 'mileage'];
  const missingFields = requiredFields.filter(field => !Object.keys(req.body).includes(field));
  if (missingFields.length > 0) {
    return badRequest(res, `missing field(s): ${missingFields.join(', ')}`)
  }
  if (VIN.length != 17) {
    return badRequest(res, `Invalid VIN. Expecting 17 characters, but got ${VIN.length}`);
  }
  if (!Number.isInteger(Number(mileage))) {
    return badRequest(res, 'mileage should be of type integer');
  }
  const validTransmissionTypes = ['manual', 'automatic'];
  if (transmissionType && !validTransmissionTypes.includes(transmissionType)) {
    return badRequest(res, `Invalid transmissionType. Allowed values are ${validTransmissionTypes.join(' or ')}`);
  }

  next();
};

const validation = {
  validateCarFields,
};

export default validation;
