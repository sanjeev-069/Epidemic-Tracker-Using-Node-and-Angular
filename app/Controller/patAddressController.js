var PatientAddress=require('../model/patientAddressModel');

exports.list_all_patientAddresses=function(req, res) {
  PatientAddress.getAllPatientAddress(function(err, patientAddress) {
    if (err) {
      res.send(err);
    }
    console.log('res', patientAddress);
    res.send(patientAddress);
  });
};


exports.create_a_patientAddress= function(req, res) {
  var newPatientAddress = new PatientAddress(req.body);
  // handles null error
  if (!newPatientAddress.City || !newPatientAddress.ZipCode) {
    res.status(400).send({error: true, message: 'Please provide PatientAddress Details'});
  } else {
    PatientAddress.createPatientAddress(newPatientAddress, function(err, patientAddress) {
      if (err) {
        res.send(err);
      }
      res.json(patientAddress);
    });
  }
};

exports.read_a_patientAddress = function(req, res) {
  PatientAddress.getPatientAddressById(req.params.id, function(err, patientAddress) {
    if (err) {
      res.send(err);
    }
    res.json(patientAddress);
  });
};


exports.update_a_patientAddress = function(req, res) {
  PatientAddress.updateById(req.params.id, new PatientAddress(req.body), function(err, patientAddress) {
    if (err) {
      res.send(err);
    }
    res.json(patientAddress);
  });
};


exports.delete_a_patientAddress = function(req, res) {
  PatientAddress.remove( req.params.id, function(err, patientAddress) {
    if (err) {
      res.send(err);
    }
    res.json({message: 'Patient Address successfully deleted'});
  });
};
