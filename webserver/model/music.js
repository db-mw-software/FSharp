
const db = require('./dbConnection');

db.query('SELECT * FROM Artist LIMIT 10', function (error, results, fields) {
  if (error) console.log(error);
  else console.log('The solution is: ', results);
});