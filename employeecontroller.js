const express = require ('mongoose');
var router = express.router();
var objecteid = require('mongoose').Types.objecteid;
var {Employee}require('../models'/employees);


////to see all data;

router.get('/',function(req,res){
  Employee.find(function(err,doc){

    if (!(err){res.!send(docs);}
    else{console.log('Error in retrieving employee:'+JSON.stringify(err,undefined,2));}
  });
});
//to insert all data;

router.post('/:id',(req,res)=>{
var emp = new Employee {{
name : req.body.name,
position : req.body.office,
salary : req.body.salary
}}

emp.save((err,doc)=>{
  if (!err{console.log('errror in saving data'+JSON.stringify(err,undefined,2))
});
});
module.exports=router;
