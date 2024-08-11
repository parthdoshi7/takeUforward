// src/components/Dashboard.js
import React, { useState } from 'react';

function Dashboard({ flashcards, setFlashcards }) {
    const [newFlashcard, setNewFlashcard] = useState({ question: '', answer: '' });

    const handleChange = (e) => {
        setNewFlashcard({ ...newFlashcard, [e.target.name]: e.target.value });
    };

    const addFlashcard = () => {
        setFlashcards([...flashcards, newFlashcard]);
        setNewFlashcard({ question: '', answer: '' });
    };

    const editFlashcard = (index, updatedCard) => {
        const updatedFlashcards = flashcards.map((card, i) => (i === index ? updatedCard : card));
        setFlashcards(updatedFlashcards);
    };

    const deleteFlashcard = (index) => {
        setFlashcards(flashcards.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <input
                type="text"
                name="question"
                placeholder="Question"
                value={newFlashcard.question}
                onChange={handleChange}
            />
            <input
                type="text"
                name="answer"
                placeholder="Answer"
                value={newFlashcard.answer}
                onChange={handleChange}
            />
            <button onClick={addFlashcard}>Add Flashcard</button>
            {/* Add editing and deleting functionality */}
        </div>
    );
}

export default Dashboard;
