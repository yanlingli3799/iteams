var express=require('express');
var path=require('path');
var p_root=process.cwd();

var router=express.Router();
var tools=require(path.join(p_root,'config/tools.js'));

var projectController=require(path.join(p_root,'app/controllers/project.server.controller.js'));
var taskController=require(path.join(p_root,'app/controllers/task.server.controller.js'));
var notificationController=require(path.join(p_root,'app/controllers/notification.server.controller.js'));
var documentationController=require(path.join(p_root,'app/controllers/documentation.server.controller.js'));


router.get('/',function(req,res,next){

	tools.log(5,'someone connect to me.........');
	tools.log(5,JSON.stringify(req.body, null, 2));

//手动清除cookie
//	res.cookie('user_email','1101076815@qq.com',{expires:0});

    //检查是否有cookies，没有则重定向到登录页面
	if(tools.isObjectEmpty(req.cookies))
	{
		tools.log(5,'cookies is empty,redirect to signin');
		res.redirect('/signin');
	}
	else//有cookies，解析？
	{
		//cookie认证，不通过清除cookie，重定向到signin；通过显示主页面
		tools.log(5,"接收到的cookie是：",req.cookies);
		res.redirect('/home');
	}

});

//登录页面
router.get('/signin',function(req,res,next){
//	res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
	res.render('signin',{});
	res.end();
});

//注册页面
router.get('/signup',function(req,res,next){
//	res.end('请求注册页面');
	res.render('signup',{title:'Sign up'});
});

router.get('/home',function(req,res,next){
	res.render('index',{title:'iTeams'});
});

module.exports=router;

	/*
	//测试创建project

	projectController.create(req,res,next,function(err,result){
		if(err){
			console.log('save project information error......');
		}else{
			console.log('save project information success......');
		}
	});
	//测试创建task
	taskController.create(req,res,next,function(err,result){
		if(err){
			console.log('save task information error......');
		}else{
			console.log('save task information success......');
		}
	});
	//测试创建notification
	notificationController.create(req,res,next,function(err,result){
		if(err){
			console.log('save notification information error......');
		}else{
			console.log('save notification information success......');
		}
	});
	//测试创建notification
	documentationController.create(req,res,next,function(err,result){
		if(err){
			console.log('save documentation information error......');
		}else{
			console.log('save documentation information success......');
		}
	});
    */