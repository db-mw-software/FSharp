const musicModel = require('../model/music');

// Reached via GET /api/music/genres
exports.genres = async (req, res) => {
  // Per api doc, if search query parameter is set, perform a search, otherwise return all genres
  // See api doc for how to request with search query parameter and how response may be formatted
  // Response currently in api doc is an example, the real one will be a little different
  // Use Postman to make GET request to our server (ie: http://127.0.0.1:8080/api/music/genres?search=queen)
  // Access search query parameter, currently not implemented, in the following way
  // const genreToSearch = req.query.search
  try {
    const genreArray = await musicModel.genres();
    res.send(genreArray);
  } catch (e) {
    console.log(e);
    res.sendStatus(404);
  }
}

// Reached via GET /api/music/artists
exports.artists = async (req, res) => {
  const userId = req.query.userId;
  if (userId) {
    const artistArray = await musicModel.artists(userId);
    res.send(artistArray[0]);
  } else {
    res.sendStatus(400);
  }
}

// Reached via GET /api/music/concerts
exports.concerts = async (req, res) => {
  const concertId = req.query.concertId;
  const concerts = await musicModel.concerts(concertId);
  res.send(concerts[0]);
}
