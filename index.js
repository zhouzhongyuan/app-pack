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

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
    response.sendFile(path.resolve('./client/index.html'))
})

app.listen(port)
console.log("server started on port " + port)
