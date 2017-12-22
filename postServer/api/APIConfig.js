var CustomerList = require('./customerList');
var customerList = new CustomerList;


function APIConfig() {
  var list = [
    {
      path: '/customerList',
      module: customerList,
      desc: '客户列表',
    },
  ]
  
  this.getResponseData = function (path,reqData,callback) {
    let target = list.find(item => item.path === path);
    if (target && target.module) {
      target.module.getData(reqData,callback)
    }else{
      var obj = {
        'status': { 'statuscode': '01', 'statusmessage': ['请求成功'] },
      };
      callback(obj)
    }
  }
}

module.exports = APIConfig