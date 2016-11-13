var path=require('path');
var p_root=process.cwd();
var CFG=require(path.join(p_root,'config/config.js'));

var objValidator=require(path.join(p_root,'app/validators/object.server.validator.js'));

//object is {} or not
function isCookieValid(obj,cb)
{
	objValidator.isObjectEmpty(obj,function(result){
		if(result==true)//为空
			return cb(false);
		else
			return cb(true);
	});
}


module.exports = 
{
	isCookieValid:isCookieValid
};