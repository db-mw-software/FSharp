exports.register = (req, res, next) => {
  res.send('Hello from user register!');
}

exports.login = (req, res, next) => {
  res.send('Hello from user login!');
}

exports.logout = (req, res, next) => {
  res.send('Hello from user logout!');
}

exports.genres = (req, res, next) => {
  res.send('Hello from user genres!');
}

exports.saveGenres = (req, res, next) => {
  res.send('Hello from user save genres!');
}

exports.artists = (req, res, next) => {
  res.send('Hello from user artists!');
}

exports.saveArtists = (req, res, next) => {
  res.send('Hello from user save artists!');
}

exports.information = (req, res, next) => {
  res.send('Hello from user information!');
}

exports.saveInformation = (req, res, next) => {
  res.send('Hello from user save information!');
}

exports.recommendations = (req, res, next) => {
  res.send('Hello from user recommendations!');
}

exports.concertInterest = (req, res, next) => {
  res.send('Hello from user concert interest!');
}

exports.search = (req, res, next) => {
  res.send('Hello from user search!');
}

exports.follow = (req, res, next) => {
  res.send('Hello from user follow!');
}
