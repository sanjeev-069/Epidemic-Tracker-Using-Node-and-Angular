const sql=require('mssql/msnodesqlv8');

var config={
  server: 'INHYD2LABPC09',
  database: 'EpidemicTrackerDB',
  driver: 'msnodesqlv8',
  options: {
    encrypt: false,
    trustedConnection: true,
  },
};
var connection=new sql.ConnectionPool(config);
connection.connect(function(err) {
  if (err) throw err;
  else {
    console.log('Connected to database....');
  }
});

module.exports=connection;
