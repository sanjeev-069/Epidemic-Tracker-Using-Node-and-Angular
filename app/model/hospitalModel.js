var sql=require('./db');

const Hospital=function(hospital) {
  this.HospitalName = hospital.HospitalName;
  this.HospitalPhoneNumber=hospital.HospitalPhoneNumber;
};
Hospital.getAllHospital = function(result) {
  sql.query('Select * from Hospitals', function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      console.log('hospitals : ', res);
      result(null, res.recordset);
    }
  });
};
Hospital.getHospitalById = function(HospitalId, result) {
  // eslint-disable-next-line quotes
  sql.query("Select * from Hospitals where HospitalId ='"+HospitalId+"'", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    } else {
      result(null, res.recordset);
    }
  });
};

Hospital.createHospital = function(newHospital, result) {
  // eslint-disable-next-line quotes
  sql.query("Insert into Hospitals(HospitalName,HospitalPhoneNumber) values('"+newHospital.HospitalName+"','"+newHospital.HospitalPhoneNumber+"')", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    } else {
      console.log(res.HospitalId);
      result(null, res.HospitalId);
    }
  });
};

Hospital.updateById = function(id, hospital, result) {
  // eslint-disable-next-line quotes
  sql.query("Update Hospitals SET HospitalName= '"+hospital.HospitalName+"', HospitalPhoneNumber= '"+hospital.HospitalPhoneNumber+"' where HospitalId='"+id+"'", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      result(null, res.recordset);
    }
  });
};


Hospital.remove = function(id, result) {
  // eslint-disable-next-line quotes
  sql.query("DELETE FROM Hospitals WHERE HospitalId ='"+id+"'", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports= Hospital;
