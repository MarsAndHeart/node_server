var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
  if (err) {
    throw err;
  }
  var dbo = db.db('dev');

  // 插入一条
  // var myobj = { name: '菜鸟教程', url: 'www.runoob' };
  // dbo.collection('site').insertOne(myobj, (err, res) => {
  //   if (err) {
  //     throw err;
  //   }
  //   console.log('插入成功');
  //   db.close();
  // });

  // 插入多条
  var myobjs = [
    {
      name: '菜鸟工具',
      url: 'https://c.runoob',
      type: 'cn'
    },
    {
      name: 'Google',
      url: 'https://www.google.com',
      type: 'en'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com',
      type: 'en'
    }
  ];
  dbo.collection('site').insertMany(myobjs, (err, res) => {
    if (err) {
      throw err;
    }
    console.log(`插入了${res.insertedCount}条数据`);
    db.close();
  });
});
