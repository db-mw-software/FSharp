# F# API

## Register User
### ```POST``` ```/api/user/register```
  Send user information such as name, email, and password.
  This information is the used to register the user.
  Example Payload:
  ```json
  {
    "name": "Daniel Vega",
    "email": "email@email.com",
    "password": "xAWGqwgASdgQWRhiwrthG"
  }
  ```

## Login
### ```POST``` ```/api/user/login```
  Send user credentials for login, namely email and password.
  Example Payload:
  ```json
  {
    "email": "email@email.com",
    "password": "xAWGqwgASdgQWRhiwrthG"
  }
  ```

### ```POST``` ```/api/user/logout```
  Simple request to log out the user. Nothing to send.

## Genres
### ```GET``` ```/api/music/genres?search={query}```
  Returns a list of genres to be shown in the genre training view. If search request parameter is not set, returns all genres.
  Example Response:
  ```json
  {
    "genres":[
      {"id": 1, "name":"Rock"},
      {"id": 2, "name":"Pop"},
      {"id": 3, "name":"Jazz"}    
    ]
  }
  ```

## Artists
### ```GET``` ```/api/music/artists?genres={genre1, genre2, etc}?artists={artists1, artists2, etc}?name={artist-name}```
  Returns a list of artists based on request parameter set. Only one request parameter must be set, cannot be combined. If genres is set, will return artists that belong to specified genre. If artists is set, will return artists similar to specified artists. If name is set, will return artists that match specified name.
  Example Response:
  ```json
  {
    "artists":[
      {"id": 1000, "name":"Queen", "image": "https://url.com/n2AS6na"},
      {"id": 1001, "name":"Bob Dylan", "image": "https://url.com/n566ac"},
      {"id": 1002, "name":"The Beatles", "image": "https://url.com/n134AAS"}     
    ]
  }
  ```

## User Preferences
### ```GET``` ```/api/user/genres```
  Returns a list of genres liked by the user.
  Example Response:
  ```json
  {
    "genres":[
      {"id": 1, "name":"Rock"},
      {"id": 2, "name":"Pop"},
      {"id": 3, "name":"Jazz"}      
    ]
  }
  ```

### ```POST``` ```/api/user/genres```
  Send list of genres user likes.
  Example Payload:
  ```json
  {
    "target": [1, 3, 5, 8]
  }
  ```

### ```DELETE``` ```/api/user/genres```
  Send a list of genres user removed from their "liked" preferences.
  Example Payload:
  ```json
  {
    "target": [2]
  }
  ```

### ```GET``` ```/api/user/artists```
  Returns a list of artists liked by the user.
  Example Response:
  ```json
  {
    "artists":[
      {"id": 1000, "name":"Queen", "image": "https://url.com/n2AS6na"},
      {"id": 1001, "name":"Bob Dylan", "image": "https://url.com/n566ac"},
      {"id": 1002, "name":"The Beatles", "image": "https://url.com/n134AAS"}  
    ]
  }
  ```

### ```POST``` ```/api/user/artists```
  Send list of artists user likes.
  Example Payload:
  ```json
  {
    "target": [1000, 561734, 80204, 97193, 10284]
  }
  ```

### ```DELETE``` ```/api/user/artists```
  Send a list of artists user removed from their "liked" preferences.
  Example Payload:
  ```json
  {
    "target": [92838, 78247, 52497]
  }
  ```

### ```GET``` ```/api/user/information```
  Returns information of authenticated user
  Example Response:
  ```json
  {
    "name": "Billie A",
    "email": "new-email@email.com",
    "phone": "7731862643",
    "likedArtists": [
      {"id": 1000, "name":"Queen", "image": "https://url.com/n2AS6na"},
      {"id": 1001, "name":"Bob Dylan", "image": "https://url.com/n566ac"}
    ],
    "likedGenres": [
      {"id": 1, "name":"Rock"},
      {"id": 3, "name":"Jazz"}
    ],
    "usersFollowing": [
      { "id": 74791, "name": "Daniel Vega" }
    ]
  }
  ```

### ```PUT``` ```/api/user/information```
  Send user information to update such as name, email, etc.
  Example Payload:
  ```json
  {
    "name": "Billie A",
    "email": "new-email@email.com",
    "phone": "7731862643"
  }
  ```

## Recommendations
### ```GET``` ```/api/user/recommendations```
  Returns a list of recommendations for the user.
  Example Response:
  ```json
  {
    "concerts": [
      {
        "concertId": 90419,
        "title": "Queen Live Performance",
        "artist": {"id": 1000, "name": "Queen", "image": "https://url.com/n2AS6na"},
        "date": "1985-07-13",
        "time": "18:40",
        "venue": {"id": 380, "name": "Wembley Stadium", "address": "London HA9 0WS, UK"},
        "friendsInterested": ["Daniel V", "John D"],
      }
    ]
  }
  ```

### ```POST``` ```/api/user/concert-interest```
  Send a concert id of concert user is interested in.
  Example Payload:
  ```json
  {
    "target": 90419
  }
  ```

### ```DELETE``` ```/api/user/concert-interest```
  Send a concert id of concert user is no longer interested in.
  Example Payload:
  ```json
  {
    "target": 96673
  }
  ```

## Find Friends
### ```GET``` ```/api/user?search={email}```
  Search for a user based on email.
  Example Response:
  ```json
  {
    "id": 74791,
    "name": "Daniel Vega"
  }
  ```

### ```POST``` ```/api/user/follow```
  Send id of user to follow.
  Example Payload: 
  ```json
  {
    "target": 21240
  }
  ```

### ```DELETE``` ```/api/user/follow```
  Send id of user to un-follow.
  Example Payload: 
  ```json
  {
    "target": 21241
  }
  ```

## Concerts 
### ```GET``` ```/api/music/concerts?artist={artist-name}?city={city-name}?venue={venue-name}```
  Returns a list of concerts based on request paramters. Works with a combination of artist, city, and venue name. 
  Example Response:
  ```json
  {
    "concerts": [
      {
        "concertId": 90419,
        "title": "Queen Live Performance",
        "artist": {"id": 1000, "name": "Queen", "image": "https://url.com/n2AS6na"},
        "date": "1985-07-13",
        "time": "18:40",
        "venue": {"id": 380, "name": "Wembley Stadium", "address": "London HA9 0WS, UK"},
        "friendsInterested": ["Daniel V", "John D"],
      }
    ]
  }
  ```
