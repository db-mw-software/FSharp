const musicModel = require('../model/music');

exports.genres = (req, res, next) => {
  res.send('Hello from music genres!');
}

exports.artists = async (req, res, next) => {
  const artistArray = await musicModel.artists();
  res.send(artistArray);
}

exports.concerts = (req, res, next) => {
  res.send('Hello from music concerts!');
}
