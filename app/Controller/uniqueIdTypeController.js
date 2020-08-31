var UniqueId=require('../model/uniqueIdTypeModel');

exports.list_all_uniqueIds=function(req, res) {
  UniqueId.getAllUniqueId(function(err, uniqueId) {
    if (err) {
      res.send(err);
    }
    console.log('res', uniqueId);
    res.send(uniqueId);
  });
};


exports.create_a_uniqueId = function(req, res) {
  var newUniqueId= new UniqueId(req.body);
  // handles null error
  if (!newUniqueId.UniqueIdName) {
    res.status(400).send({error: true, message: 'Please provide Stage'});
  } else {
    UniqueId.createUniqueIdType(newUniqueId, function(err, uniqueId) {
      if (err) {
        res.send(err);
      }
      res.json(uniqueId);
    });
  }
};

exports.read_a_uniqueId = function(req, res) {
  UniqueId.getUniqueIdById(req.params.id, function(err, uniqueId) {
    if (err) {
      res.send(err);
    }
    res.json(uniqueId);
  });
};


exports.update_a_uniqueId = function(req, res) {
  UniqueId.updateById(req.params.id, new UniqueId(req.body), function(err, uniqueId) {
    if (err) {
      res.send(err);
    }
    res.json(uniqueId);
  });
};


exports.delete_a_uniqueId = function(req, res) {
  UniqueId.remove( req.params.id, function(err, uniqueId) {
    if (err) {
      res.send(err);
    }
    res.json({message: 'UniqueIdType successfully deleted'});
  });
};
