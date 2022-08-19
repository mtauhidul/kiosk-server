const config = require('./utils/config');
const express = require('express');
const app = express();
const cors = require('cors');
const patientsRouter = require('./controllers/patients');
const middleware = require('./utils/middleware');
const logger = require('./utils/logger');
const mongoose = require('mongoose');

logger.info(`connecting....`);

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to database');
  })
  .catch((error) => {
    logger.error('error connecting to database', error.message);
  });

app.use(cors());
app.use(express.static('build'));
app.use(express.json());
app.use(middleware.requestLogger);

app.use('/api/patient', patientsRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
