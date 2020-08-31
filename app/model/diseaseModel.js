var sql=require('./db');

const Disease=function(disease) {
  this.DiseaseName=disease.DiseaseName;
  this.DiseaseType=disease.DiseaseType;
};

Disease.getAllDisease=function(result) {
  sql.query('Select * from Diseases', function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      console.log('diseases : ', res);
      result(null, res.recordset);
    }
  });
};

Disease.getDiseaseById = function(DiseaseId, result) {
  // eslint-disable-next-line quotes
  sql.query("Select * from Diseases where DiseaseId ='"+DiseaseId+"'", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    } else {
      result(null, res.recordset);
    }
  });
};


Disease.createDisease = function(newDisease, result) {
  // eslint-disable-next-line quotes
  sql.query("Insert into Diseases(DiseaseName,DiseaseType) values('"+disease.DiseaseName+"','"+disease.DiseaseType+"')", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    } else {
      console.log(res.Id);
      result(null, res.Id);
    }
  });
};

Disease.updateById = function(id, disease, result) {
  // eslint-disable-next-line quotes
  sql.query("Update Diseases SET DiseaseName='"+disease.DiseaseName+"',DiseaseType='"+disease.DiseaseType+"'where DiseaseId='"+id+"'", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      result(null, res.recordset);
    }
  });
};

Disease.remove = function(id, result) {
  // eslint-disable-next-line quotes
  sql.query("DELETE FROM Diseases WHERE DiseaseId ='"+id+"'", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      res.send(`Record deleted with id: ${id}`);
      result(null, res);
    }
  });
};

module.exports= Disease;
