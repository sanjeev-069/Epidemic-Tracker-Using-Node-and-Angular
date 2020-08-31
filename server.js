const express = require('express');
var cors = require('cors');
const app = express();

// eslint-disable-next-line no-unused-vars
const db=require('./app/model/db');
const bodyParser = require('body-parser');

port = process.env.PORT || 4000;
app.listen(port);

console.log('Listening on port: ' + port);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors());
var routes = require('./app/routes/approutes'); // importing route

routes(app);


