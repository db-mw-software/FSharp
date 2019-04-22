const db = require('./dbConnection');

exports.genres = () => {
  // Since there are not many genres, return all of them
  return db.query('SELECT * FROM Genre');
}

exports.artists = () => {
  // 25 artists limit for now. May change
  return db.query('SELECT * FROM Artist LIMIT 25');
}
