const musicModel = require('../model/music');

exports.genres = (req, res) => {
  res.send('Hello from music genres!');
}

exports.artists = async (req, res) => {
  const artistArray = await musicModel.artists();
  res.send(artistArray);
}

exports.concerts = (req, res) => {
  res.send('Hello from music concerts!');
}
