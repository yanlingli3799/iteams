var express=require('express');
var router=express.Router();

router.get('/tasks/doing',function(req,res,next){
	res.end('get /tasks/doing');
});

router.get('/tasks/todo',function(req,res,next){
	res.end('get /tasks/todo');
});

router.get('/tasks/done',function(req,res,next){
	res.end('get /tasks/done');
});

router.get('/tasks?filter',function(req,res,next){
	res.end('get /tasks?filter');
});

router.put('/task',function(req,res,next){
	res.end('put /task');
});

router.post('/task',function(req,res,next){
	res.end('post /task');
});

router.get('/task',function(req,res,next){
	res.end('get /task');
});

router.delete('/task',function(req,res,next){
	res.end('delete /task');
});

module.exports=router;