const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  userInfo: {
    fullName: String,
    day: Number,
    month: Number,
    year: Number,
    location: String,
  },
  demographicsInfo: {
    address: String,
    address2: String,
    city: String,
    state: String,
    zipcode: Number,
    phone: Number,
    email: String,
    user: {
      fullName: String,
      day: Number,
      month: Number,
      year: Number,
      location: String,
    },
  },
  patientsPicture: String,
  driversLicense: String,
  primaryInsurance: {
    insuranceName: String,
    copayForSpecialist: Number,
    groupName: String,
    groupNumber: Number,
    phoneNumber: Number,
  },
  secondaryInsurance: {
    insuranceName: String,
    copayForSpecialist: Number,
    groupName: String,
    groupNumber: Number,
    phoneNumber: Number,
  },
  allergies: [String],
  medications: [String],
  familyHistory: {
    diabetes: String,
  },
  medicalHistory: [String],
  surgicalHistory: [String],
  socialHistory: {
    smoke: String,
  },
  shoeSize: {
    shoeSize: Number,
  },
  hippaPolicy: {
    signature: String,
  },
  practicePolicies: {
    signature: String,
  },
  survey: {
    question: String,
    answer: String,
  },
});

patientSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
