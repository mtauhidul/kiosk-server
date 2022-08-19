const patientsRouter = require('express').Router();
const Patient = require('../models/patients');

patientsRouter.get('/', (request, response) => {
  Patient.find({}).then((patients) => {
    response.json(patients);
  });
});

patientsRouter.post('/', (request, response) => {
  const patient = new Patient(request.body);

  patient.save().then((result) => {
    response.status(201).json(result);
  });
});

module.exports = patientsRouter;
