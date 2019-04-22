const mysql = require('mysql');
const dbConfig = require('./dbConfig.json');
const connection = mysql.createConnection(dbConfig.credentials);

connection.connect();

exports.query = (sql, args = '') => {
  return new Promise((resolve, reject) => {
    connection.query(sql, args, (err, rows) => {
      if (err)
        return reject(err);
      resolve(rows);
    });
  });
}
