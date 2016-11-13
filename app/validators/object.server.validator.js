var path=require('path');
var p_root=process.cwd();
var CFG=require(path.join(p_root,'config/config.js'));


/*
descriptions：
	object is {} or not

input:
	obj
	
output:
	cb(true/false).

steps:
	若obj为空，则返回true
	若obj不空，则返回false
*/
function isObjectEmpty(obj,cb)
{
	for(var i in obj)
		return cb(false);
	return cb(true);
}


module.exports = 
{
	isObjectEmpty:isObjectEmpty
};