// src/App.js
import React, { useState, useEffect } from 'react';
import FlashcardList from './FlashcardList';
import Dashboard from './Dashboard';
import './App.css';

function App() {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    // Fetch flashcards from the database
    fetch('/api/flashcards')
      .then(response => response.json())
      .then(data => setFlashcards(data));
  }, []);

  return (
    <div className="App">
      <FlashcardList flashcards={flashcards} />
      <Dashboard flashcards={flashcards} setFlashcards={setFlashcards} />
    </div>
  );
}

export default App;
