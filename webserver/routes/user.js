const express = require('express');
const router = express.Router();

router.get('/genres', (req, res) => {
  res.send('Hello from user genres!');
});

module.exports = router;
