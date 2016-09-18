var express=require('express');
var path=require('path');
var bodyParser=require('body-parser');
var cookieParser=require('cookie-parser');
var logger=require('morgan');

var p_root=process.cwd();
var app=express();

var router_page=require(path.join(p_root,'app/routers/page.server.router.js'));
var router_session=require(path.join(p_root,'app/routers/session.server.router.js'));
var router_user=require(path.join(p_root,'app/routers/user.server.router.js'));
var router_project=require(path.join(p_root,'app/routers/project.server.router.js'));
var router_task=require(path.join(p_root,'app/routers/task.server.router.js'));
var router_notification=require(path.join(p_root,'app/routers/notification.server.router.js'));
var router_member=require(path.join(p_root,'app/routers/member.server.router.js'));
var router_group=require(path.join(p_root,'app/routers/group.server.router.js'));

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

app.use(router_page);
app.use(router_session);
app.use(router_user);
app.use(router_project);
app.use(router_task);
app.use(router_notification);
app.use(router_member);
app.use(router_group);


module.exports=app;