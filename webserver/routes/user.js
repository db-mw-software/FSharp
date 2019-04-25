const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

// All routes here are reached via /api/user/
// Example: POST /api/user/register is handled by userController.register
router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

router.get('/genres', userController.genres);
router.post('/genres', userController.saveGenres);

router.get('/artists', userController.artists);
router.post('/artists', userController.saveArtists);

router.get('/information', userController.information);
router.put('/information', userController.saveInformation);

router.get('/recommendations', userController.recommendations);
router.post('/concert-interest', userController.concertInterest);

router.post('/search', userController.search);
router.post('/follow',userController.follow);

router.get('/users', userController.users);

module.exports = router;
