const Koa = require('koa');
const fs = require('fs');

const app = new Koa();

/**
 * 用Promise封装异步读取文件方法
 * @param  {string} page html文件名称
 * @return {promise}
 */
function render(page) {
  return new Promise((resolve, reject) => {
    let viewUrl = `./view/${page}`;
    fs.readFile(viewUrl, 'binary', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

// ------------自己写的router--------------
/**
 * 根据URL获取HTML内容
 * @param  {string} url koa2上下文的url，ctx.url
 * @return {string}     获取HTML文件内容
 */
// async function route(url) {
//   let view = '404.html';
//   switch (url) {
//     case '/':
//     case '/index': {
//       view = 'index.html';
//       break;
//     }
//     case '/todo': {
//       view = 'todo.html';
//       break;
//     }
//     case '/404': {
//       view = '404.html';
//       break;
//     }
//   }
//   let html = await render(view);
//   return html;
// }

// app.use(async ctx => {
//   let url = ctx.request.url;
//   let html = await route(url);
//   ctx.body = html;
// });

// --------------第三方库koa-router-------------
const Router = require('koa-router');
// 子路由 home
const home = new Router();
home.get('/', async ctx => {
  let html = `
    <url>
      <li><a href='page/helloworld'>/page/helloworld</a></li>
      <li><a href='page/404'>/page/404</a></li>
    </url>
  `;
  ctx.body = html;
});

// 子路由 page
const page = new Router();
page.get('/404', async ctx => {
  ctx.body = await render('404.html');
});
page.get('/helloworld', async ctx => {
  ctx.body = 'hello world';
});

// 路由
const router = new Router();
router.use('/', home.routes(), home.allowedMethods());
router.use('/page', page.routes(), page.allowedMethods());

app.use(router.routes()).use(router.allowedMethods());

app.listen(10099);
console.log('start at localhost:10099');
