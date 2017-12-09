var CustomerList = require('./customerList');
var customerList = new CustomerList;


function APIConfig() {
  var list = [
    {
      path: '/customerList',
      data: customerList.success,
    },
  ]

  this.getDataByPath = function (path) {
    let target = list.find(item => item.path === path)
    if (target && target.data) {
      return target.data
    }
    return {
      'status': { 'statuscode': '01', 'statusmessage': ['请求成功'] },
    }
  }
}

module.exports = APIConfig