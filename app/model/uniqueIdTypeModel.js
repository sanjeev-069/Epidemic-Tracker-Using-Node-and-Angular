var sql=require('./db');

const UniqueId=function(uniqueId) {
  this.UniqueIdType=uniqueId.UniqueIdType;
  this.UniqueIdNumber=uniqueId.UniqueIdNumber;
  this.Patientid=uniqueId.Patientid;
};

UniqueId.getAllUniqueId=function(result) {
  sql.query('Select * from UniqueIdTypes', function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      console.log('UniqueId : ', res);
      result(null, res.recordset);
    }
  });
};

UniqueId.getUniqueIdById = function(UniqueId, result) {
  // eslint-disable-next-line quotes
  sql.query("Select * from UniqueIdTypes where UniqueTypeId ='"+UniqueId+"'", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    } else {
      result(null, res.recordset);
    }
  });
};


UniqueId.createUniqueId = function(newUniqueId, result) {
  // eslint-disable-next-line quotes
  sql.query("Insert into UniqueIdTypes(UniqueIdType,UniqueIdNumber,Patientid) values('"+newUniqueId.UniqueIdType+"','"+newUniqueId.UniqueIdNumber+"',,'"+newUniqueId.Patientid+"')", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    } else {
      console.log(res.Id);
      result(null, res.Id);
    }
  });
};

UniqueId.updateById = function(id, uniqueId, result) {
  // eslint-disable-next-line quotes
  sql.query("Update UniqueIdTypes Set UniqueIdType='"+uniqueId.UniqueIdType+"',UniqueIdNumber='"+uniqueId.UniqueIdNumber+"',Patientid='"+uniqueId.Patientid+"'where UniqueId='"+id+"'", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      result(null, res.recordset);
    }
  });
};

UniqueId.remove = function(id, result) {
  // eslint-disable-next-line quotes
  sql.query("DELETE FROM UniqueIdTypes WHERE UniqueId ='"+id+"'", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      res.send(`Record deleted with id: ${id}`);
      result(null, res);
    }
  });
};

module.exports= UniqueId;
