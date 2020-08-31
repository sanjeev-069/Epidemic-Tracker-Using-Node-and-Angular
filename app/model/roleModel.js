var sql=require('./db');

const Role=function(role) {
  this.RoleName = role.RoleName;
};
Role.getAllRole = function(result) {
  sql.query('Select * from Roles', function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      console.log('Roles : ', res);
      result(null, res.recordset);
    }
  });
};
Role.getRoleById = function(RoleId, result) {
  // eslint-disable-next-line quotes
  sql.query("Select * from Roles where RoleId ='"+RoleId+"'", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    } else {
      result(null, res.recordset);
    }
  });
};

Role.createRole = function(newRole, result) {
  // eslint-disable-next-line quotes
  sql.query("Insert into Roles(RoleName) values('"+newRole.RoleName+"')", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    } else {
      console.log(res.RoleId);
      result(null, res.RoleId);
    }
  });
};

Role.updateById = function(id, role, result) {
  // eslint-disable-next-line quotes
  sql.query("Update Roles SET RoleName= '"+role.RoleName+"' where RoleId='"+id+"'", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      result(null, res.recordset);
    }
  });
};


Role.remove = function(id, result) {
  // eslint-disable-next-line quotes
  sql.query("DELETE FROM Roles WHERE RoleId ='"+id+"'", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports= Role;
