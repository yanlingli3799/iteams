var redis=require('redis');
var path=require('path');
var p_root=process.cwd();

var CFG=require(path.join(p_root,'config/config.js'));

module.exports=redis.createClient(CFG.PORT_REDIS,CFG.DB_URI_REDIS);
//module.exports=redis.createClient(CFG.PORT_REDIS,"localhost");