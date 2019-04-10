const mysql = require('mysql');

const config = {
  host: '127.0.0.1',
  user: 'root',
  password: '12345678',
  database: 'koa_demo'
};

const pool = mysql.createPool(config);

const query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
          connection.release();
        });
      }
    });
  });
};

module.exports = { query };
