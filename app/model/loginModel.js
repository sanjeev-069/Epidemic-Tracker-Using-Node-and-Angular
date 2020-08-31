var sql=require('./db');

const Login=function(login) {
  this.Name = login.Name;
  this.Gender = login.Gender;
  this.Email=login.Email;
  this.PhoneNumber=login.PhoneNumber;
  this.Password=login.Password;
  this.Roleid=parseInt(login.Roleid);
};
Login.getAllLogin = function(result) {
  sql.query('Select * from Logins', function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      console.log('logins : ', res);
      result(null, res.recordset);
    }
  });
};
Login.getLoginById = function(LoginId, result) {
  // eslint-disable-next-line quotes
  sql.query("Select * from Logins where LoginId ='"+LoginId+"'", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    } else {
      result(null, res.recordset);
    }
  });
};

Login.createLogin = function(newLogin, result) {
  // eslint-disable-next-line quotes
  sql.query("Insert into Logins(Name,Gender,Email,PhoneNumber,Password,Roleid) values('"+newLogin.Name+"','"+newLogin.Gender+"','"+newLogin.Email+"','"+newLogin.PhoneNumber+"','"+newLogin.Password+"','"+newLogin.Roleid+"')", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    } else {
      console.log(res.Id);
      result(null, res.Id);
    }
  });
};

Login.updateById = function(id, login, result) {
  // eslint-disable-next-line quotes
  sql.query("Update Logins SET Name= '"+login.Name+"', Gender='"+login.Gender+"', Email='"+login.Email+"', PhoneNumber= '"+login.PhoneNumber+"', Password='"+login.Password+"', Roleid='"+login.Roleid+"' where LoginId='"+id+"'", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      result(null, res.recordset);
    }
  });
};


Login.remove = function(id, result) {
  // eslint-disable-next-line quotes
  sql.query("DELETE FROM Logins WHERE LoginId ='"+id+"'", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports= Login;
