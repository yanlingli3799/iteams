var path=require('path');
var p_root=process.cwd();

//mongoose的model需要在router和controller之前引入，因此使用一个package来进行管理
var package=require(path.join(p_root,'config/package.js'));
var express=require(path.join(p_root,'config/express.js'));
var mongodb=require(path.join(p_root,'config/mongoose.js'));

//var app=express();
//var db=mongoose();

module.exports=express;

