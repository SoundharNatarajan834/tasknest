
const express = require('express');
const router = express.Router();
const quoteController = require('../controllers/quoteController');
const quoteLimiter = require('../middlewares/quoteMiddleware');

router.get('/quote', quoteLimiter, quoteController.getMotivationalQuote);

module.exports = router;
