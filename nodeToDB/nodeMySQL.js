var db = require('../db/nodeDB');  //引入刚才自定义的模块
//对数据库操作(从show_cascade 表中检索所有字段，并打印出结果)

let jsonResponse = []
db.query('select * from ldperson', [], function (results, fields) {
  // console.log(results);
  // console.log(JSON.stringify(results));
  // console.log(JSON.parse(JSON.stringify(results)));

  const arrLdperson = JSON.parse(JSON.stringify(results));
  jsonResponse=arrLdperson;

  db.query('select * from lcaddress', [], function (results, fields) {
    const arrLcaddress = JSON.parse(JSON.stringify(results));
    jsonResponse.map(ele=>{
      ele.lcaddress = arrLcaddress.find(item => item.customerno === ele.customerno)
    });

    db.query('select * from taxinfo', [], function (results, fields) {
      const arrTaxinfo = JSON.parse(JSON.stringify(results));
      jsonResponse.map(ele=>{
        ele.taxinfo = arrTaxinfo.find(item => item.customerno === ele.customerno)
      });

      console.log(jsonResponse);

    });
  });
});