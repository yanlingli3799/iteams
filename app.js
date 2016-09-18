
var path=require('path');
var p_root=process.cwd();

//mongoose的model需要在router和controller之前引入，因此使用一个package来进行管理
console.log('this is app.js');

var package=require(path.join(p_root,'config/package.js'));
console.log('require package.js');

var express=require(path.join(p_root,'config/express.js'));
console.log('require express.js');

var mongodb=require(path.join(p_root,'config/mongoose.js'));
console.log('require mongodb');

//var app=express();
var db=mongodb();

module.exports=express;

