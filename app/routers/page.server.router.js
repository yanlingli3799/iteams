var express=require('express');
var path=require('path');
var p_root=process.cwd();

var router=express.Router();
var check=require(path.join(p_root,'config/check.js'));

//主页面
router.get('/',function(req,res,next){
//测试一下
	console.log('someone connect to me.........');

	if(check.isObjectEmpty(req.cookies))
	{
		console.log('cookies is empty,redirect to signin');
		res.redirect('/signin');
	}
	else
	{
		//cookie认证，不通过清除cookie，重定向到signin；通过显示主页面
		res.render('index.jade', { title: 'Index' });
	}

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
	res.render('signup.jade',{title:'Sign up'});
});

module.exports=router;