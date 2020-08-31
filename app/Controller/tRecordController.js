var TreatmentRecord=require('../model/treatmentRecordModel');

exports.list_all_treatmentRecords=function(req, res) {
  TreatmentDetail.getAllTreatmentRecord(function(err, treatmentRecord) {
    if (err) {
      res.send(err);
    }
    console.log('res', treatmentRecord);
    res.send(treatmentRecord);
  });
};


exports.create_a_treatmentRecord = function(req, res) {
  var newTreatmentRecord= new TreatmentRecord(req.body);
  // handles null error
  if (!newTreatmentRecord.Diseaseid) {
    res.status(400).send({error: true, message: 'Please provide Details'});
  } else {
    TreatmentRecord.createTreatmentRecord(newTreatmentRecord, function(err, treatmentRecord) {
      if (err) {
        res.send(err);
      }
      res.json(treatmentRecord);
    });
  }
};

exports.read_a_treatmentRecord = function(req, res) {
  TreatmentRecord.getTreatmentRecordById(req.params.id, function(err, treatmentRecord) {
    if (err) {
      res.send(err);
    }
    res.json(treatmentRecord);
  });
};


exports.update_a_treatmentRecord = function(req, res) {
  TreatmentRecord.updateById(req.params.id, new TreatmentRecord(req.body), function(err, treatmentRecord) {
    if (err) {
      res.send(err);
    }
    res.json(treatmentRecord);
  });
};


exports.delete_a_treatmentRecord = function(req, res) {
  TreatmentRecord.remove( req.params.id, function(err, treatmentRecord) {
    if (err) {
      res.send(err);
    }
    res.json({message: 'Treatment Record successfully deleted'});
  });
};
