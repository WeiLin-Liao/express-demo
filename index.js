const express = require("express")
const router = express.Router()
const app = express()

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); //访问控制允许来源：所有
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); //访问控制允许报头 X-Requested-With: xhr请求
  res.header('Access-Control-Allow-Metheds', 'PUT, POST, GET, DELETE, OPTIONS'); //访问控制允许方法
  res.header('X-Powered-By', 'nodejs'); //自定义头信息，表示服务端用nodejs
  res.header('Content-Type', 'text/html;charset=utf-8')
  next()
})

app.use('/', router.get("/", (req, response) => {
  response.send("Welcome to the nodejs project!")
}))

app.use('/api/v1', require('./route/index'))

// app.set('views','./views')

// 设置静态资源地址
app.use(express.static('static'))

// 开启端口
app.listen(3456, (req, err) => {
  console.log('Server is running on port 3456', 'http://localhost:3456');
})
