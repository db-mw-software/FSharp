const db = require('./dbConnection');

// Called by genre music controller ( await musicModel.genres() )
exports.genres = () => {
  // Since there are not many genres, return all of them
  return db.query(
    `
      select gcount, genreID, name from (
      select count(genreID1) as gcount, genreID1
      from Artist
      group by genreID1
      HAVING gcount>10
      ) as a
      join Genre
      where a.genreID1=Genre.genreID
      order by gcount DESC;
    `
  );
}

exports.artists = (userId) => {
  const query = `call queryArtists( ${userId} )`;
  return db.query(query);
}

exports.concerts = (concertId) => {
  const query = `call concertDetailsByid2(${concertId})`;
  return db.query(query);
}
