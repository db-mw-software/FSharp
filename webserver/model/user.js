const db = require('./dbConnection');

// To use await, need to make function async first. See Music controller functions. 
// Notice keyword "async" before parameters. Same to be done here
exports.users = () => {
  const query = 'select listenerID, username, photoURL from Listener';
  console.log(query);
  return db.query(query);
}

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

exports.saveGenres = (userId, genreId, like) => {
  const query = `
  Replace 
  into GenrePreference VALUES (${userId},${genreId},${like ? 1 : 0})
  `;
  console.log(query);
  return db.query(query);
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

exports.recommendations = (userId) => {
  const query =
    `
    select Venue.*, Concert.eventDateTime,Concert.concertName, Concert.photoURL as concertPhotoURL, Concert.cost,Concert.ageRestriction, a4.* from (
    select ArtistAtConcert.concertID, a3.name as artistName, a3.photoURL as artistPhotoURL, a3.genreName from (select a2.*, Genre.name as genreName from 
    (select a.artistID, a.name, a.photoURL, a.genreID1 as genre 
    from (
    select artistID, genreID1, name, photoURL 
    from Artist
    where genreID1 in (select genreID from GenrePreference where listenerID=${userId} and likes=1)
    ) as a 
    join Genre join Artist
    on a.genreID1=Genre.genreID and Artist.artistID= a.artistID
    ) as a2
    join Genre
    on Genre.genreID=a2.genre) as a3
    join ArtistAtConcert
    on a3.artistID=ArtistAtConcert.artistID and ArtistAtConcert.performerOrder=1
    ) as a4
    join Concert join Venue
    on a4.concertID=Concert.concertID and Venue.venueID=Concert.venueID and Concert.eventDateTime >= NOW()
    order by Concert.eventDateTime  
  `;
  return db.query(query);
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
