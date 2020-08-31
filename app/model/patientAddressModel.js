var sql=require('./db');

const PatientAddress=function(patientAddress) {
  this.StreetNumber = patientAddress.StreetNumber;
  this.Area=patientAddress.Area;
  this.City=patientAddress.City;
  this.State=patientAddress.State;
  this.Country=patientAddress.Country;
  this.ZipCode=patientAddress.ZipCode;
  this.Patientid=patientAddress.Patientid;
};
PatientAddress.getAllPatientAddress = function(result) {
  sql.query('Select * from PatientAddresses', function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      console.log('PatientAddresses : ', res);
      result(null, res.recordset);
    }
  });
};
PatientAddress.getPatientAddressById = function(AddressId, result) {
  // eslint-disable-next-line quotes
  sql.query("Select * from PatientAddresses where AddressId ='"+AddressId+"'", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    } else {
      result(null, res.recordset);
    }
  });
};

PatientAddress.createPatientAddress = function(newPatientAddress, result) {
  // eslint-disable-next-line quotes
  sql.query("Insert into PatientAddresses(StreetNumber,Area,City,State,Country,ZipCode,Hospitalid) values('"+newPatientAddress.StreetNumber+"','"+newPatientAddress.Area+"','"+newPatientAddress.City+"','"+newPatientAddress.State+"','"+newPatientAddress.Country+"','"+newPatientAddress.ZipCode+"','"+newPatientAddress.Hospitalid+"')", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    } else {
      console.log(res.AddressId);
      result(null, res.AddressId);
    }
  });
};

PatientAddress.updateById = function(id, patientAddress, result) {
  // eslint-disable-next-line quotes
  sql.query("Update PatientAddresses SET StreetNumber= '"+patientAddress.StreetNumber+"', Area= '"+patientAddress.Area+"', City= '"+patientAddress.City+"', State= '"+patientAddress.State+"', Country= '"+patientAddress.Country+"', ZipCode= '"+patientAddress.ZipCode+"', Hospitalid= '"+patientAddress.Hospitalid+"' where AddressId='"+id+"'", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      result(null, res.recordset);
    }
  });
};


PatientAddress.remove = function(id, result) {
  // eslint-disable-next-line quotes
  sql.query("DELETE FROM PatientAddresses WHERE AddressId ='"+id+"'", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports= PatientAddress;
