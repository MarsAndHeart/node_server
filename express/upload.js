var express = require('express');
var mutipart= require('connect-multiparty');

var mutipartMiddeware = mutipart();
var app = express();

// 保存路径
app.use(mutipart({uploadDir:'./temp'}));

// 监听端口
app.set('port',process.env.PORT || 3003);

app.listen(app.get('port'),function () {
  console.log("Express started on http://localhost:"+app.get('port')+'; press Ctrl-C to terminate.');
});

app.get('/',function (req,res) {
  res.type('text/html');
  res.sendfile('public/index.html')
});

// 接收form表单请求，请求方式为post。
app.post('/upload',mutipartMiddeware,function (req,res) {
  console.log(req.files);
  res.header('Access-Control-Allow-Origin', '*');

  // 返回成功提示。
  res.send('upload success!');
});
