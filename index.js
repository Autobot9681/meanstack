const express = require ('express');
const bodyparser = require ('body-parser');
const {mongoose} = require ('../db.js');
const express = require ('express');
var = employeeController = require('./controllers/employeecontroller);

var app = express();
app.use(bodyparser.JSON);
app.listen(3000,function)(){
  console.log('server started at port 3000')});
}
app.use(./employee),employeecontroller);
