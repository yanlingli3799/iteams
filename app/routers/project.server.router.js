var express=require('express');
var router=express.Router();

router.get('/projects/all',function(req,res,next){
	res.end('get /projects/all');
});

router.get('/projects/own',function(req,res,next){
	res.end('get /projects/own');
});

router.get('/projects/join',function(req,res,next){
	res.end('get /projects/join');
});

router.get('/project',function(req,res,next){
	res.end('get /project');
});

router.put('/project',function(req,res,next){
	res.end('put /project');
});

router.post('/project',function(req,res,next){
	res.end('post /project');
});

router.delete('/project',function(req,res,next){
	res.end('delete /project');
});

module.exports=router;