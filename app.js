var path=require('path');
var p_root=process.cwd();

var express=require(path.join(p_root,'config/express.js'));
var mongodb=require(path.join(p_root,'config/mongoose.js'));

//var app=express();
//var db=mongoose();

module.exports=express;

