var data = {
  success: {
    'result': [
      {
        customerno:'00001',
        name:'mike',
        age:'24',
        nation:'England',
      },{
        customerno:'00002',
        name:'Kangkang',
        age:'14',
        nation:'China',
      }
    ],
    'status': { 
      'statuscode': '01', 
      'statusmessage': ['请求成功'] 
    },
  },
  error: {
    'status': {
      'statuscode': '02',
      'statusmessage': ['请求失败'],
    },
  },
}

module.exports = function () {
  this.getData = (reqData,callback)=>{
    console.log(reqData)
    callback(data.success)
  }
}
