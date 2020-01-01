var express = require('express');
var history = require('connect-history-api-fallback');

var app = express();
app.use(
  history({
    index: __dirname + '/static/index.html',
    // htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
    rewrites: [{ from: /\/static\/index/, to: '/static/index.html' }]
    // verbose: true,
  })
);

app.use('/static', express.static('static'));

app.get('/index.html', function(req, res) {
  res.sendFile(__dirname + '/' + 'index0.html');
});

app.get('/static/uat/index.html', function(req, res) {
  res.sendFile(__dirname + '/static/uat/index.html');
});

var server = app.listen(2333, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('应用实例，访问地址为 http://%s:%s', host, port);
});
