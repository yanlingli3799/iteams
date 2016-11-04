var path=require('path');
var p_root=process.cwd();
var CFG=require(path.join(p_root,'config/config.js'));

module.exports = 
{
	//print log
	log:function(level,content){
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
	},
	//object is {} or not
	isObjectEmpty:function(obj){
		for(var i in obj)
			return false;
		return true;
	},
	//generate  token
	tokenGenerator:function(obj)
	{},
	tokenParser:function(obj)
	{}
};