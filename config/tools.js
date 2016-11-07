var path=require('path');
var p_root=process.cwd();
var CFG=require(path.join(p_root,'config/config.js'));

//print logs
function log(level,content)
{
	if("number" == typeof level)
	{
		if(level < CFG.LOG_LEVEL_BOTTOM)
		{
			level = CFG.LOG_LEVEL_BOTTOM;
		}
		if(level > CFG.LOG_LEVEL_TOP)
		{
			level = CFG.LOG_LEVEL_TOP;
		}

		if(level >= CFG.LOG_LEVEL_THRESHOLD)
		{
			var n = arguments.length;
			for(var i = 1 ; i < n ; i++)
				console.log(arguments[i]);
		}
	}
	else
	{
		var n = arguments.length;
		for(var i = 0 ; i < n ; i++)
			console.log(arguments[i]);
	}
}

//object is {} or not
function isObjectEmpty(obj,cb)
{
	for(var i in obj)
		return cb(false);
	return cb(true);
}

//检查cookie是否有效
//cb参数：true或false
function isCookieValid(cke,cb)
{
	isObjectEmpty(cke,function(flag){
		if(flag==false)
		{
			//解析obj
			passportParser(cke.passport,function(err,email){
				if(err)
				{
					console.log("cookie不为空，但是cookie无效");
					return cb(false);
				}
				else
				{
					console.log("cookie不为空，且cookie有效");
					return cb(true);
				}
			});
		}
		else
		{
			//obj为空,cookie无效
			return cb(false);
		}
	});
}

//用邮箱生成通行证
//cb args : passport
function passportGenerator(email,cb)
{
	return cb(email);
}


//由通行证解析邮箱
//cb args : err,email
function passportParser(token,cb)
{
	//解析成功
//	return cb(null,token);
	//解析失败
	return cb(new Error(),null);
}


module.exports = 
{
	log:log,

//	isObjectEmpty:isObjectEmpty,

	isCookieValid:isCookieValid,

	passportGenerator:passportGenerator,

	passportParser:passportParser
};