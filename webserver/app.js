const express = require('express');
const musicRoutes = require('./routes/music');
const userRoutes = require('./routes/user');
const app = express();

app.set('port', (process.env.PORT || 8080));

app.use('/api/user', userRoutes);
app.use('/api/music', musicRoutes);

app.get('/', (req, res) => {
  res.send('Hello from /');
});

app.listen(app.get('port'), '0.0.0.0', () => {
  console.log('Node app is running on port', app.get('port'));
});
