var Patient=require('../model/patientModel');

exports.list_all_patients=function(req, res) {
  Patient.getAllPatient(function(err, patient) {
    if (err) {
      res.send(err);
    }
    console.log('res', patient);
    res.send(patient);
  });
};


exports.create_a_patient = function(req, res) {
  var newPatient = new Patient(req.body);
  // handles null error
  if (!newPatient.PatientName || !newPatient.PhoneNumber) {
    res.status(400).send({error: true, message: 'Please provide patient details'});
  } else {
    Patient.createPatient(newPatient, function(err, patient) {
      if (err) {
        res.send(err);
      }
      res.json(patient);
    });
  }
};

exports.read_a_patient = function(req, res) {
  Patient.getPatientById(req.params.id, function(err, patient) {
    if (err) {
      res.send(err);
    }
    res.json(patient);
  });
};


exports.update_a_patient = function(req, res) {
  Patient.updateById(req.params.id, new Patient(req.body), function(err, patient) {
    if (err) {
      res.send(err);
    }
    res.json(patient);
  });
};


exports.delete_a_patient = function(req, res) {
  Patient.remove( req.params.id, function(err, patient) {
    if (err) {
      res.send(err);
    }
    res.json({message: 'Patient successfully deleted'});
  });
};
