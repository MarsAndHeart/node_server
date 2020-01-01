// post 接收json格式的数据
// 如果解析其他格式的数据，需要重写parseQueryStr或者使用其他方法
// 比如formData 可以用koa-bodyparser中间件

const Koa = require('koa');
const app = new Koa();

// 解析请求参数字符串
const parseQueryStr = queryStr => {
  const queryData = JSON.parse(queryStr);
  return queryData;
};

// 获取请求数据
const parsePostData = ctx => {
  return new Promise((resolve, reject) => {
    try {
      let postData = '';
      ctx.req.addListener('data', data => {
        postData += data;
      });
      ctx.req.addListener('end', () => {
        let parseData = parseQueryStr(postData);
        resolve(parseData);
      });
    } catch (err) {
      reject(err);
    }
  });
};

function getClientIP(req) {
  console.log(
    JSON.stringify({
      reqHeader: req.headers['x-forwarded-for'],
      reqCR: req.connection.remoteAddress,
      reqSR: req.socket.remoteAddress
      // reqCSR: req.connection.socket.remoteAddress
    })
  );
  return (
    req.headers['x-forwarded-for'] || // 判断是否有反向代理 IP
    req.connection.remoteAddress || // 判断 connection 的远程 IP
    req.socket.remoteAddress || // 判断后端的 socket 的 IP
    req.connection.socket.remoteAddress
  );
}

app.use(async ctx => {
  console.log(JSON.stringify({ ip: getClientIP(ctx.req) }));
  if (ctx.url === '/' && ctx.method === 'GET') {
    ctx.body = 'hello';
  } else if (ctx.url === '/' && ctx.method === 'POST') {
    ctx.body = await parsePostData(ctx);
  } else {
    ctx.body = '<h1>404</h1>';
  }
});

app.listen(10099, () => {
  console.log('start at 10099');
});
