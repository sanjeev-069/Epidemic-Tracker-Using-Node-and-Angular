var sql=require('./db');

var Occupation=function(occupation) {
  this.OccupationName= occupation.OccupationName;
  this.PhoneNumber= occupation.PhoneNumber;
  this.WorkType=occupation.WorkType;
  this.Designation=occupation.Designation;
  this.Patientid= parseInt(occupation.Patientid);
};

Occupation.getAllOccupation = function(result) {
  sql.query('Select * from Occupations', function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      console.log('logins : ', res);
      result(null, res.recordset);
    }
  });
};
Occupation.getOccupationById = function(OccupationId, result) {
  // eslint-disable-next-line quotes
  sql.query("Select * from Occupations where OccupationId ='"+OccupationId+"'", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    } else {
      result(null, res.recordset);
    }
  });
};

Occupation.createOccupation = function(newOccupation, result) {
  // eslint-disable-next-line quotes
  sql.query("Insert into Occupations(OccupationName,PhoneNumber,WorkType,Designation,Patientid) values('"+newOccupation.OccupationName+"','"+newOccupation.PhoneNumber+"','"+newOccupation.WorkType+"','"+newOccupation.Designation+"','"+newOccupation.Patientid+"')", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    } else {
      console.log(res.OccupationId);
      result(null, res.OccupationId);
    }
  });
};

Occupation.updateById = function(id, occupation, result) {
  // eslint-disable-next-line quotes
  sql.query("Update Occupations Set OccupationName='"+occupation.OccupationName+"', PhoneNumber='"+occupation.PhoneNumber+"', WorkType='"+occupation.WorkType+"', Designation='"+occupation.Designation+"', Patientid='"+occupation.Patientid+"'where OccupationId='"+id+"'", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      result(null, res.recordset);
    }
  });
};


Occupation.remove = function(id, result) {
  // eslint-disable-next-line quotes
  sql.query("DELETE FROM Occupations WHERE OccupationId ='"+id+"'", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports= Occupation;
