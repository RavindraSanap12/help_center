import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CardList from './components/CardList';
import Cardform from './components/Cardform';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/addcard" element={<Cardform />} />
      </Routes>


    </div>
  );
}

export default App;
