const Koa = require('koa');
const views = require('koa-views');
const path = require('path');

const app = new Koa();

app.use(
  views(path.join(__dirname, './view'), {
    extension: 'ejs'
  })
);

app.use(async ctx => {
  await ctx.render('index', {
    title: 'hello koa2'
  });
});

app.listen(10099, () => {
  console.log('start at 10099');
});
