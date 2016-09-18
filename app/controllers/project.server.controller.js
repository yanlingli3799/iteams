var mongoose=require('mongoose');
var Project=mongoose.model('Project');

module.exports={
	create:function(req,res,next,cb){

	    var project = new Project({
	    	p_name:'eeee@qq.com',
	    	p_creater:'57de359cc0e5a914ab274308',
	    	p_team:[{
	    		mem_id:'57de359cc0e5a914ab274308',
	    		mem_role:'admin'
	    	},{
	    		mem_id:'57de359cc0e5a914ab274308',
	    		mem_role:'creator'
	    	},{
	    		mem_id:'57de359cc0e5a914ab274308',
	    		mem_role:'user'
	    	}],
	    	p_phase:[{
	    		title:'phase 1',
	    		target:'complete ...'
	    	},{
	    		title:'phase 2',
	    		target:'complete ...'
	    	}]
	    });
	    project.save(function(err){
	      if(err){
	      	console.log('create:save project error');
	      	return cb(err,null);
	      }
	      else
	      {
	      	console.log('create:save project success');
	      	return cb(err,project.toString());
	      }
	    });

	},
	list:function(req,res,next){},
	getById:function(req,res,mext){}
};
