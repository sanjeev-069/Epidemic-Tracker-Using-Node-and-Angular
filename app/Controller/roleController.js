var Role=require('../model/roleModel');

exports.list_all_roles=function(req, res) {
  Role.getAllRole(function(err, role) {
    if (err) {
      res.send(err);
    }
    console.log('res', role);
    res.send(role);
  });
};


exports.create_a_role = function(req, res) {
  var newRole = new Role(req.body);
  // handles null error
  if (!newRole.RoleName) {
    res.status(400).send({error: true, message: 'Please provide Role Name'});
  } else {
    Role.createRole(newRole, function(err, role) {
      if (err) {
        res.send(err);
      }
      res.json(role);
    });
  }
};

exports.read_a_role = function(req, res) {
  Role.getRoleById(req.params.id, function(err, role) {
    if (err) {
      res.send(err);
    }
    res.json(role);
  });
};


exports.update_a_role = function(req, res) {
  Role.updateById(req.params.id, new Role(req.body), function(err, role) {
    if (err) {
      res.send(err);
    }
    res.json(role);
  });
};


exports.delete_a_role = function(req, res) {
  Role.remove( req.params.id, function(err, role) {
    if (err) {
      res.send(err);
    }
    res.json({message: 'Role successfully deleted'});
  });
};
