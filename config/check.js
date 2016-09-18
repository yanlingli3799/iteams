

module.exports={
	//判断一个Object是否为空，即{}
	isObjectEmpty:function(obj){
		for(var i in obj)
			return false;
		return true;
	},
};