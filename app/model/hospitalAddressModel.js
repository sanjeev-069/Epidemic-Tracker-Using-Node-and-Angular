var sql=require('./db');

const HospitalAddress=function(hospitalAddress) {
  this.StreetNumber = hospitalAddress.StreetNumber;
  this.Area=hospitalAddress.Area;
  this.City=hospitalAddress.City;
  this.State=hospitalAddress.State;
  this.Country=hospitalAddress.Country;
  this.ZipCode=hospitalAddress.ZipCode;
  this.Hospitalid=hospitalAddress.Hospitalid;
};
HospitalAddress.getAllHospitalAddress = function(result) {
  sql.query('Select * from HospitalAddresses', function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      console.log('HospitalAddresses : ', res);
      result(null, res.recordset);
    }
  });
};
HospitalAddress.getHospitalAddressById = function(AddressId, result) {
  // eslint-disable-next-line quotes
  sql.query("Select * from HospitalAddresses where AddressId ='"+AddressId+"'", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    } else {
      result(null, res.recordset);
    }
  });
};

HospitalAddress.createHospitalAddress = function(newHospitalAddress, result) {
  // eslint-disable-next-line quotes
  sql.query("Insert into HospitalAddresses(StreetNumber,Area,City,State,Country,ZipCode,Hospitalid) values('"+newHospitalAddress.StreetNumber+"','"+newHospitalAddress.Area+"','"+newHospitalAddress.City+"','"+newHospitalAddress.State+"','"+newHospitalAddress.Country+"','"+newHospitalAddress.ZipCode+"','"+newHospitalAddress.Hospitalid+"')", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    } else {
      console.log(res.AddressId);
      result(null, res.AddressId);
    }
  });
};

HospitalAddress.updateById = function(id, hospitalAddress, result) {
  // eslint-disable-next-line quotes
  sql.query("Update HospitalAddresses SET StreetNumber= '"+hospitalAddress.StreetNumber+"', Area= '"+hospitalAddress.Area+"', City= '"+hospitalAddress.City+"', State= '"+hospitalAddress.State+"', Country= '"+hospitalAddress.Country+"', ZipCode= '"+hospitalAddress.ZipCode+"', Hospitalid= '"+hospitalAddress.Hospitalid+"' where AddressId='"+id+"'", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      result(null, res.recordset);
    }
  });
};


HospitalAddress.remove = function(id, result) {
  // eslint-disable-next-line quotes
  sql.query("DELETE FROM HospitalAddresses WHERE AddressId ='"+id+"'", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports= HospitalAddress;
