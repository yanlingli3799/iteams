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


module.exports = 
{
	log:log
};