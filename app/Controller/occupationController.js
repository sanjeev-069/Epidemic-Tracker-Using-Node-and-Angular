var Occupation=require('../model/occupationModel');

exports.list_all_occupations=function(req, res) {
  Occupation.getAllOccupation(function(err, occupation) {
    if (err) {
      res.send(err);
    }
    console.log('res', occupation);
    res.send(occupation);
  });
};


exports.create_a_occupation = function(req, res) {
  var newOccupation = new Occupation(req.body);
  // handles null error
  if (!newOccupation.OccupationName|| !newOccupation.PhoneNumber) {
    res.status(400).send({error: true, message: 'Please provide Occupation Details'});
  } else {
    Occupation.createOccupation(newOccupation, function(err, occupation) {
      if (err) {
        res.send(err);
      }
      res.json(occupation);
    });
  }
};

exports.read_a_occupation = function(req, res) {
  Occupation.getOccupationById(req.params.id, function(err, occupation) {
    if (err) {
      res.send(err);
    }
    res.json(occupation);
  });
};


exports.update_a_occupation = function(req, res) {
  Occupation.updateById(req.params.id, new Occupation(req.body), function(err, occupation) {
    if (err) {
      res.send(err);
    }
    res.json(occupation);
  });
};


exports.delete_a_occupation = function(req, res) {
  Occupation.remove( req.params.id, function(err, occupation) {
    if (err) {
      res.send(err);
    }
    res.json({message: 'Occupation successfully deleted'});
  });
};
