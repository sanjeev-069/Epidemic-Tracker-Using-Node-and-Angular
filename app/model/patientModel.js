var sql=require('./db');

const Patient=function(patient) {
  this.PatientName = patient.PatientName;
  this.Age=patient.Age;
  this.Gender = patient.Gender;
  this.PhoneNumber=patient.PhoneNumber;
  this.Loginid=parseInt(patient.Loginid);
};
Patient.getAllPatient = function(result) {
  sql.query('Select * from Patients', function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      console.log('logins : ', res);
      result(null, res.recordset);
    }
  });
};
Patient.getPatientById = function(PatientId, result) {
  // eslint-disable-next-line quotes
  sql.query("Select * from Patients where PatientId ='"+PatientId+"'", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    } else {
      result(null, res.recordset);
    }
  });
};

Patient.createPatient = function(newPatient, result) {
  // eslint-disable-next-line quotes
  sql.query("Insert into Patients(PatientName,Age,Gender,PhoneNumber,Loginid) values('"+newPatient.PatientName+"','"+newPatient.Age+"','"+newPatient.Gender+"','"+newPatient.PhoneNumber+"','"+newPatient.Loginid+"')", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    } else {
      console.log(res.PatientId);
      result(null, res.PatientId);
    }
  });
};

Patient.updateById = function(id, patient, result) {
  // eslint-disable-next-line quotes
  sql.query("Update Patients Set PatientName='"+patient.PatientName+"',Age='"+patient.Age+"',Gender='"+patient.Gender+"',PhoneNumber='"+patient.PhoneNumber+"',Loginid='"+patient.Loginid+"'where PatientId='"+id+"'", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      result(null, res.recordset);
    }
  });
};


Patient.remove = function(id, result) {
  // eslint-disable-next-line quotes
  sql.query("DELETE FROM Patients WHERE PatientId ='"+id+"'", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports= Patient;
