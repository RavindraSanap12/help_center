import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import { FaSearch, FaPlus } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';

const CardList = () => {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedCard, setSearchedCard] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/cards');
        setCards(response.data);
        setSearchedCard(response.data); 
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };

    fetchCards();
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      setSearchedCard(cards); 
    } else {
      const foundCard = cards.find(card =>
        card.title.toLowerCase() === searchTerm.toLowerCase()
      );
      setSearchedCard(foundCard ? [foundCard] : []); 
    }
  };

  const handleAddCard = () => {
    navigate('/addcard');
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <div className="card-list">
      <div className="header-section">
        <button className="add-card-button" onClick={handleAddCard}>
          <FaPlus /> Add Card
        </button>
        <h2>How can we help?</h2>
        <div className="header-actions">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search by title"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-button" onClick={handleSearch}>
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
      <div className="card-grid">
        {searchedCard.length > 0 ? (
          searchedCard.map((card) => (
            <div
              key={card.id}
              className={`card ${selectedCard?.id === card.id ? 'selected' : ''}`}
              onClick={() => handleCardClick(card)}
            >
              <h4>{card.title}</h4>
              <hr />
              <p>{card.description}</p>
            </div>
          ))
        ) : (
          <p>No card found.</p>
        )}
      </div>
    </div>
  );
};

export default CardList;
