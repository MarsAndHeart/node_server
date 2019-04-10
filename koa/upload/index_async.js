const Koa = require('koa');
const views = require('koa-views');
const path = require('path');
const static = require('koa-static');
const { uploadFile } = require('./upload_async');

const app = new Koa();

app.use(
  views(path.join(__dirname, './view'), {
    extension: 'ejs'
  })
);

const staticPath = './static';

app.use(static(path.join(__dirname, staticPath)));

app.use(async ctx => {
  if (ctx.method === 'GET') {
    let title = 'upload pic async';
    await ctx.render('index', {
      title
    });
  } else if (ctx.url === '/api/picture/upload.json' && ctx.method === 'POST') {
    let result = { success: false };
    let serverFilePath = path.join(__dirname, 'static/image');

    result = await uploadFile(ctx, {
      fileType: 'common',
      path: serverFilePath
    });

    ctx.body = result;
  } else {
    ctx.body = '<h1>404</h1>';
  }
});

app.listen(10099, () => {
  console.log('upload-pic-async is starting at 10099');
});
