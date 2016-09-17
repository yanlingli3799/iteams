var express=require('express');

var router=express.Router();

//主页面
router.get('/',function(req,res,next){
	console.log('someone connect to me');
	res.render('index.jade', { title: 'Index' });
});

//登录页面
router.get('/signin',function(req,res,next){
//	res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
	res.render('signin.jade',{title:'Sign in'});
	res.end();
});

//注册页面
router.get('/signup',function(req,res,next){
//	res.end('请求注册页面');
	res.render('signup.jade');
});


module.exports=router;