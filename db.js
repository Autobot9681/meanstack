const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/My_db',{useNewUrlParser: true},(err)=>{
    if(!err)
    console.log('mongoDb connection success..........');
    else
    console.log('error in DB connection:'+JSON.stringify(err));
});A
module.exports=mongoose;
