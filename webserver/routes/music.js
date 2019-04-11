const express = require('express');
const router = express.Router();
const musicController = require('../controllers/music');

router.get('/genres', musicController.genres);
router.get('/artists', musicController.artists);
router.get('/concerts', musicController.concerts)

module.exports = router;
