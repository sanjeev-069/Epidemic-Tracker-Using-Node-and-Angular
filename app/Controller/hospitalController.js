var Hospital=require('../model/hospitalModel');

exports.list_all_hospitals=function(req, res) {
  Hospital.getAllHospital(function(err, hospital) {
    if (err) {
      res.send(err);
    }
    console.log('res', hospital);
    res.send(hospital);
  });
};


exports.create_a_hospital= function(req, res) {
  var newHospital = new Hospital(req.body);
  // handles null error
  if (!newHospital.HospitalName || !newHospital.HospitalPhoneNumber) {
    res.status(400).send({error: true, message: 'Please provide Hospital Details'});
  } else {
    Hospital.createHospital(newHospital, function(err, hospital) {
      if (err) {
        res.send(err);
      }
      res.json(hospital);
    });
  }
};

exports.read_a_hospital = function(req, res) {
  Hospital.getHospitalById(req.params.id, function(err, hospital) {
    if (err) {
      res.send(err);
    }
    res.json(hospital);
  });
};


exports.update_a_hospital = function(req, res) {
  Hospital.updateById(req.params.id, new Hospital(req.body), function(err, hospital) {
    if (err) {
      res.send(err);
    }
    res.json(hospital);
  });
};


exports.delete_a_hospital = function(req, res) {
  Hospital.remove( req.params.id, function(err, hospital) {
    if (err) {
      res.send(err);
    }
    res.json({message: 'Hospital successfully deleted'});
  });
};
