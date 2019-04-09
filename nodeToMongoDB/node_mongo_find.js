var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
  if (err) {
    throw err;
  }
  var dbo = db.db('dev');

  //查询所有 查询条件为空对象
  // dbo
  //   .collection('site')
  //   .find({})
  //   .toArray(function(err, res) {
  //     if (err) {
  //       throw err;
  //     }
  //     console.log(res);
  //     db.close();
  //   });

  // 指定条件查询
  // var params = { name: '菜鸟教程' };
  // dbo
  //   .collection('site')
  //   .find(params)
  //   .toArray(function(err, result) {
  //     if (err) {
  //       throw err;
  //     }
  //     console.log(result);
  //     db.close();
  //   });

  // 分页查询
  // skip(x) 跳过x条数据
  // limit(y) 指定返回y条数据
  // dbo
  //   .collection('site')
  //   .find({})
  //   .skip(4)
  //   .limit(2)
  //   .toArray(function(err, res) {
  //     if (err) {
  //       throw err;
  //     }
  //     console.log(res);
  //     db.close();
  //   });

  // 对查询结果排序
  // sort({key:1|-1}) 按key这个字段升序|降序
  dbo
    .collection('site')
    .find({})
    .sort({ type: 1 })
    .toArray(function(err, res) {
      if (err) {
        throw err;
      }
      console.log(res);
      db.close();
    });
});
