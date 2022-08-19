const patientsRouter = require('express').Router();
const Patient = require('../models/patients');

patientsRouter.get('/', (request, response) => {
  Patient.find({}).then((patients) => {
    response.json(patients);
  });
});

patientsRouter.get('/:id', async (request, response, next) => {
  try {
    const patient = await Patient.findById(request.params.id);
    if (patient) {
      response.json(patient);
    } else {
      response.status(404).end();
    }
  } catch (exception) {
    next(exception);
  }
});

patientsRouter.post('/', (request, response, next) => {
  try {
    const patient = new Patient(request.body);

    patient.save().then((result) => {
      response.status(201).json(result);
    });
  } catch (exception) {
    next(exception);
  }
});

module.exports = patientsRouter;
