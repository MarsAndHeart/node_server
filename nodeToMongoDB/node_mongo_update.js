var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
  if (err) {
    throw err;
  }
  var dbo = db.db('dev');

  //更新一条
  // var queryObj = { name: '菜鸟教程' };
  // var updateObj = { $set: { url: 'https://www.runoob.com' } };
  // dbo.collection('site').updateOne(queryObj, updateObj, function(err) {
  //   if (err) {
  //     throw err;
  //   }
  //   console.log('更新成功');
  //   db.close();
  // });

  //更新多条
  var queryObj = { type: 'en' };
  var updateObj = { $set: { url: 'https://www.runoob.com' } };
  dbo.collection('site').updateMany(queryObj, updateObj, function(err, res) {
    if (err) {
      throw err;
    }
    console.log(res.result.nModified + '条文档被更新');
    db.close();
  });
});
