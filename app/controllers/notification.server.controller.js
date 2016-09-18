var mongoose=require('mongoose');
var Notification=mongoose.model('Notification');

module.exports={
	create:function(req,res,next,cb){
	    var notification = new Notification({
	    	n_content:'this is content',
	    	n_type:'task status change',
	    	n_receivers:[{
	    		rec_id:'57de89fa50f33d1ac167ff3c',
	    		rec_wread:false
	    	},{
	    		rec_id:'57de89fa50f33d1ac167ff3c',
	    		rec_wread:true
	    	}]
	    });
	    notification.save(function(err){
	      if(err){
	      	console.log('create:save notification error');
	      	return cb(err,null);
	      }
	      else
	      {
	      	console.log('create:save notification success');
	      	return cb(err,notification.toString());
	      }
	    });
	},
	list:function(req,res,next){},
	getById:function(req,res,mext){}
};
