const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'hello koa2';
});

app.listen(10099);
console.log('start at 10099');
