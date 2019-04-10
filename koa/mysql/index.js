const mysql = require('mysql');

const config = {
  host: '127.0.0.1',
  user: 'root',
  password: '12345678',
  database: 'koa_demo'
};

// 创建会话
// const connection = mysql.createConnection(config);
// connection.connect();
// connection.query('SELECT * FROM my_table', (err, results, fields) => {
//   if (err) {
//     throw err;
//   }
//   console.log('the name is:', results[0].name);
//   connection.end();
// });

// 创建连接池
const pool = mysql.createPool(config);

pool.getConnection((err, connection) => {
  connection.query('SELECT * FROM my_table', (error, results, field) => {
    connection.release();
    console.log('release connection');
    if (err) {
      throw error;
    }
  });
});
