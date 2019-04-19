const mysql = require('mysql');
const dbConfig = require('./dbConfig.json');
const connection = mysql.createConnection(dbConfig.credentials);

connection.connect();

module.exports = connection;
