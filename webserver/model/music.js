const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '',
  user: '',
  password: '',
  database: ''
});

connection.connect(err => {
  if (err) {
    console.error('An error occurred while connecting to the DB')
    throw err
  }
})

// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) console.log(error);
//   else console.log('The solution is: ', results[0]);
// });

connection.end();
