var WorkAddress=require('../model/workAddressModel');

exports.list_all_workAddresses=function(req, res) {
  WorkAddress.getAllWorkAddress(function(err, workAddress) {
    if (err) {
      res.send(err);
    }
    console.log('res', workAddress);
    res.send(workAddress);
  });
};


exports.create_a_workAddress= function(req, res) {
  var newWorkAddress = new WorkAddress(req.body);
  // handles null error
  if (!newWorkAddress.City || !newWorkAddress.ZipCode) {
    res.status(400).send({error: true, message: 'Please provide PatientAddress Details'});
  } else {
    WorkAddress.createWorkAddress(newWorkAddress, function(err, workAddress) {
      if (err) {
        res.send(err);
      }
      res.json(workAddress);
    });
  }
};

exports.read_a_workAddress = function(req, res) {
  WorkAddress.getWorkAddressById(req.params.id, function(err, workAddress) {
    if (err) {
      res.send(err);
    }
    res.json(workAddress);
  });
};


exports.update_a_workAddress = function(req, res) {
  WorkAddress.updateById(req.params.id, new WorkAddress(req.body), function(err, workAddress) {
    if (err) {
      res.send(err);
    }
    res.json(workAddress);
  });
};


exports.delete_a_workAddress = function(req, res) {
  WorkAddress.remove( req.params.id, function(err, workAddress) {
    if (err) {
      res.send(err);
    }
    res.json({message: 'Work Address successfully deleted'});
  });
};
