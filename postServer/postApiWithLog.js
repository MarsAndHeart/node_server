var http = require('http');
var querystring = require('querystring');
var fs = require("fs");

var APIConfig = require('./api/APIConfig');
var apiConfig = new APIConfig;

http.createServer(function (req, res) {
  var logData = {
    'url': req.url,
    'requireData': '',
    'responseData': '',
  }
  res.setHeader('Access-Control-Allow-Origin', '*');

  req.setEncoding('utf8');

  var responseData = '{"back": "ok"}'

  req.on('data', function (chunk) {
    logData.requireData = chunk;
    var path = req.url.split('?')[0]
    responseData = JSON.stringify(apiConfig.getDataByPath(path))
  });

  req.on('end', function () {
    logData.responseData = responseData

    fs.writeFile('log.txt', JSON.stringify(logData) + '\n', { flag: 'a', encoding: 'utf-8', mode: '0666' }, function (err) {
      if (err) {
        console.log("文件写入失败")
      }
    })

    res.write(responseData)
    res.end();
  });

}).listen(3000);
console.log("服务启动。。。")