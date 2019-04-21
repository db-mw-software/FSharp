const db = require('./dbConnection');

exports.genres = () => {
  return "Genres Model";
}

exports.artists = () => {
  return db.query('SELECT * FROM Artist LIMIT 10');
}
