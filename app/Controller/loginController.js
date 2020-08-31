var Login=require('../model/loginModel');

exports.list_all_logins=function(req, res) {
  Login.getAllLogin(function(err, login) {
    if (err) {
      res.send(err);
    }
    console.log('res', login);
    res.send(login);
  });
};


exports.create_a_login = function(req, res) {
  var newLogin = new Login(req.body);
  console.log(newLogin);
  // handles null error
  if (!newLogin.Email || !newLogin.Password) {
    res.status(400).send({error: true, message: 'Please provide Email/Password'});
  } else {
    Login.createLogin(newLogin, function(err, login) {
      if (err) {
        res.send(err);
      }
      res.json(login);
    });
  }
};

exports.read_a_login = function(req, res) {
  Login.getLoginById(req.params.id, function(err, login) {
    if (err) {
      res.send(err);
    }
    res.json(login);
  });
};


exports.update_a_login = function(req, res) {
  Login.updateById(req.params.id, new Login(req.body), function(err, login) {
    if (err) {
      res.send(err);
    }
    res.json(login);
  });
};


exports.delete_a_login = function(req, res) {
  Login.remove( req.params.id, function(err, login) {
    if (err) {
      res.send(err);
    }
    res.json({message: 'Login successfully deleted'});
  });
};
