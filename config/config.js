module.exports={
	PORT:7001,
	DB_URI:'mongodb://182.61.22.101/iteams',
	
	COOKIE_DELETE:0,//不记住密码、退出登录的超时时间设置
	COOKIE_EXPIRES:1000*60*60*24*7,//记住密码的cookie超时时间设置

	LOG_LEVEL_THRESHOLD:1,//级别大于LEVEL的
	LOG_LEVEL_BOTTOM:1,//最低
	LOG_LEVEL_TOP:10,//最高

};