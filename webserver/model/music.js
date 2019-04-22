const db = require('./dbConnection');

// Called by genre music controller ( await musicModel.genres() )
exports.genres = () => {
  // Since there are not many genres, return all of them
  return db.query('SELECT * FROM Genre');
}

exports.artists = () => {
  // 25 artists limit for now. May change
  return db.query('SELECT * FROM Artist LIMIT 25');
}

exports.concerts = () => {
  return "Concert Model";
}
