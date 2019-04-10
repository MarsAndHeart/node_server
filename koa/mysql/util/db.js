const mysql = require('mysql');

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '12345678',
  database: 'koa_demo'
});

const query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
      } else {
        connection.query(sql, values, (error, rows) => {
          if (error) {
            reject(error);
          } else {
            resolve(rows);
          }
          connection.release();
        });
      }
    });
  });
};

module.exports = {
  query
};
