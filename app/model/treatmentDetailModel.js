var sql=require('./db');

const TreatmentDetail=function(treatmentDetail) {
  this.AdmitDate=treatmentDetail.AdmitDate;
  this.Prescription=treatmentDetail.Prescription;
  this.RelievingDate=treatmentDetail.RelievingDate;
  this.IsFatality=treatmentDetail.IsFatality;
  this.Stageid=treatmentDetail.Stageid;
};
TreatmentDetail.getAllTreatmentDetail = function(result) {
  sql.query('Select * from TreatmentDetails', function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      console.log('Roles : ', res);
      result(null, res.recordset);
    }
  });
};
TreatmentDetail.getTreatmentDetailById = function(TreatmentId, result) {
  // eslint-disable-next-line quotes
  sql.query("Select * from TreatmentDetails where TreatmentId ='"+TreatmentId+"'", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    } else {
      result(null, res.recordset);
    }
  });
};

TreatmentDetail.createTreatmentDetail = function(newTreatmentDetail, result) {
  // eslint-disable-next-line quotes
  sql.query("Insert into TreatmentDetails(AdmitDate,Prescription,RelievingDate,IsFatality,Stageid) values('"+newTreatmentDetail.AdmitDate+"','"+newTreatmentDetail.Prescription+"','"+newTreatmentDetail.RelievingDate+"','"+newTreatmentDetail.IsFatality+"','"+newTreatmentDetail.Stageid+"')", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    } else {
      console.log(res.TreatmentId);
      result(null, res.TreatmentId);
    }
  });
};

TreatmentDetail.updateById = function(id, treatmentDetail, result) {
  // eslint-disable-next-line quotes
  sql.query("Update TreatmentDetails Set AdmitDate='"+treatmentDetail.AdmitDate+"',Prescription='"+treatmentDetail.Prescription+"',RelievingDate='"+treatmentDetail.RelievingDate+"',IsFatality='"+treatmentDetail.IsFatality+"',Stageid='"+treatmentDetail.Stageid+"'where TreatmentId='"+id+"'", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      result(null, res.recordset);
    }
  });
};


TreatmentDetail.remove = function(id, result) {
  // eslint-disable-next-line quotes
  sql.query("DELETE FROM TreatmentDetails WHERE TreatmentId ='"+id+"'", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports= TreatmentDetail;
