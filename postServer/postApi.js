var http = require('http');

var APIConfig = require('./api/APIConfig');
var apiConfig = new APIConfig;

http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  req.setEncoding('utf8');

  var responseData = { "back": "ok" }

  function resCallback(result, fields) {
    res.write(JSON.stringify(result))
    res.end();
  }

  req.on('data', function (chunk) {
    console.log(req.url)
    var path = req.url.split('?')[0]
    console.log('请求接口 ' + path)
    var reqData = JSON.parse(chunk)
    apiConfig.getResponseData(path, reqData, resCallback)
  });

  // req.on('end', function () {
  //   res.write(JSON.stringify(responseData))
  //   res.end();
  // });

}).listen(3000);
console.log("服务启动在http://localhost:3000")