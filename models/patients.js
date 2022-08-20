const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema(
  {
    userInfo: {
      fullName: String,
      day: String,
      month: String,
      year: String,
      location: String,
    },
    demographicsInfo: {
      address: String,
      address2: String,
      city: String,
      state: String,
      zipcode: String,
      phone: String,
      email: String,
      user: {
        fullName: String,
        day: String,
        month: String,
        year: String,
        location: String,
      },
    },
    patientsPicture: String,
    driversLicense: String,
    primaryInsurance: {
      insuranceName: String,
      copayForSpecialist: String,
      groupName: String,
      groupString: String,
      phoneString: String,
    },
    secondaryInsurance: {
      insuranceName: String,
      copayForSpecialist: String,
      groupName: String,
      groupString: String,
      phoneString: String,
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
      shoeSize: String,
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
  },
  { timestamps: true }
);

patientSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
