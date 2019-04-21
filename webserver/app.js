const express = require('express');
const musicRoutes = require('./routes/music');
const userRoutes = require('./routes/user');
const app = express();

app.set('port', (process.env.PORT || 8080));

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', "*");
  res.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, Cache-Control');
  req.method === 'OPTIONS' ? res.sendStatus(200) : next();
});

app.use('/api/user', userRoutes);
app.use('/api/music', musicRoutes);

app.get('/', (req, res) => {
  res.send('Hello from /');
});

app.listen(app.get('port'), '0.0.0.0', () => {
  console.log('Node app is running on port', app.get('port'));
});
