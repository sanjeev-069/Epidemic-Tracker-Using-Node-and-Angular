var sql=require('./db');

const TreatmentRecord=function(treatmentRecord) {
  this.Patientid=treatmentRecord.Patientid;
  this.Hospitalid=treatmentRecord.Hospitalid;
  this.Diseaseid=treatmentRecord.Diseaseid;
  this.Treatmentid=treatmentRecord.Treatmentid;
};
TreatmentRecord.getAllTreatmentRecord = function(result) {
  sql.query('Select * from TreatmentRecords', function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      console.log('Roles : ', res);
      result(null, res.recordset);
    }
  });
};
TreatmentRecord.getTreatmentRecordById = function(RecordId, result) {
  // eslint-disable-next-line quotes
  sql.query("Select * from TreatmentRecords where RecordId ='"+RecordId+"'", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    } else {
      result(null, res.recordset);
    }
  });
};

TreatmentRecord.createTreatmentRecord = function(newTreatmentRecord, result) {
  // eslint-disable-next-line quotes
  sql.query("Insert into TreatmentRecords(Patientid,Hospitalid,Diseaseid,Treatmentid) values('"+newTreatmentRecord.Patientid+"','"+newTreatmentRecord.Hospitalid+"','"+newTreatmentRecord.Diseaseid+"','"+newTreatmentRecord.Treatmentid+"')", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    } else {
      console.log(res.RecordId);
      result(null, res.RecordId);
    }
  });
};

TreatmentRecord.updateById = function(id, treatmentRecord, result) {
  // eslint-disable-next-line quotes
  sql.query("Update TreatmentRecords Set Patientid='"+treatmentRecord.Patientid+"',Hospitalid='"+treatmentRecord.Hospitalid+"',Diseaseid='"+treatmentRecord.Diseaseid+"',Treatmentid='"+treatmentRecord.Treatmentid+"' where RecordId='"+id+"'", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      result(null, res.recordset);
    }
  });
};


TreatmentRecord.remove = function(id, result) {
  // eslint-disable-next-line quotes
  sql.query("DELETE FROM TreatmentRecords WHERE RecordId ='"+id+"'", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports= TreatmentRecord;
