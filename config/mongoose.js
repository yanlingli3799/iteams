var mongoose=require('mongoose');
var path=require('path');
var p_root=process.cwd();

var CFG=require(path.join(p_root,'config/config.js'));

module.exports=function(){

	mongoose.Promise = global.Promise;
	var db=mongoose.connect(CFG.DB_URI_MONGO);

	//引入自定义model
	require(path.join(p_root,'app/models/account.server.model.js'));
	require(path.join(p_root,'app/models/project.server.model.js'));
	require(path.join(p_root,'app/models/task.server.model.js'));
	require(path.join(p_root,'app/models/notification.server.model.js'));
	require(path.join(p_root,'app/models/documentation.server.model.js'));

	return db;
};