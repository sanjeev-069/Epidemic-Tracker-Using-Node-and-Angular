var sql=require('./db');

const Stage=function(stage) {
  this.CurrentStage = stage.CurrentStage;
};
Stage.getAllStage = function(result) {
  sql.query('Select * from Stages', function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      console.log('Roles : ', res);
      result(null, res.recordset);
    }
  });
};
Stage.getStageById = function(StageId, result) {
  // eslint-disable-next-line quotes
  sql.query("Select * from Stages where StageId ='"+StageId+"'", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    } else {
      result(null, res.recordset);
    }
  });
};

Stage.createRole = function(newStage, result) {
  // eslint-disable-next-line quotes
  sql.query("Insert into Stages(CurrentStage) values('"+newStage.CurrentStage+"')", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    } else {
      console.log(res.StageId);
      result(null, res.StageId);
    }
  });
};

Stage.updateById = function(id, stage, result) {
  // eslint-disable-next-line quotes
  sql.query("Update Stages SET CurrentStage= '"+stage.CurrentStage+"' where StageId='"+id+"'", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      result(null, res.recordset);
    }
  });
};


Stage.remove = function(id, result) {
  // eslint-disable-next-line quotes
  sql.query("DELETE FROM Stages WHERE StageId ='"+id+"'", function(err, res) {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports= Stage;
