var express=require('express');
var router=express.Router();

router.get('/notifications/unread',function(req,res,next){
	res.end('get /notifications/unread');
});

router.get('/notifications/read',function(req,res,next){
	res.end('get /notifications/read');
});

router.get('/notifications?filter',function(req,res,next){
	res.end('get /notifications?filter');
});

router.get('/notification',function(req,res,next){
	res.end('get /notification');
});

router.put('/notification',function(req,res,next){
	res.end('get /notification');
});

router.delete('/notification',function(req,res,next){
	res.end('delete /notification');
});

module.exports=router;