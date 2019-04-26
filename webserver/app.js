const express = require('express');
const bodyParser = require('body-parser');
const musicRoutes = require('./routes/music');
const userRoutes = require('./routes/user');
const app = express();

app.use(express.static(__dirname + '/public'));
app.set('public', __dirname + '/public');

app.set('port', (process.env.PORT || 8080));

app.use(bodyParser.json()); 

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', "*");
  res.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, Cache-Control');
  req.method === 'OPTIONS' ? res.sendStatus(200) : next();
});

app.use('/api/user', userRoutes);
app.use('/api/music', musicRoutes);

app.get('/*', (request, response) => {
  response.sendFile(__dirname+'/public/index.html');
})

app.listen(app.get('port'), '0.0.0.0', () => {
  console.log('Node app is running on port', app.get('port'));
});
