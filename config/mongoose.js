var mongoose=require('mongoose');
var path=require('path');
var p_root=process.cwd();

var config=require(path.join(p_root,'config/config.js'));

module.exports=function(){
	
	mongoose.Promise=global.Promise;
	var db=mongoose.connect(config.DB_URI);

	db.require(path.join(p_root,'app/controllers/user.server.controller.js'));

	return db;
};