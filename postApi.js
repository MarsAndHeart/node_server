var http = require('http');

var APIConfig = require('./api_bocommlife/APIConfig');
var apiConfig = new APIConfig;

http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  req.setEncoding('utf8');

  var responseData = {"back": "ok"}

  req.on('data', function (chunk) {
    var path = req.url.split('?')[0]
    console.log('请求接口 '+path)
    responseData = apiConfig.getDataByPath(path)
  });

  req.on('end', function () {
    res.write(JSON.stringify(responseData))
    res.end();
  });

}).listen(3000);
console.log("服务启动。。。")