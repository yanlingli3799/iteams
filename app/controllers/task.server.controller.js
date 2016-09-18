var mongoose=require('mongoose');
var Task=mongoose.model('Task');

module.exports={
	create:function(req,res,next,cb){
	    var task = new Task({
	    	t_title:'test task1',
	    	t_content:'this is content',
	    	t_status:'todo',
	    	t_load:5	    	
	    });
	    task.save(function(err){
	      if(err){
	      	console.log('create:save task error');
	      	return cb(err,null);
	      }
	      else
	      {
	      	console.log('create:save task success');
	      	return cb(err,task.toString());
	      }
	    });
	},
	list:function(req,res,next){},
	getById:function(req,res,mext){}
};
