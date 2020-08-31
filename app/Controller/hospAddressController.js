var HospitalAddress=require('../model/hospitalAddressModel');

exports.list_all_hospitalAddresses=function(req, res) {
  HospitalAddress.getAllHospitalAddress(function(err, hospitalAddress) {
    if (err) {
      res.send(err);
    }
    console.log('res', hospitalAddress);
    res.send(hospitalAddress);
  });
};


exports.create_a_hospitalAddress= function(req, res) {
  var newHospitalAddress = new HospitalAddress(req.body);
  // handles null error
  if (!newHospitalAddress.City || !newHospitalAddress.ZipCode) {
    res.status(400).send({error: true, message: 'Please provide HospitalAddress Details'});
  } else {
    HospitalAddress.createHospitalAddress(newHospitalAddress, function(err, hospitalAddress) {
      if (err) {
        res.send(err);
      }
      res.json(hospitalAddress);
    });
  }
};

exports.read_a_hospitalAddress = function(req, res) {
  HospitalAddress.getHospitalAddressById(req.params.id, function(err, hospitalAddress) {
    if (err) {
      res.send(err);
    }
    res.json(hospitalAddress);
  });
};


exports.update_a_hospitalAddress = function(req, res) {
  HospitalAddress.updateById(req.params.id, new HospitalAddress(req.body), function(err, hospitalAddress) {
    if (err) {
      res.send(err);
    }
    res.json(hospitalAddress);
  });
};


exports.delete_a_hospitalAddress = function(req, res) {
  HospitalAddress.remove( req.params.id, function(err, hospitalAddress) {
    if (err) {
      res.send(err);
    }
    res.json({message: 'Hospital Address successfully deleted'});
  });
};
