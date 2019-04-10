const Koa = require('koa');
const session = require('koa-session-minimal');
const MysqlSession = require('koa-mysql-session');

const app = new Koa();

let store = new MysqlSession({
  user: 'root',
  password: '12345678',
  database: 'koa_demo',
  host: '127.0.0.1'
});

let cookie = {
  maxAge: '', // cookie有效时长
  expires: '', // cookie失效时间
  path: '', // 写cookie所在的路径
  domain: '', // 写cookie所在的域名
  httpOnly: '', // 是否只用于http请求中获取
  overwrite: '', // 是否允许重写
  secure: '',
  sameSite: '',
  signed: ''
};

app.use(
  session({
    key: 'SESSIOIN_ID',
    store: store,
    cookie: cookie
  })
);

app.use(async ctx => {
  if (ctx.url === '/set') {
    ctx.session = {
      user_id: Math.random()
        .toString(36)
        .substr(2),
      count: 0
    };
    ctx.body = ctx.session;
  } else if (ctx.url === '/') {
    ctx.session.count = ctx.session.count + 1;
    ctx.body = ctx.session;
  }
});

app.listen(10099, () => {
  console.log('start at 10099');
});
