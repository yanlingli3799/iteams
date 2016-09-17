var express=require('./config/express.js');
var mongodb=require('./config/mongoose.js');

var app=express();
var db=mongoose();

module.exports=app;