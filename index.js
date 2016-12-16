const express = require('express')
const path = require('path')
const port = process.env.PORT || 8080
const app = express()

// 静态文件
app.use(express.static('./server/static/'))
app.use(express.static('./client/dist/'))

// 路由
const authRoutes = require('./server/routes/auth.js');
app.use('/auth', authRoutes);

// 对于任意的get返回index.html, 能够实现非主页刷新
app.get('*', function (request, response){
    response.sendFile( path.resolve('./server/static/index.html') )
})


app.listen(port)
console.log("server started on port " + port)
