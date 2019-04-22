const db = require('./dbConnection');

// To use await, need to make function async first. See Music controller functions. 
// Notice keyword "async" before parameters. Same to be done here
exports.register = (registration) => {
  return "Register Model";
}

exports.login = (credentials) => {
  return "Login Model";
}

exports.logout = () => {
  return "Logout Model";
}

exports.genres = () => {
  return "Genres Model";
}

exports.saveGenres = () => {
  return "Save Genres Model";
}

exports.artists = () => {
  return "Artist Model";
}

exports.saveArtists = () => {
  return "Save Artist Model";
}

exports.information = () => {
  return "Information Model";
}

exports.saveInformation = () => {
  return "Save Information Model";
}

exports.recommendations = () => {
  return "Recommendations Model";
}

exports.concertInterest = () => {
  return "Concert Interest Model";
}

exports.search = () => {
  return "Search Model";
}

exports.follow = () => {
  return "Follow Model";
}
