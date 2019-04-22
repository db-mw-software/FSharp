const mysql = require('mysql');
const dbConfig = require('./dbConfig.json');

// Create a file in this model directory named "dbConfig.json" before using dbConnection. 
// Copy and paste following comment into the dbConfig.json file. Fill in as necessary.
/*

{
  "credentials": {
    "host": "",
    "user": "",
    "password": "",
    "database": ""
  }
}

*/

// Notice here we are using the credentials object created above
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
