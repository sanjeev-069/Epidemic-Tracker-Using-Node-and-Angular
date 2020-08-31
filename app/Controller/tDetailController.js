var TreatmentDetail=require('../model/treatmentDetailModel');

exports.list_all_treatmentDetails=function(req, res) {
  TreatmentDetail.getAllTreatmentDetail(function(err, treatmentDetail) {
    if (err) {
      res.send(err);
    }
    console.log('res', treatmentDetail);
    res.send(treatmentDetail);
  });
};


exports.create_a_treatmentDetail = function(req, res) {
  var newTreatmentDetail= new TreatmentDetail(req.body);
  // handles null error
  if (!newTreatmentDetail.AdmitDate) {
    res.status(400).send({error: true, message: 'Please provide Stage'});
  } else {
    TreatmentDetail.createTreatmentDetail(newTreatmentDetail, function(err, treatmentDetail) {
      if (err) {
        res.send(err);
      }
      res.json(treatmentDetail);
    });
  }
};

exports.read_a_treatmentDetail = function(req, res) {
  TreatmentDetail.getTreatmentDetailById(req.params.id, function(err, treatmentDetail) {
    if (err) {
      res.send(err);
    }
    res.json(treatmentDetail);
  });
};


exports.update_a_treatmentDetail = function(req, res) {
  TreatmentDetail.updateById(req.params.id, new TreatmentDetail(req.body), function(err, treatmentDetail) {
    if (err) {
      res.send(err);
    }
    res.json(treatmentDetail);
  });
};


exports.delete_a_treatmentDetail = function(req, res) {
  TreatmentDetail.remove( req.params.id, function(err, stage) {
    if (err) {
      res.send(err);
    }
    res.json({message: 'TreatmentDetail successfully deleted'});
  });
};
