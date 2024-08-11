// src/components/FlashcardList.js
import React, { useState } from 'react';
import Flashcard from './Flashcard';

function FlashcardList({ flashcards }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCard = () => {
        setCurrentIndex((currentIndex + 1) % flashcards.length);
    };

    const prevCard = () => {
        setCurrentIndex((currentIndex - 1 + flashcards.length) % flashcards.length);
    };

    return (
        <div>
            <Flashcard flashcard={flashcards[currentIndex]} />
            <button onClick={prevCard}>Previous</button>
            <button onClick={nextCard}>Next</button>
        </div>
    );
}

export default FlashcardList;
