var express=require('express');
var path=require('path');
var p_root=process.cwd();

var router=express.Router();
//var tools=require(path.join(p_root,'config/tools.js'));
var CFG=require(path.join(p_root,'config/config.js'));

var cookieValidator=require(path.join(p_root,'app/validators/cookie.server.validator.js'));

/*
请求分类：
	1.静态资源：不需要登录，直接next()。
	2.登录页面：cookie有效，则转到home；否则next()
	3.登录请求：直接next()。
	4.其他页面：cookie有效，直接next()；否则转到登录页面。
*/

router.all('/*',function(req,res,next){

	console.log('这里是all，可以处理所有的请求......');
//	console.log(5,'someone connect to me.........');
//	console.log('req.body：',JSON.stringify(req.body, null, 2));
	console.log('req.path：',req.path);
	console.log('req.cookies：',req.cookies);
	console.log('req.session：',req.session);


//手动清除cookie，但是要重启浏览器才能生效，并不是立即生效。
//	res.cookie('user_email','1101076815@qq.com',{expires:0});

	switch(req.path)
	{
		//请求登录页面
		case CFG.REQ_PATH_SIGNIN:{

			cookieValidator.isCookieValid(req.cookies,function(status){
				if(status==true)
				{
					console.log("登录请求 -- cookie有效，重定向到主页...");
					res.redirect(CFG.REQ_PATH_HOME);
				}
				else
				{
					console.log("登录请求 -- cookie无效，next到登录页面");
					next();
				}
			});

			break;
		}
		//提交登录信息
		case CFG.REQ_PATH_SESSION:{
			console.log("-- SESSION登录 --");
			next();
			break;
		}
		//请求FAVICON资源
		case CFG.REQ_PATH_FAVICON:{
			console.log("-- FAVICON资源 --");
			next();
			break;
		}
		//其他请求
		default:{
			cookieValidator.isCookieValid(req.cookies,function(status){
				if(status==true)
				{
					console.log("页面请求 -- cookie有效，交给next处理...");
					next();
				}
				else
				{
					console.log("页面请求 -- cookie无效，转到signin页面");
					res.redirect(CFG.REQ_PATH_SIGNIN);
				}
			});
		}
	}

});

module.exports=router;
