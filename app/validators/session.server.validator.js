//检查session信息是否合法
var path=require('path');
var p_root=process.cwd();
var CFG=require(path.join(p_root,'config/config.js'));
var LOG=require(path.join(p_root,'tools/logger.js'));


var validatorObject = require(path.join(p_root,'app/validators/object.server.validator.js'));

/*
descriptions:
	给定session，检查session信息是否合法。

input:
	session object

output:
	true/false

steps:
	1.session为空，返回false
	2.session不为空，按邮箱密码找不到记录，返回false
	3.session不为空，按邮箱密码找到记录，返回true
	PS：暂时先不写那么复杂，有点乱，需要理一理
*/

function isSessionValid(session,cb)
{
	validatorObject.isObjectEmpty(session,function(flag){
		if(flag==true)//为空，则session不合法
		{
			return cb(false);
		}
		else
		{
			return cb(true);
		}
	});
}




module.exports = 
{
	isSessionValid:isSessionValid,
};