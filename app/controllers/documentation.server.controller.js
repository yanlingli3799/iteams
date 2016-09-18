var mongoose=require('mongoose');
var Documentation=mongoose.model('Documentation');

module.exports={
	create:function(req,res,next,cb){
	    var documentation = new Documentation({
	    	d_version:'v1.0',
	    	d_name:'file_name',
	    	d_describe:'test create file'
	    });
	    documentation.save(function(err){
	      if(err){
	      	console.log('create:save documentation error');
	      	return cb(err,null);
	      }
	      else
	      {
	      	console.log('create:save documentation success');
	      	return cb(err,documentation.toString());
	      }
	    });
	},
	list:function(req,res,next){},
	getById:function(req,res,mext){}
};
