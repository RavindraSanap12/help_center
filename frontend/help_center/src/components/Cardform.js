import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const Cardform = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/card', { title, description });
            setTitle('');
            setDescription('');
        } catch (error) {
            console.error('Error creating card:', error);
        }
    };

    return (
        <form className="card-form" onSubmit={handleSubmit}>
            <h2>Create a New Card</h2>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="form-input"
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="form-textarea"
            />
            <button type="submit" className="form-button">Add Card</button>
        </form>
    );
};

export default Cardform;
