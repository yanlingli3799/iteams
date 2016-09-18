
var path=require('path');
var p_root=process.cwd();

//mongoose的model需要在router和controller之前引入
//一定要先引入mongoose，再执行express。否则会报Schema未定义错误。
var mongodb=require(path.join(p_root,'config/mongoose.js'));
var db=mongodb();

var express=require(path.join(p_root,'config/express.js'));

//var app=express();

module.exports=express;

