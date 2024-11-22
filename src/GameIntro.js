// src/GameIntro.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GameIntro.css';

const GameIntro = () => {
  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate('/game'); // Redirects to the game page
  };

  return (
    <div className="intro-container container p-4 my-4 shadow-lg rounded">
      <h1 className="text-center mb-4">🎮 Welcome to Guess The Number 🎮</h1>
      <p>This is a number guessing game where you’ll try to match a randomly generated number based on the selected size.</p>
      <h3>Rules</h3>
      <ul>
        <li>Choose a number size (3, 4, or 5 digits).</li>
        <li>A random number with unique digits will be generated.</li>
        <li>You need to guess the number with unique digits (no duplicates allowed).</li>
        <li>The first value cannot be 0.</li>
        <li>For each guess:
          <ul>
            <li><strong>Hits</strong>: Number of digits that are correct and in the correct position.</li>
            <li><strong>Misses</strong>: Number of digits that are correct but in the wrong position.</li>
          </ul>
        </li>
        <li>The game ends when you correctly guess all digits in the exact positions.</li>
      </ul>
      <button onClick={handleStartGame} className="btn btn-primary mt-3">
        🚀 Start Game
      </button>
    </div>
  );
};

export default GameIntro;