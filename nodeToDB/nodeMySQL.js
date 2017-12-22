var db = require('./db/nodeDB');  //引入刚才自定义的模块
//对数据库操作(从show_cascade 表中检索所有字段，并打印出结果)
db.query('select * from ldperson', [], function (results, fields) {
  console.log(results);
  console.log(JSON.stringify(results));
  console.log(JSON.parse(JSON.stringify(results)));
});