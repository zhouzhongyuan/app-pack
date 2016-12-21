const express = require('express')
const path = require('path')
const port = process.env.PORT || 8080;
const config = require('./config');
const bodyParser = require('body-parser');
const passport = require('passport');

// 连接数据库，require数据模型
require('./server/models').connect(config.dbUri);

const app = express()

// 静态文件
app.use(express.static('./server/static/'))
app.use(express.static('./client/dist/'))

// body parser
app.use(bodyParser.urlencoded({ extended: false }));

// pass the passport middleware
app.use(passport.initialize());

// load passport strategies
const localLoginStrategy = require('./server/passport/local-login');
passport.use('local-login', localLoginStrategy);

// 路由
const authRoutes = require('./server/routes/auth.js');
app.use('/auth', authRoutes);
const appsettingsBasicRoutes = require('./server/routes/appsetting/basic/');
app.use('/appsetting/basic', appsettingsBasicRoutes);
// app
const appRoutes = require('./server/routes/app/');
app.use('/api/app', appRoutes);

// 对于任意的get返回index.html, 能够实现非主页刷新
app.get('*', function (request, response){
    response.sendFile( path.resolve('./server/static/index.html') )
})


app.listen(port)
console.log("server started on port " + port)
