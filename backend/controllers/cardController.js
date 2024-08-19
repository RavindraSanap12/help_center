const Card = require('../model/cardModel')


exports.createCard = async (req, res) => {
    try {
        const { title, description } = req.body;
        const card = new Card({ title, description });
        await card.save();
        res.status(201).json(card);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

exports.allCards = async (req, res) => {
    try {
        const cards = await Card.find();
        res.status(200).json(cards);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.getCard = async (req, res) => {
    try {
        const card = await Card.findOne({ title: req.params.title });
        if (!card) {
            return res.status(404).json({ error: 'Card not found' });
        }
        res.status(200).json(card);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}