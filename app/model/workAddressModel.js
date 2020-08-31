var sql=require('./db');

const WorkAddress=function(workAddress) {
  this.StreetNumber = workAddress.StreetNumber;
  this.Area=workAddress.Area;
  this.City=workAddress.City;
  this.State=workAddress.State;
  this.Country=workAddress.Country;
  this.ZipCode=workAddress.ZipCode;
  this.Occupationid=workAddress.Occupationid;
};
WorkAddress.getAllWorkAddress = function(result) {
  sql.query('Select * from WorkAddresses', function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      console.log('WorkAddresses : ', res);
      result(null, res.recordset);
    }
  });
};
WorkAddress.getWorkAddressById = function(AddressId, result) {
  // eslint-disable-next-line quotes
  sql.query("Select * from WorkAddresses where AddressId ='"+AddressId+"'", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    } else {
      result(null, res.recordset);
    }
  });
};

WorkAddress.createWorkAddress = function(newWorkAddress, result) {
  // eslint-disable-next-line quotes
  sql.query("Insert into WorkAddresses(StreetNumber,Area,City,State,Country,ZipCode,Hospitalid) values('"+newWorkAddress.StreetNumber+"','"+newWorkAddress.Area+"','"+newWorkAddress.City+"','"+newWorkAddress.State+"','"+newWorkAddress.Country+"','"+newWorkAddress.ZipCode+"','"+newWorkAddress.Hospitalid+"')", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    } else {
      console.log(res.AddressId);
      result(null, res.AddressId);
    }
  });
};

WorkAddress.updateById = function(id, workAddress, result) {
  // eslint-disable-next-line quotes
  sql.query("Update WorkAddresses SET StreetNumber= '"+workAddress.StreetNumber+"', Area= '"+workAddress.Area+"', City= '"+workAddress.City+"', State= '"+workAddress.State+"', Country= '"+workAddress.Country+"', ZipCode= '"+workAddress.ZipCode+"', Hospitalid= '"+workAddress.Hospitalid+"' where AddressId='"+id+"'", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      result(null, res.recordset);
    }
  });
};


WorkAddress.remove = function(id, result) {
  // eslint-disable-next-line quotes
  sql.query("DELETE FROM WorkAddresses WHERE AddressId ='"+id+"'", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports= WorkAddress;
