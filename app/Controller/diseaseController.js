var Disease= require('../model/diseaseModel');

exports.list_all_diseases=function(req, res) {
  Disease.getAllDisease(function(err, disease) {
    if (err) {
      res.send(err);
    }
    console.log('res', disease);
    res.send(disease);
  });
};


exports.create_a_disease = function(req, res) {
  var newDisease = new Disease(req.body);
  // handles null error
  if (!newDisease.DiseaseName || !newDisease.DiseaseType) {
    res.status(400).send({error: true, message: 'Please provide Disease Details'});
  } else {
    Disease.createDisease(new_disease, function(err, disease) {
      if (err) {
        res.send(err);
      }
      res.json(disease);
    });
  }
};

exports.read_a_disease = function(req, res) {
  Disease.getDiseaseById(req.params.id, function(err, disease) {
    if (err) {
      res.send(err);
    }
    res.json(disease);
  });
};


exports.update_a_disease = function(req, res) {
  Disease.updateById(req.params.id, new Disease(req.body), function(err, disease) {
    if (err) {
      res.send(err);
    }
    res.json(disease);
  });
};


exports.delete_a_disease = function(req, res) {
  Disease.remove( req.params.id, function(err, disease) {
    if (err) {
      res.send(err);
    }
    res.json({message: `Disease with ${id} is successfully deleted`});
  });
};
