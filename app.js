/*var express=require('./config/express.js');
var mongodb=require('./config/mongoose.js');

var app=express();
var db=mongoose();

module.exports=app;*/

var express=require('express');
var path=require('path');
var bodyParser=require('body-parser');
var cookieParser=require('cookie-parser');
var logger=require('morgan');

var p_root=process.cwd();
var app=express();

var router_page=require(path.join(p_root,'app/routers/page.js'));
var router_user=require(path.join(p_root,'app/routers/user.js'));

// view engine setup
app.set('views', path.join(p_root, 'app/views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(p_root, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(p_root, 'public')));

app.use(router_user);
app.use(router_page);

module.exports=app;