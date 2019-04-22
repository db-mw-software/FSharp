const userModel = require('../model/user');

exports.register = async (req, res) => {
  const registerModel = await userModel.register('');
  res.send('Hello from user register! And from ' + registerModel);
}

exports.login = async (req, res) => {
  const loginModel = await userModel.login('');
  res.send('Hello from user login! And from ' + loginModel);
}

exports.logout = async (req, res) => {
  const logoutModel = await userModel.logout();
  res.send('Hello from user logout! And from ' + logoutModel);
}

exports.genres =  async (req, res) => {
  const genreModel = await userModel.genres();
  res.send('Hello from user genres! And from ' + genreModel);
}

exports.saveGenres = async (req, res) => {
  const saveGenresModel = await userModel.saveGenres();
  res.send('Hello from user save genres! And from ' + saveGenresModel);
}

exports.artists = async (req, res) => {
  const artistsModel = await userModel.artists();
  res.send('Hello from user artists! And from ' + artistsModel);
}

exports.saveArtists = async (req, res) => {
  const saveArtistsModel = await userModel.saveArtists();
  res.send('Hello from user save artists! And from ' + saveArtistsModel);
}

exports.information = async (req, res) => {
  const informationModel = await userModel.information();
  res.send('Hello from user information! And from ' + informationModel);
}

exports.saveInformation = async (req, res) => {
  const saveInformationModel = await userModel.saveInformation();
  res.send('Hello from user save information! And from ' + saveInformationModel);
}

exports.recommendations = async (req, res) => {
  const recommendationsModel = await userModel.recommendations();
  res.send('Hello from user recommendations! And from ' + recommendationsModel);
}

exports.concertInterest = async (req, res) => {
  const concertInterestModel = await userModel.concertInterest();
  res.send('Hello from user concert interest! And from ' + concertInterestModel);
}

exports.search = async (req, res) => {
  const searchModel = await userModel.search();
  res.send('Hello from user search! And from ' + searchModel);
}

exports.follow = async (req, res) => {
  const followModel = await userModel.follow();
  res.send('Hello from user follow! And from ' + followModel);
}
