

module.exports={
	isObjectEmpty:function(obj){
		for(var i in obj)
			return false;
		return true;
	},
};