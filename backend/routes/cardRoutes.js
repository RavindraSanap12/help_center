const express = require('express');
const router = express.Router();
const { createCard, allCards, getCard } = require('../controllers/cardController');

// Create a card
router.post('/card', createCard)



// Get all cards
router.get('/cards', allCards);

// Get a specific card by title
router.get('/card/:title', getCard);

module.exports = router;
