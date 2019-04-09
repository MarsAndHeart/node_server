var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
  if (err) {
    throw err;
  }
  var dbo = db.db('dev');

  // 删除一条
  // var queryObj = { name: '菜鸟教程' };
  // dbo.collection('site').deleteOne(queryObj, function(err, res) {
  //   if (err) {
  //     throw err;
  //   }
  //   console.log('delete success');
  //   db.close();
  // });

  // 删除多条
  var queryObj = { type: 'en' };
  dbo.collection('site').deleteMany(queryObj, function(err, res) {
    if (err) {
      throw err;
    }
    console.log(res.result.n + '条文档被删除');
    db.close();
  });

  // 删除集合
  // dbo.collection('site').drop(function(err, delOK) {
  //   if (err) throw err;
  //   if (delOK) console.log('集合已删除');
  //   db.close();
  // });
});
