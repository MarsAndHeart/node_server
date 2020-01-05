var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

// 创建服务器
http
  .createServer(function(request, response) {
    // 解析请求，包括文件名
    var pathname = url.parse(request.url).pathname;
    var basename = path.basename(request.url);

    // 输出请求的文件名
    console.log('Request for ' + basename + ' at ' + pathname + ' received.');
    
    fs.readFile(pathname.substr(1), function(isErr, data){  
        if (isErr) {  
            response.end("Read file failed!");  
            return;  
        }  
        response.writeHead(200,{  
            'Content-Type': 'application/octet-stream', //告诉浏览器这是一个二进制文件  
            'Content-Disposition': 'attachment; filename=' + basename, //告诉浏览器这是一个需要下载的文件  
        });  
        response.end(data)  
    })

    // // 从文件系统中读取请求的文件内容
    // fs.readFile(pathname.substr(1), function(err, data) {
    //   if (err) {
    //     console.log(err);
    //     // HTTP 状态码: 404 : NOT FOUND
    //     // Content Type: text/plain
    //     response.writeHead(404, { 'Content-Type': 'text/html' });
    //   } else {
    //     // HTTP 状态码: 200 : OK
    //     // Content Type: text/plain
    //     response.writeHead(200, {
    //       'Content-Type': 'text/html',
    //       'Set-Cookie': 'someid=12345',
    //       'Set-Cookie': 'SSDF_FDSF_IOS_ID=4321'
    //     });

    //     // 响应文件内容
    //     response.write(data.toString());
    //   }
    //   //  发送响应数据
    //   response.end();
    // });
    
  })
  .listen(8888,'0.0.0.0');

// 控制台会输出以下信息
console.log('Server running at http://localhost:8888/');


