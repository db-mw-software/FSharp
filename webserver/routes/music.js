const express = require('express');
const router = express.Router();

router.get('/genres', (req, res) => {
  res.send('Hello from music genres!');
});

module.exports = router;
