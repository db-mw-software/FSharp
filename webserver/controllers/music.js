const musicModel = require('../model/music');

exports.genres = async (req, res) => {
  const genreArray = await musicModel.genres();
  res.send(genreArray);
}

exports.artists = async (req, res) => {
  const artistArray = await musicModel.artists();
  res.send(artistArray);
}

exports.concerts = (req, res) => {
  res.send('Hello from music concerts!');
}
