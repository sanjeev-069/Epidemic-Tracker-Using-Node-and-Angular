var Stage=require('../model/stageModel');

exports.list_all_stages=function(req, res) {
  Stage.getAllStage(function(err, stage) {
    if (err) {
      res.send(err);
    }
    console.log('res', stage);
    res.send(stage);
  });
};


exports.create_a_stage = function(req, res) {
  var newStage = new Stage(req.body);
  // handles null error
  if (!newStage.CurrentStage) {
    res.status(400).send({error: true, message: 'Please provide Stage'});
  } else {
    Stage.createStage(newStage, function(err, stage) {
      if (err) {
        res.send(err);
      }
      res.json(stage);
    });
  }
};

exports.read_a_stage = function(req, res) {
  Stage.getStageById(req.params.id, function(err, stage) {
    if (err) {
      res.send(err);
    }
    res.json(stage);
  });
};


exports.update_a_stage = function(req, res) {
  Stage.updateById(req.params.id, new Stage(req.body), function(err, stage) {
    if (err) {
      res.send(err);
    }
    res.json(stage);
  });
};


exports.delete_a_stage = function(req, res) {
  Stage.remove( req.params.id, function(err, stage) {
    if (err) {
      res.send(err);
    }
    res.json({message: 'Stage successfully deleted'});
  });
};
